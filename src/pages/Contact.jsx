




// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Mail, PhoneCall, MapPin, Clock, ArrowRight } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control", "Bed Bugs Heat Treatment", "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment", "Rats & Mice Proofing", "Flea Eradication",
//     "Wasp & Bee Removal", "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization", "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     { question: "How quickly can your team arrive?", answer: "We offer same-day emergency response across London, including Purley. Our local technicians are dispatched immediately." },
//     { question: "Are your treatments safe for pets?", answer: "Yes, we use targeted, low-toxicity methods compliant with UK safety regulations." },
//     { question: "Do you offer a guarantee?", answer: "Yes, most treatments include a guaranteed pest-free period with free re-treatments if needed." },
//     { question: "Do you serve commercial businesses?", answer: "Yes, we handle contracts for restaurants, hotels, and offices with full compliance documentation." }
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const loaderToast = toast.loading("Processing your request...");
//     try {
//       const res = await axios.post("http://localhost:5000/api/contact", formData);
//       toast.success(res.data.message || "Request received successfully!", { id: loaderToast });
//       setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", { id: loaderToast });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 py-20 px-6 md:px-12">
//       <Toaster />
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* HERO */}
//         <div className="mb-20">
//           <h1 className="text-6xl md:text-8xl font-black uppercase text-[#0A2240] tracking-tighter mb-6">QuickShield<br />Emergency Intake</h1>
//           <p className="text-[#0A2240]/80 font-medium text-lg max-w-2xl">Secure your premises with London's leading rapid response pest control team.</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
          
//           {/* FORM COLUMN */}
//           <div className="bg-[#0A2240] text-white p-8 md:p-12 rounded-[2rem]">
//             <h2 className="text-3xl font-black uppercase mb-8">Initiate Protocol</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} required className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//                 <input name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} required className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               </div>
//               <input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               <select name="service" onChange={handleChange} value={formData.service} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547] appearance-none text-white">
//                 <option value="" className="text-black">Select Service Required...</option>
//                 {services.map(s => <option key={s} value={s} className="text-black">{s}</option>)}
//               </select>
//               <textarea name="message" rows="4" placeholder="Briefly describe the infestation..." onChange={handleChange} value={formData.message} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]" />
//               <button disabled={loading} className="w-full bg-[#b99547] text-[#0A2240] py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all">
//                 {loading ? "Transmitting..." : "Dispatch Request"} <ArrowRight size={20} />
//               </button>
//             </form>
//           </div>

//           {/* RIGHT INFO & MAP */}
//           <div className="space-y-8">
//             {/* MAP SECTION - Purley, London */}
//             <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-[#0A2240]/20 shadow-xl">
//               <iframe 
//                 title="Purley London Service Area"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.37877239077!2d-0.12933748281249764!3d51.3394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086a9f4c33d%3A0x7d2873138b1f6966!2sPurley%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
//                 width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
//               </iframe>
//             </div>

//             <div className="bg-white/50 p-8 rounded-3xl border border-[#0A2240]/10">
//               <h3 className="font-black text-[#0A2240] text-xl uppercase mb-6">QuickShield Operational Data</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4"><MapPin className="text-[#0A2240]" /> <span className="font-bold">Purley & Greater London</span></div>
//                 <div className="flex items-center gap-4"><PhoneCall className="text-[#0A2240]" /> <span className="font-bold">07405 025488</span></div>
//                 <div className="flex items-center gap-4"><Clock className="text-[#0A2240]" /> <span className="font-bold">24/7 Emergency Deployment</span></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* GOOGLE SECTION */}
//         {/* <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Verified 5-Star Service</div>
//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">Trusted in Purley & London</h3>
//           </div>
//           <a href="#" target="_blank" className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547]">Visit Google Profile</a>
//         </section> */}


//         <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//   <div className="space-y-4">
//     <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//       Verified 5-Star Service
//     </div>

//     <h3 className="text-3xl font-black text-white uppercase tracking-tight">
//       Trusted in Purley & London
//     </h3>
//   </div>

//   <a
//     href="https://maps.app.goo.gl/oEtHbaR3t2RKbHXq8?g_st=ic"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547] transition-all duration-300"
//   >
//     Visit Google Profile
//   </a>
// </section>

