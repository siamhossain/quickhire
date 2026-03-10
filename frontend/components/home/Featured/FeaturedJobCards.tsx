import { getFeaturedJobs } from "@/lib/api";
import Heading from "@/components/home/Heading";
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
    <div className="featured-job-section py-10 pt-[110px]">
      <div className="container-main">
        <Heading
          title="Featured"
          coloredTitle=" Jobs"
          buttonText="Show All Jobs"
        />
        <div className="grid grid-cols-4 gap-8">
          {jobs.map((job: any) => (
            <div
              key={job._id}
              className="border border-[#D6DDEB] p-[24px] rounded-none"
            >
              <div className="flex justify-between">
                <div className="logo">
                  <Image
                    src={
                      companyLogos[job.company] || "/company-logos/default.svg"
                    }
                    alt={job.company}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="job-type">
                  <span>Full Time</span>
                </div>
              </div>
              <h3 className="font-semibold">{job.title}</h3>
              <p>{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
