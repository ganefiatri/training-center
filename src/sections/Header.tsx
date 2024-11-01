import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "../assets/logo-baru.png";
import Menu from "../assets/menu.svg";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Ingin Bimbingan Sampai Lulus Menjadi Taruna</p>
        <div className="inline-flex gap-1 items-center">
          <p>Mari Join Bersama kami</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="flex items-center justify-between mt-4">
            <Image src={Logo} alt="Logo" className="rounded-full w-20 h-20 md:w-24 md:h-24"/>
            <Menu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center tracking-tight">
              <a href="/">Beranda</a>
              <a href="/program">Program</a>
              <a href="/about">Tentang</a>
              <a href="/contact" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center">Join</a> 
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
