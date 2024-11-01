import Image from "next/image";
import productImage from "../assets/product-image.png";
import pyramidImage from "../assets/pyramid.png";
import tubeImage from "../assets/tube.png";
import tableImage from "../assets/table.png";

export const ProductShowcase = () => {
  return(
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading ">
          <div className="flex justify-center">
            <div className="tag">Tingkatkan Level Anda</div>
          </div>
          <h2 className="section-title mt-5">Kami Akan Meningkatkan Level Keahlian Anda</h2>
          <p className="section-desc mt-5">Setiap Tahun nya Pendaftar mengalami peningkatan, sementara kuota terkadang mengalami penuruan, berikut data kuota dan jumlah pendaftar sekolah kedinasan 6 tahun terakhir.</p>
        </div>
        <div className="relative">
          <Image src={tableImage} alt="product image" className="mt-10"/>
          {/* <Image src={pyramidImage} alt="pyramid image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32" /> */}
          {/* <Image src={tubeImage} alt="pyramid image" height={262} width={262} className="hidden md:block absolute bottom-24 -left-36" /> */}
        </div>
      </div>
    </section>
  );
};
