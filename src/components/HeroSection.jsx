

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 15 }, // Kam displacement taake render tree freeze na ho
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   return (
//     // backface-hidden aur isolate se paint cycles bach jate hain
//     <div className="relative min-h-screen bg-[#C5A86B] text-[#0A2240] overflow-hidden font-sans pt-24 md:pt-32 pb-16 isolate backface-hidden">
      
//       {/* ==================== HERO BACKGROUND IMAGE LAYER ==================== */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
//         {/* Aap apni image ka path niche 'src' mein daal dena. 
//             Object-cover aur center se image perfectly scale ho jayegi */}
//         <img 
//           src="/images/herohome.webp" // <-- APNI IMAGE KA LINK YA PATH YAHAN LAGAYEIN
//           alt="Premium Luxury Estate Asset Background" 
//           className="w-full h-full object-cover object-center transform-gpu scale-105"
//           onError={(e) => { e.target.style.display = 'none'; }} // Fallback agar image crash ho jaye
//         />
        
//         {/* Premium Overlay Mask: Yeh image ko mask karega taake dark blue luxury text perfectly read ho sake */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#C5A86B]/80 via-[#C5A86B]/70 to-[#C5A86B]/90 mix-blend-multiply opacity-90" />
//         <div className="absolute inset-0 bg-[#0A2240]/10 mix-blend-color-burn" />
//       </div>

//       {/* Decorative Vector Flair - Kept for depth scale over image */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10 transform-gpu">
//         <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] border-[50px] border-[#0A2240]/10 rounded-full" />
//         <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] border-[30px] border-[#0A2240]/10 rounded-full" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="flex flex-col items-center justify-center text-center transform-gpu"
//         >
          
//           {/* Visual Badge */}
//           <motion.div variants={fadeInUp} className="mb-8">
//             <div className="relative p-6 rounded-full bg-white/40 border border-white/60 shadow-lg inline-block">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#0A2240]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>
//               <span className="absolute bottom-1 right-1 flex h-4 w-4">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A2240] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0A2240]"></span>
//               </span>
//             </div>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             variants={fadeInUp}
//             className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0A2240] uppercase max-w-4xl"
//           >
//             Mayfair's Premium Pest <span className="text-white drop-shadow">Eradication</span> Service
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-slate-900 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed mt-6 mb-10"
//           >
//             At Pesbye Services, we provide unmatched discrete protection for London's luxury assets. From premium residential estates to corporate spaces in Mayfair, we utilize advanced, eco-smart technology for permanent structural secureness.
//           </motion.p>

//           {/* Call To Action Buttons */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-2"
//           >
//             <Link
//               to="/contact-us"
//               className="w-full sm:w-auto relative overflow-hidden bg-white text-[#0A2240] font-extrabold text-sm uppercase tracking-widest px-12 py-4.5 rounded-xl transition-all duration-200 active:scale-95 shadow-xl hover:bg-white/90 group"
//             >
//               <span className="relative z-10 inline-flex items-center gap-2.5">
//                 Book Inspection
//                 <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold text-lg">➔</span>
//               </span>
//             </Link>

//             <div className="flex items-center gap-3 py-2 px-5 rounded-full bg-white/20 border border-white/40">
//               <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-900 font-bold">24/7 Mayfair:</span>
//               <a href="tel:07424520697" className="text-xl sm:text-2xl font-black text-white hover:text-[#0A2240] transition-colors tracking-tight">
//                 07424 520697
//               </a>
//             </div>
//           </motion.div>

//           {/* Feature Grid with Solid/Semi-Transparent Contrast Stack */}
//           <motion.div
//             variants={fadeInUp}
//             className="mt-20 lg:mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/40 border border-white/70 shadow-xl transform-gpu"
//           >
//             {[
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//                   </svg>
//                 ), 
//                 label: 'Unmarked Vehicles', 
//                 desc: 'Discreet operations' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ), 
//                 label: '2-Hr Dispatch', 
//                 desc: 'Mayfair Priority' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//                   </svg>
//                 ), 
//                 label: 'Eco-Smart Safe', 
//                 desc: 'Advanced Protocols' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-1.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08M17.15 3.836c.376.023.75.05 1.124.08m-1.124-.08c.383 1.237 1.277 2.23 2.455 2.682m-13.43-.08c1.178-.452 2.072-1.445 2.455-2.682m-2.455.08c-.373.025-.746.053-1.119.086m1.119-.086c-.383 1.237-1.277 2.23-2.455 2.682m13.43.08c-.373.025-.746.053-1.119.086m-1.119-.086c.383 1.237 1.277 2.23 2.455 2.682M4.15 6.414a11.952 11.952 0 00-1.118 1.408m1.118-1.408c.383 1.237 1.277 2.23 2.455 2.682m10.975-2.682c.413 1.332 1.43 2.374 2.748 2.766m-17.3 1.326A11.954 11.954 0 003 12c0 5.089 3.177 9.434 7.636 11.187a.75.75 0 00.514-.047l7.5-3.75a.75.75 0 00.384-.537l1.5-7.5a.75.75 0 00-.223-.687l-2.25-2.25a.75.75 0 00-.62-.212z" />
//                   </svg>
//                 ), 
//                 label: 'BPCA Accredited', 
//                 desc: 'Certified Techs' 
//               },
//             ].map((item, idx) => (
//               <div key={idx} className="flex flex-col items-center justify-center text-center p-5 rounded-xl bg-white/60 border border-white/20 hover:border-[#0A2240]/20 transition-transform duration-200 group transform-gpu">
//                 <div className="mb-3.5 group-hover:scale-105 transition-transform bg-white/40 p-2.5 rounded-full border border-white/40 shadow-sm">
//                   {item.svg}
//                 </div>
//                 <h4 className="text-xs md:text-sm uppercase tracking-wider font-extrabold text-[#0A2240] mb-0.5">{item.label}</h4>
//                 <p className="text-[11px] md:text-xs text-slate-900 font-semibold">{item.desc}</p>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div variants={fadeInUp} className="mt-8 text-xs tracking-widest uppercase font-bold text-slate-900">
//               Pesbye Services Mayfair — <span className="text-white">Secure✔</span>
//           </motion.div>

//         </motion.div>
//       </div>
//     </div>
//   );
// }












// import React from "react";
// import { ShieldCheck, Target, Clock, Zap, Award, Search, CheckCircle2 } from "lucide-react";

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* ─── PREMIUM HEADER ─── */}
//         <div className="mb-24">
//           <span className="text-[#0A2240]/60 font-mono tracking-[0.4em] uppercase text-xs mb-6 block">// Operational Profile</span>
//           <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter text-white">
//             Quick <br/> <span className="text-[#0A2240]">Shield</span>
//           </h1>
//         </div>

