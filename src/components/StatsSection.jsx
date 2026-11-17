// import React, { useEffect, useRef, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// function AnimatedCounter({ value, duration = 1200 }) { // Duration thoda optimized kiya
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const hasAnimated = useRef(false);

//   const isFraction = value.includes("/");
//   const numericString = value.replace(/[^0-9]/g, "");
//   const numericValue = parseInt(numericString, 10) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true;
//           let startTime = null;
//           let lastUpdate = 0;

//           const animateCount = (timestamp) => {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
            
//             // FIX: Throttle state updates to save main-thread frame rates (approx 60fps cap)
//             if (timestamp - lastUpdate > 16 || progress === 1) {
//               const currentValue = Math.round(progress * numericValue);
//               setCount(currentValue);
//               lastUpdate = timestamp;
//             }

//             if (progress < 1) {
//               requestAnimationFrame(animateCount);
//             }
//           };

//           requestAnimationFrame(animateCount);
//         }
//       },
//       { threshold: 0.1 } // Optimized threshold to trigger early and smoothly
//     );

//     observer.observe(element);
//     return () => observer.disconnect();
//   }, [numericValue, duration]);

//   if (isFraction) {
//     return (
//       <span ref={ref} className="inline-flex items-center transform-gpu">
//         <span>{count}</span>
//         <span className="text-[#0A2240]/30 mx-1">/</span>
//         <span>{value.split("/")[1]}</span>
//       </span>
//     );
//   }

//   return (
//     <span ref={ref} className="inline-flex transform-gpu">
//       <span>{count}</span>
//       {suffix}
//     </span>
//   );
// }

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   const stats = [
//     {
//       number: "15+",
//       label: "Years Premium Depth",
//       desc: "Rapid emergency response across high-end West London sectors.",
//     },
//     {
//       number: "5/5",
//       label: "Client Trust Score",
//       desc: "Top ratings for seamless eradication and zero-trace execution.",
//     },
//     {
//       number: "100%",
//       label: "Eradication Rate",
//       desc: "Comprehensive protection warranties securing luxury estates.",
//     },
//     {
//       number: "3K+",
//       label: "Properties Shielded",
//       desc: "Successful active proofing setups deployed across Mayfair.",
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
//       {/* Premium Linear Accents */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Monolithic Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#0A2240]/10">
//           <div className="space-y-4 text-left">
//             <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0A2240]/60 block">
//               // Performance Index
//             </span>
//             <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
//               Mayfair Track Record
//             </h2>
//           </div>
          
//           <div className="text-left md:text-right">
//             <button
//               onClick={() => navigate("/contact-us")}
//               className="inline-flex items-center gap-8 bg-[#0A2240] text-white rounded-full pl-6 pr-2 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-[#0A2240]/90 active:scale-[0.98] group/btn shadow-xl shadow-[#0A2240]/10"
//             >
//               <span>Schedule Eradication</span>
//               <div className="w-10 h-10 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
//                 <ArrowRight className="w-4 h-4 text-[#0A2240]" strokeWidth={3} />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* LINEAR HORIZON TIMELINE STREAM */}
//         <div className="mt-12 divide-y divide-[#0A2240]/10">
//           {stats.map((stat, idx) => (
//             <div 
//               key={idx} 
//               // FIX: Replaced transition-all with specific property transitions to avoid re-paints
//               className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-left group transition-colors duration-300 relative transform-gpu will-change-transform"
//             >
//               {/* Invisible background glow */}
//               <div className="absolute inset-y-0 -inset-x-4 bg-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none transform-gpu" />

//               {/* Index Column */}
//               <div className="md:col-span-1 hidden md:block relative z-10">
//                 <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200">
//                   0{idx + 1}
//                 </span>
//               </div>

//               {/* Big Counter Column */}
//               <div className="md:col-span-3 relative z-10">
//                 {/* FIX: Removed text scaling on hover to completely remove text jittering on scroll */}
//                 <div className="text-5xl md:text-6xl font-black tracking-tighter text-[#0A2240] font-sans flex items-center transform-gpu">
//                   <AnimatedCounter value={stat.number} />
//                 </div>
//               </div>

//               {/* Label/Title Column */}
//               <div className="md:col-span-3 relative z-10">
//                 <h4 className="text-sm font-black tracking-wider uppercase text-[#0A2240] group-hover:text-white transition-colors duration-200">
//                   {stat.label}
//                 </h4>
//               </div>

//               {/* Description Context Column */}
//               <div className="md:col-span-5 relative z-10">
//                 <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//                   {stat.desc}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }













// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView, useSpring, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// // Helper component for animating numbers
// function Counter({ value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   // Extract numeric part (e.g., "15+" -> 15, "3K+" -> 3000)
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000; // 2 seconds animation
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);
//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

