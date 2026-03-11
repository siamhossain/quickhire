import { getLatestJobs } from "@/lib/api";
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

export default async function LatestJobCards() {
  const jobs = await getLatestJobs();

  return (
    <div className="latest-jobs">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-8">
        {jobs.map((job: any) => (
          <div
            key={job._id}
            className="bg-white px-4 sm:px-6 md:px-[40px] py-6 sm:py-8 md:py-[24px] rounded-none"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[24px] items-start mb-4">
              <div className="logo flex-shrink-0">
                <Image
                  src={
                    companyLogos[job.company] ||
                    "images/company-logos/default.svg"
                  }
                  alt={job.company}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="latest-job-content flex-1">
                <h3 className="font-epilogue font-semibold leading-[160%] text-color-heading text-lg mb-1">
                  {job.title}
                </h3>

                <div className="company-info flex flex-wrap flex-col sm:flex-row gap-2 sm:gap-x-[20px] sm:gap-y-[10px] items-start sm:items-center mb-[8px]">
                  <p className="text-body leading-[160%] text-[#515B6F] relative before:absolute before:content-[''] before:w-[4px] before:h-[4px] before:bg-gray-500 before:rounded-full before:right-[-11px] before:top-[10px]">
                    {job.company}
                  </p>
                  <p className="text-body leading-[160%] text-[#515B6F]">
                    {job.location}
                  </p>
                </div>

                <div className="job-type-category-wrap flex flex-wrap flex-col sm:flex-row gap-2 sm:gap-[20px] items-start sm:items-center">
                  <span className="font-regular text-[14px] text-[#56CDAD] bg-[rgb(86_205_173/0.1)] px-[11px] py-[5px] h-[34px] flex items-center justify-center rounded-[80px] relative after:absolute after:content-[''] after:w-[1px] after:h-[34px] after:bg-[#D6DDEB] after:right-[-11px] after:top-[0] sm:after:block after:hidden">
                    Full Time
                  </span>

                  <div className="categories">
                    <ul className="category-list flex gap-2 sm:gap-[12px] flex-wrap">
                      <li className="font-semibold text-[14px] text-[#FFB836] leading-[160%] px-[16px] h-[34px] flex items-center bg-[rgb(235_133_51/0.1)] opacity-100 rounded-[80px]">
                        {job.category}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
