// import React from "react";
// import { Star, ShieldCheck, Quote, MessageSquare } from "lucide-react";

// const authenticReviews = [
//   {
//     id: 1,
//     name: "Sir Alistair Vance",
//     role: "Mayfair Property Resident",
//     image: "/images/reviews/user1.webp",
//     text: "Absolutely fantastic response from PrimeShield. Had a severe mouse infestation in our structural loft space. The team arrived promptly, tracked down entry pathways, and locked the area down permanently. Very clean work.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 2,
//     name: "Marcus Thorne",
//     role: "Director, Thorne Hospitality",
//     image: "/images/reviews/user2.webp",
//     text: "Very straightforward premium pricing structure. No hidden inspection parameters or useless traps. They cleared our active commercial kitchen area with total biological safety and full transparency.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 3,
//     name: "Lord Dominic West",
//     role: "Belgravia Estate Landlord",
//     image: "/images/reviews/user6.webp",
//     text: "Had a highly persistent bed bug outbreak across two flat layouts. PrimeShield resolved it completely using specialized deep thermal heat treatments. Unmatched reliability and execution.",
//     rating: "5.0 Verified",
//   },
//   {
//     id: 4,
//     name: "Lady Eleanor Sterling",
//     role: "Head of Operations, Sterling Logistics",
//     image: "/images/reviews/user3.webp",
//     text: "Outstanding commercial contract execution. PrimeShield setup non-toxic bio-barriers around our entire logistics warehouse layout. Constant updates, total peace of mind for our management.",
//     rating: "5.0 Verified",
//   },
// ];

// export default function PesSaveTestimonials() {
//   return (
//     <section className="relative py-24 md:py-32 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 isolate">
      
//       {/* Lightweight performance-friendly background layer */}
//       <div className="absolute inset-0 bg-[radial-gradient(#0A2240_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none opacity-[0.03]" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Header Block */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
//           <div className="space-y-4 max-w-xl text-left">
//             <div className="inline-flex items-center gap-2 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-md">
//               <MessageSquare className="w-3.5 h-3.5 text-[#C5A86B]" />
//               <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
//                 Client Testimonials
//               </span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A2240] uppercase leading-none">
//               RELIABILITY <br />
//               <span className="text-white bg-[#0A2240] px-3.5 py-1 rounded-xl inline-block mt-2 shadow-lg">
//                 WITHOUT COMPROMISE
//               </span>
//             </h2>
//           </div>

//           <div className="max-w-sm text-left md:text-right">
//             <p className="text-[#0A2240]/90 text-sm leading-relaxed font-bold">
//               Read verified client reports from premium residential quarters and commercial hubs across London.
//             </p>
//           </div>
//         </div>

//         {/* Stable Masonry Grid - Transforms removed to stop layout shaking */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
//           {/* Column 1 */}
//           <div className="grid grid-cols-1 gap-6 w-full">
//             {authenticReviews.filter((_, i) => i % 2 === 0).map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </div>

//           {/* Column 2 - translate-y hata kar clean padding lga di hai taake height rigid rahe */}
//           <div className="grid grid-cols-1 gap-6 w-full md:pt-12">
//             {authenticReviews.filter((_, i) => i % 2 !== 0).map((review) => (
//               <ReviewCard key={review.id} review={review} />
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// function ReviewCard({ review }) {
//   return (
//     // will-change-transform hata diya hai aur shadows ko light weight rakha hai
//     <div className="w-full bg-[#0A2240] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between shadow-lg relative overflow-hidden group transition-transform duration-300 ease-out hover:-translate-y-1 backface-hidden">
      
//       <Quote className="absolute right-6 top-6 w-24 h-24 text-white/[0.015] pointer-events-none select-none" strokeWidth={1} />

//       <div>
//         {/* Card Header: Stars Line */}
//         <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
//           <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className="w-4 h-4 fill-[#C5A86B] text-[#C5A86B]"
//                 strokeWidth={0}
//               />
//             ))}
//           </div>

//           <span className="text-[10px] font-mono font-black tracking-wider text-[#C5A86B] bg-white/5 border border-white/10 px-3 py-0.5 rounded-md">
//             {review.rating}
//           </span>
//         </div>

//         {/* Real Text Review Block */}
//         <div className="relative text-left mb-8 z-10">
//           <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
//             "{review.text}"
//           </p>
//         </div>
//       </div>