//         {/* ─── BENTO GRID LAYOUT ─── */}
//         <div className="grid md:grid-cols-12 gap-6">
          
//           {/* Main Mission Card */}
//           <div className="md:col-span-8 bg-[#0A2240] text-white p-12 rounded-[2rem] flex flex-col justify-center">
//             <h2 className="text-4xl font-black uppercase mb-6">Expertise in Every Corner.</h2>
//             <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
//               We don't just eliminate pests; we secure your environment. Quick Shield combines years of local experience with professional-grade protocols to ensure your property remains a sanctuary. From rapid response dispatches to long-term prevention, we are the industry standard for reliable pest management.
//             </p>
//           </div>

//           {/* Stats Card */}
//           <div className="md:col-span-4 bg-white/40 border border-white/50 p-10 rounded-[2rem] flex flex-col justify-between">
//             <h3 className="text-xl font-black uppercase mb-8">Performance Metrics</h3>
//             <div className="space-y-6">
//               {[
//                 { label: "Homes Secured", val: "1,200+" },
//                 { label: "Response Time", val: "2 Hours" },
//                 { label: "Success Rate", val: "99%" },
//               ].map((stat, i) => (
//                 <div key={i} className="border-b border-[#0A2240]/10 pb-4">
//                   <div className="text-3xl font-black">{stat.val}</div>
//                   <div className="text-xs uppercase font-bold tracking-widest opacity-60">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Process Cards */}
//           <div className="md:col-span-12 grid md:grid-cols-3 gap-6">
//             {[
//               { icon: <Search />, title: "Precision Inspection", text: "Identifying root causes using advanced methodology." },
//               { icon: <Target />, title: "Targeted Action", text: "Removing infestations with extreme clinical accuracy." },
//               { icon: <ShieldCheck />, title: "Structural Defense", text: "Fortifying your property to prevent future returns." },
//             ].map((item, i) => (
//               <div key={i} className="bg-white/20 p-8 rounded-[2rem] border border-white/30 backdrop-blur-sm">
//                 <div className="mb-6 bg-[#0A2240] text-white w-14 h-14 rounded-2xl flex items-center justify-center">
//                   {React.cloneElement(item.icon, { size: 28 })}
//                 </div>
//                 <h4 className="text-xl font-black uppercase mb-2">{item.title}</h4>
//                 <p className="text-[#0A2240]/80 font-medium">{item.text}</p>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* ─── WHY CHOOSE SECTION ─── */}
//         <div className="mt-24 bg-[#0A2240] text-white p-16 rounded-[2rem] grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-5xl font-black uppercase mb-8 tracking-tight">The Quick Shield <br/><span className="text-[#b99547]">Advantage</span></h2>
//             <div className="space-y-4">
//               {[
//                 "Licensed & Bonded Professionals",
//                 "Advanced Eco-Safe Solutions",
//                 "Total Transparency in Pricing",
//                 "Rapid Local Deployment"
//               ].map((point, i) => (
//                 <div key={i} className="flex items-center gap-4 text-lg font-bold">
//                   <CheckCircle2 className="text-[#b99547]" /> {point}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="h-[300px] bg-white/10 rounded-3xl flex items-center justify-center font-black opacity-30 italic">
//             IMAGE_PLACEMENT_TECHNICAL_DETAIL
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }










// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBug, FaSpider } from "react-icons/fa6";
// import { GiShield, GiBee, GiAnt } from "react-icons/gi";

// export default function HeroSection() {
//   return (
//     // Gold background (#C5A86B) ke bajaye maine thoda light shade diya hai taake contrast better ho
//     <section className="relative w-full min-h-[85vh] mt-20 bg-[#b99547] flex items-center py-16 overflow-hidden">
      
//       {/* Container - max-width set ki hai taake content stretch na ho */}
//       <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
//         {/* Left Side: Content */}
//         <div className="space-y-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <span className="text-[#0A2240] font-bold uppercase tracking-[0.2em] bg-black/5 px-3 py-1 rounded-sm text-sm">
//               QuickShield Services
//             </span>
//             <h1 className="text-6xl md:text-8xl font-black text-[#0A2240] leading-[0.9] mt-4">
//               TOTAL<br />
//               <span className="text-white">PURLEY</span><br />
//               DEFENCE
//             </h1>
//             <p className="text-[#0A2240]/80 text-lg mt-6 max-w-sm leading-relaxed">
//               Professional, discreet, and rapid pest eradication in Purley. Protect your home with the shield that never fails.
//             </p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//             <Link to="/contact" className="inline-block bg-[#0A2240] text-[#C5A86B] px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-all">
//               Request Inspection
//             </Link>
//           </motion.div>
//         </div>

