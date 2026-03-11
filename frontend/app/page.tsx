import Brands from "@/components/home/BrandSection";
import CategorySection from "@/components/home/Categories/CategorySection";
import CtaSection from "@/components/home/CtaSection";
import FeaturedSection from "@/components/home/Featured/FeaturedSection";
import Hero from "@/components/home/HeroSection";
import LatestSection from "@/components/home/Latest/LatestSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Brands />
      <CategorySection />
      <CtaSection />
      <FeaturedSection />
      <LatestSection />
    </div>
  );
}
