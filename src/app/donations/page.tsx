"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Info, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function DonationsPaymentPage() {
  const router = useRouter();
  
  // State for OTP input
  const [otp, setOtp] = useState("");
  
  // Data for the checkout fields (matching the user's reference)
  const formData = {
    name: "Mr Priyanksu Banerjee",
    email: "banerjeepriyanksu[at]gmail[dot]com",
    pan: "Not Provided",
    amount: "₹ 2 (Two Only)",
    address: "Budha Gram Saraswati Mandir Asansol",
    state: "West Bengal",
    pincode: "713301",
    country: "India",
    mobile: "+91 8101866738"
  };

  const handleProceed = () => {
    alert("Payment Gateway (SBI ePAY) Simulated. Thank you!");
  };

  return (
    <div className="min-h-screen bg-[#050505] font-inter text-white flex flex-col items-center py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF9A3C]/5 blur-[120px] rounded-full pointer-events-none opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none opacity-50 z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[640px] relative z-10"
      >
        <div className="mb-8 text-center">
          <h1 className="font-sora text-[28px] sm:text-[36px] text-[#F5F5F5] font-semibold capitalize mb-2">
            Secure Checkout
          </h1>
          <p className="text-[#9CA3AF] text-sm">Please verify your details before proceeding to payment.</p>
        </div>

        {/* Warning Banner */}
        <div className="bg-[#1A150F] border border-[#FF9A3C]/20 rounded-xl p-4 sm:p-5 mb-6 flex gap-3 text-sm text-[#FF9A3C]/90 shadow-[0_0_20px_rgba(255,154,60,0.03)]">
          <Info className="shrink-0 mt-0.5" size={18} />
          <div className="flex flex-col gap-1">
            <p className="font-medium leading-relaxed">
              Note: In case of any error during bank transaction, please wait for 72 hours before initiating a new transaction.
            </p>
            <p className="opacity-80 text-xs italic">
              (Please Do Not Refresh The Page or use "Back" button during the payment process)
            </p>
          </div>
        </div>

        {/* Form Details Container */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden mb-6 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col">
            <FieldRow label="Name" value={formData.name} />
            <FieldRow label="Email" value={formData.email} />
            <FieldRow label="PAN Number" value={formData.pan} />
            <FieldRow label="Amount" value={formData.amount} highlight />
            <FieldRow label="Address" value={formData.address} />
            <FieldRow label="State" value={formData.state} />
            <FieldRow label="Pincode" value={formData.pincode} />
            <FieldRow label="Country" value={formData.country} />
            <FieldRow label="Mobile Number" value={formData.mobile} isLast />
          </div>
        </div>

        {/* OTP Section */}
        <div className="bg-[#111111] border border-white/10 rounded-xl p-2 pl-5 mb-8 flex items-center justify-between group focus-within:border-[#FF9A3C]/50 transition-colors shadow-lg">
          <input 
            type="text" 
            placeholder="Enter OTP sent to mobile/email" 
            className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-white/30 h-10"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="flex items-center gap-2 text-[#FF9A3C] text-xs sm:text-sm font-medium hover:bg-[#FF9A3C]/10 px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap">
            <RefreshCw size={14} className="opacity-80" />
            Resend OTP
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button 
            onClick={handleProceed}
            className="bg-[#D4AF37] text-[#050505] font-semibold h-[52px] rounded-xl hover:brightness-110 transition-all text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            Proceed to Donate
          </button>
          <button 
            onClick={() => router.back()}
            className="bg-[#111111] border border-[#D4AF37]/50 text-[#D4AF37] font-semibold h-[52px] rounded-xl hover:bg-[#D4AF37]/10 transition-all text-sm uppercase tracking-wider">
            Cancel
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[#9CA3AF] text-xs max-w-[450px] mx-auto leading-relaxed">
          On proceeding next you will be taken to the external payment gateway <span className="font-semibold text-white/80">(SBI ePAY)</span> for making the Donation.
        </p>

      </motion.div>
    </div>
  );
}

// Subcomponent for each form row
function FieldRow({ label, value, highlight = false, isLast = false }: { label: string, value: string, highlight?: boolean, isLast?: boolean }) {
  return (
    <div className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 ${!isLast ? 'border-b border-white/5' : ''}`}>
      <span className="text-[#9CA3AF] text-xs sm:text-sm font-medium min-w-[140px] uppercase tracking-wider opacity-80">{label}</span>
      <span className={`text-sm sm:text-right ${highlight ? 'font-sora text-[#FF9A3C] text-base font-semibold' : 'text-[#F5F5F5] font-medium'} break-all sm:break-normal`}>
        {value}
      </span>
    </div>
  );
}
