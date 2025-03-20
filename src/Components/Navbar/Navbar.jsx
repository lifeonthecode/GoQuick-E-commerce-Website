import { Link, NavLink } from "react-router";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiMenuSearchLine } from "react-icons/ri";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";


const Navbar = () => {

    const [sticky, setSticky] = useState('');

    useEffect(() => {
        console.log('hollow just check it');

        window.addEventListener('scroll', isSticky);

        // clear function 

        return () => {
            window.removeEventListener('scroll', isSticky)
        }

    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? 'is-sticky' : '';
        setSticky(stickyClass);
    }

    return (
        <div className={`header_component ${sticky}`}>

            {/* navbar top  */}
            <div className="flex items-center justify-center w-full h-[97px] border-b-[1px] border-[#e2e2e4]">

                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">
                        {/* logo wrapper  */}
                        <div className="logo_wrapper">
                            <Link to='/'><img className="max-w-[156px] h-[34px] object-cover" src="/icons/logo.png" alt="logo" /></Link>
                        </div>

                        {/* middle wrapper  */}
                        <div className="middle_wrapper max-w-[620px] w-full h-[49px]">
                            <form action="#" className="max-w-[620px] h-[49px] flex items-center border-[1px] border-[#e2e2e4] p-2 gap-4 justify-center">
                                <p className="w-[35px] h-full bg-none cursor-pointer"><RiMenuSearchLine size='2rem' /> </p>
                                <input type="text" className="max-w-[554px] w-full h-[49px] border-0 bg-none pl-4" placeholder="Search for product.." />
                                <button type="submit" className="w-[35px] h-full bg-[#05a845] flex items-center justify-center rounded-lg cursor-pointer"><CiSearch size={'1.25rem'} color="white" /> </button>
                            </form>
                        </div>

                        {/* right wrapper  */}
                        <div className="right_wrapper flex items-center gap-6 justify-center">
                            <Link to='#' className=""><LuUser size='2rem' color="black" /> </Link>
                            <Link to='#' className="relative">
                                <CiHeart size='2rem' color="black" />
                                <span className="absolute -top-2.5 -right-2 bg-[#05a845] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white text-sm">0</span>
                            </Link>

                            <Link to='#' className="relative">

                                <LuShoppingCart size='2rem' color="black" />
                                <span className="absolute -top-2.5 -right-2 bg-[#05a845] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white text-sm">0</span>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

            {/* navbar bottom  */}
            <div className="w-full h-[50px] flex items-center justify-center">
                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">

                        {/* left wrapper  */}
                        <div className="left_wrapper flex items-center gap-[65px]">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="cursor-pointer max-w-[169px] w-full h-[50px] bg-[#05a845] flex items-center gap-4 p-4 text-white"><FaBars /> <span className="text-base font-medium capitalize">All Categories</span></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>All Categories</a></li>
                                    <li><a>Meat & fish</a></li>
                                    <li><a>Cooking</a></li>
                                    <li><a>Beverages</a></li>
                                    <li><a>home & Cleaning</a></li>
                                    <li><a>Pest Control</a></li>
                                    <li><a>Stationery & Office</a></li>
                                </ul>
                            </div>

                            <nav className="flex items-center gap-[65px]">
                                <NavLink to='/' className='text-base text-[#1b1b20] font-medium capitalize'>Offers</NavLink>
                                <NavLink to='#' className='text-base text-[#1b1b20] font-medium capitalize'>today's deals</NavLink>
                                <NavLink to='#' className='text-base text-[#1b1b20] font-medium capitalize'>order tracking</NavLink>
                            </nav>
                        </div>

                        {/* right wrapper  */}
                        <div className="right_wrapper flex items-center">
                            <p className="text-base text-[#1b1b20] capitalize font-normal">need help? <span className="lowercase text-[#05a845] border-b-[1px] border-[#05a845] cursor-pointer">contact@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;