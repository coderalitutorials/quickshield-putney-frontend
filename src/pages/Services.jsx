



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         {/* HEADER SECTION */}
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BRUTALIST GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id} 
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               {/* DESKTOP HOVER IMAGE */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* MOBILE/TABLET FIXED IMAGE */}
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* CONTENT LAYER */}
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
                
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   Initiate <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         {/* HEADER SECTION */}
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BRUTALIST GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id} 
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               {/* DESKTOP HOVER IMAGE - Increased opacity to 0.4 for better visibility */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* MOBILE/TABLET FIXED IMAGE */}
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
              
//               {/* CONTENT LAYER */}
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-60">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
                
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   BOOK SERVICE <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }





// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Plus } from "lucide-react";

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");
  
//   // Ref map for scrolling
//   const serviceRefs = useRef({});

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", code: "ANT-01", details: "Permanent nest eradication using advanced baiting matrices." },
//     { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", code: "BUG-02", details: "Industrial-grade thermal heat and targeted spray applications." },
//     { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", code: "MTH-03", details: "Specialized target applications for high-end carpets." },
//     { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", code: "BTL-04", details: "Precise treatments along baseboards and dark storage zones." },
//     { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", code: "COCK-05", details: "High-performance gel baits for commercial environments." },
//     { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", code: "MCE-06", details: "Comprehensive tracking and structural proofing." },
//     { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", code: "FLE-07", details: "Floor space misting to halt flea multiplication loops." },
//     { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", code: "WSP-08", details: "Fast-acting chemical injection for roofline nests." },
//     { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", code: "BEE-09", details: "Secure live extraction for colony preservation." },
//     { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", code: "SQR-10", details: "Heavy-gauge metal sealing and entry blockades." },
//     { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", code: "HYG-11", details: "Post-infestation biocide cleansing and sanitation." },
//     { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", code: "BRD-12", details: "Architectural UV-stabilized netting for facade." },
//   ];

//   // Scroll to service effect
//   useEffect(() => {
//     if (location.state?.scrollToService) {
//       setSelectedCategory("All");
//       setTimeout(() => {
//         const target = serviceRefs.current[location.state.scrollToService];
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }, 300);
//     }
//   }, [location]);

//   const filtered = selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#b99547] mt-20 min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-[1400px] mx-auto border-l border-[#0A2240]/20">
        
//         <div className="pl-6 md:pl-12 mb-20">
//           <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-[#0A2240] mb-8">
//             Our pest <br/>Services
//           </h1>
//           <div className="flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-[#0A2240]/60">
//             {categories.map(cat => (
//               <button 
//                 key={cat} 
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 border-b-2 ${selectedCategory === cat ? "border-[#0A2240] text-[#0A2240]" : "border-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((s) => (
//             <div 
//               key={s.id}
//               ref={(el) => (serviceRefs.current[s.title] = el)}
//               onClick={() => navigate("/contact-us")}
//               className="group relative border-b border-r border-[#0A2240]/20 p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0A2240]"
//             >
//               <div 
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.4] transition-opacity duration-500 hidden md:block"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div 
//                 className="absolute right-4 top-4 w-16 h-16 bg-cover bg-center rounded-lg border border-[#0A2240]/30 md:hidden"
//                 style={{ backgroundImage: `url(${s.img})` }}
//               />
//               <div className="relative z-10 text-[#0A2240] group-hover:text-[#b99547] transition-colors pr-20 md:pr-0">
//                 <span className="font-mono text-[10px] mb-8 block opacity-40 group-hover:opacity-60">{s.code}</span>
//                 <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">{s.title}</h2>
//                 <p className="text-sm font-medium leading-relaxed opacity-70 mb-10 max-w-xs">{s.details}</p>
//                 <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
//                   BOOK SERVICE <Plus size={16} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }



























// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ArrowUpRight, ArrowDown, ArrowRight, Phone, MapPin, Check, Sparkles } from "lucide-react";

// const NAVY = "#0A2240";
// const GOLD = "#B99547";
// const PHONE = "+44 7417 502611";
// const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