//         {/* Right Side: Icon Grid */}
//         <motion.div 
//           className="grid grid-cols-2 gap-4"
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }}
//         >
//           {[
//             { icon: FaBug, title: "Bed Bugs" },
//             { icon: GiBee, title: "Wasps & Bees" },
//             { icon: FaSpider, title: "Spiders" },
//             { icon: GiAnt, title: "Ant Control" }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white/40 p-6 rounded-2xl border border-white/60 shadow-lg flex flex-col items-center justify-center hover:bg-white/60 transition-all cursor-pointer">
//               <item.icon className="text-5xl text-[#0A2240] mb-3" />
//               <span className="text-[#0A2240] font-black text-sm uppercase">{item.title}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBug, FaSpider } from "react-icons/fa6";
// import { GiShield, GiBee, GiAnt } from "react-icons/gi";

// export default function HeroSection() {
//   return (
//     // Gold background (#C5A86B) ke bajaye maine thoda light shade diya hai taake contrast better ho
//     <section className="relative w-full min-h-[85] mt-20 bg-[#b99547] flex items-center py-16 overflow-hidden">
      
//       {/* Container - max-width set ki hai taake content stretch na ho */}
//       <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
//         {/* Left Side: Content */}
//         <div className="space-y-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <span className="text-[#0A2240] font-bold uppercase tracking-[0.2em] bg-black/5 px-3 py-1 rounded-sm text-sm">
//               QuickShield Services
//             </span>
//             <h1 className="text-6xl md:text-8xl font-black text-[#0A2240] leading-[0.9] mt-4">
//               TOTAL<br />
//               <span className="text-white">PURLEY</span><br />
//               DEFENCE
//             </h1>
//             <p className="text-[#0A2240]/80 text-lg mt-6 max-w-sm leading-relaxed">
//               Professional, discreet, and rapid pest eradication in Purley. Protect your home with the shield that never fails.
//             </p>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//             <Link to="/contact-us" className="inline-block bg-[#0A2240] text-[#C5A86B] px-8 py-4 font-black uppercase tracking-widest hover:bg-black transition-all">
//               Request Inspection
//             </Link>
//           </motion.div>
//         </div>

//         {/* Right Side: Icon Grid */}
//         <motion.div 
//           className="grid grid-cols-2 gap-4"
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }}
//         >
//           {[
//             { icon: FaBug, title: "Bed Bugs" },
//             { icon: GiBee, title: "Wasps & Bees" },
//             { icon: FaSpider, title: "Spiders" },
//             { icon: GiAnt, title: "Ant Control" }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white/40 p-6 rounded-2xl border border-white/60 shadow-lg flex flex-col items-center justify-center hover:bg-white/60 transition-all cursor-pointer">
//               <item.icon className="text-5xl text-[#0A2240] mb-3" />
//               <span className="text-[#0A2240] font-black text-sm uppercase">{item.title}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }











import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  Check,
  Bug,
  Mouse,
  Building2,
} from "lucide-react";

// ========================================
// QUICKSHIELD SERVICES PUTNEY
// HOME HERO COMPONENT
// ========================================

