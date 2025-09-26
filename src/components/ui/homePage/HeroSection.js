import Image from "next/image";
import Apple from "../../../../public/Apple.svg";
import Full from "../../../../public/full.svg";
import HeadingImage from "../../../../public/headingsvg.svg";
import HeroImage from "../../../../public/images/hero-image.png";
import bgImagetwo from "../../../../public/images/image-bg-2.png";
import Leftbg from "../../../../public/left-bg.svg";
import Playstore from "../../../../public/Playstore.svg";
const HeroSection = () => {
    return (
        <section className="relative max-w-[1420px] mx-auto   overflow-hidden ">
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
            <div className="max-w-[1200px] mx-auto relative px-3 xl:px-0   ">
                <div className="flex flex-col lg:flex-row items-center justify-between ">
                    {/* Text content */}
                    <div className="       text-center lg:text-left">
                        <Image
                            className="hidden lg:block absolute  top-[7%] left-[21%]"
                            src={Full}
                            alt="Hero Image"
                            width={129}
                            height={134}
                        />
                        <h1
                            className="font-public-sans font-bold z-10 text-gray-900 dark:text-white 
                                     text-4xl md:text-5xl lg:text-6xl xl:text-[84px] 
                                     leading-tight sm:leading-[1.1] xl:leading-[92px]
                                     mb-4 sm:mb-6"
                        >
                            All Your Jobs One
                            <span className="relative ">
                                <Image
                                    className="absolute  bottom-[-5px]  z-0 left-0"
                                    src={HeadingImage}
                                    alt="Hero Image"
                                    width={415}
                                    height={16}
                                />
                                Smart App
                            </span>
                        </h1>

                        <p
                            className="text-base text-[16px] leading-[26px] font-public-sans text-gray-600 dark:text-gray-300 
                                  max-w-[495px] mx-auto lg:mx-0"
                        >
                            Built for business owners, employees, and clients streamline job
                            scheduling, service tracking, and team management in one powerful
                            app.
                        </p>

                        {/* Optional CTA buttons */}
                        <div className="mt-16 mb-10 flex flex-row gap-4 justify-center lg:justify-start">
                            <button
                                className=" font-public-sans flex gap-x-[16px] justify-center text-heading-800  tracking-[-0.47px] border  border-primary-200  
                                             font-semibold rounded-[7px] transition-colors duration-200 w-[149px] h-[49px] "
                            >
                                <Image src={Apple} alt="Apple Logo" width={22} height={27} />

                                <div>
                                    <span className="text-[9px] leading-[9px] font-normal ">
                                        Download on the
                                    </span>
                                    <h3 className="text-[18px]  font-semibold leading-3">
                                        {" "}
                                        Apple Store
                                    </h3>
                                </div>
                            </button>
                            <button
                                className=" font-public-sans flex justify-center gap-x-[16px] text-heading-800   border border-primary-200  
                                             font-semibold rounded-[7px] transition-colors duration-200 w-[180px] h-[49px] "
                            >
                                <Image
                                    src={Playstore}
                                    alt="Apple Logo"
                                    width={23}
                                    height={27}
                                />

                                <div>
                                    <span className="text-[9px] leading-[9px] font-normal ">
                                        Download on the
                                    </span>
                                    <h3 className="text-[18px]  font-semibold tracking-[-0.47px] leading-3">
                                        {" "}
                                        Google Play
                                    </h3>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="  relative w-full">
                        <div className="absolute top-0 left-[20%] w-full h-full   z-0">
                            <Image
                                src={bgImagetwo}
                                alt="Background Image"
                                width={1100}
                                height={900}
                            />
                        </div>
                        <div className=" relative   bottom-10 z-[99] w-full">
                            <Image
                                src={HeroImage}
                                alt="Job management app interface showing scheduling and tracking features"
                                width={742}
                                height={656}
                                className="w-[742px]   h-[600px]   "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