// const servicesData = [
//   { id: 1, cat: "Insects", title: "Ant Control", img: "/images/ants.webp", kicker: "Small pests. Serious attention.", details: "Targeted ant control for London homes and workplaces, with attention to trails, potential nesting areas and appropriate treatment options." },
//   { id: 2, cat: "Insects", title: "Bed Bugs", img: "/images/bedbugs.webp", kicker: "Take back your comfort.", details: "Bed bug inspections and treatment options for affected bedrooms, furniture and surrounding areas." },
//   { id: 3, cat: "Insects", title: "Moth Treatment", img: "/images/moths.webp", kicker: "Care for the details.", details: "Carpet moth assessment and treatment considerations for vulnerable carpets, rugs and textiles." },
//   { id: 4, cat: "Insects", title: "Beetle Removal", img: "/images/beetles.webp", kicker: "Protect your interiors.", details: "Carpet beetle identification and control for affected fabrics, storage areas and interior spaces." },
//   { id: 5, cat: "Insects", title: "Cockroach", img: "/images/roaches.webp", kicker: "A cleaner way forward.", details: "Cockroach management for kitchens and other affected spaces, informed by activity and property conditions." },
//   { id: 6, cat: "Rodents & Wildlife", title: "Rats & Mice", img: "/images/rats.webp", kicker: "Find the source.", details: "Rodent control with attention to activity, entry points and practical property proofing measures." },
//   { id: 7, cat: "Insects", title: "Flea Eradication", img: "/images/fleas.webp", kicker: "Restore peace of mind.", details: "Flea control options for affected indoor areas, including advice on preparation and follow-up precautions." },
//   { id: 8, cat: "Insects", title: "Wasp Removal", img: "/images/wasps.webp", kicker: "Address the nest.", details: "Wasp nest assessment and suitable control options for homes, gardens and business premises." },
//   { id: 9, cat: "Insects", title: "Bee Relocation", img: "/images/bees.webp", kicker: "A considered response.", details: "Assessment of bee activity and guidance on appropriate specialist assistance or relocation where suitable." },
//   { id: 10, cat: "Rodents & Wildlife", title: "Squirrels", img: "/images/squirrels.webp", kicker: "Look beyond the loft.", details: "Squirrel activity assessment and property proofing considerations for roof spaces and possible access points." },
//   { id: 11, cat: "Birds & Prevention", title: "Hygiene Proofing", img: "/images/hygiene.webp", kicker: "Prevention matters.", details: "Pest-related hygiene and prevention support, considering affected areas and potential contamination concerns." },
//   { id: 12, cat: "Birds & Prevention", title: "Bird Netting", img: "/images/birds.webp", kicker: "Respect the architecture.", details: "Bird deterrent and proofing options, including netting for appropriate building features and affected areas." },
// ];

// const aliases = {
//   "Bed Bugs Heat Treatment": "Bed Bugs", "Bed Bug Treatment": "Bed Bugs",
//   "Rat & Mice Control": "Rats & Mice", "Rats and Mice": "Rats & Mice", "Rodent Control": "Rats & Mice",
//   "Wasp Control": "Wasp Removal", "Wasp Nest Removal": "Wasp Removal",
//   "Carpet Moth Treatment": "Moth Treatment", "Carpet Moth Control": "Moth Treatment",
//   "Cockroach Control": "Cockroach", "Flea Treatment": "Flea Eradication",
//   "Bird Proofing": "Bird Netting", "Bee Control": "Bee Relocation", "Squirrel Control": "Squirrels",
//   "Ants": "Ant Control", "Ants Control": "Ant Control", "Carpet Beetle": "Beetle Removal",
// };

// function Eyebrow({ children, light = false }) {
//   return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-[#E8D5AE]" : "text-[#8B6C36]"}`}><span className={`h-px w-9 ${light ? "bg-[#E8D5AE]" : "bg-[#B99547]"}`} />{children}</div>;
// }

// function ServiceFeature({ service, index, onEnquire, setRef }) {
//   const reverse = index % 2 === 1;
//   return (
//     <article ref={setRef} className="group scroll-mt-32 border-t border-[#0A2240]/15 py-9 sm:py-12 lg:py-16">
//       <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${reverse ? "" : ""}`}>
//         <div className={`relative min-w-0 overflow-hidden bg-[#D9D4C9] lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
//           <div className="relative h-[350px] overflow-hidden sm:h-[480px] lg:h-[570px]">
//             <img src={service.img} alt={`${service.title} pest control`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.055]" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/55 via-transparent to-transparent" />
//             <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">QuickShield / Notting Hill</span>
//               <span className="font-serif text-4xl italic text-[#E8D5AE]">{String(service.id).padStart(2, "0")}</span>
//             </div>
//           </div>
//         </div>
//         <div className={`flex min-w-0 flex-col justify-center py-3 lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}>
//           <Eyebrow>{service.cat}</Eyebrow>
//           <p className="mt-9 font-serif text-xl italic text-[#9D7C42] sm:text-2xl">{service.kicker}</p>
//           <h3 className="mt-3 text-[clamp(3rem,5.4vw,6.6rem)] font-medium leading-[0.99] tracking-[-0.075em] text-[#0A2240]">{service.title}</h3>
//           <p className="mt-7 max-w-md text-[15px] leading-8 text-[#5E6975]">{service.details}</p>
//           <div className="mt-10 border-t border-[#0A2240]/20 pt-7">
//             <button type="button" onClick={() => onEnquire(service.title)} className="group/btn inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A2240]">
//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2240] text-white transition-all duration-300 group-hover/btn:bg-[#B99547] group-hover/btn:text-[#0A2240]"><ArrowUpRight size={19} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" /></span>
//               Enquire about this service
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function ServicesPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const refs = useRef({});
//   const scrollRequest = useRef(null);
//   const collectionRef = useRef(null);