// const navigate = useNavigate();

//   return (
//     <span ref={ref} className="text-5xl font-black text-white mb-4 block">
//       {count}{suffix}
//     </span>
//   );
// }

// const stats = [
//   { value: "15+", label: "Years of Elite Service", desc: "Decades of mastery in discreet pest eradication for luxury estates." },
//   { value: "5/5", label: "Trust Rating", desc: "Perfect client satisfaction scores for our precision protocols." },
//   { value: "100%", label: "Eradication Success", desc: "Zero-tolerance policy for pests with lifetime proofing warranties." },
//   { value: "3000+", label: "Estates Secured", desc: "Successfully protected premier properties across Mayfair." },
// ];

// export default function PesSaveStatsSection() {
//   return (
//     <section className="bg-[#b99547] py-24 border-t border-[#0A2240]/20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="mb-20 text-center">
//           <span className="text-[#0A2240] font-black tracking-[0.4em] uppercase text-xs">Operational Excellence</span>
//           <h2 className="text-4xl md:text-7xl font-black text-[#0A2240] mt-4 uppercase">
//             Performance <span className="text-white">Metrics</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-[#0A2240] p-8 rounded-lg flex flex-col items-center text-center border-b-4 border-[#b99547] hover:border-white transition-all duration-300"
//             >
//               <Counter value={stat.value} />
//               <h4 className="text-[#b99547] font-black uppercase tracking-widest text-sm mb-3">{stat.label}</h4>
//               <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-[#0A2240] font-bold text-lg mb-6">Ready to secure your property with the QuickShield standard?</p>
//       <button
//   onClick={() => navigate("/contact-us")}
//   className="bg-[#0A2240] text-[#b99547] px-8 md:px-12 py-4 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all"
// >
//   Get A Private Consultation
// </button>
//         </div>
//       </div>
//     </section>
//   );
// }









// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Counter({ value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

//   return (
//     <span ref={ref} className="text-5xl font-black text-white mb-4 block">
//       {count}
//       {suffix}
//     </span>
//   );
// }

// const stats = [
//   {
//     value: "15+",
//     label: "Years of Elite Service",
//     desc: "Decades of mastery in discreet pest eradication for luxury estates.",
//   },
//   {
//     value: "5/5",
//     label: "Trust Rating",
//     desc: "Perfect client satisfaction scores for our precision protocols.",
//   },
//   {
//     value: "100%",
//     label: "Eradication Success",
//     desc: "Zero-tolerance policy for pests with lifetime proofing warranties.",
//   },
//   {
//     value: "3000+",
//     label: "Estates Secured",
//     desc: "Successfully protected premier properties across Mayfair.",
//   },
// ];

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#b99547] py-24 border-t border-[#0A2240]/20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-20 text-center">
//           <span className="text-[#0A2240] font-black tracking-[0.4em] uppercase text-xs">
//             Operational Excellence
//           </span>

//           <h2 className="text-4xl md:text-7xl font-black text-[#0A2240] mt-4 uppercase">
//             Performance <span className="text-white">Metrics</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-[#0A2240] p-8 rounded-lg flex flex-col items-center text-center border-b-4 border-[#b99547] hover:border-white transition-all duration-300"
//             >
//               <Counter value={stat.value} />

//               <h4 className="text-[#b99547] font-black uppercase tracking-widest text-sm mb-3">
//                 {stat.label}
//               </h4>

//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {stat.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-[#0A2240] font-bold text-lg mb-6">
//             Ready to secure your property with the QuickShield standard?
//           </p>

