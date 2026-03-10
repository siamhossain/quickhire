import Brands from "@/components/home/BrandSection";
import CategorySection from "@/components/home/Categories/CategorySection";
import CtaSection from "@/components/home/CtaSection";
import Hero from "@/components/home/HeroSection";
import Image from "next/image";
import FeaturedJobCard from "@/components/home/Featured/FeaturedJobCards";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Brands />
      <CategorySection />
      <CtaSection />
      <FeaturedJobCard />
    </div>
  );
}