//   const filtered = useMemo(() => selectedCategory === "All" ? servicesData : servicesData.filter(s => s.cat === selectedCategory), [selectedCategory]);

//   useEffect(() => {
//     const requested = location.state?.scrollToService;
//     if (!requested) return;
//     scrollRequest.current = aliases[requested] || requested;
//     setSelectedCategory("All");
//     const timer = window.setTimeout(() => {
//       const element = refs.current[scrollRequest.current];
//       if (element) { element.scrollIntoView({ behavior: "smooth", block: "start" }); scrollRequest.current = null; }
//     }, 350);
//     return () => window.clearTimeout(timer);
//   }, [location.key, location.state?.scrollToService]);

//   const changeCategory = (category) => {
//     setSelectedCategory(category);
//     window.requestAnimationFrame(() => collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
//   };

//   const onEnquire = (service) => navigate("/contact-us", { state: { selectedService: service } });

//   return (
//     <main className="overflow-x-hidden bg-[#F7F5EF] text-[#0A2240]">
//       {/* CINEMATIC COVER */}
//       <section className="relative isolate min-h-[760px] overflow-hidden bg-[#0A2240] text-white sm:min-h-[850px] lg:min-h-[900px]">
//         <div className="absolute inset-0 -z-20"><img src="/images/shieldteam.webp" alt="" aria-hidden="true" fetchPriority="high" className="h-full w-full object-cover object-center" /></div>
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,20,39,0.97)_0%,rgba(5,20,39,0.87)_43%,rgba(5,20,39,0.34)_100%)]" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06182D]/80 via-transparent to-[#06182D]/20" />
//         <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-36 sm:min-h-[850px] sm:px-10 sm:pt-44 lg:min-h-[900px] lg:px-16 lg:pt-48">
//           <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60"><Link to="/" className="transition-colors hover:text-white">Home</Link><span className="h-px w-7 bg-[#B99547]" /><span className="text-[#E8D5AE]">Services</span></div>
//           <div className="max-w-[1100px] pb-10 lg:pb-16">
//             <Eyebrow light>Property care, thoughtfully delivered</Eyebrow>
//             <h1 className="mt-8 text-[clamp(4.3rem,10vw,11rem)] font-medium leading-[0.84] tracking-[-0.085em]">THE ART OF<br /><span className="font-serif font-normal italic text-[#E8D5AE]">protection.</span></h1>
//             <div className="mt-10 flex max-w-3xl flex-col gap-8 border-t border-white/25 pt-8 sm:flex-row sm:items-end sm:justify-between">
//               <p className="max-w-lg text-base leading-8 text-white/80">Considered pest control services for the spaces you value. From insects and rodents to bird proofing, discover our approach in Notting Hill, London.</p>
//               <a href="#service-collection" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#E8D5AE] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8D5AE] transition-colors hover:bg-[#E8D5AE] hover:text-[#0A2240]">Explore services <ArrowDown size={17} /></a>
//             </div>
//           </div>
//           <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60"><span>QuickShield Services Notting Hill</span><span>London · United Kingdom</span></div>
//         </div>
//       </section>

//       {/* EDITORIAL INTRO */}
//       <section className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.36fr_1fr] lg:gap-20 lg:px-16 lg:py-40">
//         <div><Eyebrow>01 / What we do</Eyebrow></div>
//         <div><h2 className="max-w-[1080px] text-[clamp(3rem,6.3vw,7rem)] font-medium leading-[1.04] tracking-[-0.07em]">Different challenges.<br /><span className="font-serif font-normal italic text-[#B99547]">One considered</span> approach.</h2><div className="mt-10 grid gap-8 border-t border-[#0A2240]/20 pt-8 md:grid-cols-2 md:gap-12"><p className="text-xl font-medium leading-9 tracking-[-0.025em]">Pest control should respond to the property, not follow a one-size-fits-all formula.</p><p className="text-[15px] leading-8 text-[#5E6975]">Explore pest control services for residential and commercial properties. Each concern calls for attention to the pest, the environment and appropriate management options.</p></div></div>
//       </section>

