import Image from "next/image";
import Booking from "../../../../public/booking.svg";
const HowtoWork = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-3 xl:px-0 py-10 font-public-sans border-primary-200   ">


            <div className="w-[284px] border-r border-text-200 ">
                <Image src={Booking} alt="Easy Service Booking" width={43} height={43} className="mb-4" />

                <h6 className="text-[18px] leading-[28px] font-semibold mb-2 ">Easy Service Booking</h6>

                <p className="max-w-[221px] text-[14px] leading-[24px] text-text-600">Streamlined booking process for clients with service catalogs and availability.</p>

            </div>


        </section>
    );
};

export default HowtoWork;