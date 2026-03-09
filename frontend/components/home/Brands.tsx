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
      <div className="max-w-[1192px] mx-auto px-4">
        <p className="text-[18px] font-regular leading-[160%] mb-[30px] text-[#202430] opacity-50">
          Companies we helped grow
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
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