//         {/* FAQ SECTION */}
//         <section className="mt-20 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">Frequently Asked Questions</h2>
//           <div className="space-y-3">
//             {faqs.map((faq, idx) => (
//               <div key={idx} className="bg-white/20 border border-[#0A2240]/20 rounded-xl overflow-hidden">
//                 <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 font-bold text-[#0A2240]">
//                   {faq.question} <span>{activeFaq === idx ? "－" : "＋"}</span>
//                 </button>
//                 {activeFaq === idx && <div className="p-5 pt-0 text-[#0A2240]/80 border-t border-[#0A2240]/10">{faq.answer}</div>}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, Clock, ArrowRight } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Heat Treatment",
//     "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment",
//     "Rats & Mice Proofing",
//     "Flea Eradication",
//     "Wasp & Bee Removal",
//     "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization",
//     "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can your team arrive?",
//       answer:
//         "We offer same-day emergency response across London, including Purley. Our local technicians are dispatched immediately.",
//     },
//     {
//       question: "Are your treatments safe for pets?",
//       answer:
//         "Yes, we use targeted, low-toxicity methods compliant with UK safety regulations.",
//     },
//     {
//       question: "Do you offer a guarantee?",
//       answer:
//         "Yes, most treatments include a guaranteed pest-free period with free re-treatments if needed.",
//     },
//     {
//       question: "Do you serve commercial businesses?",
//       answer:
//         "Yes, we handle contracts for restaurants, hotels, and offices with full compliance documentation.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Processing your request...");

//     try {
//       const res = await axios.post(
//         "https://quickshield-backend.vercel.app/api/contact",
//         formData
//       );

//       toast.success(res.data.message || "Request received successfully!", {
//         id: loaderToast,
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong.", {
//         id: loaderToast,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#b99547] min-h-screen mt-20 py-20 px-6 md:px-12">
//       <Toaster />

//       <div className="max-w-[1400px] mx-auto">
//         <div className="mb-20">
//           <h1 className="text-6xl md:text-8xl font-black uppercase text-[#0A2240] tracking-tighter mb-6">
//             QuickShield
//             <br />
//             Emergency Intake
//           </h1>

//           <p className="text-[#0A2240]/80 font-medium text-lg max-w-2xl">
//             Secure your premises with London&apos;s leading rapid response pest
//             control team.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="bg-[#0A2240] text-white p-8 md:p-12 rounded-[2rem]">
//             <h2 className="text-3xl font-black uppercase mb-8">
//               Initiate Protocol
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="name"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   value={formData.name}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="phone"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   value={formData.phone}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                   value={formData.email}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />

//                 <input
//                   name="postcode"
//                   placeholder="Postcode"
//                   onChange={handleChange}
//                   value={formData.postcode}
//                   required
//                   className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//                 />
//               </div>

//               <select
//                 name="service"
//                 onChange={handleChange}
//                 value={formData.service}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547] appearance-none text-white"
//               >
//                 <option value="" className="text-black">
//                   Select Service Required...
//                 </option>

//                 {services.map((s) => (
//                   <option key={s} value={s} className="text-black">
//                     {s}
//                   </option>
//                 ))}
//               </select>

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Briefly describe the infestation..."
//                 onChange={handleChange}
//                 value={formData.message}
//                 required
//                 className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#b99547]"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#b99547] text-[#0A2240] py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-60"
//               >
//                 {loading ? "Transmitting..." : "Dispatch Request"}
//                 <ArrowRight size={20} />
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="h-64 w-full rounded-2xl overflow-hidden border-4 border-[#0A2240]/20 shadow-xl">
//               <iframe
//                 title="Purley London Service Area"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.37877239077!2d-0.12933748281249764!3d51.3394747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760086a9f4c33d%3A0x7d2873138b1f6966!2sPurley%2C%20London!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>

