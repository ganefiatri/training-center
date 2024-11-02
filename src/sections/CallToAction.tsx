import Arrow from "../assets/arrow-right.svg";
import starIamge from "../assets/star.png";
import springImage from "../assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Join Sekarang Untuk Dapatkan Diskon</h2>
          <p className="section-desc mt-5">Dapatkan banyak bonus dengan gabung sekarang, kontak admin kami untuk mengetahui lebih lanjut.</p>
          {/* <Image src={starIamge} alt="star image" width={360} className="absolute -left-[350px] -top-[137px]"/>
          <Image src={springImage} alt="spring Image" width={360} className="absolute -right-[331px] -top-[19px]"/> */}
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href="/contact" className="btn btn-primary">Join Sekarang</a>
          {/* <button className="btn btn-text gap-1">
            <span>Pelajari</span>
            <Arrow className="w-5 h-5"/>
          </button> */}
        </div>
      </div>
    </section>
  );
};
