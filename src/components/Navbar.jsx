



// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fixed: Base text is now your logo's exact Navy Blue (#0A2240) and switches to Gold on active/hover
//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-[#C5A86B] font-bold" 
//         : "text-[#0A2240] hover:text-[#C5A86B]"
//     }`;

//   // Luxury Mobile Styling: Adjusted to match light background theme cleanly
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/5 hover:text-[#C5A86B]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-amber-100 ${
//         isScrolled
//           ? "shadow-xl border-b border-[#C5A86B]/30"
//           : "border-b border-[#C5A86B]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo (Renders original brand colors directly on amber layout) */}
//           <Link to="/" className="flex items-center h-full py-3" onClick={() => setOpen(false)}>
//             <img 
//               src="/images/pesbyelogo.webp" 
//               alt="Pesbye Services Logo" 
//               className="h-12 md:h-16 w-auto object-contain" 
//             />
//           </Link>

//           {/* Desktop Navigation Link Stack */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink 
//                   key={item} 
//                   to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C5A86B]" />}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location Badge - Dynamic Navy Context Alignment */}
//             <div className="flex items-center gap-2 text-[#0A2240]/70 font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#C5A86B]/30 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>Mayfair, London</span>
//             </div>
//           </div>

//           {/* Mobile Toggle Trigger */}
//           <button 
//             onClick={() => setOpen(!open)} 
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/5 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Popout Panel Grid */}
//       {open && (
//         <div className="md:hidden bg-amber-100 border-t border-[#C5A86B]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//            <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
//            <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }















// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[14px] lg:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
//       isActive
//         ? "text-white font-bold"
//         : "text-[#0A2240] hover:text-white"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#0A2240] text-white shadow-md shadow-[#0A2240]/20"
//         : "text-[#0A2240] hover:bg-[#0A2240]/10 hover:text-white"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 transition-all duration-500 bg-[#b99547] ${
//         isScrolled
//           ? "shadow-xl border-b border-[#0A2240]/20"
//           : "border-b border-[#0A2240]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center h-full py-3"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/quick1.webp"
//               alt="Pesbye Services Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <div className="flex items-center gap-8">
//               {["Home", "Services", "About Us", "Contact Us"].map((item) => (
//                 <NavLink
//                   key={item}
//                   to={
//                     item === "Home"
//                       ? "/"
//                       : `/${item.toLowerCase().replace(" ", "-")}`
//                   }
//                   className={navClass}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       {item}
//                       {isActive && (
//                         <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0A2240]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Location */}
//             <div className="flex items-center gap-2 text-[#0A2240] font-semibold text-xs uppercase tracking-widest pl-8 border-l border-[#0A2240]/20 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.3}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#0A2240]"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                 />
//               </svg>

//               <span>purley, London</span>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-[#0A2240] text-2xl h-10 w-10 flex items-center justify-center rounded-xl hover:bg-[#0A2240]/10 active:scale-95 transition-all"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-[#b99547] border-t border-[#0A2240]/20 p-6 flex flex-col gap-2 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/"
//             className={mobileNavClass}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/services"
//             className={mobileNavClass}
//           >
//             Services
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/about-us"
//             className={mobileNavClass}
//           >
//             About Us
//           </NavLink>

//           <NavLink
//             onClick={() => setOpen(false)}
//             to="/contact-us"
//             className={mobileNavClass}
//           >
//             Contact Us
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// }
















import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

// ========================================
// QUICKSHIELD SERVICES PUTNEY
// NAVBAR CONFIGURATION
// ========================================

const COMPANY = "QuickShield Services Putney";

const PHONE = "+44 7459 692222";
const PHONE_LINK = "tel:+447459692222";

const ADDRESS =
  "10 Pettiward Cl, London SW15 6QL, United Kingdom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

