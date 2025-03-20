import { Link } from "react-router";

const Connected = () => {
    return (
        <div className="lg:container mx-auto">

            <div className="grid grid-cols-2 items-center justify-between">

                {/* left wrapper  */}
                <div className="left_wrapper max-w-[644px] w-full min-h-[610px] h-full bg-[#fefaf1] rounded-l-2xl flex items-center justify-center p-6">
                    <img src="/connecting/connecting_1.png" alt="connecting" />
                </div>


                {/* right wrapper  */}
                <div className="right_wrapper flex flex-col justify-center space-y-8">
                    <h3 className="max-w-[570px] w-full text-4xl text-[#1b1b1b] font-semibold capitalize">connecting our user with ios & android apps. download from app stor & play store</h3>

                    <p className="max-w-[514px] w-full text-base text-[#1b1b1b] font-normal leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque similique velit voluptate laudantium obcaecati veritatis mollitia perspiciatis ut magnam?</p>

                    <div className="flex items-center gap-4">
                        <Link to={'#'} className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg p-3 flex items-center justify-center"><img src="/icons/apple.png" alt="app store" /></Link>

                        <Link to={'#'} className="max-w-[185px] w-full h-[65px] bg-[#081c27] rounded-lg p-3 flex items-center justify-center"><img src="/icons/google.png" alt="play store" /></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Connected;