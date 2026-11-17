// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", formData),
//       {
//         loading: "Securing callback line...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request logged. A specialist will call you discreetly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Connection failed. Please try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "13px",
//           borderRadius: "16px",
//           padding: "14px 24px",
//           background: "#0A2240",
//           color: "#FFFFFF",
//           border: "1px solid rgba(255,255,255,0.1)",
//         },
//       }
//     );
//   };

//   return (
//     // backface-hidden aur isolate layers applied to block paint overheads
//     <section className="bg-[#C5A86B] text-[#0A2240] py-24 md:py-32 relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Luxury Geometric Elements - Render tree safe */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none transform-gpu">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(#0A2240_1px,transparent_1px)] [background-size:16px_16px]" />
//       </div>

//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{ top: "110px", zIndex: 999999 }}
//       />

//       <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Rewritten Content Header */}
//         <div className="max-w-4xl text-left mb-16 space-y-6">
//           <div className="flex items-center gap-4">
//             <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0A2240] bg-white/40 px-3 py-1 rounded">
//               Elite Pest Management
//             </span>
//             <div className="h-[1px] flex-1 bg-[#0A2240]/20" />
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[1.05]">
//             Premium Pest Eradication & <br />
//             <span className="text-white drop-shadow-sm">Discreet Asset Proofing</span>
//           </h2>

//           <p className="text-[#0A2240]/90 font-medium text-base md:text-lg max-w-3xl leading-relaxed">
//             Pesbye Services delivers premium, fast, and permanent pest control solutions tailored for luxury residential estates, private residences, and commercial sectors across Mayfair. From immediate rodent eradication to complete insect management, we ensure your property remains immaculate.
//           </p>
//         </div>

//         {/* !!! FIX: backdrop-blur-xl replaced with highly optimized flat tint to ensure layout fluidity */}
//         <div className="w-full bg-white/40 border border-white/70 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transform-gpu">
          
//           {/* Dashboard Meta Left Block */}
//           <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-[#0A2240]/10 lg:pr-8 text-left">
//             <div>
//               <h3 className="text-xs font-black tracking-widest uppercase text-[#0A2240]/60 mb-1">
//                 Deployment Protocol
//               </h3>
//               <p className="text-lg font-extrabold uppercase tracking-tight">
//                 24/7 Rapid Response
//               </p>
//             </div>
            
//             <div className="space-y-3">
//               {/* Added transform-gpu to fast track render pipelines */}
//               <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] animate-pulse transform-gpu" />
//                 Unmarked Luxury Vehicles
//               </div>
//               <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
//                 Advanced Rodent & Insect Proofing
//               </div>
//               <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
//                 Safe, Child & Pet Friendly Protocols
//               </div>
//             </div>

//             <div className="bg-[#0A2240] text-white p-3.5 rounded-xl">
//               <p className="text-[11px] font-mono tracking-wider opacity-80 uppercase leading-tight">
//                 Emergency Line Status: Active // Specialized Mayfair Technicians On Standby
//               </p>
//             </div>
//           </div>

//           {/* Form Processing Block Right */}
//           <div className="lg:col-span-8 w-full">
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
//               <div className="sm:col-span-2 space-y-1.5">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
//                   Your Name / Property Entity
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="e.g. John Doe / Management Office"
//                   required
//                   className="w-full bg-white/50 border border-[#0A2240]/10 rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:border-[#0A2240] focus:bg-white/80 transition-all duration-200"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
//                   Mayfair Postcode
//                 </label>
//                 <input
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="e.g. W1K, W1J"
//                   required
//                   className="w-full bg-white/50 border border-[#0A2240]/10 rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:border-[#0A2240] focus:bg-white/80 transition-all duration-200"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
//                   Direct Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Best number to call back"
//                   required
//                   className={`w-full bg-white/50 border rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:bg-white/80 transition-all duration-200 ${
//                     phoneError ? "border-red-600" : "border-[#0A2240]/10 focus:border-[#0A2240]"
//                   }`}
//                 />
//               </div>

//               {phoneError && (
//                 <p className="sm:col-span-2 text-red-700 text-xs font-bold mt-1 flex items-center gap-1">
//                   <span>⚠️</span> {phoneError}
//                 </p>
//               )}

//               <div className="sm:col-span-2 pt-2">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#0A2240] text-white py-4 text-xs font-black uppercase tracking-[0.25em] rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-60 shadow-lg active:scale-[0.99] hover:bg-[#0A2240]/90"
//                 >
//                   {loading ? "PROCESSING REQUEST..." : "REQUEST AN IMMEDIATE CALLBACK"}
//                 </button>
//               </div>