//           <button
//             type="button"
//             onClick={() => navigate("/contact-us")}
//             className="bg-[#0A2240] text-[#b99547] px-8 md:px-12 py-4 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all"
//           >
//             Get A Private Consultation
//           </button>
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
  SearchCheck,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";

// ========================================
// QUICKSHIELD SERVICES PUTNEY
// OUR APPROACH SECTION
// ========================================

const COMPANY = "QuickShield Services Putney";
const PHONE = "+44 7459 692222";
const PHONE_LINK = "tel:+447459692222";

const STEPS = [
  {
    number: "01",
    label: "IDENTIFY",
    title: "Understand the Problem",
    description:
      "Every pest concern begins with understanding the signs. Tell us what you have noticed, where activity is occurring and how it is affecting your property.",
    icon: SearchCheck,
  },
  {
    number: "02",
    label: "INSPECT",
    title: "Assess the Property",
    description:
      "An appropriate assessment can help establish the type of pest activity, possible entry points and areas that may require attention.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    label: "TREAT",
    title: "Plan the Right Response",
    description:
      "Pest species, property conditions and the extent of activity help determine which control or treatment options may be suitable.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    label: "PROTECT",
    title: "Consider Prevention",
    description:
      "Where appropriate, practical prevention advice and property proofing measures can help reduce opportunities for future pest access.",
    icon: CheckCircle2,
  },
];

// ========================================
// MAIN COMPONENT
// ========================================