//       {/* CATEGORY INDEX AND SERVICE FEATURES */}
//       <section id="service-collection" ref={collectionRef} className="scroll-mt-20 bg-[#F7F5EF] pb-24 sm:pb-32 lg:pb-40">
//         <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
//           <div className="sticky top-0 z-30 -mx-6 border-y border-[#0A2240]/15 bg-[#F7F5EF]/95 px-6 py-5 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-4"><span className="text-[11px] font-bold uppercase tracking-[0.17em]">Explore the collection</span><span className="rounded-full bg-[#0A2240] px-3 py-1 text-xs text-white">{filtered.length.toString().padStart(2, "0")}</span></div>
//               <div className="flex flex-wrap gap-x-6 gap-y-3">{categories.map(category => <button key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => changeCategory(category)} className={`border-b-2 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${selectedCategory === category ? "border-[#B99547] text-[#0A2240]" : "border-transparent text-[#0A2240]/45 hover:text-[#0A2240]"}`}>{category}</button>)}</div>
//             </div>
//           </div>
//           <div className="pt-3">{filtered.map((service, index) => <ServiceFeature key={service.id} service={service} index={index} setRef={el => { refs.current[service.title] = el; }} onEnquire={onEnquire} />)}</div>
//           <div className="flex flex-col gap-4 border-t border-[#0A2240]/20 pt-7 text-sm text-[#5E6975] sm:flex-row sm:items-center sm:justify-between"><span>Showing {filtered.length} of {servicesData.length} services</span><Link to="/contact-us" className="inline-flex items-center gap-2 font-semibold text-[#0A2240] hover:text-[#98763B]">Not sure which service you need? <ArrowUpRight size={18} /></Link></div>
//         </div>
//       </section>

//       {/* MIDNIGHT BRAND STATEMENT */}
//       <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32 lg:py-40">
//         <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full border border-[#B99547]/15" />
//         <div className="relative mx-auto grid max-w-[1500px] gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24 lg:px-16">
//           <div><Eyebrow light>02 / The QuickShield perspective</Eyebrow><h2 className="mt-8 text-[clamp(3.2rem,6.5vw,7.6rem)] font-medium leading-[1.01] tracking-[-0.075em]">Look closer.<br /><span className="font-serif font-normal italic text-[#E8D5AE]">Think further.</span></h2></div>
//           <div className="space-y-8"><p className="max-w-lg text-base leading-8 text-white/70">Effective pest management starts with understanding what is happening and why. We focus on practical options appropriate to the property and the issue.</p><div className="grid gap-5 border-t border-white/20 pt-8 sm:grid-cols-2"><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Residential and commercial enquiries</span></div><div className="flex items-start gap-3"><Check size={19} className="mt-1 shrink-0 text-[#E8D5AE]" /><span className="text-sm leading-7 text-white/80">Treatment and prevention considerations</span></div></div></div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-[#E8D5AE] py-24 sm:py-32 lg:py-40"><div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16"><Eyebrow>03 / Your next step</Eyebrow><div className="mt-9 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"><div><h2 className="text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.95] tracking-[-0.08em]">LET'S MAKE<br /><span className="font-serif font-normal italic text-[#96723C]">a plan.</span></h2><p className="mt-8 max-w-xl text-base leading-8 text-[#0A2240]/75">Tell us what you have noticed. Contact QuickShield Services Notting Hill to discuss suitable next steps for your property.</p></div><div className="flex flex-col gap-3"><Link to="/contact-us" className="group inline-flex items-center justify-between gap-8 rounded-full bg-[#0A2240] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#B99547] hover:text-[#0A2240]">Send an enquiry <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><a href="tel:+447417502611" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0A2240]/35 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-white"><Phone size={17} />{PHONE}<ArrowRight size={17} /></a></div></div><div className="mt-20 flex items-center gap-3 border-t border-[#0A2240]/20 pt-6 text-xs text-[#0A2240]/70"><MapPin size={17} />3A Denbigh Rd, London W11 2SJ, United Kingdom</div></div></section>
//     </main>
//   );
// }



















import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Phone,
  MapPin,
  Check,
  Search,
} from "lucide-react";

// ========================================
// BUSINESS INFORMATION
// ========================================

const COMPANY = "QuickShield Services Putney";
const PHONE = "+44 7459 692222";
const PHONE_LINK = "tel:+447459692222";

const ADDRESS =
  "10 Pettiward Cl, London SW15 6QL, United Kingdom";

