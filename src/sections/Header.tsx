'use client'
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "../assets/logo-baru.png";
import Menu from "../assets/menu.svg";
import Image from "next/image";
import React, { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 blur-bg z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Ingin Bimbingan Sampai Lulus Menjadi Taruna</p>
        <div className="inline-flex gap-1 items-center">
          <p>Mari Join Bersama kami</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div>
        <div className="container">
        <nav className="flex items-center justify-between flex-wrap mt-4">
          <div className="flex items-center flex-shrink-0 text-white">
            <Image src={Logo} className="rounded-full w-20 h-20 md:w-24 md:h-24" alt="Logo" />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:flex-grow-0 lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
          >
            <div className="lg:flex-grow ">
              <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 md:p-6">
                Beranda
              </a>
              <a href="/program" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 md:p-6">
                Program
              </a>
              <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 md:p-6">
                Tentang
              </a>
              <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 bg-black text-white px-6 py-2 rounded-lg font-medium align-items justify-center">
                Join
              </a>
            </div>
          </div>
        </nav>
          {/* <div className="flex items-center justify-between mt-4">
            <Image src={Logo} alt="Logo" className="rounded-full w-20 h-20 md:w-24 md:h-24"/>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >  
              <Menu className="h-5 w-5 md:hidden" />
            </button>
            <nav className={'w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-6 text-black/60 items-center tracking-tight ${isOpen ? "block" : "hidden"}'}>
              <a href="/" className="block">Beranda</a>
              <a href="/program" className="block">Program</a>
              <a href="/about" className="block">Tentang</a>
              <a href="/contact" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center">Join</a> 
            </nav>
          </div> */}
        </div>
      </div>
    </header>
  );
};

