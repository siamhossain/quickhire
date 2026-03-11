import { getFeaturedJobs } from "@/lib/api";
import Image from "next/image";

const companyLogos: Record<string, string> = {
  Revolut: "images/company-logos/Revolut.svg",
  Dropbox: "images/company-logos/Dropbox.svg",
  Pitch: "images/company-logos/Pitch.svg",
  Blinklist: "images/company-logos/Blinklist.svg",
  ClassPass: "images/company-logos/ClassPass.svg",
  Canva: "images/company-logos/Canva.svg",
  GoDaddy: "images/company-logos/GoDaddy.svg",
  Twitter: "images/company-logos/Twitter.svg",
};

export default async function FeaturedJobCard() {
  const jobs = await getFeaturedJobs();

  return (
    <div className="featured-jobs">
      <div className="grid grid-cols-4 gap-8">
        {jobs.map((job: any) => (
          <div
            key={job._id}
            className="border border-[#D6DDEB] p-[24px] rounded-none"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="logo">
                <Image
                  src={
                    companyLogos[job.company] ||
                    "images/company-logos/default.svg"
                  }
                  alt={job.company}
                  width={48}
                  height={48}
                />
              </div>
              <div className="job-type leading-[160%] pt-[5px]">
                <span className="font-regular tex-base text-primary border border-primary px-[11px] py-[8px] rounded-none">
                  Full Time
                </span>
              </div>
            </div>
            <h3 className="font-epilogue font-semibold leading-[160%] text-color-heading text-lg mb-1">
              {job.title}
            </h3>
            <div className="company-info flex gap-[20px] items-center">
              <p className="text-body leading-[160%] text-[#515B6F] relative before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:bg-gray-500 before:rounded-full before:right-[-11px] before:top-[10px]">
                {job.company}
              </p>
              <p className="text-body leading-[160%] text-[#515B6F]">
                {job.location}
              </p>
            </div>
            <div className="descrition pt-[2px]">
              <p className="text-body text-[15px] leading-[160%] text-[#7C8493] mt-4">
                {job.description}
              </p>
            </div>
            <div className="categories pt-[16px]">
              <ul className="category-list flex gap-[12px] mb-[8px]">
                <li className="font-semibold text-[14px] text-[#FFB836] leading-[160%] px-[16px] py-[4px] bg-[rgb(235_133_51/0.1)] opacity-100 rounded-[80px]">
                  {job.category}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
