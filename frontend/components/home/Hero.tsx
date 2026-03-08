export default function Hero () {
    return (
        <section className="hero-section bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-[794px] text-center py-20 bg-white">
            <div className="container-main">
                <div className="hero-text-content w-full md:w-3/4 lg:w-1/2 text-left">
                    <h1 className="heading-xl mb-6">
                        Discover <br />
                        more than <br />
                        <span className="text-secondary">5000+ Jobs</span>
                    </h1>
                    <p className="font-regular text-[20px] leading-[160%] text-[#515B6F]">
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>
                </div>
            </div>
        </section>
    );
}