//             </form>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     // Yahan apna API call logic rakhein
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Deployment confirmed. A specialist will contact you.");
//       setFormData({ name: "", postcode: "", phone: "" });
//     }, 1500);
//   };

//   return (
//     // Updated background to #b99547
//     <section className="bg-[#b99547] py-24 relative overflow-hidden">
//       {/* Top Border Line */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#0A2240]" />
      
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* Left: Branding & Message */}
//         <div className="text-[#0A2240] space-y-8">
//           <div>
//             <h3 className="text-[#0A2240]/80 font-black tracking-[0.3em] uppercase text-sm mb-4">Priority Access</h3>
//             <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
//               DISCREET <br/>
//               <span className="text-[#0A2240]">ASSET</span> PROTECTION
//             </h2>
//           </div>
          
//           <p className="text-[#0A2240]/90 text-lg leading-relaxed border-l-2 border-[#0A2240] pl-6 font-medium">
//             Elite pest management for high-value properties in Purley. We operate with absolute discretion, ensuring your environment remains impeccable and secure.
//           </p>

//           <div className="grid grid-cols-2 gap-6 pt-6">
//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">24/7</span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">Rapid Response</span>
//             </div>
//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">100%</span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">Discreet Service</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Modern Compact Form */}
//         <div className="bg-[#0A2240] p-8 md:p-12 rounded-lg shadow-2xl">
//           <h4 className="text-white font-black text-2xl mb-8 uppercase">Request Consultation</h4>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input 
//               className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//               placeholder="YOUR NAME"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required
//             />
//             <div className="grid grid-cols-2 gap-4">
//               <input 
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="POSTCODE"
//                 value={formData.postcode}
//                 onChange={(e) => setFormData({...formData, postcode: e.target.value})}
//                 required
//               />
//               <input 
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="PHONE"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 required
//               />
//             </div>
//             <button 
//               disabled={loading}
//               className="w-full bg-[#b99547] text-[#0A2240] py-5 font-black uppercase tracking-[0.2em] hover:bg-white transition-all cursor-pointer"
//             >
//               {loading ? "INITIALIZING..." : "Secure My Property"}
//             </button>
//           </form>
//         </div>
//       </div>
//       <Toaster />
//     </section>
//   );
// }



// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loadingToast = toast.loading("Submitting callback request...");

//     try {
//       const res = await axios.post(
//         "https://quickshield-backend.vercel.app/api/callback",
//         formData
//       );

//       toast.success(
//         res.data.message || "Deployment confirmed. A specialist will contact you.",
//         { id: loadingToast }
//       );

//       setFormData({
//         name: "",
//         postcode: "",
//         phone: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         id: loadingToast,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-[#b99547] py-24 relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#0A2240]" />

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         <div className="text-[#0A2240] space-y-8">
//           <div>
//             <h3 className="text-[#0A2240]/80 font-black tracking-[0.3em] uppercase text-sm mb-4">
//               Priority Access
//             </h3>

//             <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
//               DISCREET <br />
//               <span className="text-[#0A2240]">ASSET</span> PROTECTION
//             </h2>
//           </div>

//           <p className="text-[#0A2240]/90 text-lg leading-relaxed border-l-2 border-[#0A2240] pl-6 font-medium">
//             Elite pest management for high-value properties in Purley. We
//             operate with absolute discretion, ensuring your environment remains
//             impeccable and secure.
//           </p>

//           <div className="grid grid-cols-2 gap-6 pt-6">
//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">
//                 24/7
//               </span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">
//                 Rapid Response
//               </span>
//             </div>

//             <div className="bg-[#0A2240]/10 p-4 rounded border-l-4 border-[#0A2240]">
//               <span className="block text-2xl font-black text-[#0A2240]">
//                 100%
//               </span>
//               <span className="text-xs uppercase text-[#0A2240] font-bold tracking-widest">
//                 Discreet Service
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#0A2240] p-8 md:p-12 rounded-lg shadow-2xl">
//           <h4 className="text-white font-black text-2xl mb-8 uppercase">
//             Request Consultation
//           </h4>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               name="name"
//               className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//               placeholder="YOUR NAME"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 name="postcode"
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="POSTCODE"
//                 value={formData.postcode}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 name="phone"
//                 className="w-full bg-white/5 border border-white/10 p-4 font-bold text-white placeholder-white/40 outline-none focus:bg-white/10 transition-all"
//                 placeholder="PHONE"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#b99547] text-[#0A2240] py-5 font-black uppercase tracking-[0.2em] hover:bg-white transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? "INITIALIZING..." : "Secure your inspection"}
//             </button>
//           </form>
//         </div>
//       </div>

