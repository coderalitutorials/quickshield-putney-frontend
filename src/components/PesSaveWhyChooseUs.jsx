// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { PhoneCall, Calendar, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";

// export default function PesSaveProcessSection() {
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       step: "01",
//       title: "Assessment",
//       icon: Calendar,
//       bullets: [
//         "Instant Online Slot Booking",
//         "Thermal Inspection & Detection",
//         "Risk Mapping Report Ready"
//       ]
//     },
//     {
//       step: "02",
//       title: "Targeted Eradication",
//       icon: ClipboardCheck,
//       bullets: [
//         "Eco-Certified Actives Deployment",
//         "Precision Heat Treatments",
//         "100% Non-Disruptive Clean Injection"
//       ]
//     },
//     {
//       step: "03",
//       title: "Long-term Protection",
//       icon: PhoneCall,
//       bullets: [
//         "Structural Entry Point Sealing",
//         "Premium Hygiene Baseline Clear",
//         "Post-Treatment Monitoring Plan"
//       ]
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-b border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Structural Minimal Tech Grid Lines */}
//       <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0A2240_2px,transparent_2px),linear-gradient(to_bottom,#0A2240_2px,transparent_2px)] bg-[size:5rem_5rem] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Modern Left-Aligned Header Block */}
//         <div className="max-w-3xl mb-24 space-y-6">
//           <div className="inline-flex items-center gap-2.5 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-lg transform-gpu">
//             <span className="w-2 h-2 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
//             <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
//               Deployment Flow
//             </span>
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-[#0A2240]">
//             3-Stage Property <br />
//             <span className="text-white bg-[#0A2240] px-4 py-1 rounded-xl inline-block mt-2 shadow-xl">
//               Sanctuary Protocol
//             </span>
//           </h2>
//         </div>

//         {/* HIGH-END INTERACTIVE TIMELINE ELEMENT */}
//         <div className="relative transform-gpu">
          
//           {/* Background Connecting Vector Line (Desktop Only) */}
//           <div className="absolute top-10 left-[5%] right-[5%] h-[2px] bg-[#0A2240]/10 hidden md:block z-0" />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
//             {steps.map((item, idx) => {
//               const Icon = item.icon;
//               const isActive = activeStep === idx;

//               return (
//                 <div 
//                   key={item.step}
//                   onMouseEnter={() => setActiveStep(idx)}
//                   className="group/step relative space-y-8 cursor-pointer transform-gpu"
//                 >
//                   {/* Timeline Header Badge & Progress Hub */}
//                   <div className="flex items-center md:flex-col md:items-start gap-6 relative">
                    
//                     {/* Glowing Sequential Indicator */}
//                     {/* FIX: Handled scale and layout translation safely using explicit transform rules */}
//                     <div className={`w-20 h-20 rounded-[24px] border-2 flex items-center justify-center transition-[transform,background-color,border-color] duration-300 shadow-2xl relative transform-gpu ${
//                       isActive 
//                         ? "bg-[#0A2240] border-[#0A2240] text-[#C5A86B] scale-105 -translate-y-0.5" 
//                         : "bg-[#C5A86B] border-[#0A2240]/20 text-[#0A2240]"
//                     }`}>
//                       <Icon className="w-8 h-8" strokeWidth={1.5} />
                      
//                       {/* Absolute Mini Index Badge */}
//                       <span className="absolute -bottom-2.5 right-2 font-mono text-xs font-black bg-[#0A2240] text-white px-1.5 py-0.5 rounded-md shadow-sm">
//                         {item.step}
//                       </span>
//                     </div>

//                     {/* Stage Header Block */}
//                     {/* FIX: Smoothed typography background injection changes to stop rendering hops */}
//                     <div className="md:pt-4 transition-all duration-300">
//                       <h3 className={`text-xl lg:text-2xl font-black uppercase tracking-tight transition-[colors,background-color] duration-300 px-2.5 py-0.5 rounded-md ${
//                         isActive ? "text-white bg-[#0A2240]" : "text-[#0A2240] bg-transparent"
//                       }`}>
//                         {item.title}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Bullet Content Chassis */}
//                   {/* FIX: Swapped out performance killing backdrop-blur with hardware-accelerated translucent background solid */}
//                   <div className={`p-6 rounded-[24px] transition-[transform,background-color,shadow] duration-300 border transform-gpu will-change-transform ${
//                     isActive 
//                       ? "bg-[#0A2240] border-[#0A2240] shadow-2xl shadow-black/30 -translate-y-1" 
//                       : "bg-[#0A2240]/5 border-transparent"
//                   }`}>
//                     <ul className="space-y-3.5">
//                       {item.bullets.map((bullet, bIdx) => (
//                         <li key={bIdx} className="flex items-start gap-3">
//                           <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${
//                             isActive ? "text-[#C5A86B]" : "text-[#0A2240]"
//                           }`} strokeWidth={2.5} />
//                           <span className={`text-xs font-bold leading-tight transition-colors duration-300 ${
//                             isActive ? "text-slate-200" : "text-[#0A2240]/80"
//                           }`}>
//                             {bullet}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* CRISP ULTRA-PREMIUM EMERGENCY PANEL */}
//         <div className="mt-20 bg-[#0A2240] text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-2xl group/panel transform-gpu">
          
//           {/* FIX: Reduced blur complexity to ensure high-speed paint cycle on layout changes */}
//           <div className="absolute right-0 bottom-0 w-[250px] h-[250px] bg-[#C5A86B]/5 rounded-full blur-[60px] pointer-events-none" />
          
//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative z-10">
//             <div className="space-y-4 max-w-2xl">
//               <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1 rounded-md transform-gpu">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
//                 </span>
//                 <span className="text-[9px] font-mono tracking-[0.2em] text-red-400 uppercase font-bold">
//                   Critical Response Grid
//                 </span>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
//                 Dealing with an active emergency pest outbreak?
//               </h3>
//               <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
//                 Our elite rapid London field squads remain on standby 24/7. Immediate dispatch guarantees arrival and deployment initiation within an absolute 2-hour window.
//               </p>
//             </div>

//             <button 
//               onClick={() => navigate("/contact-us")}
//               className="w-full lg:w-auto inline-flex items-center justify-center gap-5 bg-[#C5A86B] hover:bg-[#b39559] text-[#0A2240] font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer shrink-0 shadow-lg shadow-[#C5A86B]/10"
//             >
//               <span>Request Urgent Call</span>
//               <div className="w-5 h-5 rounded-md bg-[#0A2240] flex items-center justify-center group-hover/panel:translate-x-1 transition-transform duration-300">
//                 <ArrowRight className="w-3 h-3 text-[#C5A86B]" strokeWidth={3} />
//               </div>
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// export default function PesSaveProcessSection() {
//   const navigate = useNavigate();

//   const stages = [
//     { num: "01", title: "Site Assessment", text: "Expert inspection to identify hotspots and entry points." },
//     { num: "02", title: "Targeted Treatment", text: "Eco-friendly, precise solutions for fast, effective results." },
//     { num: "03", title: "Prevention Plan", text: "Structural sealing and monitoring to ensure no returns." }
//   ];

//   return (
//     <section className="bg-[#b99547] py-20 text-[#0A2240]">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* Header - Fixed responsive scaling */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
//           <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
//             Our <br/><span className="text-white">Professional</span> <br/>Process
//           </h2>
//           <button 
//             onClick={() => navigate("/contact-us")}
//             className="flex items-center justify-center gap-2 border-2 border-[#0A2240] px-6 py-4 font-black uppercase tracking-[0.1em] hover:bg-[#0A2240] hover:text-white transition-all duration-300 shrink-0 text-sm"
//           >
//             Book Inspection <ArrowUpRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Process Pillars - Responsive Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {stages.map((stage, idx) => (
//             <div key={idx} className="relative flex flex-col p-8 border border-[#0A2240]/20 hover:bg-[#0A2240] group transition-colors duration-500">
//               <span className="text-6xl font-black text-[#0A2240]/20 group-hover:text-[#b99547]/30 transition-colors mb-8 block">
//                 {stage.num}
//               </span>
//               <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">
//                 {stage.title}
//               </h3>
//               <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed text-sm">
//                 {stage.text}
//               </p>
//               <div className="mt-8 w-full h-[2px] bg-[#0A2240]/20 group-hover:bg-[#b99547] transition-colors" />
//             </div>
//           ))}
//         </div>

//         {/* Emergency Footnote */}
//         <div className="mt-16 p-8 lg:p-12 bg-[#0A2240] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
//           <div className="max-w-xl">
//             <h4 className="text-xl font-black uppercase tracking-tight mb-2">Need Immediate Help?</h4>
//             <p className="text-white/60 text-sm">Our rapid response units are on standby 24/7 for high-priority containment.</p>
            
//             <button 
//                 onClick={() => navigate("/contact-us")}
//                 className="mt-4 flex items-center gap-2 text-[#b99547] font-bold uppercase tracking-widest hover:text-white transition-all text-xs"
//             >
//                 Book Inspection Now <ArrowUpRight className="w-3 h-3" />
//             </button>
//           </div>
          
//           <div className="flex items-center gap-4 border-l border-white/20 pl-8">
//              <div className="text-4xl font-black tracking-tighter">2h</div>
//              <div className="text-sm font-bold text-white/50 uppercase">Response <br/>Time</div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }







import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  ClipboardList,
  ScanSearch,
  ShieldCheck,
  Phone,
  Check,
  MapPin,
} from "lucide-react";

