// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Leaf,
//   Zap,
// } from "lucide-react";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();
//   const [activeFeature, setActiveFeature] = useState(null);

//   const features = [
//     {
//       id: "01",
//       title: "Certified Team",
//       desc: "Client-oriented, fully trained and certified local pest experts operating with strict premium standards.",
//       icon: ShieldCheck,
//     },
//     {
//       id: "02",
//       title: "Eco Formulations",
//       desc: "Premium, target-specific and completely safe treatment compounds safe for families and properties.",
//       icon: Leaf,
//     },
//     {
//       id: "03",
//       title: "Total Safety",
//       desc: "Complete long-term property protection, restriction protocols, and total clinical peace of mind.",
//       icon: Zap,
//     },
//   ];

//   return (
//     <section className="relative py-24 md:py-36 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 group/section isolate backface-hidden">
      
//       {/* Background Image Layer — Hardware accelerated */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
//         <img
//           src="/images/moth-control.webp"
//           alt="Professional treatment context background"
//           className="w-full h-full object-cover object-center opacity-100 contrast-[1.05] brightness-[0.85]"
//           loading="lazy"
//         />
//         {/* Precise fading gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#C5A86B] via-[#C5A86B]/60 to-transparent w-full lg:w-[60%]" />
//       </div>

//       {/* Luxury Minimalist Pattern Overlay */}
//       <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#0A2240_1px,transparent_1px),linear-gradient(to_bottom,#0A2240_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
//           {/* LEFT SIDE: Luxury Copywriting Block */}
//           {/* FIX: Removed complex nested classes from sticky wrapper to ensure low paint complexity */}
//           <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-12 transform-gpu">
//             <div className="inline-flex items-center gap-2.5 bg-[#0A2240] border border-white/10 px-4 py-1.5 rounded-md shadow-md">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
//               <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
//                 Operational Quality
//               </span>
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0A2240] uppercase leading-none drop-shadow-sm">
//                 Complete <br /> Eradication <br />
//                 <span className="text-white bg-[#0A2240] px-4 py-1.5 rounded-xl inline-block mt-2">
//                   Guaranteed
//                 </span>
//               </h2>

//               <p className="text-[#0A2240] text-sm md:text-base leading-relaxed font-bold max-w-md drop-shadow-sm">
//                 Our specialized London technicians deploy targeted eco-certified 
//                 systems to neutralize pests permanently. We focus on long-term preventive 
//                 restriction protocols so your property remains immaculate.
//               </p>
//             </div>

//             {/* CTA Button Link */}
//             <div className="pt-4">
//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="inline-flex items-center gap-5 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/20"
//               >
//                 <span>Secure Protection Hub</span>
//                 <div className="w-5 h-5 rounded-md bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                   <ArrowRight className="w-3 h-3 text-[#0A2240]" strokeWidth={3} />
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Premium Deep Navy Asymmetric Feature Stack */}
//           <div className="lg:col-span-7 space-y-4 w-full transform-gpu">
//             {features.map((feat, idx) => {
//               const FeatIcon = feat.icon;
//               const isSelected = activeFeature === idx;

//               return (
//                 <div
//                   key={feat.id}
//                   onMouseEnter={() => setActiveFeature(idx)}
//                   onMouseLeave={() => setActiveFeature(null)}
//                   // FIX: Replaced transition-all with explicit transform/colors. Replaced backdrop-blur with full opaque solid to protect framerate.
//                   className={`group/item relative p-8 rounded-[24px] border transition-[transform,background-color,border-color,shadow] duration-300 cursor-default flex flex-col sm:flex-row sm:items-center justify-between gap-6 transform-gpu will-change-transform ${
//                     isSelected 
//                       ? "bg-[#0A2240] border-[#C5A86B] shadow-2xl shadow-black/40 translate-x-1.5" 
//                       : "bg-[#0A2240]/98 border-transparent shadow-xl"
//                   }`}
//                 >
//                   <div className="flex items-start gap-6 relative z-10 max-w-xl">
//                     {/* Icon Dynamic Frame */}
//                     <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-[transform,background-color,color] duration-300 shrink-0 ${
//                       isSelected 
//                         ? "bg-[#C5A86B] text-[#0A2240] border-transparent scale-105" 
//                         : "bg-white/5 text-[#C5A86B] border-white/10"
//                     }`}>
//                       <FeatIcon className="w-6 h-6" strokeWidth={1.8} />
//                     </div>

