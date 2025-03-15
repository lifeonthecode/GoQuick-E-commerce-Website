import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { CiTimer } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="pt-[40px] pb-[40px] flex items-center justify-center">
            <div className="lg:container mx-auto">

                {/* footer top wrapper  */}
                <div className="footer_top grid grid-cols-4 pb-10">
                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">Download our app</h4>

                        <div className="flex flex-col space-y-4 mb-4">
                            <Link to={'#'} className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg p-3 flex items-center justify-center"><img src="/src/assets/icons/apple.png" alt="app store" /></Link>

                            <Link to={'#'} className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg p-3 flex items-center justify-center"><img src="/src/assets/icons/google.png" alt="play store" /></Link>
                        </div>

                        <div>
                            <h5 className="text-sm text-[#1b1b1b] font-normal mb-2">Follow us on social media:</h5>
                            <div className="flex items-center gap-4">
                                <Link><FaFacebookF size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaInstagram size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaPinterest size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaYoutube size='1.25rem' color="#1b1b1b" /></Link>
                                <Link><FaTwitter size='1.25rem' color="#1b1b1b" /></Link>
                            </div>
                        </div>
                    </div>



                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">need help</h4>

                        <div className="flex flex-col space-y-4 mb-4">
                            <h4 className="text-2xl text-[#1b1b1b] font-medium">+141277287224</h4>
                            <h4 className="text-2xl text-[#1b1b1b] font-medium">+141277287224</h4>
                            <p className="text-sm text-[#05a845] font-normal">contact@gmail.com</p>
                        </div>
                    </div>

                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">customer</h4>

                        <div className="flex flex-col space-y-4 mb-4">
                            <Link className="text-sm text-[#1b1b1b] font-normal">My account</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">My orders</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">Return orders</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">Wishlist</Link>
                        </div>
                    </div>

                    <div className="footer_wrapper">
                        <h4 className="footer_title text-[1.1rem] text-[#1b1b1b] font-medium capitalize mb-4">information</h4>

                        <div className="flex flex-col space-y-4 mb-4">
                            <Link className="text-sm text-[#1b1b1b] font-normal">About us</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">Contact us</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">Shipping & return</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">FAQ</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">Privacy Policy</Link>
                            <Link className="text-sm text-[#1b1b1b] font-normal">Terms of Use</Link>
                        </div>
                    </div>
                </div>

                {/* footer middle  */}
                <div className="flex items-center justify-center gap-10 pt-8 pb-8 w-full border-t-[1px] border-b-[1px] border-[#dfdada]">
                    <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-normal capitalize"><TbTruckDelivery size='1.5rem' color="#fe8f17" /> delivery from 2-4 hours</span>
                    <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-normal capitalize"><TbTruckDelivery size='1.5rem' color="#fe8f17" /> Quality assurance</span>

                    <span className="flex items-center gap-3 text-base text-[#4d4d4d] font-normal capitalize"><CiTimer size='1.5rem' color="#fe8f17" /> 24/7 delivery service</span>
                </div>


                {/* footer bottom  */}
                <div className="flex items-center justify-between w-full pt-10">
                    <div>
                        <p className="text-sm text-[#1b1b1b] font-normal leading-5">Copyright &copy; GoQuick, All Rights Reserved</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <img className="w-8 h-8 object-cover" src="/src/assets/icons/visa.png" alt="visa" />
                        <img className="w-8 h-8 object-cover" src="/src/assets/icons/master card.png" alt="master card" />
                        <img className="w-8 h-8 object-cover" src="/src/assets/icons/american-express.png" alt="american express card" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;