import Brands from "@/components/home/BrandSection";
import CategorySection from "@/components/home/Categories/CategorySection";
import Hero from "@/components/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Brands />
      <CategorySection />
    </div>
  );
}
