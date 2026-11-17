







// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// // ─── COUNTER COMPONENT ───
// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [end]);

//   return (
//     <div ref={ref} className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//       <div className="text-4xl font-black mb-1">{count}+</div>
//       <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">{label}</div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen text-[#0A2240] py-20">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
//         {/* HEADER */}
//         <div className="mb-24">
//           <span className="text-[#0A2240]/60 font-mono tracking-[0.4em] uppercase text-xs mb-6 block">// About Quick Shield</span>
//           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
//             QuickShield <br/> 
//             <span className="text-[#0A2240] text-3xl md:text-5xl block mt-2 tracking-normal font-medium italic">
//               Professional Pest Protection
//             </span>
//           </h1>
//         </div>

//         <div className="grid md:grid-cols-12 gap-6">
          
//           <div className="md:col-span-7 h-[500px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-2xl">
//             {/* <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">
//             <img src="images/shieldteam.webp" alt=""  className="object-cover object-center"/>
//             </div> */}

// <div className="md:col-span-7 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
//   <img
//     src="/images/shieldteam.webp"
//     alt="QuickShield Team"
//     className="w-full h-full object-cover object-center"
//   />
// </div>


//           </div>

//           <div className="md:col-span-5 bg-white/40 p-10 rounded-[2rem] flex flex-col justify-center border border-white/50">
//             <h2 className="text-4xl font-black uppercase mb-6">Securing Your Property.</h2>
//             <p className="text-lg font-medium leading-relaxed opacity-90">
//               At Quick Shield, we understand that a pest-free environment is essential for peace of mind. We provide rapid, discreet, and effective pest control solutions tailored for the unique needs of our local community.
//             </p>
//           </div>

//           {/* ─── UPDATED STATS SECTION WITH ANIMATION ─── */}
//           <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//             <Counter end={1200} label="Homes Cleared" />
//             {/* Special case for non-numeric stats */}
//             <div className="bg-[#0A2240] text-white p-8 rounded-[2rem]">
//               <div className="text-4xl font-black mb-1">24/7</div>
//               <div className="text-xs uppercase font-bold tracking-widest text-[#b99547]">Availability</div>
//             </div>
//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods (%)" />
//           </div>

//           {/* <div className="md:col-span-5 h-[400px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_2</div>
//           </div> */}


//           <div className="md:col-span-5 h-[400px] rounded-[2rem] overflow-hidden relative shadow-xl">
//   <img
//     src="/images/image2.webp"
//     alt="QuickShield Pest Control Team"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
//   />

//   {/* Optional Dark Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/20 via-transparent to-transparent"></div>
// </div>

//           <div className="md:col-span-7 bg-white/40 p-12 rounded-[2rem] border border-white/50 flex flex-col justify-center">
//             <h3 className="text-3xl font-black uppercase mb-8">Our Technical Approach</h3>
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 "Advanced Detection Technology",
//                 "Eco-Friendly Chemical Usage",
//                 "Structural Barrier Installation",
//                 "Continuous Monitoring Plans"
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 font-bold text-lg">
//                   <CheckCircle2 className="text-[#0A2240]" /> {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* <div className="md:col-span-4 h-[350px] bg-[#0A2240] rounded-[2rem] overflow-hidden relative shadow-xl">
//              <div className="absolute inset-0 flex items-center justify-center text-[#b99547]/20 font-black italic">IMAGE_3</div>
//           </div> */}


// <div className="md:col-span-4 h-[350px] rounded-[2rem] overflow-hidden relative shadow-xl group">
//   <img
//     src="/images/image3.webp"
//     alt="QuickShield Pest Control Service"
//     className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//   />

//   {/* Optional Premium Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/25 via-transparent to-transparent"></div>
// </div>


//           <div className="md:col-span-8 bg-[#0A2240] text-white p-12 rounded-[2rem] flex items-center justify-between">
//             <div>
//               <h3 className="text-3xl font-black uppercase mb-4">Need Emergency Support?</h3>
//               <p className="text-white/70">Our dispatch team is ready to respond to your call immediately.</p>
//             </div>
//             <button className="bg-[#b99547] text-[#0A2240] px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all">
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useEffect, useRef, useState } from "react";
// import { CheckCircle2 } from "lucide-react";

// const Counter = ({ end, label }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     let timer;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 2000;
//           const stepTime = 50;
//           const steps = duration / stepTime;
//           const increment = end / steps;

//           timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);

//           observer.disconnect();
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//       if (timer) clearInterval(timer);
//     };
//   }, [end]);

