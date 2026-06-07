"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, FileText, MapPin, Mail, Phone, Calendar, ExternalLink, GraduationCap, Check, Trash2, X, MoreVertical } from "lucide-react";
import { approveApplication, rejectApplication } from "./actions";

type Application = any;

export default function ApplicationList({ initialApplications }: { initialApplications: Application[] }) {
  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [rejectingApp, setRejectingApp] = useState<Application | null>(null);
  const [isApproving, setIsApproving] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleRejectConfirm = async () => {
    if (!rejectingApp) return;
    setIsRejecting(true);
    
    const id = rejectingApp.id;
    const resumeUrl = rejectingApp.resume_url;
    // Optimistic delete with animation
    setApplications(apps => apps.filter(app => app.id !== id));
    await rejectApplication(id, resumeUrl);
    
    setIsRejecting(false);
    setRejectingApp(null);
  };

  const handleApproveConfirm = async () => {
    if (!selectedApp) return;
    setIsApproving(true);
    
    // Optimistic update
    setApplications(apps => apps.map(app => 
      app.id === selectedApp.id ? { ...app, status: 'accepted' } : app
    ));
    
    await approveApplication(selectedApp.id);
    setIsApproving(false);
    setSelectedApp(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
        <AnimatePresence>
          {applications.map((app) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              key={app.id} 
              className="bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors rounded-[1.5rem] p-8 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Applicant Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-medium tracking-wide mb-1 text-[#F5F5F5]">{app.full_name}</h2>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(app.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold ${
                    app.status === 'pending' || !app.status ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                    app.status === 'accepted' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                    'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}>
                    {app.status || 'Pending'}
                  </span>
                  
                  {/* 3-dots Menu */}
                  <div className="relative z-30" onClick={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); }}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        setOpenMenuId(openMenuId === app.id ? null : app.id);
                      }}
                      className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {openMenuId === app.id && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          className="absolute right-0 top-full mt-2 w-48 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden"
                        >
                          <button 
                            onClick={() => {
                              setRejectingApp(app);
                              setOpenMenuId(null);
                            }}
                            className="w-full text-left px-4 py-2.5 text-xs font-semibold text-red-500 hover:bg-white/5 transition-colors flex items-center gap-2"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Delete Application
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Applicant Details */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Mail className="w-4 h-4 text-white/40" />
                  <a href={`mailto:${app.email}`} className="hover:text-white transition-colors">{app.email}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 text-white/40" />
                  <span>{app.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-white/40" />
                  <span>{app.city}{app.state ? `, ${app.state}` : ''}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <GraduationCap className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <span className="leading-snug">{app.college}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-white/5 flex gap-3">
                {app.signed_resume_url && (
                  <a 
                    href={app.signed_resume_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-xs font-semibold transition-colors relative z-20"
                  >
                    <FileText className="w-4 h-4" /> View Resume
                  </a>
                )}
                {app.linkedin && (
                  <a 
                    href={app.linkedin.startsWith('http') ? app.linkedin : `https://${app.linkedin}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="flex justify-center items-center w-12 bg-white/5 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] text-white py-3 rounded-xl transition-colors relative z-20"
                    title="LinkedIn Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Admin Controls */}
              {app.status !== 'accepted' && (
                <div className="pt-3 flex gap-3 mt-auto relative z-20">
                  <button 
                    onClick={() => setSelectedApp(app)}
                    className="flex-1 w-full flex justify-center items-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 py-3 rounded-xl text-xs font-semibold transition-colors border border-green-500/20 cursor-pointer"
                  >
                    <Check className="w-4 h-4" /> Approve
                  </button>
                  <button 
                    onClick={() => setRejectingApp(app)}
                    className="flex-1 w-full flex justify-center items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 py-3 rounded-xl text-xs font-semibold transition-colors border border-red-500/20 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" /> Reject
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {applications.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-white/40 border border-white/5 border-dashed rounded-[2rem]">
            <Users className="w-12 h-12 mb-4 opacity-50" />
            <p className="text-lg">No applications found</p>
          </div>
        )}
      </div>

      {/* Approval Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedApp(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-500" />
              </div>

              <h3 className="text-2xl font-serif mb-2 text-white">Approve Application</h3>
              <p className="text-white/60 mb-8">
                Are you sure you want to approve the internship application for <strong className="text-white">{selectedApp.full_name}</strong>?
              </p>

              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedApp(null)}
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleApproveConfirm}
                  disabled={isApproving}
                  className="flex-1 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors disabled:opacity-50 flex justify-center items-center"
                >
                  {isApproving ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full" />
                  ) : 'Yes, Approve'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reject Modal */}
      <AnimatePresence>
        {rejectingApp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setRejectingApp(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                <Trash2 className="w-6 h-6 text-red-500" />
              </div>

              <h3 className="text-2xl font-serif mb-2 text-white">Reject Application</h3>
              <p className="text-white/60 mb-8">
                Are you sure you want to completely reject and delete the application for <strong className="text-white">{rejectingApp.full_name}</strong>? This cannot be undone.
              </p>

              <div className="flex gap-4">
                <button 
                  onClick={() => setRejectingApp(null)}
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleRejectConfirm}
                  disabled={isRejecting}
                  className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors disabled:opacity-50 flex justify-center items-center"
                >
                  {isRejecting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full" />
                  ) : 'Yes, Reject'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
