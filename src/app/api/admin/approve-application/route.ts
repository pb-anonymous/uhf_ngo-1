import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { generateInternCode } from "@/lib/generateInternCode";
import { generatePassword } from "@/lib/generatePassword";

export async function POST(req: NextRequest) {
  try {
    const { applicationId } = await req.json();

    console.log("Application ID:", applicationId);

    // Get application
    const { data: application, error: applicationError } =
      await supabaseAdmin
        .from("intern_applications")
        .select("*")
        .eq("id", applicationId)
        .single();

    if (applicationError || !application) {
      return NextResponse.json(
        {
          success: false,
          message: "Application not found",
        },
        { status: 404 }
      );
    }

    // Generate credentials
    const internCode = await generateInternCode(
      application.full_name
    );

    const password = generatePassword(
      application.full_name
    );

    // Create auth user
    const { data: authUser, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email: application.email,
        password,
        email_confirm: true,
      });

    console.log("AUTH USER:", authUser);
    console.log("AUTH ERROR:", authError);

    if (authError) {
      return NextResponse.json(
        {
          success: false,
          message: authError.message,
        },
        { status: 400 }
      );
    }

    const userId = authUser.user.id;

    // Create profile
    const { error: profileError } =
      await supabaseAdmin
        .from("profiles")
        .insert({
          id: userId,
          full_name: application.full_name,
          email: application.email,
          role: "intern",
          intern_code: internCode,
        });

    if (profileError) {
      return NextResponse.json(
        {
          success: false,
          message: profileError.message,
        },
        { status: 400 }
      );
    }

    // Update application status
    await supabaseAdmin
      .from("intern_applications")
      .update({
        status: "accepted",
      })
      .eq("id", applicationId);

    return NextResponse.json({
      success: true,
      applicant: application.full_name,
      email: application.email,
      internCode,
      password,
      userId,
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}