//       {/* Profile Signature Line */}
//       <div className="flex items-center gap-4 pt-5 border-t border-white/5 relative z-10">
//         <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-0.5 shrink-0">
//           <img
//             src={review.image}
//             alt={review.name}
//             className="w-full h-full object-cover rounded-lg grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-opacity duration-300"
//             loading="lazy"
//           />
//         </div>

//         <div className="text-left min-w-0 flex-grow">
//           <div className="flex items-center gap-1.5">
//             <h4 className="text-sm font-black text-white uppercase tracking-wider truncate">
//               {review.name}
//             </h4>
//             <ShieldCheck className="w-4 h-4 text-[#C5A86B] shrink-0" />
//           </div>

//           <span className="text-[11px] font-semibold text-slate-400 block mt-0.5 truncate">
//             {review.role}
//           </span>
//         </div>
//       </div>

//     </div>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Quote,
//   ArrowUpRight,
//   ArrowRight,
//   Star,
// } from "lucide-react";

// // Sample testimonials for design preview.
// // Replace with genuine customer reviews before publishing.

// const reviews = [
//   {
//     id: 1,
//     name: "James Mitchell",
//     location: "Notting Hill, London",
//     service: "Rodent Control",
//     text:
//       "We had been hearing noises in our kitchen for several nights. The team took the time to understand the problem, explained the possible entry points and guided us through the next steps. The whole experience felt professional and reassuring.",
//   },
//   {
//     id: 2,
//     name: "Sophie Bennett",
//     location: "West London",
//     service: "Bed Bug Treatment",
//     text:
//       "Discovering signs of bed bugs was incredibly stressful. I appreciated the clear communication and the careful approach to assessing the situation. Everything was explained in a way that made the process much easier to understand.",
//   },
//   {
//     id: 3,
//     name: "Oliver Harrison",
//     location: "London",
//     service: "Wasp Control",
//     text:
//       "We noticed wasps repeatedly entering an area near our roof. The advice was clear, the process was straightforward and our concerns were taken seriously. A very positive experience from the initial enquiry onwards.",
//   },
// ];

// export default function PesSaveTestimonials() {
//   return (
//     <section
//       aria-labelledby="testimonials-heading"
//       className="relative isolate overflow-hidden bg-[#F7F5F0] py-20 sm:py-24 lg:py-32"
//     >
//       {/* Background decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#B99547]/15" />
//         <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border border-[#B99547]/10" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         {/* Header */}
//         <div className="mb-14 grid items-end gap-8 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
//           <div>
//             <div className="mb-6 flex items-center gap-4">
//               <span className="h-px w-11 bg-[#B99547]" />

//               <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#96733B]">
//                 Customer Experiences
//               </span>
//             </div>

//             <h2
//               id="testimonials-heading"
//               className="max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#0A2240]"
//             >
//               Words that
//               <br />
//               <span className="font-serif font-normal italic text-[#B99547]">
//                 speak volumes.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-3">
//             <p className="max-w-md text-base leading-8 text-[#536071]">
//               A selection of example customer experiences illustrating
//               the care, communication and attention we aim to bring
//               to pest control services in Notting Hill and London.
//             </p>
//           </div>
//         </div>

//         {/* Testimonials */}
//         <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
//           {reviews.map((review, index) => (
//             <article
//               key={review.id}
//               className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#0A2240]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B99547]/50 hover:shadow-[0_20px_50px_rgba(10,34,64,0.08)] sm:rounded-[28px] sm:p-9"
//             >
//               {/* Top gold line */}
//               <div className="absolute inset-x-0 top-0 h-1 bg-[#B99547]" />

//               {/* Quote icon and number */}
//               <div className="mb-9 flex items-start justify-between">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2240] text-[#D8BA7C] transition-colors duration-300 group-hover:bg-[#B99547] group-hover:text-[#0A2240]">
//                   <Quote size={25} strokeWidth={1.5} />
//                 </div>

//                 <span className="font-serif text-3xl italic text-[#B99547]/60">
//                   0{index + 1}
//                 </span>
//               </div>

//               {/* Service label */}
//               <div className="mb-5">
//                 <span className="inline-flex rounded-full border border-[#B99547]/30 bg-[#B99547]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#96733B]">
//                   {review.service}
//                 </span>
//               </div>

