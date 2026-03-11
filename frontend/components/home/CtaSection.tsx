//

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-section container-main">
      <div className="bg-primary lg:bg-[url('/images/cta-section.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat h-[300px] sm:h-[350px] md:h-[414px]">
        <div className="cta-text-content px-4 sm:px-8 md:px-[70px] py-12 sm:py-16 md:py-[90px] w-full md:w-3/4 lg:w-1/2 text-left">
          <h2 className="heading-lg text-white mb-6 sm:mb-8 md:mb-[24px] text-center md:text-left">
            Start posting
            <br /> jobs today
          </h2>
          <p className="text-body text-white font-medium mb-6 sm:mb-8 md:mb-[24px] text-center md:text-left">
            Start posting jobs for only $10.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/signup"
              className="font-epilogue font-bold text-[16px] leading-[160%] bg-white text-primary py-2 rounded-none w-[179px] h-[50px] flex items-center justify-center"
            >
              Sign Up For Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
