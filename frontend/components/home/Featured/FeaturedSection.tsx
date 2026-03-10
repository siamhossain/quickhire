import Heading from "@/components/home/Heading";
import FeaturedJobCards from "@/components/home/Featured/FeaturedJobCards";

export default function FeaturedSection() {
  return (
    <section className="category-section pt-[70px] pb-[70px]">
      <div className="container-main">
        <Heading
          title="Featured"
          coloredTitle=" Jobs"
          buttonText="Show All Jobs"
        />
        <FeaturedJobCards />
      </div>
    </section>
  );
}
