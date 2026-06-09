"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { generateInternCode } from "@/lib/generateInternCode";
import { generatePassword } from "@/lib/generatePassword";
import { resend } from "@/lib/resend";

export async function approveApplication(
  applicationId: string
) {
  try {
    const { data: application, error } =
      await supabaseAdmin
        .from("intern_applications")
        .select("*")
        .eq("id", applicationId)
        .single();

    if (error || !application) {
      throw new Error("Application not found");
    }

    const internCode =
      await generateInternCode(
        application.full_name
      );

    const password =
      generatePassword(
        application.full_name
      );

    const cleanEmail = application.email.trim();

    // Create Supabase Auth User
    const {
      data: authUser,
      error: authError,
    } =
      await supabaseAdmin.auth.admin.createUser({
        email: cleanEmail,
        password,
        email_confirm: true,
        user_metadata: {
          full_name: application.full_name,
          role: "intern",
          intern_code: internCode,
        },
      });

    if (authError) {
      console.error("Auth Create Error:", authError);
      throw new Error(`Auth Error: ${authError.message}`);
    }

    const userId =
      authUser.user.id;

    // Create Profile
    const {
      error: profileError,
    } =
      await supabaseAdmin
        .from("profiles")
        .upsert({
          id: userId,
          full_name:
            application.full_name,
          email: cleanEmail,
          role: "intern",
          intern_code:
            internCode,
        });

    if (profileError) {
      throw new Error(
        profileError.message
      );
    }

    // Mark Application Accepted
    await supabaseAdmin
      .from("intern_applications")
      .update({
        status: "accepted",
      })
      .eq("id", applicationId);

    // Send Credentials Email
    const emailRes = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: cleanEmail,
      subject:
        "Internship Application Approved",

      html: `
        <h2>Congratulations ${application.full_name}</h2>

        <p>Your internship application has been approved.</p>

        <p><strong>Intern Code:</strong> ${internCode}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Password:</strong> ${password}</p>

        <p>Please change your password after your first login.</p>

        <br />

        <p>Regards,</p>
        <p>UHF India Team</p>
      `,
    });

    if (emailRes.error) {
      console.error("Resend Error:", emailRes.error);
      // We throw here so the UI can show the error. Note: The user was already created in DB.
      throw new Error(`Email sending failed: ${emailRes.error.message}. User was created in DB but email not sent. Check RESEND_FROM_EMAIL in .env.local.`);
    }

    revalidatePath(
      "/admin/applications"
    );

    return {
      success: true,
      applicant:
        application.full_name,
      email:
        application.email,
      internCode,
      password,
      userId,
    };

  } catch (error: any) {
    console.error(
      "APPROVE ERROR:",
      error
    );

    return {
      success: false,
      message:
        error.message ||
        "Unknown Error",
    };
  }
}

export async function rejectApplication(
  id: string,
  resumeUrl?: string | null
) {
  try {
    // Delete Resume from Storage
    if (resumeUrl) {
      await supabaseAdmin.storage
        .from("intern-resumes")
        .remove([resumeUrl]);
    }

    // Delete Application
    const { error } =
      await supabaseAdmin
        .from("intern_applications")
        .delete()
        .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath(
      "/admin/applications"
    );

    return {
      success: true,
    };

  } catch (error: any) {
    console.error(
      "REJECT ERROR:",
      error
    );

    return {
      success: false,
      message:
        error.message ||
        "Unknown Error",
    };
  }
}