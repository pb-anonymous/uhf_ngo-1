"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Briefcase, Award, Trophy, HeartHandshake, ArrowRight, CheckCircle, Sprout, Camera, Star, Users, BookOpen, Recycle, TreeDeciduous, Video } from "lucide-react";

const milestones = [
    {
        amount: "₹5,000",
        title: "Social Media Shoutout",
        text: "Get featured on our official social media platforms.",
        icon: <Megaphone size={28} className="text-[#C89B3C]" />,
        badge: "FIRST MILESTONE",
        isPrimary: false
    },
    {
        amount: "₹10,000",
        title: "Internship Certificate",
        text: "Receive an official certificate recognizing your internship completion.",
        icon: <Briefcase size={28} className="text-[#C89B3C]" />,
        badge: "CAREER BOOST",
        isPrimary: false
    },
    {
        amount: "₹15,000",
        title: "LinkedIn Recommendation",
        text: "Receive a personalized professional recommendation for your profile.",
        icon: <Award size={28} className="text-[#C89B3C]" />,
        badge: "SKILL UNLOCKED",
        isPrimary: false
    },
    {
        amount: "₹20,000",
        title: "Certificate in Crowdfunding",
        text: "Earn an exclusive certificate showcasing your fundraising expertise.",
        icon: <Trophy size={28} className="text-[#C89B3C]" />,
        badge: "ACHIEVEMENT UNLOCKED",
        isPrimary: false
    },
    {
        amount: "₹30,000",
        title: "Letter of Recommendation",
        text: "Get a professional letter to support your career.",
        icon: <HeartHandshake size={28} className="text-[#0B0B0B]" />,
        badge: "TARGET ACHIEVED",
        isPrimary: true
    },
];

const specialRewards = [
    {
        amount: "₹40,000",
        title: "₹2,000 Gift Voucher",
        text: "You went beyond expectations. Unlock an exclusive gift voucher as a reward.",
        badge: "EXCEEDS EXPECTATIONS",
        icon: <Award size={32} className="text-[#C89B3C]" />
    },
    {
        amount: "₹50,000",
        title: "₹3,000 Gift Voucher",
        text: "Unlock the highest gift voucher and join the league of top-performing fundraisers.",
        badge: "TOP PERFORMER",
        icon: <Award size={32} className="text-[#C89B3C]" />
    },
];

const timelineTasks = [
    { id: 1, icon: <Sprout size={14} />, color: "#22c55e", name: "Roots of Change" },
    { id: 2, icon: <Camera size={14} />, color: "#3b82f6", name: "Lens of Hope" },
    { id: 3, icon: <Star size={14} />, color: "#eab308", name: "Voices for Impact" },
    { id: 4, icon: <Users size={14} />, color: "#a855f7", name: "Mission 10" },
    { id: 5, icon: <BookOpen size={14} />, color: "#f97316", name: "Stories That Inspire" },
    { id: 6, icon: <Recycle size={14} />, color: "#14b8a6", name: "Trash to Treasure" },
    { id: 7, icon: <Video size={14} />, color: "#ec4899", name: "Reels for Change" },
    { id: 8, icon: <TreeDeciduous size={14} />, color: "#10b981", name: "Green Growth Check-In" }
];