//               {/* Review text */}
//               <blockquote className="flex-1">
//                 <p className="text-base font-medium leading-8 text-[#0A2240]/85 sm:text-lg">
//                   “{review.text}”
//                 </p>
//               </blockquote>

//               {/* Customer details */}
//               <div className="mt-10 border-t border-[#0A2240]/10 pt-7">
//                 <div className="flex items-center gap-4">
//                   {/* Initials avatar */}
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0E8D8] text-sm font-bold text-[#0A2240]">
//                     {review.name
//                       .split(" ")
//                       .map((word) => word[0])
//                       .slice(0, 2)
//                       .join("")}
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-bold tracking-tight text-[#0A2240]">
//                       {review.name}
//                     </h3>

//                     <p className="mt-1 text-xs text-[#647080]">
//                       {review.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 flex flex-col gap-7 border-t border-[#0A2240]/15 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
//           <div>
//             <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#96733B]">
//               QuickShield Services Notting Hill
//             </span>

//             <p className="mt-2 text-xl font-semibold tracking-tight text-[#0A2240] sm:text-2xl">
//               Need professional pest control assistance?
//             </p>
//           </div>

//           <Link
//             to="/contact-us"
//             className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0A2240] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
//           >
//             Contact QuickShield

//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


















import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  CheckCircle2,
} from "lucide-react";

// Fictional demo reviews for layout preview only.
// Replace with genuine, authorised reviews before publishing.

const reviews = [
  {
    id: "01",
    name: "Daniel Foster",
    initials: "DF",
    location: "Notting Hill, London",
    service: "Rats & Mice Control",
    quote:
      "We started noticing scratching sounds behind the kitchen units. What impressed us most was how clearly everything was explained. The inspection felt thorough, the advice was practical, and we understood exactly what needed attention.",
    highlight: "Clear advice. Practical solutions.",
  },
  {
    id: "02",
    name: "Amelia Brooks",
    initials: "AB",
    location: "Kensington, London",
    service: "Bed Bug Treatment",
    quote:
      "Dealing with a possible bed bug problem was worrying. Having someone explain the inspection process and the treatment considerations in a calm, straightforward way made a real difference to our experience.",
    highlight: "Calm, considered communication.",
  },
  {
    id: "03",
    name: "Thomas Reed",
    initials: "TR",
    location: "West London",
    service: "Wasp Nest Control",
    quote:
      "We had wasps gathering near an awkward part of the roof. The team listened to our concerns, discussed the situation carefully and helped us understand the appropriate next steps without making the process complicated.",
    highlight: "Professional from the first conversation.",
  },
  {
    id: "04",
    name: "Charlotte Hayes",
    initials: "CH",
    location: "London",
    service: "Cockroach Control",
    quote:
      "We wanted straightforward guidance about pest activity in our commercial kitchen. The communication was clear, the approach was organised and the recommendations were easy for our team to understand.",
    highlight: "Thoughtful support for businesses.",
  },
];

export default function LuxuryClientStories() {
  const [active, setActive] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const current = reviews[active];

  const selectReview = (index) => {
    if (index === active) return;
    setActive(index);
    setAnimationKey((key) => key + 1);
  };

  const next = () => {
    selectReview((active + 1) % reviews.length);
  };

  const previous = () => {
    selectReview((active - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      aria-labelledby="client-stories-heading"
      className="relative isolate overflow-hidden bg-[#0A2240] text-[#F8F1E4]"
    >
      <style>
        {`
          @keyframes luxuryReviewReveal {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .luxury-review-enter {
            animation: luxuryReviewReveal 0.45s ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .luxury-review-enter {
              animation: none;
            }
          }
        `}
      </style>

      {/* Subtle architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[29%] top-0 h-full w-px bg-white/[0.07]" />
        <div className="absolute right-[27%] top-0 h-full w-px bg-white/[0.07]" />
        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-[#B99547]/15" />
        <div className="absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full border border-[#B99547]/10" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Top small label */}
        <div className="mb-14 flex flex-wrap items-center justify-between gap-5 border-b border-white/15 pb-7">
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#B99547]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8BA7C]">
              Client Stories
            </span>
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            QuickShield Services Notting Hill
          </span>
        </div>

        {/* Main interactive showcase */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.25fr_0.65fr] lg:gap-12 xl:gap-16">
          {/* LEFT - Heading */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B99547]/40 text-[#D8BA7C]">
                <MessageSquareQuote
                  size={25}
                  strokeWidth={1.5}
                />
              </div>

              <h2
                id="client-stories-heading"
                className="text-[clamp(3rem,5vw,5.8rem)] font-semibold leading-[1.04] tracking-[-0.06em]"
              >
                GOOD
                <br />
                SERVICE.
                <br />
                <span className="font-serif font-normal italic text-[#B99547]">
                  Real care.
                </span>
              </h2>

              <p className="mt-8 max-w-xs text-sm leading-8 text-white/60 sm:text-base">
                A thoughtfully designed space for sharing
                genuine customer experiences, practical
                support and the importance of clear
                communication.
              </p>
            </div>

            <div className="mt-12 hidden lg:block">
              <div className="h-px w-16 bg-[#B99547]" />
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/40">
                Demonstration content only. Customer
                experiences must be verified before
                publication.
              </p>
            </div>
          </div>

          {/* CENTER - Featured review */}
          <div className="relative flex min-w-0 flex-col justify-between rounded-[28px] border border-[#B99547]/25 bg-[#F8F1E4] p-7 text-[#0A2240] shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:p-10 xl:p-14">
            <div
              aria-hidden="true"
              className="absolute right-7 top-7 font-serif text-[110px] leading-none text-[#B99547]/15 sm:right-10"
            >
              ”
            </div>

            <div
              key={animationKey}
              className="luxury-review-enter relative flex h-full flex-col"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B99547]/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#96733B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B99547]" />
                  {current.service}
                </span>

                <span className="text-xs font-bold text-[#B99547]">
                  {current.id} / 0{reviews.length}
                </span>
              </div>

              <Quote
                size={35}
                strokeWidth={1.2}
                className="mt-12 text-[#B99547]"
              />

              <blockquote className="mt-7 flex-1">
                <p className="text-[clamp(1.35rem,2vw,2.15rem)] font-medium leading-[1.55] tracking-[-0.035em]">
                  “{current.quote}”
                </p>
              </blockquote>

              <div className="mt-12 border-t border-[#0A2240]/15 pt-8">
                <p className="text-sm font-semibold text-[#96733B]">
                  {current.highlight}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0A2240] text-sm font-bold text-[#F8F1E4]">
                    {current.initials}
                  </div>

                  <div>
                    <h3 className="text-base font-bold">
                      {current.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#536071]">
                      {current.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Interactive selector */}
          <div className="flex flex-col">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8BA7C]">
                Explore Stories
              </span>

              <span className="text-xs text-white/45">
                0{reviews.length} Stories
              </span>
            </div>

            <div className="border-t border-white/20">
              {reviews.map((review, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => selectReview(index)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-4 border-b py-6 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#B99547] text-[#F8F1E4]"
                        : "border-white/15 text-white/55 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? "border-[#B99547] bg-[#B99547] text-[#0A2240]"
                          : "border-white/20 group-hover:border-[#B99547]"
                      }`}
                    >
                      {review.initials}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">
                        {review.name}
                      </span>

                      <span className="mt-1 block truncate text-xs opacity-60">
                        {review.service}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                      className={`shrink-0 transition-transform duration-300 ${
                        isActive
                          ? "text-[#B99547]"
                          : "opacity-40 group-hover:-translate-y-1 group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <div className="mt-9 flex items-center gap-3">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous customer story"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:border-[#B99547] hover:bg-[#B99547] hover:text-[#0A2240]"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next customer story"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:border-[#B99547] hover:bg-[#B99547] hover:text-[#0A2240]"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-auto pt-12">
              <div className="border-t border-white/15 pt-6">
                <div className="flex items-center gap-3 text-[#D8BA7C]">
                  <CheckCircle2 size={20} />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                    Your Concerns Matter
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  We aim to make every enquiry clear,
                  considered and straightforward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider and CTA */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/20 pt-10 lg:mt-28 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8BA7C]">
              Need Pest Control Assistance?
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              Let's talk about your property.
            </h3>
          </div>

          <Link
            to="/contact-us"
            className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#B99547] px-8 py-5 text-sm font-bold text-[#0A2240] transition-all duration-300 hover:bg-[#F8F1E4]"
          >
            Contact Our Team

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