//             <div className="bg-white/50 p-8 rounded-3xl border border-[#0A2240]/10">
//               <h3 className="font-black text-[#0A2240] text-xl uppercase mb-6">
//                 QuickShield Operational Data
//               </h3>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <MapPin className="text-[#0A2240]" />
//                   <span className="font-bold">Purley & Greater London</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <PhoneCall className="text-[#0A2240]" />
//                   <span className="font-bold">07405 025488</span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Clock className="text-[#0A2240]" />
//                   <span className="font-bold">24/7 Emergency Deployment</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="mt-16 bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#b99547] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//               Verified 5-Star Service
//             </div>

//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">
//               Trusted in Purley & London
//             </h3>
//           </div>

//           <a
//             href="https://maps.app.goo.gl/oEtHbaR3t2RKbHXq8?g_st=ic"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#b99547] transition-all duration-300"
//           >
//             Visit Google Profile
//           </a>
//         </section>

//         <section className="mt-20 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-3">
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white/20 border border-[#0A2240]/20 rounded-xl overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full flex items-center justify-between p-5 font-bold text-[#0A2240]"
//                 >
//                   {faq.question}
//                   <span>{activeFaq === idx ? "－" : "＋"}</span>
//                 </button>

//                 {activeFaq === idx && (
//                   <div className="p-5 pt-0 text-[#0A2240]/80 border-t border-[#0A2240]/10">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;























import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Plus,
  Minus,
  ChevronDown,
  MessageSquareText,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  Headphones,
  Navigation,
} from "lucide-react";

// ========================================
// QUICKSHIELD SERVICES PUTNEY
// BUSINESS INFORMATION
// ========================================

const COMPANY = "QuickShield Services Putney";
const PHONE = "+44 7459 692222";
const PHONE_LINK = "tel:+447459692222";

const ADDRESS =
  "10 Pettiward Cl, London SW15 6QL, United Kingdom";

const MAP_QUERY = encodeURIComponent(ADDRESS);

const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

// ========================================
// SERVICES
// ========================================

const SERVICES = [
  "Ants Control",
  "Bed Bugs Heat Treatment",
  "Carpet Moth & Beetle Treatment",
  "Cockroach Gel Treatment",
  "Rats & Mice Proofing",
  "Flea Eradication",
  "Wasp & Bee Removal",
  "Squirrel Exclusion & Proofing",
  "Commercial Kitchen Deep Sanitization",
  "Bird Netting & Spikes Installation",
];

// ========================================
// FREQUENTLY ASKED QUESTIONS
// ========================================

const FAQS = [
  {
    question: "How can I book a pest control service in Putney?",
    answer:
      "You can contact QuickShield Services Putney by telephone or complete the enquiry form on this page. Tell us about the pest problem, your property location and your preferred contact details so we can discuss the next steps.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Please share the type of pest you have noticed, the affected areas of your property, when the activity started and your postcode. These details help us better understand your enquiry.",
  },
  {
    question: "Do you provide pest control for businesses?",
    answer:
      "You can contact us about pest concerns affecting commercial premises, including offices, shops, restaurants and other business properties. Suitable options depend on the pest and the property.",
  },
  {
    question: "Can you help with rats and mice?",
    answer:
      "You can enquire about rat and mouse activity, possible entry points and property proofing. The appropriate approach depends on the signs of activity and the conditions at your property.",
  },
  {
    question: "Are pest control treatments safe for children and pets?",
    answer:
      "Safety precautions depend on the pest, treatment method and property conditions. Please tell us about children, pets and any other relevant concerns before treatment so suitable precautions can be discussed.",
  },
  {
    question: "Do you cover areas outside Putney?",
    answer:
      "QuickShield Services Putney handles enquiries from Putney, nearby areas and across London. Contact us with your postcode to discuss service coverage for your location.",
  },
];

