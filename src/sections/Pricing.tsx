import CheckIcon from "../assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Paket 1",
    monthlyPrice: 4,
    buttonText: "Join Sekarang",
    popular: false,
    inverse: false,
    features: [
      "Garansi Psikotest",
      "Bimbel 6 bulan",
      "Akademik / SKD / Psikotest 1x/Minggu",
      "Try Out CAT (SKD/Akademik) 2x/Bulan",
      "Try Out Psikotes 2x/Bulan",
    ],
  },
  {
    title: "Paket 2",
    monthlyPrice: 8,
    buttonText: "Join Sekarang",
    popular: true,
    inverse: true,
    features: [
      "Garansi Psikotest",
      "Bimbel 6 bulan",
      "Akademik / SKD / Psikotest 1x/Minggu",
      "Try Out CAT (SKD/Akademik) 2x/Bulan",
      "Try Out Psikotes 2x/Bulan",
      "Modul Cetak 4 Paket",
      "Konsultasi ke Dinas Psikotes TNI 1x"
    ],
  },
  {
    title: "Paket 3",
    monthlyPrice: 12,
    buttonText: "Join Sekarang",
    popular: false,
    inverse: false,
    features: [
      "Garansi Psikotest",
      "Bimbel 6 bulan",
      "Akademik / SKD / Psikotest 1x/Minggu",
      "Try Out CAT (SKD/Akademik) 2x/Bulan",
      "Try Out Psikotes 2x/Bulan",
      "Modul Cetak 4 Paket",
      "Konsultasi ke Dinas Psikotes TNI 1x",
      "Seragam Bimbel 1 Pasang",
      "Mess/Asrama Sudah Termasuk",
      "Medical Checkup di RS 1x"
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Paket Bimbel</h2>
          <p className="section-desc mt-5">Kami Menawarkan beberapa paket program bimbingan belajar yang bisa kamu pilih sesuai kebutuhan.</p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <div className={twMerge("p-10 border border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", inverse === true && 'border-black bg-black text-white/60')}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>{title}</h3>
                {popular === true && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">{monthlyPrice}</span>
                <span className={twMerge("tracking-tight font-bold text-black/50", inverse == true && 'text-white/60')}>juta</span>
              </div>
              <a href="/contact" className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-white text-black')}>{buttonText}</a>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li className="text-sm flex items-center gap-4">
                    <CheckIcon className="w-6 h-6"/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
