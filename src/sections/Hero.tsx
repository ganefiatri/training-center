import Image from "next/image";
import ArrowIcon from "../assets/arrow-right.svg";
import cogImage from "../assets/cog.png";
import cylenderImage from "../assets/cylinder.png";
import nodleImage from "../assets/noodle.png";
import heroImage from "../assets/heropic.png";
import timerImage from "../assets/timer.png";

export const Hero = () => {
  return(
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">version 1.0</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Bimbel Membantu Wujudkan Mimpimu</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">Salah satu bimbel Persiapan tes seleksi masuk TNI, POLRI & Sekolah Kedinasan yang memberikan bimbingan sampai lulus menjadi taruna.</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="/contact" className="btn btn-primary">Join Sekarang</a>
              {/* <button className="btn btn-primary">Join Sekarang</button> */}
              {/* <button className="btn btn-text gap-1">
                <span>Pelajari</span>
                <ArrowIcon className="h-5 w-5"/>
              </button> */}
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={heroImage} alt="Image Hero" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"/>
            {/* <Image src={timerImage} width={220} height={220} alt="Image Hero second" className="hidden md:block -top-8 -left-32 md:absolute"/>
            <Image src={nodleImage} width={220} height={220} alt="Noodle Image" className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"/> */}
          </div>
        </div>
      </div>
    </section>
  );
};
