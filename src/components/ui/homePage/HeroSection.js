import Image from "next/image";
import HeroImage from '../../../../public/images/hero-image.png';
import Leftbg from '../../../../public/left-bg.svg';

const HeroSection = () => {
    return (
        <section className="relative max-w-[1420px] mx-auto  overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 z-0">
                <Image
                    className="h-[200px] sm:h-[600px] w-auto"
                    src={Leftbg}
                    alt=""
                    width={560}
                    height={600}
                    priority
                />
            </div>

            {/* Main content container */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-5 xl:px-0 py-12 sm:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                    {/* Text content */}
                    <div className="flex-1 max-w-[655px] text-center lg:text-left">
                        <h1 className="font-public-sans font-bold text-gray-900 dark:text-white 
                                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[84px] 
                                     leading-tight sm:leading-[1.1] xl:leading-[92px]
                                     mb-4 sm:mb-6">
                            All Your Jobs<br />
                            One Smart App
                        </h1>

                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 
                                    leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                            Built for business owners, employees, and clients streamline job
                            scheduling, service tracking, and team management in one powerful app.
                        </p>

                        {/* Optional CTA buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white 
                                             font-semibold rounded-lg transition-colors duration-200">
                                Get Started
                            </button>
                            <button className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 
                                             text-gray-700 dark:text-gray-300 font-semibold rounded-lg 
                                             transition-colors duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="flex-1 max-w-[720px] bg-hero w-full">
                        <Image
                            src={HeroImage}
                            alt="Job management app interface showing scheduling and tracking features"
                            width={720}
                            height={656}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;