// ========================================
// SERVICE CATEGORIES
// ========================================

const categories = [
  "All",
  "Insects",
  "Rodents & Wildlife",
  "Birds & Prevention",
];

// ========================================
// SERVICES DATA
// ALL ORIGINAL IMAGE PATHS PRESERVED
// ========================================

const servicesData = [
  {
    id: 1,
    cat: "Insects",
    title: "Ant Control",
    img: "/images/ants.webp",
    kicker: "Ant Infestation Solutions",
    details:
      "Ant control for homes and commercial properties, focusing on activity trails, possible nesting areas and suitable treatment options.",
  },
  {
    id: 2,
    cat: "Insects",
    title: "Bed Bugs",
    img: "/images/bedbugs.webp",
    kicker: "Bed Bug Treatment",
    details:
      "Bed bug inspection and treatment options for affected bedrooms, mattresses, furniture and surrounding spaces.",
  },
  {
    id: 3,
    cat: "Insects",
    title: "Moth Treatment",
    img: "/images/moths.webp",
    kicker: "Carpet Moth Control",
    details:
      "Assessment and treatment considerations for carpet moth activity affecting rugs, carpets and natural-fibre textiles.",
  },
  {
    id: 4,
    cat: "Insects",
    title: "Beetle Removal",
    img: "/images/beetles.webp",
    kicker: "Carpet Beetle Control",
    details:
      "Carpet beetle identification and pest management options for affected fabrics, furnishings and storage spaces.",
  },
  {
    id: 5,
    cat: "Insects",
    title: "Cockroach",
    img: "/images/roaches.webp",
    kicker: "Cockroach Control",
    details:
      "Cockroach management for residential and commercial kitchens and other affected areas, considering harbourage and activity.",
  },
  {
    id: 6,
    cat: "Rodents & Wildlife",
    title: "Rats & Mice",
    img: "/images/rats.webp",
    kicker: "Rodent Control & Proofing",
    details:
      "Rat and mouse control with attention to activity, possible entry points and practical property proofing measures.",
  },
  {
    id: 7,
    cat: "Insects",
    title: "Flea Eradication",
    img: "/images/fleas.webp",
    kicker: "Flea Control",
    details:
      "Flea treatment options for affected indoor areas, including relevant preparation advice and follow-up precautions.",
  },
  {
    id: 8,
    cat: "Insects",
    title: "Wasp Removal",
    img: "/images/wasps.webp",
    kicker: "Wasp Nest Control",
    details:
      "Wasp nest assessment and appropriate control options for homes, gardens and commercial properties.",
  },
  {
    id: 9,
    cat: "Insects",
    title: "Bee Relocation",
    img: "/images/bees.webp",
    kicker: "Bee Activity Assessment",
    details:
      "Assessment of bee activity and guidance on appropriate specialist assistance or relocation where suitable.",
  },
  {
    id: 10,
    cat: "Rodents & Wildlife",
    title: "Squirrels",
    img: "/images/squirrels.webp",
    kicker: "Squirrel Control",
    details:
      "Squirrel activity assessment, access-point identification and suitable exclusion and proofing considerations.",
  },
  {
    id: 11,
    cat: "Birds & Prevention",
    title: "Hygiene Proofing",
    img: "/images/hygiene.webp",
    kicker: "Hygiene & Prevention",
    details:
      "Pest-related hygiene and prevention considerations for residential and commercial environments.",
  },
  {
    id: 12,
    cat: "Birds & Prevention",
    title: "Bird Netting",
    img: "/images/birds.webp",
    kicker: "Bird Proofing",
    details:
      "Bird deterrent options, including appropriate netting and spikes, subject to property conditions and wildlife protections.",
  },
];

// ========================================
// SERVICE NAME ALIASES
// ========================================