//   return (
//     <div
//       ref={ref}
//       className="box-border min-w-0 bg-[#0A2240] text-white p-3 rounded-2xl text-center w-full"
//     >
//       <div className="text-xl md:text-3xl font-black">{count}+</div>
//       <div className="text-[8px] uppercase font-bold tracking-widest text-[#b99547] mt-1 break-words">
//         {label}
//       </div>
//     </div>
//   );
// };

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 text-[#0A2240] py-6 w-full overflow-x-hidden">
//       <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 box-border overflow-hidden">
        
//         {/* HEADER */}
//         <div className="mb-6 min-w-0">
//           <span className="text-[#0A2240]/60 font-mono text-[9px] uppercase tracking-[0.2em] block break-words">
//             // About Quick Shield
//           </span>

//           <h1 className="text-2xl md:text-5xl font-black uppercase text-white mt-1 break-words">
//             QuickShield
//             <span className="text-[#0A2240] text-sm md:text-3xl block font-medium italic break-words">
//               Professional Pest Protection
//             </span>
//           </h1>
//         </div>

//         {/* CONTENT GRID */}
//         <div className="grid grid-cols-1 gap-4 w-full min-w-0">
          
//           {/* Main Hero Image */}
//           <div className="w-full max-w-full h-56 md:h-[500px] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-2xl min-w-0">
//             <img
//               src="/images/shieldteam.webp"
//               alt="Team"
//               className="block w-full max-w-full h-full object-cover object-top"
//             />
//           </div>

//           {/* About Text */}
//           <div className="w-full max-w-full bg-white/40 p-4 md:p-10 rounded-2xl md:rounded-[1.5rem] border border-white/50 box-border min-w-0">
//             <h2 className="text-lg md:text-4xl font-black uppercase mb-2 break-words">
//               Securing Your Property.
//             </h2>
//             <p className="text-xs md:text-lg font-medium leading-relaxed opacity-90 break-words">
//               At Quick Shield, we provide rapid, discreet, and effective pest
//               control solutions tailored for the unique needs of our local
//               community.
//             </p>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 gap-2 w-full min-w-0">
//             <Counter end={1200} label="Homes Cleared" />

//             <div className="box-border min-w-0 bg-[#0A2240] text-white p-3 rounded-2xl text-center flex flex-col justify-center">
//               <div className="text-xl md:text-3xl font-black">24/7</div>
//               <div className="text-[8px] uppercase font-bold tracking-widest text-[#b99547] break-words">
//                 Availability
//               </div>
//             </div>

//             <Counter end={45} label="Expert Staff" />
//             <Counter end={100} label="Safe Methods" />
//           </div>

//           {/* Image 2 */}
//           <div className="w-full max-w-full h-56 md:h-[400px] rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-xl min-w-0">
//             <img
//               src="/images/image2.webp"
//               alt="Services"
//               className="block w-full max-w-full h-full object-[center_5%]"
//             />
//           </div>

//           {/* Technical Approach */}
//           <div className="w-full max-w-full bg-white/40 p-4 md:p-12 rounded-2xl md:rounded-[1.5rem] border border-white/50 box-border min-w-0">
//             <h3 className="text-base md:text-3xl font-black uppercase mb-3 break-words">
//               Our Technical Approach
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-w-0">
//               {[
//                 "Advanced Detection Technology",
//                 "Eco-Friendly Chemical Usage",
//                 "Structural Barrier Installation",
//                 "Continuous Monitoring Plans",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-2 font-bold text-[11px] md:text-lg min-w-0 break-words"
//                 >
//                   <CheckCircle2
//                     size={16}
//                     className="text-[#0A2240] shrink-0 mt-[1px]"
//                   />
//                   <span className="min-w-0 break-words">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Footer Call to Action */}
//           <div className="w-full max-w-full bg-[#0A2240] text-white p-5 md:p-12 rounded-2xl md:rounded-[1.5rem] text-center box-border min-w-0">
//             <h3 className="text-lg md:text-3xl font-black uppercase mb-2 break-words">
//               Need Emergency Support?
//             </h3>

//             <p className="text-white/70 text-[10px] md:text-base mb-4 break-words">
//               Our dispatch team is ready to respond to your call immediately.
//             </p>

//             <button className="bg-[#b99547] text-[#0A2240] w-full md:w-auto px-6 md:px-10 py-3 font-black uppercase tracking-widest rounded-xl text-xs md:text-base hover:bg-white transition-all">
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


















// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   MapPin,
//   Search,
//   ShieldCheck,
//   Building2,
//   Check,
//   ChevronDown,
// } from "lucide-react";

// const PHONE = "+44 7417 502611";
// const PHONE_LINK = "tel:+447417502611";

// const SERVICES = [
//   "Rats & Mice Control",
//   "Bed Bug Treatment",
//   "Cockroach Control",
//   "Wasp Control",
//   "Carpet Moth Treatment",
//   "Commercial Pest Control",
// ];

// const PRINCIPLES = [
//   {
//     number: "01",
//     title: "Understand",
//     description:
//       "We begin by understanding the pest concern, the signs of activity and the property involved.",
//     icon: Search,
//   },
//   {
//     number: "02",
//     title: "Respond",
//     description:
//       "Different pest problems require different approaches. We consider suitable treatment and management options.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "03",
//     title: "Protect",
//     description:
//       "Where appropriate, we consider access points and practical prevention measures to help reduce future pest activity.",
//     icon: Building2,
//   },
// ];

// /*
//   Safe reveal animation:
//   Content stays visible unless IntersectionObserver
//   is supported and has been successfully initialised.
// */
// function Reveal({ children, className = "", delay = 0 }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(true);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const element = ref.current;

//     if (!element) return;

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (
//       prefersReducedMotion ||
//       !("IntersectionObserver" in window)
//     ) {
//       return;
//     }

//     const rect = element.getBoundingClientRect();

//     if (rect.top < window.innerHeight) {
//       return;
//     }

//     setVisible(false);
//     setAnimate(true);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.08,
//         rootMargin: "0px 0px 80px 0px",
//       }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={
//         className +
//         (animate
//           ? " transition-all duration-700 ease-out"
//           : "")
//       }
//       style={
//         animate
//           ? {
//               opacity: visible ? 1 : 0,
//               transform: visible
//                 ? "translateY(0)"
//                 : "translateY(28px)",
//               transitionDelay: visible ? `${delay}ms` : "0ms",
//             }
//           : undefined
//       }
//     >
//       {children}
//     </div>
//   );
// }

// export default function AboutUsPage() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F6F4EF] text-[#0A2240]">
//       {/* ============================= */}
//       {/* 01 — CINEMATIC HERO */}
//       {/* ============================= */}

//       <section
//         aria-labelledby="about-hero-title"
//         className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#0A2240] pt-36 pb-20 sm:min-h-[850px] lg:min-h-[900px]"
//       >
//         {/* FULL BACKGROUND IMAGE */}
//         <div className="absolute inset-0 -z-20">
//           <img
//             src="/images/shieldteam.webp"
//             alt=""
//             aria-hidden="true"
//             className="h-full w-full object-cover object-center"
//             fetchPriority="high"
//           />
//         </div>

//         {/* CINEMATIC GRADIENT OVERLAY */}
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,17,34,0.96)_0%,rgba(6,24,45,0.89)_37%,rgba(7,27,50,0.56)_68%,rgba(7,27,50,0.30)_100%)]" />

