import Heading from "@/components/home/Heading";
import CategoryCards from "@/components/home/Categories/CategoryCard";

export default function CategorySection() {
  return (
    <section className="category-section pt-[50px] md:pt-[70px] pb-[50px] md:pb-[70px]">
      <div className="container-main">
        <Heading
          title="Explore by"
          coloredTitle=" category"
          buttonText="Show All Jobs"
        />
        <CategoryCards />
      </div>
    </section>
  );
}
