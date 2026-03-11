import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "Vodafone", logo: "/images/brands/vodafone-logo.svg" },
    { name: "Intel", logo: "/images/brands/intel-logo.svg" },
    { name: "Tesla", logo: "/images/brands/tesla-logo.svg" },
    { name: "AMD", logo: "/images/brands/amd-logo.svg" },
    { name: "Talkit", logo: "/images/brands/talkit-logo.svg" },
  ];

  return (
    <section className="brand-section pt-25 pb-10 md:py-12 bg-white">
      <div className="container-main">
        <p className="text-[16px] md:text-[18px] font-regular leading-[160%] mb-[24px] md:mb-[30px] text-[#202430] opacity-50 text-center md:text-left">
          Companies we helped grow
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-[90px] sm:w-[110px] md:w-[130px] lg:w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