//                     {/* Typography Content */}
//                     <div className="space-y-1.5">
//                       <h3 className="text-lg font-black text-white uppercase tracking-wide">
//                         {feat.title}
//                       </h3>
//                       <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors duration-200">
//                         {feat.desc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Index Number Asset */}
//                   <div className="relative z-10 flex items-center justify-end shrink-0 self-end sm:self-center">
//                     <span className={`font-mono text-xs font-black tracking-widest transition-[transform,color] duration-300 ${
//                       isSelected ? "text-[#C5A86B] scale-105" : "text-white/40"
//                     }`}>
//                       [{feat.id}]
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#b99547] py-32 px-6 lg:px-20 relative overflow-hidden">
//       {/* Background Graphic Element */}
//       <div className="absolute top-0 right-0 w-[800px] h-full bg-[#0A2240] -skew-x-12 translate-x-1/2 opacity-10" />

//       <div className="max-w-[1600px] mx-auto relative z-10">
        
//         {/* Top Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
//           <div className="max-w-2xl">
//             <h4 className="text-[#0A2240] font-black uppercase tracking-[0.3em] text-sm mb-6 underline underline-offset-8">The QuickShield Doctrine</h4>
//             <h2 className="text-[5rem] lg:text-[8rem] font-black text-white uppercase leading-[0.8] tracking-tighter">
//               Elite <span className="text-[#0A2240]">Tactical</span> <br/> Defense
//             </h2>
//           </div>
//           <div className="md:w-1/3">
//             <p className="text-[#0A2240] font-bold text-lg leading-relaxed border-l-2 border-[#0A2240] pl-8">
//               We do not just eliminate threats; we architect environments that are inherently impenetrable. Clinical, calculated, and absolute.
//             </p>
//           </div>
//         </div>

//         {/* The Unique "Sectional Strip" Layout */}
//         <div className="flex flex-col lg:flex-row gap-0 border-t border-[#0A2240]">
          
//           {/* Item 01 */}
//           <div className="flex-1 p-12 lg:border-r border-[#0A2240] group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">01</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Bio-Secure Barrier</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">High-density sealing protocols that harden your infrastructure against all biological incursions.</p>
//           </div>

//           {/* Item 02 */}
//           <div className="flex-1 p-12 lg:border-r border-[#0A2240] group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">02</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Surgical Neutralization</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">Direct-action measures that isolate and eradicate colonies at the microscopic source level.</p>
//           </div>

//           {/* Item 03 */}
//           <div className="flex-1 p-12 group hover:bg-[#0A2240] transition-colors duration-700">
//             <span className="text-[#0A2240] group-hover:text-[#b99547] font-black text-6xl opacity-20 block mb-10 transition-colors">03</span>
//             <h3 className="text-3xl font-black text-[#0A2240] group-hover:text-white uppercase mb-6 transition-colors">Dynamic Vigilance</h3>
//             <p className="text-[#0A2240]/80 group-hover:text-white/70 font-medium leading-relaxed">Constant, automated oversight systems ensuring zero-gap protection for your high-value assets.</p>
//           </div>

//         </div>

//         {/* Bottom CTA Action */}
//         <div className="mt-20">
//           <button 
//             onClick={() => navigate("/contact-us")}
//             className="px-12 py-6 bg-[#0A2240] text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2240] transition-all duration-500"
//           >
//             Initiate Security Consultation
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
  ShieldCheck,
  House,
  PhoneCall,
  MapPin,
  Check,
} from "lucide-react";

// ========================================
// QUICKSHIELD SERVICES PUTNEY
// WHY CHOOSE US / FEATURES
// ========================================

const COMPANY = "QuickShield Services Putney";
const PHONE = "+44 7459 692222";
const PHONE_TEL = "tel:+447459692222";

const ADDRESS =
  "10 Pettiward Cl, London SW15 6QL, United Kingdom";

const features = [
  {
    number: "01",
    icon: SearchCheck,
    category: "PROPERTY ASSESSMENT",
    title: "Understanding the Problem",
    description:
      "Every property is different. Understanding the signs of pest activity, possible access points and affected areas helps inform an appropriate response.",
    points: [
      "Signs of pest activity",
      "Potential entry points",
    ],
  },
  {
    number: "02",
    icon: ShieldCheck,
    category: "PEST MANAGEMENT",
    title: "Practical Control Solutions",
    description:
      "From rodents to insects, suitable pest control measures depend on the species involved, the extent of activity and the conditions of the property.",
    points: [
      "Targeted control options",
      "Property-specific considerations",
    ],
  },
  {
    number: "03",
    icon: House,
    category: "LONG-TERM PREVENTION",
    title: "Protecting Your Property",
    description:
      "Pest management also involves considering future risks. Practical advice on proofing and property maintenance may help reduce repeat pest access.",
    points: [
      "Property proofing advice",
      "Preventative recommendations",
    ],
  },
];