//         <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#06172B]/85 via-transparent to-[#06172B]/20" />

//         {/* Decorative Grid */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, white 1px, transparent 1px)",
//             backgroundSize: "25% 100%",
//           }}
//         />

//         <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           {/* BREADCRUMB */}
//           <div className="mb-14 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:mb-20">
//             <Link
//               to="/"
//               className="text-white/55 transition-colors hover:text-[#D9B976]"
//             >
//               Home
//             </Link>

//             <span className="h-px w-5 bg-[#B99547]" />

//             <span className="text-[#E5C98D]">
//               About QuickShield
//             </span>
//           </div>

//           <div className="max-w-[1000px]">
//             {/* EYEBROW */}
//             <div className="mb-8 flex items-center gap-4">
//               <span className="h-px w-12 bg-[#D5AE62]" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E5C98D] sm:text-xs">
//                 QuickShield Services Notting Hill
//               </span>
//             </div>

//             {/* MAIN HERO TITLE — ALWAYS VISIBLE */}
//             <h1
//               id="about-hero-title"
//               className="text-[clamp(3.8rem,8.5vw,9.5rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-white"
//             >
//               WE PROTECT
//               <span className="mt-2 block font-serif font-normal italic tracking-[-0.075em] text-[#E5C98D]">
//                 what matters.
//               </span>
//             </h1>

//             <div className="mt-10 grid max-w-[780px] gap-8 border-t border-white/25 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
//               <p className="max-w-[530px] text-base leading-8 text-white/80 sm:text-lg">
//                 Professional pest control in Notting Hill,
//                 London. A considered approach to protecting
//                 homes, workplaces and the spaces that matter
//                 to you.
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="group inline-flex w-fit items-center gap-5 rounded-full border border-[#E5C98D] bg-[#B99547] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:bg-white"
//               >
//                 Get in Touch

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM HERO DETAILS */}
//         <div className="absolute bottom-8 left-6 right-6 z-10 hidden items-center justify-between border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:flex sm:left-10 sm:right-10 lg:left-16 lg:right-16">
//           <span>Notting Hill · London · United Kingdom</span>