export default function PesSaveStatsSection() {
  const sectionRef = useRef(null);

  // ========================================
  // SCROLL REVEAL ANIMATIONS
  // ========================================

  useEffect(() => {
    const root = sectionRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(
      "[data-putney-reveal]"
    );

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add(
          "putney-approach-visible"
        )
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "putney-approach-visible"
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
      aria-labelledby="putney-approach-heading"
      className="relative isolate overflow-hidden bg-[#F7F4EC] text-[#0A2240]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* ======================================== */}
      {/* ANIMATION STYLES */}
      {/* ======================================== */}

      <style>{`
        .putney-approach-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(.2,.75,.2,1);
        }

        .putney-approach-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .putney-approach-reveal {
            opacity: 1;
            transform: none;
            transition: none;
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
        <div className="absolute -right-44 -top-48 h-[520px] w-[520px] rounded-full border border-[#B99547]/15" />

        <div className="absolute -right-24 -top-28 h-[370px] w-[370px] rounded-full border border-[#B99547]/15" />

        <div className="absolute -bottom-52 -left-40 h-[480px] w-[480px] rounded-full bg-[#B99547]/[0.035] blur-[90px]" />
      </div>

      {/* ======================================== */}
      {/* SECTION INTRODUCTION */}
      {/* ======================================== */}

      <div className="relative mx-auto max-w-[1480px] px-5 pb-14 pt-24 sm:px-10 sm:pt-28 lg:px-16 lg:pb-20 lg:pt-32">

        <div
          data-putney-reveal
          className="putney-approach-reveal grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20"
        >

          {/* LEFT HEADING */}

          <div>

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#B99547]" />

              <span className="text-xs font-semibold uppercase tracking-wide text-[#947331]">
                Our Approach / Putney
              </span>
            </div>

            <h2
              id="putney-approach-heading"
              className="mt-8 max-w-[800px] text-[clamp(2.7rem,4.7vw,5rem)] font-bold leading-[1.13] tracking-normal"
            >
              A CLEARER
              <br />

              APPROACH TO
              <br />

              <span className="text-[#B99547]">
                PEST CONTROL.
              </span>
            </h2>

          </div>

          {/* RIGHT DESCRIPTION */}

          <div className="lg:pb-3">

            <p className="max-w-[480px] border-l-[3px] border-[#B99547] pl-6 text-base leading-8 text-[#536070] sm:text-lg">
              Pest control in Putney begins with
              understanding the problem and
              considering the right response.
              Our approach focuses on
              identifying pest concerns,
              discussing suitable control
              options and considering
              practical prevention measures.
            </p>

            <div className="mt-8 flex items-center gap-3 pl-6">

              <MapPin
                size={18}
                className="text-[#947331]"
              />

              <span className="text-sm font-semibold text-[#0A2240]/70">
                Putney · London SW15
              </span>

            </div>

          </div>

        </div>
      </div>

      {/* ======================================== */}
      {/* FOUR-STEP PROCESS */}
      {/* ======================================== */}

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

        {/* TOP DIVIDER */}

        <div className="border-t border-[#0A2240]/15" />

        {STEPS.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              data-putney-reveal
              className="putney-approach-reveal group relative grid gap-6 border-b border-[#0A2240]/15 py-10 transition-colors duration-300 sm:grid-cols-[90px_1fr] sm:gap-8 sm:py-12 lg:grid-cols-[110px_minmax(0,1fr)_minmax(250px,0.85fr)_70px] lg:items-center lg:gap-10 lg:py-14"
              style={{
                transitionDelay: `${Math.min(
                  index * 80,
                  240
                )}ms`,
              }}
            >

              {/* STEP NUMBER */}

              <div className="flex items-center">

                <span
                  className="text-[clamp(3.2rem,5vw,5.2rem)] font-bold leading-none tracking-normal text-[#B99547]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

              </div>

              {/* STEP HEADING */}

              <div>

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#B99547]" />

                  <span className="text-xs font-semibold uppercase tracking-wide text-[#947331]">
                    {step.label}
                  </span>

                </div>

                <h3 className="max-w-[560px] text-[clamp(1.8rem,2.7vw,2.8rem)] font-bold leading-[1.15] tracking-normal transition-colors duration-300 group-hover:text-[#947331]">
                  {step.title}
                </h3>

              </div>

              {/* STEP DESCRIPTION */}

              <p className="max-w-[470px] text-sm leading-8 text-[#536070] sm:col-start-2 sm:text-base lg:col-auto">
                {step.description}
              </p>

              {/* STEP ICON */}

              <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-[#0A2240]/15 bg-white/60 text-[#947331] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#0A2240] group-hover:bg-[#0A2240] group-hover:text-[#E8D5AE] lg:flex">

                <Icon
                  size={24}
                  strokeWidth={1.7}
                />

              </div>

            </div>
          );
        })}

      </div>

      {/* ======================================== */}
      {/* FINAL CTA SECTION */}
      {/* ======================================== */}

      <div className="relative mx-auto max-w-[1480px] px-5 pb-24 pt-16 sm:px-10 sm:pb-28 lg:px-16 lg:pb-32 lg:pt-20">

        <div
          data-putney-reveal
          className="putney-approach-reveal relative overflow-hidden rounded-[24px] bg-[#0A2240] text-white"
        >

          {/* DECORATIVE BACKGROUND */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -bottom-48 -right-24 h-[440px] w-[440px] rounded-full border-[45px] border-[#B99547]/[0.06]" />

            <div className="absolute right-0 top-0 h-full w-1 bg-[#B99547]" />
          </div>

          <div className="relative flex flex-col gap-10 p-7 sm:p-11 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:p-14">

            {/* CTA CONTENT */}

            <div className="max-w-[780px]">

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#B99547]" />

                <span className="text-xs font-semibold uppercase tracking-wide text-[#E8D5AE]">
                  Your Next Step
                </span>

              </div>

              <h3 className="mt-6 text-[clamp(2rem,3.6vw,3.8rem)] font-bold leading-[1.13] tracking-normal">
                LET'S DISCUSS YOUR
                <br />

                <span className="text-[#E8D5AE]">
                  PEST CONCERN.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Contact {COMPANY} to discuss
                pest activity at your home
                or commercial property and
                find out about the next
                steps available.
              </p>

            </div>

            {/* CTA ACTIONS */}

            <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">

              <Link
                to="/contact-us"
                className="group inline-flex min-h-[58px] items-center justify-between gap-7 rounded-full bg-[#B99547] px-7 text-sm font-semibold text-[#0A2240] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8D5AE]"
              >
                Request a Callback

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={PHONE_LINK}
                className="group inline-flex min-h-[58px] items-center justify-between gap-5 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-all duration-300 hover:border-[#B99547] hover:text-[#E8D5AE]"
              >
                <span className="flex items-center gap-3">
                  <Phone size={18} />

                  {PHONE}
                </span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}



