// ========================================
// QUICKSHIELD SERVICES PUTNEY
// HOW OUR PROCESS WORKS
// ========================================

const COMPANY = "QuickShield Services Putney";
const PHONE = "+44 7459 692222";
const PHONE_LINK = "tel:+447459692222";

const stages = [
  {
    number: "01",
    label: "INITIAL ENQUIRY",
    title: "Tell Us About Your Pest Problem",
    description:
      "Noticed scratching sounds, droppings, insect activity or other signs of pests? Contact our Putney pest control team and explain what is happening at your property.",
    icon: ClipboardList,
    details: [
      "Describe the signs of pest activity",
      "Provide your property location",
    ],
  },
  {
    number: "02",
    label: "PROPERTY ASSESSMENT",
    title: "Understand the Situation",
    description:
      "An appropriate assessment can help identify the pest involved, affected areas and possible entry points. These findings help inform suitable pest management options.",
    icon: ScanSearch,
    details: [
      "Identify potential problem areas",
      "Discuss appropriate treatment options",
    ],
  },
  {
    number: "03",
    label: "TREATMENT & PREVENTION",
    title: "Plan the Next Steps",
    description:
      "Based on the pest concern and property conditions, we can discuss suitable control measures alongside practical prevention and property proofing advice.",
    icon: ShieldCheck,
    details: [
      "Consider targeted pest control",
      "Review practical prevention measures",
    ],
  },
];

