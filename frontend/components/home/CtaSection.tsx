import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-section container-main">
      <div className=" bg-[url('/images/cta-section.png')] bg-cover bg-center bg-no-repeat h-[414px] bg-white">
        <div className="cta-text-content px-[70px] py-[90px] w-full md:w-3/4 lg:w-1/2 text-left ">
          <h2 className="heading-lg text-white mb-[24px]">
            Start posting
            <br /> jobs today
          </h2>
          <p className="text-body text-white font-medium mb-[24px]">
            Start posting jobs for only $10.
          </p>
          <Link
            href="/signup"
            className="font-epilogue font-bold text-[16px] leading[160%] bg-white text-primary py-2 rounded-none w-[179px] h-[50px] flex items-center justify-center"
          >
            Sign Up For Free
          </Link>
        </div>
      </div>
    </section>
  );
}