const COMPANY = "QuickShield Services Putney";
const PHONE = "+44 7459 692222";
const PHONE_LINK = "tel:+447459692222";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="quickshield-hero-title"
      className="relative isolate overflow-hidden bg-[#B99547] text-[#0A2240]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* ================================= */}
      {/* ANIMATIONS */}
      {/* ================================= */}

      <style>{`
        @keyframes qspHeroFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes qspHeroFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .qsp-hero-reveal {
          animation: qspHeroFadeUp .8s ease-out both;
        }

        .qsp-hero-delay-1 {
          animation-delay: .12s;
        }

        .qsp-hero-delay-2 {
          animation-delay: .24s;
        }

        .qsp-hero-delay-3 {
          animation-delay: .36s;
        }

        .qsp-hero-float {
          animation: qspHeroFloat 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .qsp-hero-reveal,
          .qsp-hero-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ================================= */}
      {/* BACKGROUND DETAILS */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-[-220px] top-[-280px] h-[800px] w-[800px] rounded-full bg-white/[0.06] blur-[110px]" />

        <div className="absolute bottom-[-300px] left-[-220px] h-[650px] w-[650px] rounded-full bg-[#F8F1E4]/[0.08] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0A2240_1px,transparent_1px),linear-gradient(to_bottom,#0A2240_1px,transparent_1px)] [background-size:90px_90px]" />
      </div>

      {/* ================================= */}
      {/* MAIN HERO */}
      {/* ================================= */}

      <div className="relative mx-auto grid min-h-[740px] max-w-[1480px] items-center gap-16 px-5 pb-20 pt-36 sm:px-10 lg:min-h-[800px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-16 lg:pb-24 lg:pt-44">

        {/* ================================= */}
        {/* LEFT CONTENT */}
        {/* ================================= */}

        <div className="relative z-10 max-w-[760px]">

          {/* LOCATION LABEL */}

          <div className="qsp-hero-reveal inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#0A2240]" />

            <span className="text-xs font-semibold uppercase tracking-wide text-[#0A2240]/85">
              Professional Pest Control in Putney, London
            </span>
          </div>

          {/* MAIN SEO HEADING */}

          <h1
            id="quickshield-hero-title"
            className="qsp-hero-reveal qsp-hero-delay-1 mt-8 text-[clamp(3rem,5.7vw,6rem)] font-bold leading-[1.1] tracking-normal"
          >
            PEST CONTROL
            <br />

            <span className="text-[#F8F1E4]">
              SERVICES
            </span>

            <br />

            IN PUTNEY.
          </h1>

          {/* DESCRIPTION */}

          <div className="qsp-hero-reveal qsp-hero-delay-2 mt-8 max-w-[610px]">
            <p className="text-base leading-8 text-[#0A2240]/85 sm:text-lg">
              Looking for pest control in Putney,
              London? QuickShield Services Putney
              provides pest management solutions
              for residential and commercial
              properties, including rats, mice,
              bed bugs, cockroaches, wasps and
              other common pest concerns.
            </p>
          </div>

          {/* CTA BUTTONS */}

          <div className="qsp-hero-reveal qsp-hero-delay-3 mt-10 flex flex-wrap gap-4">

            <Link
              to="/contact-us"
              className="group inline-flex min-h-[58px] items-center justify-center gap-5 rounded-full bg-[#0A2240] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F1E4] hover:text-[#0A2240] hover:shadow-[0_15px_35px_rgba(10,34,64,0.12)]"
            >
              Request a Quote

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/services"
              className="group inline-flex min-h-[58px] items-center justify-center gap-4 rounded-full border border-[#0A2240]/40 px-8 text-sm font-semibold text-[#0A2240] transition-all duration-300 hover:border-[#0A2240] hover:bg-[#0A2240] hover:text-white"
            >
              Explore Our Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* QUICK TRUST POINTS */}

          <div className="qsp-hero-reveal qsp-hero-delay-3 mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#0A2240]/20 pt-7">

            <div className="flex items-center gap-2.5">
              <Check
                size={17}
                className="text-[#0A2240]"
              />

              <span className="text-sm text-[#0A2240]/80">
                Residential Properties
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Check
                size={17}
                className="text-[#0A2240]"
              />

              <span className="text-sm text-[#0A2240]/80">
                Commercial Premises
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Check
                size={17}
                className="text-[#0A2240]"
              />

              <span className="text-sm text-[#0A2240]/80">
                Pest Prevention
              </span>
            </div>

          </div>
        </div>

        {/* ================================= */}
        {/* RIGHT PREMIUM VISUAL */}
        {/* ================================= */}

        <div className="qsp-hero-reveal qsp-hero-delay-2 relative mx-auto w-full max-w-[570px]">

          {/* OUTER FRAME */}

          <div className="relative overflow-hidden rounded-[28px] border border-[#0A2240]/15 bg-[#0A2240] p-5 shadow-[0_30px_100px_rgba(10,34,64,0.2)] sm:p-8">

            {/* TOP HEADER */}

            <div className="flex items-center justify-between border-b border-white/10 pb-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B99547] text-[#0A2240]">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    QuickShield Services
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    Putney · London
                  </p>
                </div>

              </div>

              <span className="h-2.5 w-2.5 rounded-full bg-[#B99547]" />

            </div>

            {/* CENTRAL VISUAL */}

            <div className="relative flex min-h-[300px] items-center justify-center py-10 sm:min-h-[360px]">

              {/* DECORATIVE RINGS */}

              <div className="absolute h-[270px] w-[270px] rounded-full border border-[#B99547]/15 sm:h-[320px] sm:w-[320px]" />

              <div className="absolute h-[215px] w-[215px] rounded-full border border-dashed border-[#B99547]/20 sm:h-[260px] sm:w-[260px]" />

              {/* MAIN CENTER ICON */}

              <div className="relative z-10 flex h-[165px] w-[165px] items-center justify-center rounded-[28px] border border-[#B99547]/30 bg-[#102D4E] shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:h-[200px] sm:w-[200px]">

                <ShieldCheck
                  size={90}
                  strokeWidth={1.1}
                  className="text-[#B99547] sm:h-[110px] sm:w-[110px]"
                />

              </div>

              {/* FLOATING PEST ICON */}

              <div className="qsp-hero-float absolute left-0 top-[16%] z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#173A60] shadow-xl sm:left-[5%]">

                <Bug
                  size={28}
                  className="text-[#E8D5AE]"
                />

              </div>

              {/* FLOATING RODENT ICON */}

              <div className="qsp-hero-float absolute bottom-[12%] right-0 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#173A60] shadow-xl sm:right-[5%]">

                <Mouse
                  size={28}
                  className="text-[#E8D5AE]"
                />

              </div>

            </div>

            {/* VISUAL FOOTER */}

            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6">

              <div className="rounded-xl bg-white/[0.04] p-4">

                <Bug
                  size={20}
                  className="text-[#B99547]"
                />

                <p className="mt-3 text-sm font-semibold text-white">
                  Pest Treatment
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Insect & Rodent Control
                </p>

              </div>

              <div className="rounded-xl bg-white/[0.04] p-4">

                <Building2
                  size={20}
                  className="text-[#B99547]"
                />

                <p className="mt-3 text-sm font-semibold text-white">
                  Property Protection
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Homes & Businesses
                </p>

              </div>

            </div>
          </div>

          {/* DECORATIVE CORNER */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-32 w-32 rounded-br-[30px] border-b-4 border-r-4 border-[#F8F1E4]/80"
          />

        </div>
      </div>

      {/* ================================= */}
      {/* BOTTOM INFORMATION BAR */}
      {/* ================================= */}

      <div className="relative border-t border-[#0A2240]/15 bg-[#B99547]">

        <div className="mx-auto flex max-w-[1480px] flex-col gap-5 px-5 py-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">

          {/* LOCATION */}

          <div className="flex items-center gap-3">

            <MapPin
              size={19}
              className="shrink-0 text-[#0A2240]"
            />

            <span className="text-xs font-semibold text-[#0A2240]/80 sm:text-sm">
              Putney, London SW15, United Kingdom
            </span>

          </div>

          {/* PHONE */}

          <a
            href={PHONE_LINK}
            className="group flex items-center gap-3 text-sm font-semibold text-[#0A2240] transition-colors hover:text-white"
          >
            <Phone size={18} />

            {PHONE}

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* COMPANY */}

          <span className="text-xs font-semibold text-[#0A2240]/70">
            {COMPANY}
          </span>

        </div>
      </div>
    </section>
  );
}
