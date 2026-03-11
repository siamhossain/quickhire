import Heading from "@/components/home/Heading";
import LatestJobCards from "@/components/home/Latest//LatestJobCards";

export default function LatestSection() {
  return (
    <section className="latest-job-section bg-[url('/images/latest-job-bg.png')] bg-cover bg-center bg-no-repeat pt-[70px] pb-[70px]">
      <div className="container-main">
        <Heading
          title="Latest"
          coloredTitle=" Jobs"
          buttonText="Show All Jobs"
        />
        <LatestJobCards />
      </div>
    </section>
  );
}