// ========================================
// SCROLL REVEAL
// ========================================

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof window === "undefined") return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !window.IntersectionObserver) {
      return;
    }

    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight + 80) {
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
        rootMargin: "0px 0px 80px 0px",
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
                : "translateY(22px)",
              transitionDelay: visible ? `${delay}ms` : "0ms",
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

function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-[2px] w-8 ${
          light ? "bg-[#E8D5AE]" : "bg-[#B99547]"
        }`}
      />

      <span
        className={`text-xs font-semibold uppercase tracking-wide ${
          light ? "text-[#E8D5AE]" : "text-[#947331]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

// ========================================
// FORM STYLING
// ========================================

const inputClass =
  "w-full rounded-xl border border-[#0A2240]/15 bg-white px-4 py-4 text-base font-normal text-[#0A2240] outline-none transition-all duration-300 placeholder:text-[#0A2240]/35 focus:border-[#B99547] focus:ring-2 focus:ring-[#B99547]/15";

const labelClass =
  "mb-3 block text-sm font-semibold text-[#0A2240]";

// ========================================
// CONTACT PAGE
// ========================================

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // KEEP EXISTING BACKEND ENDPOINT

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const loaderToast = toast.loading(
      "Sending your enquiry..."
    );

    try {
      const response = await axios.post(
        "https://quickshield-putney-backend.vercel.app/api/contact",
        formData
      );

      toast.success(
        response.data?.message ||
          "Your enquiry has been sent successfully.",
        { id: loaderToast }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to send your enquiry. Please try again or call us.",
        { id: loaderToast }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#F8F1E4] text-[#0A2240]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
      }}
    >
      <Toaster position="top-right" />

      {/* ====================================== */}
      {/* HERO — GOLD BRAND EXPERIENCE */}
      {/* ====================================== */}

      <section className="relative isolate overflow-hidden bg-[#B99547] pt-32 sm:pt-40 lg:pt-44">
        {/* BACKGROUND GRID */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#0A2240 1px,transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />

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

            <span className="h-px w-6 bg-[#0A2240]/50" />

            <span>Contact Us</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            {/* HERO LEFT */}

            <div className="pb-8 lg:pb-28">
              <SectionLabel>
                QuickShield Services Putney
              </SectionLabel>

              <h1 className="mt-9 max-w-[850px] text-[clamp(3.2rem,7vw,7.5rem)] font-bold leading-[1.07] tracking-normal">
                LET'S TALK
                <br />

                <span className="text-[#F8F1E4]">
                  PEST
                </span>

                <br />

                CONTROL.
              </h1>

              <p className="mt-9 max-w-xl text-base leading-8 text-[#0A2240]/85 sm:text-lg">
                Need pest control in Putney or London?
                Get in touch with QuickShield Services Putney
                to discuss your property, the pest issue and
                the next steps.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#0A2240] px-8 py-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8F1E4] hover:text-[#0A2240]"
                >
                  Send an Enquiry

                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-3 rounded-full border border-[#0A2240]/40 px-8 py-5 text-sm font-semibold transition-all duration-300 hover:bg-[#0A2240] hover:text-white"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </div>

            {/* HERO RIGHT — INFORMATION PANEL */}

            <div className="relative pb-12 lg:pb-0">
              <div className="relative overflow-hidden rounded-t-[110px] bg-[#0A2240] px-7 pb-9 pt-20 text-white sm:rounded-t-[170px] sm:px-11 sm:pb-12 sm:pt-28 lg:px-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#B99547]/30"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 h-60 w-60 rounded-full border border-[#B99547]/20"
                />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B99547] text-[#0A2240]">
                    <MessageSquareText size={29} strokeWidth={1.6} />
                  </div>

                  <p className="mt-10 text-xs font-semibold uppercase tracking-wide text-[#E8D5AE]">
                    Here to Help
                  </p>

                  <h2 className="mt-5 text-[clamp(2rem,3.5vw,3.6rem)] font-bold leading-[1.15] tracking-normal">
                    Tell us
                    <br />
                    what's happening.
                  </h2>

                  <p className="mt-6 max-w-sm text-base leading-8 text-white/70">
                    Whether you're dealing with rodents,
                    insects or another pest concern, start
                    by telling us about the problem.
                  </p>

                  <div className="mt-10 border-t border-white/20 pt-8">
                    <p className="text-sm text-white/60">
                      Call QuickShield Services Putney
                    </p>

                    <a
                      href={PHONE_LINK}
                      className="group mt-3 inline-flex items-center gap-3 text-xl font-bold text-[#E8D5AE] transition-colors hover:text-white sm:text-2xl"
                    >
                      {PHONE}

                      <ArrowUpRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 bg-[#F8F1E4] px-7 py-6 sm:px-11">
                <span className="text-sm font-semibold">
                  Based in Putney, London
                </span>

                <span className="text-2xl font-bold text-[#B99547]">
                  SW15
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0A2240]/20 py-7 text-xs font-semibold text-[#0A2240]/70">
            <span>Putney · London · United Kingdom</span>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 transition-colors hover:text-white"
            >
              Complete the Form

              <ChevronDown size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* CONTACT FORM SECTION */}
      {/* ====================================== */}

      <section
        id="contact-form"
        className="scroll-mt-24 bg-[#F8F1E4] py-24 sm:py-32 lg:py-36"
      >
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          {/* SECTION INTRO */}

          <Reveal>
            <SectionLabel>01 / Contact Our Team</SectionLabel>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <Reveal>
              <h2 className="max-w-[850px] text-[clamp(2.7rem,5vw,5.5rem)] font-bold leading-[1.14] tracking-normal">
                Tell us about
                <br />

                <span className="text-[#B99547]">
                  your pest problem.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-md text-base leading-8 text-[#536070]">
                Fill in the form below with your contact
                details and a brief description of the issue.
                Our team can then respond to your enquiry.
              </p>
            </Reveal>
          </div>

          {/* CONTACT CONTENT */}

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
            {/* LEFT CONTACT DETAILS */}

            <Reveal>
              <div className="flex h-full flex-col bg-[#0A2240] p-7 text-white sm:p-10 lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B99547] text-[#0A2240]">
                  <Headphones size={26} strokeWidth={1.6} />
                </div>

                <h3 className="mt-10 text-3xl font-bold leading-tight sm:text-4xl">
                  Contact
                  <br />
                  Information
                </h3>

                <p className="mt-5 max-w-sm text-base leading-8 text-white/65">
                  Have a question about pest control
                  services in Putney? Use the details
                  below to get in touch.
                </p>

                <div className="mt-12">
                  {/* PHONE */}

                  <a
                    href={PHONE_LINK}
                    className="group flex items-start gap-4 border-t border-white/20 py-7"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B99547]/50 text-[#E8D5AE]">
                      <Phone size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-white/55">
                        Phone Number
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-[#E8D5AE]">
                        {PHONE}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="ml-auto mt-3 shrink-0 text-[#E8D5AE]"
                    />
                  </a>

                  {/* ADDRESS */}

                  <div className="flex items-start gap-4 border-t border-white/20 py-7">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B99547]/50 text-[#E8D5AE]">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-sm text-white/55">
                        Our Location
                      </p>

                      <address className="mt-2 text-base font-medium not-italic leading-7">
                        {ADDRESS}
                      </address>
                    </div>
                  </div>

                  {/* ONLINE ENQUIRIES */}

                  <div className="flex items-start gap-4 border-y border-white/20 py-7">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B99547]/50 text-[#E8D5AE]">
                      <Mail size={19} />
                    </div>

                    <div>
                      <p className="text-sm text-white/55">
                        Online Enquiries
                      </p>

                      <p className="mt-2 text-base leading-7 text-white/85">
                        Complete the contact form to
                        send us your enquiry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-12">
                  <div className="flex items-start gap-4 bg-white/[0.06] p-5">
                    <ShieldCheck
                      size={24}
                      className="shrink-0 text-[#E8D5AE]"
                    />

                    <p className="text-sm leading-7 text-white/70">
                      Share your property postcode and
                      details of the pest activity so we
                      can better understand your enquiry.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — ENQUIRY FORM */}

            <Reveal delay={100}>
              <div className="relative h-full border border-[#0A2240]/10 bg-white p-6 shadow-[0_20px_65px_rgba(10,34,64,0.06)] sm:p-10 lg:p-12">
                <div className="absolute left-0 top-0 h-1 w-32 bg-[#B99547]" />

                <div className="mb-10 flex items-start justify-between gap-5 border-b border-[#0A2240]/10 pb-8">
                  <div>
                    <p className="text-sm font-semibold text-[#947331]">
                      Pest Control Enquiry
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                      How can we help you?
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#536070]">
                      Fields marked * are required.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8F1E4] text-[#B99547] sm:flex">
                    <Send size={22} />
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  {/* NAME + PHONE */}

                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className={labelClass}
                      >
                        Full Name *
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className={labelClass}
                      >
                        Phone Number *
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        autoComplete="tel"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* EMAIL + POSTCODE */}

                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className={labelClass}
                      >
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-postcode"
                        className={labelClass}
                      >
                        Property Postcode *
                      </label>

                      <input
                        id="contact-postcode"
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="e.g. SW15 6QL"
                        autoComplete="postal-code"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* SERVICE */}

                  <div>
                    <label
                      htmlFor="contact-service"
                      className={labelClass}
                    >
                      Service Required *
                    </label>

                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} appearance-none pr-12`}
                      >
                        <option value="">
                          Select a pest control service
                        </option>

                        {SERVICES.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={19}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#B99547]"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className={labelClass}
                    >
                      Tell Us About the Problem *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the pest activity, where you have noticed it and any other useful details..."
                      required
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {/* SUBMIT */}

                  <div className="border-t border-[#0A2240]/10 pt-7">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex w-full items-center justify-between gap-5 rounded-xl bg-[#0A2240] px-7 py-5 text-left text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B99547] hover:text-[#0A2240] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span>
                        {loading
                          ? "Sending Your Enquiry..."
                          : "Send Your Enquiry"}
                      </span>

                      <ArrowUpRight
                        size={21}
                        className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>

                    <div className="mt-5 flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-[#B99547]"
                      />

                      <p className="text-xs leading-6 text-[#536070]">
                        Your information will be used
                        to respond to your pest control
                        enquiry.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* LOCATION SECTION */}
      {/* ====================================== */}

      <section className="bg-[#0A2240] py-24 text-white sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <SectionLabel light>
                02 / Our Location
              </SectionLabel>

              <h2 className="mt-9 text-[clamp(2.8rem,5.5vw,6rem)] font-bold leading-[1.12] tracking-normal">
                FIND US
                <br />
                IN{" "}

                <span className="text-[#E8D5AE]">
                  PUTNEY.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="max-w-lg lg:ml-auto">
                <p className="text-base leading-8 text-white/70">
                  QuickShield Services Putney is based
                  at 10 Pettiward Cl, London SW15 6QL.
                  Contact us about pest control for
                  residential and commercial properties
                  in Putney and across London.
                </p>

                <div className="mt-8 flex items-start gap-4">
                  <MapPin
                    size={23}
                    className="mt-1 shrink-0 text-[#E8D5AE]"
                  />

                  <address className="text-base font-medium not-italic leading-8 text-white">
                    {ADDRESS}
                  </address>
                </div>
              </div>
            </Reveal>
          </div>

          {/* GOOGLE MAP */}

          <Reveal className="mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#F8F1E4] p-2 sm:p-3">
              <iframe
                title="QuickShield Services Putney location map"
                src={MAP_EMBED}
                className="block h-[350px] w-full rounded-xl border-0 sm:h-[460px] lg:h-[540px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[#E8D5AE]"
              />

              <span className="text-sm leading-7 text-white/80">
                {ADDRESS}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* SIMPLE CONTACT PROCESS */}
      {/* ====================================== */}

      <section className="bg-[#B99547] py-24 sm:py-32">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel>
              03 / Getting Started
            </SectionLabel>

            <h2 className="mt-8 max-w-3xl text-[clamp(2.7rem,5vw,5.5rem)] font-bold leading-[1.14] tracking-normal">
              A simple way
              <br />
              to get in touch.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: MessageSquareText,
                title: "Tell Us the Issue",
                description:
                  "Describe the pest activity and the areas of your property where you have noticed a problem.",
              },
              {
                number: "02",
                icon: MapPin,
                title: "Share Your Location",
                description:
                  "Provide your postcode and contact details so we can understand where assistance is required.",
              },
              {
                number: "03",
                icon: ShieldCheck,
                title: "Discuss Next Steps",
                description:
                  "We can review your enquiry and discuss appropriate pest control options for your situation.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={index * 80}
                >
                  <div className="group h-full bg-[#F8F1E4] p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0A2240] hover:text-white sm:p-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#B99547] group-hover:text-[#E8D5AE]">
                        {item.number}
                      </span>

                      <Icon
                        size={27}
                        strokeWidth={1.5}
                        className="text-[#B99547] group-hover:text-[#E8D5AE]"
                      />
                    </div>

                    <h3 className="mt-14 text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-[#536070] group-hover:text-white/70">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* FAQ SECTION */}
      {/* ====================================== */}

      <section className="bg-[#F8F1E4] py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* FAQ INTRO */}

            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionLabel>
                  04 / Common Questions
                </SectionLabel>

                <h2 className="mt-9 text-[clamp(2.7rem,4.7vw,5rem)] font-bold leading-[1.15] tracking-normal">
                  FREQUENTLY
                  <br />

                  <span className="text-[#B99547]">
                    ASKED
                  </span>

                  <br />
                  QUESTIONS.
                </h2>

                <p className="mt-7 max-w-sm text-base leading-8 text-[#536070]">
                  Find answers to common questions about
                  contacting QuickShield Services Putney
                  and arranging pest control assistance.
                </p>

                <a
                  href={PHONE_LINK}
                  className="group mt-9 inline-flex items-center gap-3 text-base font-semibold text-[#0A2240] transition-colors hover:text-[#B99547]"
                >
                  <Phone size={19} />

                  Still have a question?

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </Reveal>

            {/* FAQ ACCORDION */}

            <Reveal delay={100}>
              <div className="border-t border-[#0A2240]/20">
                {FAQS.map((faq, index) => {
                  const isOpen = activeFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="border-b border-[#0A2240]/20"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`contact-faq-${index}`}
                        onClick={() =>
                          setActiveFaq(
                            isOpen ? null : index
                          )
                        }
                        className="group flex w-full items-center justify-between gap-5 py-7 text-left sm:py-9"
                      >
                        <span className="flex items-start gap-4">
                          <span className="mt-1 text-sm font-bold text-[#B99547]">
                            0{index + 1}
                          </span>

                          <span className="text-lg font-semibold leading-7 transition-colors group-hover:text-[#947331] sm:text-xl">
                            {faq.question}
                          </span>
                        </span>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-[#B99547] bg-[#B99547] text-[#0A2240]"
                              : "border-[#0A2240]/20 text-[#0A2240] group-hover:border-[#B99547]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={18} />
                          ) : (
                            <Plus size={18} />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={`contact-faq-${index}`}
                          className="pb-8 pl-8 pr-4 sm:pl-10 sm:pr-12"
                        >
                          <p className="max-w-xl text-base leading-8 text-[#536070]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* FINAL CONTACT CTA */}
      {/* ====================================== */}

      <section className="relative overflow-hidden bg-[#0A2240] py-24 text-white sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full border border-[#B99547]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-[380px] w-[380px] rounded-full border border-[#B99547]/10"
        />

        <div className="relative mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16">
          <Reveal>
            <SectionLabel light>
              Ready to Get in Touch?
            </SectionLabel>

            <h2 className="mt-9 max-w-[1100px] text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[1.1] tracking-normal">
              LET'S FIND THE
              <br />

              <span className="text-[#E8D5AE]">
                NEXT STEP.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-8 border-t border-white/20 pt-9 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/65">
              Contact QuickShield Services Putney
              about rats, mice, bed bugs, cockroaches
              or other pest concerns affecting your
              home or business in London.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_LINK}
                className="group inline-flex items-center gap-4 rounded-full bg-[#B99547] px-8 py-5 text-sm font-semibold text-[#0A2240] transition-colors duration-300 hover:bg-white"
              >
                <Phone size={19} />

                Call {PHONE}

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact-form"
                className="group inline-flex items-center gap-4 rounded-full border border-white/30 px-8 py-5 text-sm font-semibold text-white transition-colors hover:border-[#E8D5AE] hover:text-[#E8D5AE]"
              >
                Send an Enquiry

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-white/15 pt-6">
            <p className="text-xs leading-6 text-white/50">
              {COMPANY} · {ADDRESS}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