// ========================================
// PROCESS STEP
// ========================================

function ProcessStep({ stage, index }) {
  const Icon = stage.icon;

  return (
    <article
      data-process-reveal
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      className="putney-process-reveal group relative overflow-hidden rounded-[20px] border border-[#0A2240]/10 bg-white p-6 transition-all duration-500 hover:border-[#B99547]/60 hover:shadow-[0_20px_50px_rgba(10,34,64,0.08)] sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-7">

        {/* ICON */}

        <div className="flex shrink-0 items-start justify-between sm:block">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2240] text-[#E8D5AE] transition-all duration-300 group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
            <Icon size={28} strokeWidth={1.7} />
          </div>

          <span className="text-4xl font-bold text-[#B99547]/45 sm:hidden">
            {stage.number}
          </span>
        </div>

        {/* CONTENT */}

        <div className="min-w-0 flex-1">

          <div className="flex items-center justify-between gap-4">

            <span className="text-xs font-bold uppercase tracking-wide text-[#947331]">
              {stage.label}
            </span>

            <span className="hidden text-3xl font-bold text-[#B99547]/45 sm:block">
              {stage.number}
            </span>

          </div>

          <h3 className="mt-3 text-[clamp(1.5rem,2.2vw,2.1rem)] font-bold leading-[1.2] text-[#0A2240]">
            {stage.title}
          </h3>

          <p className="mt-4 max-w-[570px] text-sm leading-7 text-[#536071] sm:text-base">
            {stage.description}
          </p>

          {/* DETAILS */}

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#0A2240]/10 pt-5">
            {stage.details.map((detail) => (
              <div
                key={detail}
                className="flex items-center gap-2.5"
              >
                <Check
                  size={16}
                  className="shrink-0 text-[#947331]"
                />

                <span className="text-xs font-semibold text-[#0A2240]/75 sm:text-sm">
                  {detail}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </article>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================

export default function PesSaveProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      "[data-process-reveal]"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add(
          "putney-process-visible"
        )
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "putney-process-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-process"
      aria-labelledby="putney-process-heading"
      className="relative isolate overflow-hidden bg-[#F7F5F0] py-20 text-[#0A2240] sm:py-24 lg:py-32"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* ======================================== */}
      {/* ANIMATION STYLES */}
      {/* ======================================== */}

      <style>{`
        .putney-process-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity 700ms ease,
            transform 700ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .putney-process-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .putney-process-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* ======================================== */}
      {/* BACKGROUND DETAILS */}
      {/* ======================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-44 -top-44 h-[500px] w-[500px] rounded-full border border-[#B99547]/15" />

        <div className="absolute -left-24 -top-24 h-[350px] w-[350px] rounded-full border border-[#B99547]/10" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

        {/* ======================================== */}
        {/* SECTION INTRO */}
        {/* ======================================== */}

        <div className="mb-14 max-w-[760px]">

          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#B99547]" />

            <span className="text-xs font-semibold uppercase tracking-wide text-[#947331]">
              Our Process / Putney
            </span>
          </div>

          <h2
            id="putney-process-heading"
            className="mt-7 text-[clamp(2.7rem,4.8vw,5rem)] font-bold leading-[1.13]"
          >
            HOW WE HANDLE
            <br />

            <span className="text-[#B99547]">
              PEST CONCERNS.
            </span>
          </h2>

          <p className="mt-6 max-w-[650px] text-base leading-8 text-[#536071] sm:text-lg">
            Our approach to pest control in
            Putney focuses on understanding
            your concern, assessing the
            situation and discussing
            suitable next steps.
          </p>

        </div>

        {/* ======================================== */}
        {/* NEW TWO-COLUMN LAYOUT */}
        {/* ======================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">

          {/* LEFT PREMIUM PANEL */}

          <div
            data-process-reveal
            className="putney-process-reveal relative overflow-hidden rounded-[24px] bg-[#0A2240] p-8 text-white sm:p-10 lg:sticky lg:top-28 lg:p-12"
          >
            {/* DECORATIVE RINGS */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -right-40 -top-40 h-[440px] w-[440px] rounded-full border border-[#B99547]/20" />

              <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full border border-[#B99547]/15" />
            </div>

            <div className="relative">

              <span className="inline-flex items-center gap-2 rounded-full border border-[#B99547]/35 px-4 py-2 text-xs font-semibold text-[#E8D5AE]">
                <ShieldCheck size={16} />

                QuickShield Services Putney
              </span>

              <h3 className="mt-10 text-[clamp(2rem,3vw,3.3rem)] font-bold leading-[1.15]">
                YOUR PROPERTY.
                <br />

                <span className="text-[#E8D5AE]">
                  OUR PRIORITY.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-8 text-white/70 sm:text-base">
                Pest problems can affect
                homes and businesses in
                different ways. Our process
                starts with listening to
                your concerns and considering
                the appropriate response.
              </p>

              {/* LOCATION */}

              <div className="mt-9 flex items-start gap-3 border-t border-white/15 pt-7">

                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#B99547]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Based in Putney, London
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    10 Pettiward Cl,
                    London SW15 6QL,
                    United Kingdom
                  </p>
                </div>

              </div>

              {/* BUTTON */}

              <Link
                to="/contact-us"
                className="group mt-9 inline-flex min-h-[56px] items-center justify-center gap-5 rounded-full bg-[#B99547] px-7 text-sm font-semibold text-[#0A2240] transition-all duration-300 hover:bg-[#F8F1E4]"
              >
                Discuss Your Pest Concern

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>
          </div>

          {/* ======================================== */}
          {/* RIGHT PROCESS STEPS */}
          {/* ======================================== */}

          <div className="grid gap-5">
            {stages.map((stage, index) => (
              <ProcessStep
                key={stage.number}
                stage={stage}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* ======================================== */}
        {/* BOTTOM CONTACT STRIP */}
        {/* ======================================== */}

        <div
          data-process-reveal
          className="putney-process-reveal mt-16 flex flex-col gap-7 border-t border-[#0A2240]/15 pt-9 sm:flex-row sm:items-center sm:justify-between lg:mt-20"
        >

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#947331]">
              Ready to Take the Next Step?
            </p>

            <p className="mt-3 text-xl font-bold text-[#0A2240] sm:text-2xl">
              Contact our Putney pest control team.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <a
              href={PHONE_LINK}
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-[#0A2240]/20 px-6 text-sm font-semibold text-[#0A2240] transition-colors duration-300 hover:border-[#B99547] hover:bg-[#B99547]/10"
            >
              <Phone size={18} />

              {PHONE}
            </a>

            <Link
              to="/contact-us"
              className="group inline-flex min-h-[54px] items-center justify-center gap-4 rounded-full bg-[#0A2240] px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
            >
              Get in Touch

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