export default function InternRewards() {
    return (
        <section className="w-full bg-[#050505] relative overflow-hidden font-inter py-12 md:py-16 border-t border-white/5">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C89B3C]/5 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C89B3C]/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

            <div className="max-w-[1400px] w-full mx-auto px-[clamp(16px,4vw,48px)] relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-[800px] mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-cormorant font-light text-[40px] sm:text-[56px] md:text-[64px] text-[#F5F5F5] leading-[1.05] mb-6"
                    >
                        Unlock Your <span className="italic text-[#C89B3C]">Impact Journey</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-inter text-[15px] sm:text-[16px] leading-[1.8] text-[#9CA3AF] mb-6"
                    >
                        Every milestone unlocks new recognition, opportunities, rewards, and professional growth.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-inter font-medium text-[12px] uppercase tracking-[0.2em] text-[#C89B3C]"
                    >
                        Raise funds. Build skills. Earn recognition. Create impact.
                    </motion.p>
                </div>

                {/* PARALLEL TIMELINE 1: TASKS */}
                <div className="relative mt-12 mb-16 w-full">
                    <div className="flex flex-row overflow-x-auto xl:overflow-visible snap-x snap-mandatory xl:snap-none w-full hide-scrollbar xl:px-[140px] relative pb-12 pt-8 xl:h-[200px]">

                        {/* DESKTOP CONTINUOUS LINE */}
                        <div className="hidden xl:block absolute top-[51px] left-[140px] right-[140px] h-[1px] border-t border-dashed border-[#C89B3C]/30 z-0"></div>

                        {/* DESKTOP GLOWING PROGRESS (Example static 40%) */}
                        <div className="hidden xl:block absolute top-[50px] left-[140px] right-[140px] h-[3px] bg-gradient-to-r from-[#C89B3C] to-[#FF9A3C] shadow-[0_0_12px_#C89B3C] z-0 origin-left" style={{ transform: 'scaleX(0.4)' }}></div>

                        {timelineTasks.map((task, index) => {
                            const ratio = index / (timelineTasks.length - 1);
                            const desktopLeft = `calc(140px + calc(100% - 280px) * ${ratio})`;
                            return (
                                <div
                                    key={index}
                                    className="flex-none w-[85vw] sm:w-[280px] md:w-[320px] xl:w-0 relative xl:absolute xl:top-[32px] flex flex-col items-center snap-center pt-0 xl:[left:var(--desktop-left)]"
                                    style={{ '--desktop-left': desktopLeft } as React.CSSProperties}
                                >
                                    {/* MOBILE SEGMENT LINE */}
                                    {index < timelineTasks.length - 1 && (
                                        <div className="xl:hidden absolute top-[19px] left-[50%] w-full h-[1px] border-t border-dashed border-[#C89B3C]/30 z-0"></div>
                                    )}
                                    {/* MOBILE GLOWING PROGRESS */}
                                    {index < 3 && (
                                        <div className="xl:hidden absolute top-[18px] left-[50%] w-full h-[3px] bg-gradient-to-r from-[#C89B3C] to-[#FF9A3C] shadow-[0_0_12px_#C89B3C] z-0 origin-left"></div>
                                    )}

                                    {/* Tasks Static Marker (Desktop) */}
                                    {index === 0 && (
                                        <div className="hidden xl:flex absolute top-[19px] -translate-y-1/2 right-[25px] flex-row items-center pointer-events-none z-20">
                                            <span className="font-cormorant italic text-[18px] lg:text-[22px] text-[#FF9A3C] whitespace-nowrap tracking-wide drop-shadow-[0_0_8px_rgba(255,154,60,0.8)] mr-2">
                                                Tasks
                                            </span>
                                            <div className="w-[30px] h-[2px] bg-[#FF9A3C] rounded-full relative">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#FF9A3C] rotate-45"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* DOT */}
                                    <div className="w-10 h-10 rounded-full bg-[#0B0B0B] border border-[#C89B3C]/40 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(200,155,60,0.1)] shrink-0 relative">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#C89B3C]"></div>
                                    </div>

                                    {/* CARD CONTENT */}
                                    <div className="mt-6 xl:absolute xl:top-full xl:left-1/2 xl:-translate-x-1/2 flex flex-col items-center">
                                        <a href={`#challenge-${task.id}`} className="bg-[#0A0A0A] border border-[#C89B3C]/30 rounded-lg py-2 px-2 flex flex-col items-center justify-start gap-1.5 shadow-[0_0_15px_rgba(200,155,60,0.15)] group/tooltip transition-transform hover:-translate-y-1 hover:border-[#C89B3C] w-[90px] h-[72px] z-10 relative">
                                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border-t border-l border-[#C89B3C]/30 rotate-45 pointer-events-none group-hover/tooltip:border-[#C89B3C]"></div>
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover/tooltip:scale-110" style={{ color: task.color, backgroundColor: `${task.color}1A`, boxShadow: `0 0 10px ${task.color}33` }}>
                                                {task.icon}
                                            </div>
                                            <span className="font-inter text-[9px] font-medium text-white/90 text-center leading-tight">{task.name}</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* PARALLEL TIMELINE 2: DONATION MILESTONES */}
                <div className="relative mb-12 md:mb-16 w-full mt-12">
                    <div className="flex flex-col xl:flex-row overflow-x-auto xl:overflow-visible snap-x snap-mandatory xl:snap-none w-full hide-scrollbar xl:px-[140px] relative pb-12 pt-8 xl:h-[450px]">

                        {/* DESKTOP CONTINUOUS LINE */}
                        <div className="hidden xl:block absolute top-[51px] left-[140px] right-[140px] h-[1px] border-t border-dashed border-[#C89B3C]/30 z-0"></div>
                        {/* DESKTOP GLOWING PROGRESS */}
                        <div className="hidden xl:block absolute top-[50px] left-[140px] right-[140px] h-[3px] bg-gradient-to-r from-[#C89B3C] to-[#FF9A3C] shadow-[0_0_12px_#C89B3C] z-0 origin-left" style={{ transform: 'scaleX(0.2)' }}></div>

                        {milestones.map((milestone, index) => {
                            const ratio = index / (milestones.length - 1);
                            const desktopLeft = `calc(140px + calc(100% - 280px) * ${ratio})`;
                            return (
                                <div
                                    key={index}
                                    className="flex-none w-[85vw] sm:w-[280px] md:w-[320px] xl:w-0 relative xl:absolute xl:top-[32px] flex flex-col items-center snap-center pt-0 xl:[left:var(--desktop-left)]"
                                    style={{ '--desktop-left': desktopLeft } as React.CSSProperties}
                                >
                                    {/* MOBILE SEGMENT LINE */}
                                    {index < milestones.length - 1 && (
                                        <div className="xl:hidden absolute top-[19px] left-[50%] w-full h-[1px] border-t border-dashed border-[#C89B3C]/30 z-0"></div>
                                    )}
                                    {/* MOBILE GLOWING PROGRESS */}
                                    {index < 1 && (
                                        <div className="xl:hidden absolute top-[18px] left-[50%] w-full h-[3px] bg-gradient-to-r from-[#C89B3C] to-[#FF9A3C] shadow-[0_0_12px_#C89B3C] z-0 origin-left"></div>
                                    )}

                                    {/* Fundraising Static Marker (Desktop) */}
                                    {index === 0 && (
                                        <div className="hidden xl:flex absolute top-[19px] -translate-y-1/2 right-[25px] flex-row items-center pointer-events-none z-20">
                                            <span className="font-cormorant italic text-[18px] lg:text-[22px] text-[#FF9A3C] whitespace-nowrap tracking-wide drop-shadow-[0_0_8px_rgba(255,154,60,0.8)] mr-2">
                                                Fundraising
                                            </span>
                                            <div className="w-[30px] h-[2px] bg-[#FF9A3C] rounded-full relative">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#FF9A3C] rotate-45"></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* DOT */}
                                    <div className="w-10 h-10 rounded-full bg-[#0B0B0B] border border-[#C89B3C]/40 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(200,155,60,0.1)] shrink-0 relative">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#C89B3C]"></div>
                                    </div>

                                    {/* CARD CONTENT */}
                                    <div className="mt-8 xl:mt-6 xl:absolute xl:top-full xl:left-1/2 xl:-translate-x-1/2 w-[calc(100%-32px)] xl:w-[240px] flex flex-col">
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                            className={`w-full h-full ${milestone.isPrimary ? 'relative' : ''}`}
                                        >
                                            {milestone.isPrimary && (
                                                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#C89B3C]/50 via-[#C89B3C] to-[#C89B3C]/50 rounded-[20px] blur-[10px] opacity-40 animate-pulse"></div>
                                            )}

                                            <div className={`h-full relative px-6 py-8 rounded-2xl transition-all duration-500 overflow-hidden group flex flex-col min-h-[380px] ${milestone.isPrimary ? 'bg-[#C89B3C] shadow-[0_0_40px_rgba(200,155,60,0.3)] transform lg:-translate-y-2' : 'bg-[#0A0A0A] border border-[#C89B3C]/20 hover:border-[#C89B3C]/40 hover:-translate-y-2'}`}>

                                                {/* Ticket Notch effect */}
                                                <div className={`absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#050505] border-r ${milestone.isPrimary ? 'border-transparent' : 'border-[#C89B3C]/20'}`}></div>
                                                <div className={`absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#050505] border-l ${milestone.isPrimary ? 'border-transparent' : 'border-[#C89B3C]/20'}`}></div>

                                                <div className="flex justify-between items-start mb-10">
                                                    <div className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] flex items-center justify-center text-center leading-[1.2] w-[85px] whitespace-pre-line ${milestone.isPrimary ? 'bg-[#0B0B0B]/10 text-[#0B0B0B]' : 'bg-[#18181B] text-[#C89B3C]'}`}>
                                                        {milestone.badge.replace(' ', '\n')}
                                                    </div>
                                                    <div className={milestone.isPrimary ? 'text-[#0B0B0B]' : 'text-[#C89B3C]'}>
                                                        {milestone.icon}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col mb-6">
                                                    <h4 className={`font-cormorant text-[36px] leading-none mb-1 ${milestone.isPrimary ? 'text-[#0B0B0B]' : 'text-[#F5F5F5]'}`}>
                                                        {milestone.amount}
                                                    </h4>
                                                    <span className={`text-[12px] font-inter uppercase tracking-[0.25em] font-medium ${milestone.isPrimary ? 'text-[#0B0B0B]/70' : 'text-[#A1A1AA]'}`}>
                                                        Raised
                                                    </span>
                                                </div>

                                                <h3 className={`font-inter font-bold text-[15px] leading-snug mb-4 ${milestone.isPrimary ? 'text-[#0B0B0B]' : 'text-white'}`}>
                                                    {milestone.title}
                                                </h3>

                                                <div className={`w-12 h-[1px] mb-5 ${milestone.isPrimary ? 'bg-[#0B0B0B]/20' : 'bg-[#C89B3C]/30'}`}></div>

                                                <p className={`font-inter text-[13px] leading-[1.6] mt-auto ${milestone.isPrimary ? 'text-[#0B0B0B]/80 font-medium' : 'text-[#9CA3AF]'}`}>
                                                    {milestone.text}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* SPECIAL REWARD SECTION */}
                <div className="mb-12 md:mb-16">
                    <div className="text-center mb-8">
                        <h2 className="font-cormorant font-light text-[40px] md:text-[56px] text-[#F5F5F5] mb-4">Beyond the Target</h2>
                        <p className="font-inter text-[14px] text-[#9CA3AF]">Exceptional impact deserves exceptional rewards.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {specialRewards.map((reward, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#C89B3C]/20 rounded-2xl p-6 lg:p-8 flex flex-col xl:flex-row items-center xl:items-stretch text-center xl:text-left hover:border-[#C89B3C]/50 transition-all duration-500 hover:-translate-y-1 group gap-6 w-full"
                            >
                                {/* Left Side: Icon, Badge, Amount, Title */}
                                <div className="flex-1 flex flex-col items-center xl:items-start justify-center">
                                    <div className="flex flex-col sm:flex-row xl:flex-row items-center gap-3 sm:gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-[#C89B3C]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                            {reward.icon}
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] text-[10px] font-bold uppercase tracking-[0.2em]">
                                            {reward.badge}
                                        </div>
                                    </div>
                                    <h4 className="font-cormorant text-[32px] text-[#F5F5F5] leading-none mb-1">
                                        {reward.amount} <span className="text-[14px] font-inter uppercase tracking-widest opacity-50 font-light">Raised</span>
                                    </h4>
                                    <h3 className="font-inter font-semibold text-[16px] text-[#C89B3C]">
                                        {reward.title}
                                    </h3>
                                </div>

                                {/* Divider */}
                                <div className="hidden xl:block w-[1px] bg-white/10 self-stretch my-2"></div>
                                <div className="xl:hidden h-[1px] w-full bg-white/10"></div>

                                {/* Right Side: Description */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-inter text-[14px] text-[#9CA3AF] leading-[1.7]">
                                        <strong className="block text-white mb-1 font-semibold">{reward.text.split('.')[0]}.</strong>
                                        {reward.text.split('.').slice(1).join('.')}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* STIPEND SHOWCASE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl mx-auto bg-[#0A0A0A] border border-[#C89B3C]/30 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden mb-0"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C89B3C]/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto">
                        <span className="font-inter font-medium text-[11px] uppercase tracking-[0.25em] text-[#C89B3C] mb-4 block">
                            Earn While Creating Impact
                        </span>
                        <h2 className="font-cormorant font-light text-[40px] sm:text-[48px] leading-[1.1] text-[#F5F5F5] mb-4">
                            20% Performance-Based <span className="italic text-[#C89B3C]">Stipend</span>
                        </h2>
                        <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] mb-6">
                            Every successful fundraiser earns a stipend equal to 20% of the amount raised during their internship.
                        </p>
                        <div className="bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-xl p-4 text-center w-full max-w-xl">
                            <p className="font-inter text-[13px] text-[#C89B3C] leading-[1.6]">
                                <strong>Pro Tip:</strong> 20% stipend upto ₹30,000. Funds raised beyond ₹30,000, will give you the chance to get Amazon Gift Vouchers worth ₹2,000 & ₹3,000.
                            </p>
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}