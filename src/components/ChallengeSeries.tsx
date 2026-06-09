"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, Camera, Star, Users, BookOpen, Recycle, TreeDeciduous, Video, ChevronDown } from "lucide-react";

const challenges = [
    {
        id: 1,
        title: "Roots of Change",
        subtitle: "Plant a Tree",
        icon: <Sprout size={24} />,
        color: "#22c55e", // Green
        description: "Plant one sapling/tree in a suitable location and ensure its proper care and maintenance.",
        requirements: null,
        submission: [
            "Upload a minimum of 5 photographs of the plantation activity on your social media handle.",
            "Tag United H.O.P.E. Foundation in the post.",
            "Upload a follow-up photograph of the same plant on the 30th day."
        ],
        target: null,
        recognition: null,
    },
    {
        id: 2,
        title: "Lens of Hope",
        subtitle: "Social Impact Photography",
        icon: <Camera size={24} />,
        color: "#3b82f6", // Blue
        description: "Capture a powerful photograph that reflects a social issue, community challenge, environmental concern, act of kindness, or a positive change happening around you. The photograph should tell a meaningful story and inspire reflection, empathy, or action.",
        requirements: [
            "Submit one original photograph captured by you.",
            "Provide a title for the photograph.",
            "Include a caption of 100–150 words explaining the story, situation, or message behind the image.",
            "Basic editing is allowed; heavily manipulated or AI-generated images are not permitted."
        ],
        submission: [
            "Upload the photograph in high quality.",
            "Upload the caption along with the image.",
            "Share the post on social media and tag United H.O.P.E. Foundation."
        ],
        target: null,
        recognition: "The most impactful photograph and story will be featured on the official social media platforms of United H.O.P.E. Foundation."
    },
    {
        id: 3,
        title: "Voices for Impact",
        subtitle: "Google Review Drive",
        icon: <Star size={24} />,
        color: "#eab308", // Yellow
        description: "Encourage individuals to support United H.O.P.E. Foundation by sharing genuine ratings and reviews on Google.",
        requirements: null,
        submission: [
            "Share screenshots of the reviews in the designated WhatsApp group."
        ],
        target: "Minimum 5 ratings and reviews.",
        recognition: null,
    },
    {
        id: 4,
        title: "Mission 10",
        subtitle: "Grow Our Community",
        icon: <Users size={24} />,
        color: "#a855f7", // Purple
        description: "Promote United H.O.P.E. Foundation's social media presence by encouraging new followers.",
        requirements: null,
        submission: [
            "Share the usernames/account names of the followers acquired in the designated WhatsApp group."
        ],
        target: [
            "Follow us on all Instagram, Facebook and LinkedIn.",
            "Minimum 10 new followers on Instagram or Facebook."
        ],
        recognition: null,
    },
    {
        id: 5,
        title: "Stories That Inspire",
        subtitle: "Community Storytelling",
        icon: <BookOpen size={24} />,
        color: "#f97316", // Orange
        description: "Identify and document the story of an underprivileged individual, highlighting their experiences, challenges, resilience, or achievements.",
        requirements: [
            "Minimum 400 words.",
            "Include a photograph of yourself with the individual.",
            "Design the story using Canva or any design application.",
            "Publish the story on social media.",
            "Tag or collaborate with United H.O.P.E. Foundation.",
            "The most impactful story will be featured on the Foundation's official platforms."
        ],
        submission: [
            "Upload the final designed story in the designated WhatsApp group."
        ],
        target: null,
        recognition: null,
    },
    {
        id: 6,
        title: "Trash to Treasure",
        subtitle: "Recycling Innovation",
        icon: <Recycle size={24} />,
        color: "#14b8a6", // Teal
        description: "Create a useful product or innovative item using recycled or waste materials.",
        requirements: null,
        submission: [
            "Upload photographs of the completed item.",
            "Share the activity on social media and tag United H.O.P.E. Foundation.",
            "Upload the post screenshot in the designated WhatsApp group."
        ],
        target: null,
        recognition: null,
    },
    {
        id: 7,
        title: "Reels for Change",
        subtitle: "Social Impact Storytelling",
        icon: <Video size={24} />,
        color: "#ec4899", // Pink
        description: "Create a short reel highlighting the challenges, resilience, achievements, or daily realities of an underprivileged individual or a social issue within your community.",
        requirements: [
            "Reel duration: 30–90 seconds.",
            "Use original photographs, videos, or interviews wherever possible.",
            "Ensure the content is respectful, authentic, and socially responsible.",
            "Publish the reel on Instagram.",
            "Tag or collaborate with United H.O.P.E. Foundation."
        ],
        submission: [
            "Share the reel link in the designated WhatsApp group.",
            "Upload a screenshot of the published reel.",
            "Include a brief description of the story or issue featured."
        ],
        target: null,
        recognition: "The most impactful reel will be featured on the official social media platforms of United H.O.P.E. Foundation."
    },
    {
        id: 8,
        title: "Green Growth Check-In",
        subtitle: "30-Day Plantation Update",
        icon: <TreeDeciduous size={24} />,
        color: "#10b981", // Emerald
        description: "Monitor the growth of the sapling planted in Task 1.",
        requirements: null,
        submission: [
            "Upload a photograph of the plant on the 30th day.",
            "The photograph must clearly show both the participant and the planted sapling."
        ],
        target: null,
        recognition: null,
    }
];

