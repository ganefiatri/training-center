import acmeLogo from "../assets/logo-acme.png";
import quantumLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
'use client'

import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";
import Image from "next/image";
import tniLogo from "../assets/tni.png";
import ipdnLogo from "../assets/ipdn.png";
import polisiLogo from "../assets/polisi.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return(
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{translateX: "-50%"}} transition={{duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop"}}>
            <Image src={polisiLogo} alt="Acme Logo" className="logo-ticker-image h-16"/>
            <Image src={tniLogo} alt="Echo Logo" className="logo-ticker-image h-16"/>
            <Image src={polisiLogo} alt="Quantum Logo" className="logo-ticker-image h-16"/>
            <Image src={tniLogo} alt="Celestial Logo" className="logo-ticker-image h-16"/>
            <Image src={polisiLogo} alt="Pulse Logo" className="logo-ticker-image h-16"/>
            <Image src={tniLogo} alt="Apex Logo" className="logo-ticker-image h-16"/>
            {/* second animation */}
            <Image src={polisiLogo} alt="Acme Logo" className="logo-ticker-image h-16"/>
            <Image src={tniLogo} alt="Echo Logo" className="logo-ticker-image h-16"/>
            <Image src={polisiLogo} alt="Quantum Logo" className="logo-ticker-image h-16"/>
            <Image src={tniLogo} alt="Celestial Logo" className="logo-ticker-image h-16"/>
            <Image src={polisiLogo} alt="Pulse Logo" className="logo-ticker-image h-16"/>
            <Image src={tniLogo} alt="Apex Logo" className="logo-ticker-image h-16"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