// ========================================
// FEATURE CARD
// ========================================

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <div
      data-feature-reveal
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      className="putney-feature-reveal group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#0A2240] p-7 text-white transition-all duration-500 hover:border-[#F8F1E4]/40 hover:shadow-[0_25px_60px_rgba(10,34,64,0.18)] sm:p-8 lg:p-9"
    >
      {/* TOP DECORATIVE LINE */}

      <div className="absolute left-0 top-0 h-[4px] w-0 bg-[#F8F1E4] transition-all duration-500 group-hover:w-full" />

      {/* ICON + NUMBER */}

      <div className="flex items-start justify-between gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B99547]/15 text-[#E8D5AE] transition-all duration-300 group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
          <Icon size={29} strokeWidth={1.7} />
        </div>

        <span className="text-[44px] font-bold leading-none text-white/10 sm:text-[54px]">
          {feature.number}
        </span>
      </div>

      {/* FEATURE CONTENT */}

      <div className="mt-10 flex flex-1 flex-col">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#E8D5AE]">
          {feature.category}
        </span>

        <h3 className="mt-4 max-w-[330px] text-[clamp(1.7rem,2.2vw,2.2rem)] font-bold leading-[1.2] tracking-normal text-white">
          {feature.title}
        </h3>

        <p className="mt-5 flex-1 text-sm leading-8 text-white/70">
          {feature.description}
        </p>

        {/* FEATURE POINTS */}

        <div className="mt-8 space-y-3 border-t border-white/15 pt-6">
          {feature.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B99547]/20 text-[#E8D5AE]">
                <Check size={14} />
              </span>

              <span className="text-sm font-medium text-white/85">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// MAIN COMPONENT
// ========================================

export default function PesSaveFeatureSection() {
  const sectionRef = useRef(null);

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      "[data-feature-reveal]"
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
          "putney-feature-visible"
        )
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "putney-feature-visible"
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
      aria-labelledby="putney-features-heading"
      className="relative isolate overflow-hidden bg-[#B99547] py-24 text-[#0A2240] sm:py-28 lg:py-32"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* ======================================== */}
      {/* ANIMATION STYLES */}
      {/* ======================================== */}

      <style>{`
        .putney-feature-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms ease,
            box-shadow 400ms ease,
            border-color 400ms ease;
        }

        .putney-feature-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (hover: hover) {
          .putney-feature-visible:hover {
            transform: translateY(-7px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .putney-feature-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .putney-feature-visible:hover {
            transform: none;
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
        <div className="absolute -right-48 -top-52 h-[620px] w-[620px] rounded-full border border-[#0A2240]/10" />

        <div className="absolute -right-28 -top-32 h-[460px] w-[460px] rounded-full border border-[#0A2240]/10" />

        <div className="absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full bg-[#F8F1E4]/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">

        {/* ======================================== */}
        {/* SECTION HEADER */}
        {/* ======================================== */}

        <div
          data-feature-reveal
          className="putney-feature-reveal mb-14 grid gap-9 lg:mb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20"
        >
          {/* LEFT HEADING */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#0A2240]" />

              <span className="text-xs font-semibold uppercase tracking-wide text-[#0A2240]/80">
                Why Choose QuickShield
              </span>
            </div>

            <h2
              id="putney-features-heading"
              className="mt-8 max-w-[780px] text-[clamp(2.8rem,4.8vw,5rem)] font-bold leading-[1.12] tracking-normal"
            >
              A THOUGHTFUL
              <br />

              APPROACH TO
              <br />

              <span className="text-[#F8F1E4]">
                PEST CONTROL.
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <div className="lg:pb-3">
            <p className="max-w-[490px] text-base leading-8 text-[#0A2240]/85 sm:text-lg">
              At {COMPANY}, we focus on
              understanding pest concerns
              and considering suitable
              solutions for homes and
              commercial properties in
              Putney, London.
            </p>

            <div className="mt-7 flex items-start gap-3 border-t border-[#0A2240]/20 pt-6">
              <MapPin
                size={19}
                className="mt-1 shrink-0"
              />

              <span className="text-sm leading-6 text-[#0A2240]/75">
                {ADDRESS}
              </span>
            </div>
          </div>
        </div>

        {/* ======================================== */}
        {/* THREE FEATURE CARDS */}
        {/* ======================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* ======================================== */}
        {/* BOTTOM CONTACT BAR */}
        {/* ======================================== */}

        <div
          data-feature-reveal
          className="putney-feature-reveal mt-14 flex flex-col gap-8 border-t border-[#0A2240]/20 pt-9 lg:mt-16 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0A2240]/70">
              Speak With QuickShield Services Putney
            </p>

            <a
              href={PHONE_TEL}
              className="group mt-3 inline-flex items-center gap-3 text-[clamp(1.5rem,2.8vw,2.4rem)] font-bold text-[#0A2240] transition-colors duration-300 hover:text-white"
            >
              <PhoneCall size={23} />

              {PHONE}

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <Link
            to="/contact-us"
            className="group inline-flex min-h-[58px] w-fit items-center justify-center gap-5 rounded-full bg-[#0A2240] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F1E4] hover:text-[#0A2240]"
          >
            Request a Callback

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