export default function ChallengeSeries() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="w-full py-32 px-[5vw] bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF9A3C]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-[800px] mx-auto mb-20">
                    <span className="font-inter font-medium text-[11px] uppercase tracking-[0.25em] text-[#FF9A3C] mb-4 block">
                        Impact Beyond Fundraising
                    </span>
                    <h2 className="font-cormorant font-light text-[38px] sm:text-[48px] md:text-[56px] text-[#F5F5F5] leading-[1.1] mb-6">
                        UHF Social Impact <br />
                        <span className="italic text-white/70">Challenge Series</span>
                    </h2>
                    <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF]">
                        Beyond fundraising, every intern is encouraged to create meaningful impact through community engagement, environmental action, creativity, and social responsibility. These challenges aim to develop leadership, empathy, and outreach skills.
                    </p>
                </div>

                {/* Challenge Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {challenges.map((challenge, index) => {
                        const isExpanded = expandedId === challenge.id;
                        return (
                            <motion.div
                                key={challenge.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                id={`challenge-${challenge.id}`}
                                className={`bg-[#0B0B0B] border transition-all duration-500 rounded-2xl overflow-hidden flex flex-col ${isExpanded ? 'border-[#FF9A3C]/30 shadow-[0_0_30px_rgba(255,154,60,0.05)]' : 'border-white/5 hover:border-white/15'}`}
                            >
                                {/* Always Visible Header */}
                                <button
                                    onClick={() => toggleExpand(challenge.id)}
                                    className="w-full text-left p-6 sm:p-8 flex flex-col items-start focus:outline-none group relative"
                                >
                                    <div className="flex items-start justify-between w-full mb-6">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500`}
                                            style={{
                                                backgroundColor: `${challenge.color}1A`, // 10% opacity
                                                color: challenge.color,
                                                boxShadow: isExpanded
                                                    ? `0 0 20px ${challenge.color}66, inset 0 0 10px ${challenge.color}33`
                                                    : `0 0 10px ${challenge.color}33`,
                                                border: `1px solid ${challenge.color}40`
                                            }}
                                        >
                                            {challenge.icon}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/30">Task 0{challenge.id}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`text-white/30 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-[#FF9A3C]' : 'group-hover:text-white/60'}`}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-cormorant text-[24px] text-[#F5F5F5] leading-tight mb-1">{challenge.title}</h3>
                                    <span className="font-inter font-medium text-[12px] uppercase tracking-[0.1em] text-[#FF9A3C]/80">{challenge.subtitle}</span>
                                </button>

                                {/* Expandable Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 sm:p-8 pt-0 border-t border-white/5 mt-2 flex flex-col gap-6">

                                                <p className="font-inter text-[14px] leading-[1.7] text-[#9CA3AF]">
                                                    {challenge.description}
                                                </p>

                                                {challenge.target && (
                                                    <div>
                                                        <h4 className="font-inter font-medium text-[10px] uppercase tracking-[0.15em] text-white/50 mb-2 flex items-center gap-2">
                                                            <div className="w-1 h-1 rounded-full bg-[#FF9A3C]"></div>
                                                            Target
                                                        </h4>
                                                        {Array.isArray(challenge.target) ? (
                                                            <ul className="space-y-2">
                                                                {challenge.target.map((t, i) => (
                                                                    <li key={i} className="font-inter text-[13px] text-[#F5F5F5] leading-[1.6] flex items-start gap-2">
                                                                        <span className="text-white/20 mt-[2px]">•</span> {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="font-inter text-[13px] text-[#F5F5F5]">{challenge.target}</p>
                                                        )}
                                                    </div>
                                                )}

                                                {challenge.requirements && (
                                                    <div>
                                                        <h4 className="font-inter font-medium text-[10px] uppercase tracking-[0.15em] text-white/50 mb-3 flex items-center gap-2">
                                                            <div className="w-1 h-1 rounded-full bg-[#FF9A3C]"></div>
                                                            Requirements
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {challenge.requirements.map((req, i) => (
                                                                <li key={i} className="font-inter text-[13px] text-[#9CA3AF] leading-[1.6] flex items-start gap-2">
                                                                    <span className="text-white/20 mt-[2px]">•</span> {req}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {challenge.submission && (
                                                    <div>
                                                        <h4 className="font-inter font-medium text-[10px] uppercase tracking-[0.15em] text-white/50 mb-3 flex items-center gap-2">
                                                            <div className="w-1 h-1 rounded-full bg-[#FF9A3C]"></div>
                                                            Submission Proof
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {challenge.submission.map((sub, i) => (
                                                                <li key={i} className="font-inter text-[13px] text-[#9CA3AF] leading-[1.6] flex items-start gap-2">
                                                                    <span className="text-white/20 mt-[2px]">•</span> {sub}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {challenge.recognition && (
                                                    <div className="bg-[#FF9A3C]/5 border border-[#FF9A3C]/10 rounded-lg p-4 mt-2">
                                                        <h4 className="font-inter font-medium text-[10px] uppercase tracking-[0.15em] text-[#FF9A3C] mb-2 flex items-center gap-2">
                                                            <Star size={12} fill="#FF9A3C" className="text-[#FF9A3C]" />
                                                            Recognition
                                                        </h4>
                                                        <p className="font-inter text-[13px] text-[#F5F5F5] leading-[1.6]">
                                                            {challenge.recognition}
                                                        </p>
                                                    </div>
                                                )}

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}