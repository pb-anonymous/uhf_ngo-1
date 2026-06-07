import { supabaseAdmin } from "@/lib/supabase/admin";

export async function generateInternCode(
    fullName: string
) {
    const prefix = fullName
        .replace(/[^A-Za-z]/g, "")
        .substring(0, 3)
        .toUpperCase();

    const { count } = await supabaseAdmin
        .from("profiles")
        .select("*", {
            count: "exact",
            head: true,
        });

    const serial = String(
        (count || 0) + 101
    ).padStart(4, "0");

    return `${prefix}${serial}`;
}