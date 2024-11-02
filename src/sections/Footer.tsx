import Image from "next/image";
import logo from "../assets/logo-baru.png";
import SocialX from "../assets/social-x.svg";
import SocialYoutube from "../assets/social-youtube.svg";
import SocialInsta from "../assets/social-insta.svg";
import SocialLinkedin from "../assets/social-linkedin.svg";
import SocialPin from "../assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <Image src={logo} alt="Logo" height={100} className="relative rounded-full bg-white/85"/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Beranda</a>
          <a href="#">Program</a>
          <a href="#">Tentang</a>
          <a href="#">Kontak</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInsta/>
          <SocialLinkedin/>
          <SocialPin/>
          <SocialX/>
          <SocialYoutube/>
        </div>
        <p className="mt-6">&copy; 2024 Training Center. All Right reserved.</p>
      </div>
    </footer>

  );
};
