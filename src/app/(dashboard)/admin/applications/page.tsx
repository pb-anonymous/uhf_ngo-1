import { createClient } from "@supabase/supabase-js";
import { Users, FileText, MapPin, Mail, Phone, Calendar, ArrowLeft, ExternalLink, GraduationCap, Check, Trash2 } from "lucide-react";
import Link from "next/link";
import ApplicationList from "./ApplicationList";

export default async function ApplicationsPage() {
  // Use service_role key to bypass Row Level Security (RLS) for the admin dashboard
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: applications, error } = await supabase
    .from("intern_applications")
    .select("*")
    .order("created_at", { ascending: false });

  let applicationsWithUrls = applications || [];

  if (applicationsWithUrls.length > 0) {
    const paths = applicationsWithUrls.map(app => app.resume_url).filter(Boolean);
    if (paths.length > 0) {
      const { data: signedUrls } = await supabase.storage
        .from("intern-resumes")
        .createSignedUrls(paths, 60 * 60 * 24); // 24 hour expiry
      
      if (signedUrls) {
        applicationsWithUrls = applicationsWithUrls.map(app => {
          const signedUrlObj = signedUrls.find(s => s.path === app.resume_url);
          return {
            ...app,
            signed_resume_url: signedUrlObj?.signedUrl || null
          };
        });
      }
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-16 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-2xl">
          <p className="font-mono">Error loading applications: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-16 font-sans selection:bg-[#FF9A3C]/30">
      
      {/* Header */}
      <header className="mb-16 relative">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#FF9A3C]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
          <div className="max-w-3xl">
            <Link href="/admin" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-widest mb-8 font-semibold">
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <p className="text-[#FF9A3C] uppercase tracking-[0.4em] text-[10px] font-semibold mb-4 flex items-center gap-3">
              <Users className="w-4 h-4" /> Recruitment Division
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight leading-none mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Intern <span className="italic text-[#FF9A3C]">Applications.</span>
            </h1>
            <p className="text-white/50 text-lg font-light max-w-xl leading-relaxed">
              Review and manage incoming applications for the United H.O.P.E. internship program.
            </p>
          </div>
          
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 min-w-[200px]">
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Total Applicants</p>
            <p className="text-4xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{applicationsWithUrls.length}</p>
          </div>
        </div>
      </header>

      {/* Applications Grid */}
      <ApplicationList initialApplications={applicationsWithUrls} />
    </div>
  );
}