//           <a
//             href="#our-story"
//             className="flex items-center gap-3 transition-colors hover:text-white"
//           >
//             Discover Our Story
//             <ChevronDown size={17} className="text-[#E5C98D]" />
//           </a>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 02 — EDITORIAL INTRODUCTION */}
//       {/* ============================= */}

//       <section
//         id="our-story"
//         className="relative bg-[#F6F4EF] py-24 sm:py-32 lg:py-40"
//       >
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-24">
//             <Reveal>
//               <div className="flex items-center gap-4 lg:pt-4">
//                 <span className="h-px w-9 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                   01 / Our Story
//                 </span>
//               </div>
//             </Reveal>

//             <div>
//               <Reveal>
//                 <h2 className="max-w-[1050px] text-[clamp(2.8rem,5.8vw,6.5rem)] font-medium leading-[1.08] tracking-[-0.065em]">
//                   Pest control is
//                   <span className="font-serif font-normal italic text-[#B99547]">
//                     {" "}more than{" "}
//                   </span>
//                   removing the problem.
//                 </h2>
//               </Reveal>

//               <div className="mt-12 grid gap-10 border-t border-[#0A2240]/15 pt-10 md:grid-cols-2 md:gap-16">
//                 <Reveal delay={80}>
//                   <p className="text-xl font-medium leading-9 tracking-[-0.025em] text-[#0A2240]">
//                     It's about understanding your property,
//                     identifying concerns and finding the
//                     right way forward.
//                   </p>
//                 </Reveal>

//                 <Reveal delay={160}>
//                   <div className="space-y-5 text-[15px] leading-8 text-[#566273]">
//                     <p>
//                       QuickShield Services Notting Hill
//                       provides pest control assistance for
//                       residential and commercial properties
//                       in Notting Hill, London.
//                     </p>

//                     <p>
//                       Whether you're dealing with rats,
//                       mice, bed bugs, cockroaches or wasps,
//                       our focus is on understanding the
//                       situation and discussing appropriate
//                       management options.
//                     </p>
//                   </div>
//                 </Reveal>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 03 — PHOTOGRAPHIC STATEMENT */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#0A2240]">
//         <div className="grid min-h-[650px] lg:grid-cols-2">
//           {/* IMAGE */}
//           <div className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-[700px]">
//             <img
//               src="/images/image2.webp"
//               alt="Pest control service and property inspection"
//               loading="lazy"
//               className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#06182D]/45 to-transparent" />

//             <div className="absolute bottom-8 left-8 border-l-2 border-[#D9B976] pl-5 text-xs font-semibold uppercase tracking-[0.17em] text-white sm:bottom-12 sm:left-12">
//               A property-first perspective
//             </div>
//           </div>

//           {/* TEXT */}
//           <div className="relative flex items-center overflow-hidden px-7 py-20 text-white sm:px-12 lg:px-16 lg:py-28">
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#B99547]/15"
//             />

//             <Reveal className="relative z-10 max-w-[620px]">
//               <div className="mb-9 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5C98D]">
//                   What Defines Us
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3rem,5.2vw,6rem)] font-medium leading-[1.05] tracking-[-0.065em]">
//                 Every property
//                 <br />
//                 has its own
//                 <br />
//                 <span className="font-serif font-normal italic text-[#E5C98D]">
//                   story.
//                 </span>
//               </h2>

//               <p className="mt-9 max-w-lg text-base leading-8 text-white/65">
//                 A pest issue in a London townhouse may
//                 require different considerations from one
//                 affecting a commercial premises. That's why
//                 understanding the environment matters.
//               </p>

//               <Link
//                 to="/services"
//                 className="group mt-10 inline-flex items-center gap-4 border-b border-[#B99547] pb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#E5C98D]"
//               >
//                 Discover Our Services

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 04 — EDITORIAL APPROACH */}
//       {/* ============================= */}

//       <section className="bg-[#F6F4EF] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
//             {/* LEFT STICKY HEADING */}
//             <div>
//               <Reveal>
//                 <div className="lg:sticky lg:top-32">
//                   <div className="mb-8 flex items-center gap-4">
//                     <span className="h-px w-10 bg-[#B99547]" />

//                     <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                       02 / Our Approach
//                     </span>
//                   </div>

//                   <h2 className="text-[clamp(3.2rem,5.5vw,6.5rem)] font-medium leading-[1.03] tracking-[-0.07em]">
//                     Thoughtful
//                     <br />
//                     from the
//                     <br />
//                     <span className="font-serif font-normal italic text-[#B99547]">
//                       first step.
//                     </span>
//                   </h2>

//                   <p className="mt-8 max-w-sm text-base leading-8 text-[#566273]">
//                     A clear, practical approach to pest
//                     management, with attention to the
//                     details of each situation.
//                   </p>
//                 </div>
//               </Reveal>
//             </div>