const aliases = {
  "Bed Bugs Heat Treatment": "Bed Bugs",
  "Bed Bug Treatment": "Bed Bugs",

  "Rat & Mice Control": "Rats & Mice",
  "Rats and Mice": "Rats & Mice",
  "Rats & Mice Control": "Rats & Mice",
  "Rats & Mice Proofing": "Rats & Mice",
  "Rodent Control": "Rats & Mice",

  "Wasp Control": "Wasp Removal",
  "Wasp Nest Removal": "Wasp Removal",
  "Wasp Nest Control": "Wasp Removal",
  "Wasp & Bee Removal": "Wasp Removal",

  "Carpet Moth Treatment": "Moth Treatment",
  "Carpet Moth Control": "Moth Treatment",
  "Carpet Moth & Beetle Treatment": "Moth Treatment",

  "Cockroach Control": "Cockroach",
  "Cockroach Gel Treatment": "Cockroach",

  "Flea Treatment": "Flea Eradication",

  "Bird Proofing": "Bird Netting",
  "Bird Netting & Spikes Installation": "Bird Netting",

  "Bee Control": "Bee Relocation",

  "Squirrel Control": "Squirrels",
  "Squirrel Exclusion & Proofing": "Squirrels",

  Ants: "Ant Control",
  "Ants Control": "Ant Control",

  "Carpet Beetle": "Beetle Removal",

  "Commercial Kitchen Deep Sanitization":
    "Hygiene Proofing",
};

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof window === "undefined") {
      return;
    }

    if (
      !window.IntersectionObserver ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    if (
      element.getBoundingClientRect().top <
      window.innerHeight + 80
    ) {
      return;
    }

    setAnimate(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 90px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        animate
          ? "transition-[opacity,transform] duration-700 ease-out"
          : ""
      }`}
      style={
        animate
          ? {
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(24px)",
              transitionDelay: visible
                ? `${delay}ms`
                : "0ms",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

// ========================================
// SECTION LABEL
// ========================================

function SectionLabel({
  children,
  light = false,
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-[2px] w-9 ${
          light
            ? "bg-[#E8D5AE]"
            : "bg-[#B99547]"
        }`}
      />

      <span
        className={`text-xs font-semibold uppercase tracking-wide ${
          light
            ? "text-[#E8D5AE]"
            : "text-[#947331]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

// ========================================
// SERVICE CARD
// ========================================

function ServiceCard({
  service,
  index,
  setRef,
}) {
  const featured =
    index === 0 || index === 5;

  return (
    <Link
      to="/contact-us"
      state={{ selectedService: service.title }}
      aria-label={`Enquire about ${service.title}`}
      ref={setRef}
      className={`group relative block min-w-0 cursor-pointer scroll-mt-40 overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(10,34,64,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(10,34,64,0.12)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={
          featured
            ? "lg:grid lg:min-h-[420px] lg:grid-cols-2"
            : ""
        }
      >
        {/* SERVICE IMAGE */}

        <div
          className={`relative overflow-hidden bg-[#D9D4C9] ${
            featured
              ? "h-[280px] sm:h-[360px] lg:h-full"
              : "h-[260px] sm:h-[300px]"
          }`}
        >
          <img
            src={service.img}
            alt={`${service.title} pest control in Putney London`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240]/55 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-[#F8F1E4] px-4 py-2 text-xs font-semibold text-[#0A2240]">
            {service.cat}
          </span>

          <span className="absolute bottom-5 left-6 text-3xl font-bold text-white">
            {String(service.id).padStart(2, "0")}
          </span>
        </div>

        {/* SERVICE CONTENT */}

        <div
          className={`flex flex-col p-6 sm:p-8 ${
            featured
              ? "lg:justify-center lg:p-12"
              : ""
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-[#947331]">
            {service.kicker}
          </p>

          <h3
            className={`mt-4 font-bold leading-[1.15] tracking-normal text-[#0A2240] ${
              featured
                ? "text-[clamp(2rem,3.4vw,3.5rem)]"
                : "text-[clamp(1.7rem,2.3vw,2.3rem)]"
            }`}
          >
            {service.title}
          </h3>

          <p className="mt-5 flex-1 text-sm leading-7 text-[#536070] sm:text-base">
            {service.details}
          </p>

          <div className="mt-8 border-t border-[#0A2240]/10 pt-6">
            <div
              className="group/btn flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-[#0A2240]"
            >
              Enquire About This Service

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0A2240] text-white transition-colors duration-300 group-hover/btn:bg-[#B99547] group-hover/btn:text-[#0A2240]">
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ========================================
// MAIN SERVICES PAGE
// ========================================

export default function ServicesPage() {
  const location = useLocation();

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [
    searchQuery,
    setSearchQuery,
  ] = useState("");

  const refs = useRef({});

  const collectionRef = useRef(null);

  // ======================================
  // FILTER SERVICES
  // ======================================

  const filtered = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" ||
        service.cat === selectedCategory;

      const searchText = `
        ${service.title}
        ${service.kicker}
        ${service.details}
        ${service.cat}
      `.toLowerCase();

      return (
        matchesCategory &&
        searchText.includes(
          searchQuery.trim().toLowerCase()
        )
      );
    });
  }, [
    selectedCategory,
    searchQuery,
  ]);

  // ======================================
  // SCROLL TO REQUESTED SERVICE
  // ======================================

  useEffect(() => {
    const requested =
      location.state?.scrollToService;

    if (!requested) return;

    const target =
      aliases[requested] || requested;

    setSelectedCategory("All");
    setSearchQuery("");

    const timer = window.setTimeout(() => {
      const element =
        refs.current[target];

      if (element) {
        const reducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

        element.scrollIntoView({
          behavior: reducedMotion
            ? "auto"
            : "smooth",
          block: "start",
        });
      }
    }, 350);

    return () =>
      window.clearTimeout(timer);
  }, [
    location.key,
    location.state?.scrollToService,
  ]);

  // ======================================
  // CATEGORY CHANGE
  // ======================================

  const changeCategory = (category) => {
    setSelectedCategory(category);

    window.requestAnimationFrame(() => {
      collectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#F8F1E4] text-[#0A2240]"
      style={{
        fontFamily:
          "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      {/* ====================================== */}
      {/* HERO SECTION — SOLID GOLD BACKGROUND */}
      {/* RIGHT SIDE SQUARE IMAGE */}
      {/* ====================================== */}

      <section className="relative isolate overflow-hidden bg-[#B99547] pt-32 text-[#0A2240] sm:pt-40 lg:pt-44">
        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          {/* BREADCRUMB */}

          <nav
            aria-label="Breadcrumb"
            className="mb-14 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#0A2240]/75"
          >
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span className="h-px w-7 bg-[#0A2240]/50" />

            <span>Our Services</span>
          </nav>

          {/* MAIN HERO LAYOUT */}

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* LEFT CONTENT */}

            <div className="pb-5 lg:pb-20">
              <SectionLabel>
                QuickShield Services Putney
              </SectionLabel>

              <h1 className="mt-8 text-[clamp(3rem,5.5vw,6.5rem)] font-bold leading-[1.08] tracking-normal">
                PEST CONTROL
                <br />

                <span className="text-[#F8F1E4]">
                  SERVICES
                </span>

                <br />

                IN PUTNEY.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#0A2240]/85 sm:text-lg">
                Practical pest control solutions
                for homes and businesses in Putney
                and across London. Explore our
                services for insects, rodents,
                wildlife and bird proofing.
              </p>

              {/* HERO BUTTONS */}

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#service-collection"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#0A2240] px-8 py-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#F8F1E4] hover:text-[#0A2240]"
                >
                  Explore Services

                  <ArrowDown
                    size={19}
                    className="transition-transform group-hover:translate-y-1"
                  />
                </a>

                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-3 rounded-full border border-[#0A2240]/40 px-8 py-5 text-sm font-semibold transition-colors duration-300 hover:bg-[#0A2240] hover:text-white"
                >
                  <Phone size={18} />

                  Call Our Team
                </a>
              </div>
            </div>

            {/* RIGHT SQUARE IMAGE */}

            <div className="relative pb-10 lg:pb-20">
              <div className="relative aspect-square w-full overflow-hidden rounded-[22px] bg-[#0A2240] shadow-[0_25px_70px_rgba(10,34,64,0.18)]">
                <img
                  src="/images/shieldteam.webp"
                  alt="QuickShield Services Putney pest control team"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* DECORATIVE CORNER */}

              <div className="pointer-events-none absolute -bottom-1 -right-2 hidden h-24 w-24 rounded-br-[22px] border-b-4 border-r-4 border-[#0A2240] sm:block" />
            </div>
          </div>

          {/* HERO FOOTER */}

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0A2240]/20 py-7 text-xs font-semibold text-[#0A2240]/75">
            <span>
              Putney · London · United Kingdom
            </span>

            <span>
              Residential & Commercial Pest Control
            </span>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* INTRODUCTION SECTION */}
      {/* ====================================== */}

      <section className="bg-[#F8F1E4] py-24 sm:py-32">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel>
              01 / Our Expertise
            </SectionLabel>
          </Reveal>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <h2 className="text-[clamp(2.7rem,5vw,5.2rem)] font-bold leading-[1.15] tracking-normal">
                THE RIGHT
                <br />

                SERVICE FOR
                <br />

                <span className="text-[#B99547]">
                  YOUR PROPERTY.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="lg:pt-5">
                <p className="text-xl font-semibold leading-9">
                  Different pest problems need
                  different solutions.
                </p>

                <p className="mt-6 text-base leading-8 text-[#536070]">
                  QuickShield Services Putney
                  handles enquiries involving
                  common household pests,
                  commercial pest concerns and
                  property prevention measures.
                </p>

                <p className="mt-5 text-base leading-8 text-[#536070]">
                  Browse our services below to
                  learn more about the types of
                  pest activity we can discuss
                  and the options available for
                  your property.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* ASYMMETRIC SERVICE CARDS */}
      {/* ====================================== */}

      <section
        id="service-collection"
        ref={collectionRef}
        className="scroll-mt-24 bg-[#F1EEE7] pb-24 sm:pb-32"
      >
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          {/* FILTER BAR */}

          <div className="sticky top-0 z-30 -mx-5 border-b border-[#0A2240]/10 bg-[#F1EEE7]/95 px-5 py-5 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold">
                  Explore Our Services
                </span>

                <span className="rounded-full bg-[#0A2240] px-3 py-1 text-xs font-semibold text-white">
                  {filtered.length}
                </span>
              </div>

              {/* CATEGORY FILTERS */}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const active =
                      selectedCategory ===
                      category;

                    return (
                      <button
                        key={category}
                        type="button"
                        aria-pressed={active}
                        onClick={() =>
                          changeCategory(category)
                        }
                        className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${
                          active
                            ? "bg-[#B99547] text-[#0A2240]"
                            : "bg-white text-[#0A2240]/65 hover:bg-[#0A2240] hover:text-white"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>

                {/* SEARCH INPUT */}

                <div className="relative w-full sm:w-56">
                  <Search
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#536070]"
                  />

                  <input
                    type="search"
                    aria-label="Search pest control services"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(
                        event.target.value
                      )
                    }
                    className="w-full rounded-full border border-[#0A2240]/10 bg-white py-3 pl-11 pr-4 text-sm text-[#0A2240] outline-none transition-colors focus:border-[#B99547]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE CARDS */}

          <div className="grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                setRef={(element) => {
                  refs.current[service.title] =
                    element;
                }}
              />
            ))}
          </div>

          {/* NO SEARCH RESULTS */}

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-bold">
                No matching services found.
              </h3>

              <p className="mt-4 text-base text-[#536070]">
                Try another search or select
                a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-7 rounded-full bg-[#0A2240] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#B99547] hover:text-[#0A2240]"
              >
                Show All Services
              </button>
            </div>
          )}

          {/* COLLECTION FOOTER */}

          <div className="mt-12 flex flex-col gap-5 border-t border-[#0A2240]/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-[#536070]">
              Showing {filtered.length} of{" "}
              {servicesData.length} services
            </span>

            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-3 text-sm font-semibold transition-colors hover:text-[#947331]"
            >
              Not Sure Which Service You Need?

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* DARK BRAND STATEMENT */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#B99547]/20"
        />

        <div className="relative mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20 lg:px-16">
          <Reveal>
            <SectionLabel light>
              02 / Our Approach
            </SectionLabel>

            <h2 className="mt-9 text-[clamp(2.8rem,5.5vw,5.8rem)] font-bold leading-[1.13] tracking-normal">
              LOOK CLOSER.
              <br />

              <span className="text-[#E8D5AE]">
                THINK AHEAD.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="max-w-lg text-base leading-8 text-white/70">
                Effective pest management
                begins with understanding
                the pest activity, the
                affected environment and
                the property's specific
                requirements.
              </p>

              <div className="mt-9 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="mt-1 shrink-0 text-[#E8D5AE]"
                  />

                  <span className="text-sm leading-7 text-white/80">
                    Residential and commercial
                    enquiries
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="mt-1 shrink-0 text-[#E8D5AE]"
                  />

                  <span className="text-sm leading-7 text-white/80">
                    Treatment and prevention
                    considerations
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================================== */}
      {/* FINAL CTA */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-[#B99547] py-24 sm:py-32">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel>
              03 / Get in Touch
            </SectionLabel>

            <h2 className="mt-9 text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[1.12] tracking-normal">
              NEED PEST
              <br />

              CONTROL?
              <br />

              <span className="text-[#F8F1E4]">
                CONTACT US.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10 border-t border-[#0A2240]/25 pt-9 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base leading-8 text-[#0A2240]/85">
              Tell us about the pest
              activity at your property.
              Contact QuickShield Services
              Putney to discuss appropriate
              pest control options and
              next steps.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-4 rounded-full bg-[#0A2240] px-8 py-5 text-sm font-semibold text-white transition-colors hover:bg-[#F8F1E4] hover:text-[#0A2240]"
              >
                Send an Enquiry

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-3 rounded-full border border-[#0A2240]/40 px-8 py-5 text-sm font-semibold transition-colors hover:bg-white"
              >
                <Phone size={18} />

                {PHONE}

                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="mt-16 flex items-start gap-3 border-t border-[#0A2240]/20 pt-6 text-sm text-[#0A2240]/75">
            <MapPin
              size={18}
              className="mt-0.5 shrink-0"
            />

            <span>
              {COMPANY} · {ADDRESS}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}


