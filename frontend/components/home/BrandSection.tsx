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
    <section className="brand-section py-12 bg-white">
      <div className="container-main">
        <p className="text-[18px] font-regular leading-[160%] mb-[30px] text-[#202430] opacity-50">
          Companies we helped grow
        </p>

        <div className="flex flex-wrap items-center justify-between gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