//             {/* RIGHT PROCESS ROWS */}
//             <div className="border-t border-[#0A2240]/20">
//               {PRINCIPLES.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <Reveal key={item.number} delay={index * 80}>
//                     <div className="group grid gap-5 border-b border-[#0A2240]/20 py-10 transition-colors duration-300 hover:bg-[#0A2240]/[0.025] sm:grid-cols-[65px_1fr] sm:gap-7 sm:py-12">
//                       <span className="font-serif text-3xl italic text-[#B99547]">
//                         {item.number}
//                       </span>

//                       <div>
//                         <div className="flex items-start justify-between gap-5">
//                           <h3 className="text-[clamp(2.3rem,4vw,4.5rem)] font-medium leading-none tracking-[-0.06em]">
//                             {item.title}
//                           </h3>

//                           <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0A2240]/15 transition-all duration-300 group-hover:rotate-12 group-hover:border-[#B99547] group-hover:bg-[#B99547]">
//                             <Icon size={21} strokeWidth={1.5} />
//                           </div>
//                         </div>

//                         <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#566273]">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </Reveal>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 05 — SERVICES STATEMENT */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#B99547] py-24 sm:py-32 lg:py-40">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#0A2240]/10"
//         />

//         <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <div className="mb-9 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#0A2240]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2240]/75">
//                 03 / What We Do
//               </span>
//             </div>

//             <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
//               <h2 className="max-w-[1000px] text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.99] tracking-[-0.075em] text-[#0A2240]">
//                 Different pests.
//                 <br />
//                 <span className="font-serif font-normal italic text-[#F7F2E7]">
//                   One clear focus.
//                 </span>
//               </h2>

//               <p className="max-w-[300px] text-base leading-8 text-[#0A2240]/80">
//                 Helping customers explore appropriate
//                 pest control solutions for their homes
//                 and businesses.
//               </p>
//             </div>
//           </Reveal>

//           {/* SERVICE INDEX */}
//           <div className="mt-16 grid border-t border-[#0A2240]/25 md:grid-cols-2 lg:mt-20">
//             {SERVICES.map((service, index) => (
//               <Reveal key={service} delay={(index % 2) * 80}>
//                 <Link
//                   to="/services"
//                   className={
//                     "group flex min-h-[110px] items-center justify-between gap-6 border-b border-[#0A2240]/25 py-6 transition-all duration-300 hover:pl-3 " +
//                     (index % 2 === 0
//                       ? "md:pr-10"
//                       : "md:border-l md:border-[#0A2240]/25 md:pl-10 md:hover:pl-12")
//                   }
//                 >
//                   <div className="flex items-center gap-5">
//                     <span className="text-xs font-bold text-[#0A2240]/55">
//                       0{index + 1}
//                     </span>

//                     <span className="text-xl font-medium tracking-[-0.035em] text-[#0A2240] sm:text-2xl">
//                       {service}
//                     </span>
//                   </div>

//                   <ArrowUpRight
//                     size={23}
//                     className="shrink-0 text-[#0A2240] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>
//               </Reveal>
//             ))}
//           </div>

//           <div className="mt-12">
//             <Link
//               to="/services"
//               className="group inline-flex items-center gap-4 rounded-full bg-[#0A2240] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#0A2240]"
//             >
//               View All Services

//               <ArrowUpRight
//                 size={19}
//                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 06 — LOCAL PRESENCE */}
//       {/* ============================= */}

//       <section className="bg-[#F6F4EF] py-24 sm:py-32 lg:py-36">
//         <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24 lg:px-16">
//           <Reveal>
//             <div>
//               <div className="mb-8 flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#B99547]" />

//                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                   04 / Our Location
//                 </span>
//               </div>

//               <h2 className="text-[clamp(3.5rem,6vw,7rem)] font-medium leading-[1.03] tracking-[-0.07em]">
//                 Rooted in
//                 <br />
//                 <span className="font-serif font-normal italic text-[#B99547]">
//                   Notting Hill.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-base leading-8 text-[#566273]">
//                 Based in Notting Hill, London,
//                 QuickShield Services is a local point
//                 of contact for pest control enquiries
//                 concerning residential and commercial
//                 properties.
//               </p>
//             </div>
//           </Reveal>

//           <Reveal delay={100}>
//             <div className="border-l-2 border-[#B99547] bg-[#EDE9E0] px-8 py-12 sm:px-12 sm:py-14">
//               <MapPin
//                 size={33}
//                 strokeWidth={1.4}
//                 className="text-[#B99547]"
//               />

//               <p className="mt-9 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A793F]">
//                 QuickShield Services Notting Hill
//               </p>

