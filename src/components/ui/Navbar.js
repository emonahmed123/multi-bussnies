import Image from "next/image";
import Logo from '../../../public/Logo.svg';
const Navbar = () => {
    return (
        <header>
            <nav className='bg-white flex justify-between static top-0 max-w-[1200px] mx-auto px-3 xl:px-0 py-[15px] items-center '>

                <Image
                    src={Logo}
                    alt="Logo"
                    width={147}
                    height={60}
                    className="w-[130px]  sm:w-[147px] sm: h-[60px] "
                />



                <div>
                    <button className="px-6 py-2 bg-primary text-white 
                                             font-semibold rounded-lg transition-colors duration-200 m-4 w-[142px] h-[46px] text-[16px] leading-[24px] shadow-[0px_8px_16px_0px_rgba(57,164,50,0.37)]" >
                        Get Started
                    </button>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;