//       <Toaster />
//     </section>
//   );
// }





















import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Check,
  Clock3,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

// ========================================
// QUICKSHIELD SERVICES PUTNEY
// CALLBACK SECTION
// ========================================

const COMPANY = "QuickShield Services Putney";
const PHONE = "+44 7459 692222";
const PHONE_TEL = "+447459692222";

const ADDRESS =
  "10 Pettiward Cl, London SW15 6QL, United Kingdom";

const API_URL =
  "https://quickshield-putney-backend.vercel.app/api/callback";

const initialFormData = {
  name: "",
  postcode: "",
  phone: "",
};

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  // ========================================
  // INPUT HANDLER
  // ========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ========================================
  // FORM SUBMISSION
  // ========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const loadingToast = toast.loading(
      "Submitting callback request..."
    );

    try {
      const res = await axios.post(
        API_URL,
        formData
      );

      toast.success(
        res.data?.message ||
          "Your callback request has been received. We'll be in touch.",
        { id: loadingToast }
      );

      setFormData(initialFormData);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
        { id: loadingToast }
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#0A2240]/15 bg-white px-5 py-4 text-[15px] font-medium text-[#0A2240] outline-none transition-all duration-300 placeholder:text-[#0A2240]/40 focus:border-[#B99547] focus:ring-2 focus:ring-[#B99547]/15";

  const labelClass =
    "mb-2.5 block text-xs font-semibold text-[#0A2240]";

  return (
    <section
      aria-labelledby="putney-callback-heading"
      className="relative isolate overflow-hidden bg-[#B99547] text-[#0A2240]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* ======================================== */}
      {/* ANIMATIONS */}
      {/* ======================================== */}

      <style>{`
        @keyframes putneyCallbackEnter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .putney-callback-enter {
          animation: putneyCallbackEnter .8s ease-out both;
        }

        .putney-callback-delay {
          animation-delay: .15s;
        }

        @media (prefers-reduced-motion: reduce) {
          .putney-callback-enter {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ======================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ======================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-52 -top-52 h-[550px] w-[550px] rounded-full border border-[#0A2240]/10" />

        <div className="absolute -left-32 -top-32 h-[390px] w-[390px] rounded-full border border-[#0A2240]/10" />

        <div className="absolute -bottom-56 right-[-150px] h-[500px] w-[500px] rounded-full bg-[#F8F1E4]/10 blur-[90px]" />
      </div>

      {/* ======================================== */}
      {/* MAIN CONTENT */}
      {/* ======================================== */}

      <div className="relative mx-auto grid max-w-[1480px] items-center gap-14 px-5 py-24 sm:px-10 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-16 lg:py-32">

        {/* ======================================== */}
        {/* LEFT CONTENT */}
        {/* ======================================== */}

        <div className="putney-callback-enter">

          {/* SECTION LABEL */}

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#0A2240]" />

            <span className="text-xs font-semibold uppercase tracking-wide text-[#0A2240]/80">
              QuickShield Services Putney
            </span>
          </div>

          {/* HEADING */}

          <h2
            id="putney-callback-heading"
            className="mt-8 max-w-[650px] text-[clamp(2.8rem,5vw,5.4rem)] font-bold leading-[1.12] tracking-normal"
          >
            NEED PEST
            <br />

            CONTROL
            <br />

            <span className="text-[#F8F1E4]">
              ASSISTANCE?
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-[530px] text-base leading-8 text-[#0A2240]/85 sm:text-lg">
            Dealing with unwanted pests at your
            property? Share your contact details
            with QuickShield Services Putney,
            and our team can get in touch to
            discuss your pest control enquiry
            and suitable next steps.
          </p>

          {/* ======================================== */}
          {/* BENEFIT ITEMS */}
          {/* ======================================== */}

          <div className="mt-11 grid gap-5 sm:grid-cols-2">

            {/* ITEM 1 */}

            <div className="flex items-start gap-4 rounded-2xl border border-[#0A2240]/15 bg-white/10 p-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A2240] text-[#F8F1E4]">
                <MessageSquareText size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  Discuss Your Concern
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0A2240]/75">
                  Tell us about the pest
                  activity affecting your
                  property.
                </p>
              </div>

            </div>

            {/* ITEM 2 */}

            <div className="flex items-start gap-4 rounded-2xl border border-[#0A2240]/15 bg-white/10 p-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A2240] text-[#F8F1E4]">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  Property-Focused Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0A2240]/75">
                  Enquiries for residential
                  and commercial properties.
                </p>
              </div>

            </div>

          </div>

          {/* ======================================== */}
          {/* DIRECT PHONE */}
          {/* ======================================== */}

          <div className="mt-10 border-t border-[#0A2240]/20 pt-8">

            <p className="text-sm font-semibold text-[#0A2240]/70">
              Prefer to speak with us directly?
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              className="group mt-3 inline-flex items-center gap-4 text-[clamp(1.4rem,2.5vw,2.2rem)] font-bold text-[#0A2240] transition-colors duration-300 hover:text-white"
            >
              <Phone size={24} />

              {PHONE}

              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

        {/* ======================================== */}
        {/* RIGHT CALLBACK FORM */}
        {/* ======================================== */}

        <div className="putney-callback-enter putney-callback-delay">

          <div className="relative overflow-hidden rounded-[26px] bg-[#F8F1E4] p-6 shadow-[0_30px_80px_rgba(10,34,64,0.15)] sm:p-9 lg:p-12">

            {/* TOP ACCENT */}

            <div className="absolute left-0 top-0 h-[6px] w-full bg-[#0A2240]" />

            {/* FORM HEADER */}

            <div className="flex items-start justify-between gap-5">

              <div>
                <div className="flex items-center gap-2.5">

                  <span className="h-2 w-2 rounded-full bg-[#B99547]" />

                  <span className="text-xs font-semibold uppercase tracking-wide text-[#947331]">
                    Callback Enquiry
                  </span>

                </div>

                <h3 className="mt-5 text-[clamp(2rem,3.2vw,3.2rem)] font-bold leading-[1.15] tracking-normal text-[#0A2240]">
                  Request a Callback
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#536070]">
                  Complete the short form below
                  and provide the details we
                  need to respond to your
                  pest control enquiry.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0A2240] text-white sm:flex">
                <Phone size={21} />
              </div>

            </div>

            {/* ======================================== */}
            {/* FORM */}
            {/* ======================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-9 space-y-6"
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="putney-callback-name"
                  className={labelClass}
                >
                  Full Name
                </label>

                <input
                  id="putney-callback-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              {/* POSTCODE */}

              <div>
                <label
                  htmlFor="putney-callback-postcode"
                  className={labelClass}
                >
                  Property Postcode
                </label>

                <input
                  id="putney-callback-postcode"
                  name="postcode"
                  type="text"
                  autoComplete="postal-code"
                  placeholder="e.g. SW15 6QL"
                  value={formData.postcode}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              {/* PHONE */}

              <div>
                <label
                  htmlFor="putney-callback-phone"
                  className={labelClass}
                >
                  Phone Number
                </label>

                <input
                  id="putney-callback-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="group flex min-h-[60px] w-full items-center justify-between gap-5 rounded-xl bg-[#0A2240] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#17365A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {loading
                    ? "Sending Your Request..."
                    : "Submit Callback Request"}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B99547] text-[#0A2240] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={19} />
                </span>
              </button>

            </form>

            {/* FORM FOOTER */}

            <div className="mt-7 flex items-start gap-3 border-t border-[#0A2240]/10 pt-6">

              <Check
                size={17}
                className="mt-1 shrink-0 text-[#947331]"
              />

              <p className="text-xs leading-6 text-[#536070]">
                Your contact details will be
                used to respond to your
                callback enquiry.
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* ======================================== */}
      {/* BOTTOM LOCATION STRIP */}
      {/* ======================================== */}

      <div className="relative border-t border-[#0A2240]/15">

        <div className="mx-auto flex max-w-[1480px] flex-col gap-4 px-5 py-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">

          <div className="flex items-start gap-3">

            <MapPin
              size={19}
              className="mt-0.5 shrink-0"
            />

            <span className="text-sm font-medium text-[#0A2240]/80">
              {ADDRESS}
            </span>

          </div>

          <span className="text-xs font-semibold text-[#0A2240]/70">
            {COMPANY}
          </span>

        </div>
      </div>

      <Toaster position="top-right" />
    </section>
  );
}