//               <address className="mt-5 text-2xl font-medium not-italic leading-[1.45] tracking-[-0.035em] sm:text-3xl">
//                 3A Denbigh Rd
//                 <br />
//                 London W11 2SJ
//                 <br />
//                 United Kingdom
//               </address>

//               <div className="mt-9 h-px bg-[#0A2240]/15" />

//               <a
//                 href={PHONE_LINK}
//                 className="group mt-7 inline-flex items-center gap-4 text-lg font-semibold transition-colors hover:text-[#9A793F]"
//               >
//                 <Phone size={19} className="text-[#B99547]" />

//                 {PHONE}

//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </a>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ============================= */}
//       {/* 07 — FINAL STATEMENT CTA */}
//       {/* ============================= */}

//       <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#B99547]/15"
//         />

//         <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
//           <Reveal>
//             <div className="mb-10 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5C98D]">
//                 Your Property. Our Conversation.
//               </span>
//             </div>

//             <h2 className="max-w-[1100px] text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.98] tracking-[-0.075em]">
//               Let's make
//               <br />
//               <span className="font-serif font-normal italic text-[#E5C98D]">
//                 the next move.
//               </span>
//             </h2>

//             <div className="mt-12 flex flex-col gap-8 border-t border-white/20 pt-10 lg:flex-row lg:items-end lg:justify-between">
//               <p className="max-w-xl text-base leading-8 text-white/65">
//                 Tell us about your pest concern.
//                 Contact QuickShield Services Notting Hill
//                 to discuss the situation and suitable
//                 next steps.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex items-center gap-5 rounded-full bg-[#B99547] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A2240] transition-all duration-300 hover:bg-white"
//                 >
//                   Contact QuickShield

//                   <ArrowUpRight
//                     size={19}
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>

//                 <a
//                   href={PHONE_LINK}
//                   className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#B99547] hover:text-[#E5C98D]"
//                 >
//                   <Phone size={17} />
//                   Call Now
//                   <ArrowRight size={17} />
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </main>
//   );
// }





import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  ScanSearch,
  House,
  ChevronDown,
} from "lucide-react";

const PHONE = "+44 7459 692222";
const PHONE_LINK = "tel:+447459692222";
const ADDRESS = "10 Pettiward Cl, London SW15 6QL, United Kingdom";