// ========================================
// MAIN NAVBAR COMPONENT
// ========================================

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // ========================================
  // SCROLL HANDLER
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // ========================================
  // CLOSE MENU ON ROUTE CHANGE
  // ========================================

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // ========================================
  // ESCAPE KEY + BODY SCROLL LOCK
  // ========================================

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  return (
    <>
      {/* ======================================== */}
      {/* FIXED NAVBAR */}
      {/* ======================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "shadow-[0_12px_35px_rgba(10,34,64,0.16)]"
            : ""
        }`}
        style={{
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        <nav
          aria-label="Main navigation"
          className={`relative border-b border-[#0A2240]/10 bg-[#B99547] transition-all duration-300 ${
            isScrolled
              ? "h-[74px] lg:h-[82px]"
              : "h-[82px] lg:h-[98px]"
          }`}
        >
          <div className="mx-auto flex h-full max-w-[1480px] items-center justify-between gap-5 px-5 sm:px-10 lg:px-16">

            {/* ================================= */}
            {/* LOGO */}
            {/* ================================= */}

            <Link
              to="/"
              aria-label={`${COMPANY} - Home`}
              onClick={() => setOpen(false)}
              className="relative z-10 flex h-full shrink-0 items-center"
            >
              <img
                src="/images/quick1.webp"
                alt={`${COMPANY} logo`}
                className={`w-auto max-w-[160px] object-contain transition-all duration-300 sm:max-w-[185px] lg:max-w-[210px] ${
                  isScrolled
                    ? "h-[64px] lg:h-[73px]"
                    : "h-[72px] lg:h-[88px]"
                }`}
              />
            </Link>

            {/* ================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================= */}

            <div className="hidden items-center gap-1 lg:flex xl:gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `group relative inline-flex min-h-[48px] items-center rounded-full px-4 text-sm font-semibold transition-all duration-300 xl:px-5 ${
                      isActive
                        ? "bg-[#0A2240] text-white"
                        : "text-[#0A2240] hover:bg-[#0A2240]/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* ================================= */}
            {/* DESKTOP CONTACT BUTTON */}
            {/* ================================= */}

            <div className="hidden shrink-0 lg:flex">
              <a
                href={PHONE_LINK}
                className="group inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#0A2240] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8F1E4] hover:text-[#0A2240]"
              >
                <Phone size={17} />

                <span>Call Us Now</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* ================================= */}
            {/* MOBILE ACTIONS */}
            {/* ================================= */}

            <div className="flex shrink-0 items-center gap-3 lg:hidden">

              <a
                href={PHONE_LINK}
                aria-label={`Call ${COMPANY}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A2240]/30 text-[#0A2240] transition-all duration-300 hover:bg-[#0A2240] hover:text-white"
              >
                <Phone size={19} />
              </a>

              <button
                type="button"
                onClick={() =>
                  setOpen((current) => !current)
                }
                aria-label={
                  open
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={open}
                aria-controls="putney-mobile-menu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2240] text-white transition-colors duration-300 hover:bg-[#F8F1E4] hover:text-[#0A2240]"
              >
                {open ? (
                  <X size={23} />
                ) : (
                  <Menu size={23} />
                )}
              </button>

            </div>
          </div>
        </nav>
      </header>

      {/* ======================================== */}
      {/* MOBILE MENU OVERLAY */}
      {/* ======================================== */}

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] bg-[#07182D]/65 backdrop-blur-[3px] transition-opacity duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* ======================================== */}
      {/* MOBILE SLIDING DRAWER */}
      {/* ======================================== */}

      <aside
        id="putney-mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[60] flex w-[min(90vw,420px)] flex-col overflow-y-auto bg-[#F7F5F0] shadow-[-20px_0_60px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out lg:hidden ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
        style={{
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        {/* ================================= */}
        {/* DRAWER HEADER */}
        {/* ================================= */}

        <div className="flex items-center justify-between border-b border-[#0A2240]/10 bg-[#B99547] px-6 py-5">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0A2240]/70">
              QuickShield Services
            </p>

            <p className="mt-1 text-xl font-bold text-[#0A2240]">
              PUTNEY
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2240] text-white transition-colors hover:bg-[#F8F1E4] hover:text-[#0A2240]"
          >
            <X size={22} />
          </button>

        </div>

        {/* ================================= */}
        {/* DRAWER NAVIGATION */}
        {/* ================================= */}

        <div className="flex-1 px-6 py-9">

          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#B99547]" />

            <span className="text-xs font-semibold uppercase tracking-wide text-[#947331]">
              Explore Our Website
            </span>
          </div>

          <div className="border-t border-[#0A2240]/10">
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between gap-5 border-b border-[#0A2240]/10 py-5 transition-colors duration-300 ${
                    isActive
                      ? "text-[#947331]"
                      : "text-[#0A2240] hover:text-[#947331]"
                  }`
                }
              >
                <div className="flex items-center gap-4">

                  <span className="text-sm font-bold text-[#B99547]">
                    0{index + 1}
                  </span>

                  <span className="text-[22px] font-bold">
                    {item.label}
                  </span>

                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </NavLink>
            ))}
          </div>

          {/* CONTACT INFORMATION */}

          <div className="mt-10 rounded-[18px] border border-[#0A2240]/10 bg-white p-6">

            <div className="mb-5 flex items-center gap-3">
              <ShieldCheck
                size={20}
                className="text-[#947331]"
              />

              <h3 className="text-base font-bold text-[#0A2240]">
                Contact QuickShield
              </h3>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[#947331]"
              />

              <p className="text-sm leading-7 text-[#536071]">
                {ADDRESS}
              </p>
            </div>

            <a
              href={PHONE_LINK}
              className="mt-6 flex min-h-[52px] items-center justify-between gap-3 rounded-full bg-[#0A2240] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#B99547] hover:text-[#0A2240]"
            >
              <span className="flex items-center gap-3">
                <Phone size={17} />

                {PHONE}
              </span>

              <ArrowUpRight size={18} />
            </a>

          </div>
        </div>

        {/* ================================= */}
        {/* DRAWER FOOTER */}
        {/* ================================= */}

        <div className="border-t border-[#0A2240]/10 px-6 py-5">
          <Link
            to="/contact-us"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between text-sm font-bold text-[#0A2240]"
          >
            Request a Callback

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </aside>
    </>
  );
}