const offerings = [
  {
    number: "01",
    name: "Rats & Mice Control",
    note: "Rodent activity, access points and practical proofing",
  },
  {
    number: "02",
    name: "Bed Bug Treatment",
    note: "Assessment-led support for affected rooms and furnishings",
  },
  {
    number: "03",
    name: "Cockroach Control",
    note: "Targeted options for kitchens and other affected spaces",
  },
  {
    number: "04",
    name: "Wasp Nest Control",
    note: "Nest assessment and appropriate treatment options",
  },
  {
    number: "05",
    name: "Carpet Moth Treatment",
    note: "Considered treatment for carpets, rugs and textiles",
  },
  {
    number: "06",
    name: "Commercial Pest Control",
    note: "Pest management support for business premises",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || typeof window === "undefined") return;

    if (
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight + 80) return;

    setEnabled(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px 90px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} ${
        enabled
          ? "transition-[opacity,transform] duration-700 ease-out"
          : ""
      }`}
      style={
        enabled
          ? {
              opacity: entered ? 1 : 0,
              transform: entered
                ? "translate3d(0,0,0)"
                : "translate3d(0,24px,0)",
              transitionDelay: entered ? `${delay}ms` : "0ms",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] ${
        light ? "text-white/75" : "text-[#0A2240]/75"
      }`}
    >
      <span
        className={`h-px w-9 ${
          light ? "bg-white/70" : "bg-[#0A2240]/70"
        }`}
      />
      {children}
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main
      className="overflow-x-hidden bg-[#B99547] text-[#0A2240]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#B99547] pt-32 sm:pt-40 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#0A2240 1px,transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#0A2240]/70"
          >
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span className="h-px w-6 bg-[#0A2240]/60" />

            <span>About Us</span>
          </nav>

          <div className="relative z-10 lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
            <div className="relative z-20 pb-14 lg:pb-32">
              <Eyebrow>QuickShield Services Putney</Eyebrow>

              <h1 className="mt-9 max-w-[900px] text-[clamp(3.2rem,7vw,7.5rem)] font-bold leading-[1.05] tracking-normal">
                BUILT ON
                <br />

                <span className="relative z-20 block text-[#F8F1E4]">
                  care.
                </span>

                <span className="relative z-20 block">
                  DRIVEN BY
                </span>

                <span className="relative z-20 block text-[#F8F1E4]">
                  detail.
                </span>
              </h1>

              <div className="mt-10 max-w-md border-l-2 border-[#0A2240] pl-5 sm:mt-12 sm:pl-7">
                <p className="text-base font-normal leading-8 sm:text-lg">
                  A considered approach to pest control for
                  homes and businesses in Putney and across London.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#0A2240] px-7 py-4 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#F8F1E4] hover:text-[#0A2240]"
              >
                Talk to Our Team

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <div className="relative mt-4 lg:mt-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-[22px] bg-[#0A2240]">
                <img
                  src="/images/shieldteam.webp"
                  alt="QuickShield pest control service visual"
                  fetchPriority="high"
                  className="h-full w-full object-contain object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2240]/20 via-transparent to-transparent" />
              </div>

              <div className="relative flex items-center justify-between gap-4 bg-[#0A2240] px-6 py-6 text-white sm:px-9 sm:py-8">
                <span className="max-w-[240px] text-sm font-normal leading-6 sm:text-base">
                  A local perspective.
                  <br />
                  A practical way forward.
                </span>

                <span className="text-4xl font-bold text-[#E8D5AE] sm:text-6xl">
                  SW15
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0A2240]/25 py-7 text-xs font-semibold uppercase tracking-wide text-[#0A2240]/70">
            <span>Putney · London · United Kingdom</span>

            <a
              href="#our-perspective"
              className="inline-flex items-center gap-3 transition-colors hover:text-white"
            >
              Discover Our Perspective
              <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        id="our-perspective"
        className="scroll-mt-24 bg-[#F8F1E4] py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow>01 / A Different Perspective</Eyebrow>
          </Reveal>

          <Reveal delay={70}>
            <h2 className="mt-10 max-w-[1150px] text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[1.15] tracking-normal">
              Good pest control starts with{" "}
              <span className="text-[#B99547]">
                understanding
              </span>{" "}
              the space.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-[#0A2240]/20 pt-10 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <p className="max-w-lg text-xl font-semibold leading-9 sm:text-2xl">
                Every property is different. So is every pest concern.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="max-w-xl space-y-5 text-base leading-8 text-[#475566]">
                <p>
                  QuickShield Services Putney provides pest control
                  assistance for residential and commercial
                  properties in Putney, nearby areas and across London.
                </p>

                <p>
                  Whether the concern involves rodents, insects or
                  pest prevention, we focus on the signs of activity,
                  the affected environment and suitable options for
                  moving forward.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMMERSIVE PHOTO */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A2240] sm:min-h-[650px] lg:min-h-[760px]">
        <img
          src="/images/image2.webp"
          alt="Property-focused pest control and inspection"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06182D]/90 via-[#06182D]/55 to-[#06182D]/20" />

        <div className="relative mx-auto flex min-h-[520px] max-w-[1480px] flex-col justify-between px-5 py-14 text-white sm:min-h-[650px] sm:px-10 sm:py-20 lg:min-h-[760px] lg:px-16">
          <Reveal>
            <Eyebrow light>For the places you value</Eyebrow>
          </Reveal>

          <Reveal>
            <div className="max-w-[980px]">
              <h2 className="text-[clamp(2.8rem,6vw,6.5rem)] font-bold leading-[1.12] tracking-normal">
                Your space.
                <br />

                <span className="text-[#E8D5AE]">
                  Our attention.
                </span>
              </h2>

              <p className="mt-8 max-w-lg border-l-2 border-[#E8D5AE] pl-6 text-base leading-8 text-white/80">
                From individual homes to working environments,
                thoughtful pest management begins by looking
                closely at the situation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THREE DIFFERENTIATORS */}
      <section className="bg-[#B99547] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <Eyebrow>02 / How We Think</Eyebrow>

                <h2 className="mt-9 text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[1.15] tracking-normal">
                  Attention
                  <br />
                  makes the
                  <br />

                  <span className="text-[#F8F1E4]">
                    difference.
                  </span>
                </h2>

                <p className="mt-8 max-w-sm text-base leading-8 text-[#0A2240]/80">
                  Our approach centres on practical considerations
                  rather than a one-size-fits-all response.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {[
                {
                  icon: ScanSearch,
                  n: "01",
                  title: "Look closer.",
                  text: "Consider the type of pest, visible activity and the areas where concerns have appeared.",
                },
                {
                  icon: ShieldCheck,
                  n: "02",
                  title: "Choose carefully.",
                  text: "Discuss control or treatment options suited to the circumstances and property.",
                },
                {
                  icon: House,
                  n: "03",
                  title: "Think ahead.",
                  text: "Where relevant, explore proofing and prevention measures that may help reduce future activity.",
                },
              ].map(({ icon: Icon, n, title, text }, index) => (
                <Reveal key={n} delay={index * 75}>
                  <div className="group relative overflow-hidden border border-[#0A2240]/20 bg-[#F8F1E4] p-8 transition-colors duration-300 hover:bg-[#0A2240] hover:text-white sm:p-11">
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-2xl font-semibold text-[#B99547] group-hover:text-[#E8D5AE]">
                        {n}
                      </span>

                      <Icon
                        size={27}
                        strokeWidth={1.5}
                        className="text-[#B99547] transition-transform duration-300 group-hover:rotate-6 group-hover:text-[#E8D5AE]"
                      />
                    </div>

                    <h3 className="mt-14 text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.15] tracking-normal">
                      {title}
                    </h3>

                    <p className="mt-6 max-w-md text-base leading-8 text-[#536070] group-hover:text-white/75">
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES DIRECTORY */}
      <section className="bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow light>03 / Areas of Support</Eyebrow>
          </Reveal>

          <div className="mt-9 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <h2 className="text-[clamp(2.8rem,5.5vw,6rem)] font-bold leading-[1.15] tracking-normal">
                A solution starts
                <br />
                with{" "}
                <span className="text-[#E8D5AE]">
                  a conversation.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="max-w-xs text-base leading-8 text-white/65">
                Explore common pest control concerns we can
                discuss with you.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 border-t border-white/25">
            {offerings.map((item, index) => (
              <Reveal
                key={item.number}
                delay={(index % 3) * 50}
              >
                <Link
                  to="/services"
                  state={{ scrollToService: item.name }}
                  className="group grid gap-3 border-b border-white/20 py-6 transition-[padding,background-color] duration-300 hover:bg-white/[0.04] hover:pl-3 sm:grid-cols-[65px_1fr_auto] sm:items-center sm:gap-6 sm:py-8"
                >
                  <span className="text-xl font-semibold text-[#E8D5AE]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-semibold tracking-normal transition-colors group-hover:text-[#E8D5AE]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {item.note}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={25}
                    className="text-[#E8D5AE] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </Reveal>
            ))}
          </div>

          <Link
            to="/services"
            className="group mt-11 inline-flex items-center gap-5 rounded-full bg-[#B99547] px-8 py-5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#F8F1E4] hover:text-[#0A2240]"
          >
            View All Services

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      {/* PUTNEY LOCATION */}
      <section className="bg-[#F8F1E4] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
            <Reveal>
              <Eyebrow>04 / Where You'll Find Us</Eyebrow>

              <h2 className="mt-10 text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[1.12] tracking-normal">
                LOCAL
                <br />

                <span className="text-[#B99547]">
                  to Putney.
                </span>

                <br />
                HERE FOR
                <br />
                LONDON.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-t-2 border-[#B99547] pt-9">
                <MapPin
                  size={32}
                  strokeWidth={1.5}
                  className="text-[#B99547]"
                />

                <p className="mt-7 max-w-md text-base leading-8 text-[#536070]">
                  QuickShield Services Putney is based in Putney,
                  serving local properties, nearby areas and
                  customers across London.
                </p>

                <address className="mt-8 text-xl font-normal not-italic leading-8 sm:text-2xl">
                  10 Pettiward Cl
                  <br />
                  London SW15 6QL
                  <br />
                  United Kingdom
                </address>

                <a
                  href={PHONE_LINK}
                  className="group mt-9 inline-flex items-center gap-3 border-b border-[#B99547] pb-2 text-lg font-semibold transition-colors hover:text-[#B99547]"
                >
                  <Phone size={19} />
                  {PHONE}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#B99547] py-24 sm:py-32 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-0 h-[520px] w-[520px] rounded-full border border-[#0A2240]/15"
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <Eyebrow>Let's Get Started</Eyebrow>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="mt-10 max-w-[1150px] text-[clamp(3.2rem,7vw,7.5rem)] font-bold leading-[1.1] tracking-normal">
              A BETTER
              <br />

              <span className="text-[#F8F1E4]">
                next step
              </span>

              <br />
              STARTS HERE.
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col gap-9 border-t border-[#0A2240]/30 pt-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-lg text-base leading-8 text-[#0A2240]/85">
              Tell us what's happening at your property.
              Contact QuickShield Services Putney to discuss
              pest control options and next steps.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-5 rounded-full bg-[#0A2240] px-8 py-5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#F8F1E4] hover:text-[#0A2240]"
              >
                Send an Enquiry

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-3 rounded-full border border-[#0A2240]/45 px-8 py-5 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-[#F8F1E4] hover:text-white"
              >
                <Phone size={17} />
                Call Us
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <p className="mt-16 border-t border-[#0A2240]/20 pt-6 text-xs font-semibold uppercase tracking-wide text-[#0A2240]/65">
            QuickShield Services Putney · {ADDRESS}
          </p>
        </div>
      </section>
    </main>
  );
}

