import SectionTitle from "../SectionTitle/SectionTitle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const aboutSays = [
        {
            description: 'lorem ipsum dolor sit amet consectetur. sit in sed sed retrum ultrice egestas. neque leo preesent odio diam. vel amet vitae pulvinar cursus enim sgittis enm. cum arcu vitae non seclerisque eget mi.',
            author: 'Mariana Dickey',
            sector: 'UI Designer',
            image: '/about/avatar.png'
        },
        {
            description: 'lorem ipsum dolor sit amet consectetur. sit in sed sed retrum ultrice egestas. neque leo preesent odio diam. vel amet vitae pulvinar cursus enim sgittis enm. cum arcu vitae non seclerisque eget mi.',
            author: 'John',
            sector: 'Web Developer',
            image: '/about/avatar.png'
        },
        {
            description: 'lorem ipsum dolor sit amet consectetur. sit in sed sed retrum ultrice egestas. neque leo preesent odio diam. vel amet vitae pulvinar cursus enim sgittis enm. cum arcu vitae non seclerisque eget mi.',
            author: 'Lifeonthecode',
            sector: 'Mern Stack Web developer',
            image: '/about/avatar.png'
        }
    ]

    return (
        <div className="lg:container mx-auto">
            <div className="grid grid-cols-2 items-center">


                {/* left wrapper  */}
                <div className="left_wrapper">

                    <SectionTitle title={'What people say about us'} textAlign={'justify-start'}></SectionTitle>

                    <div className="about_slider">
                        <Slider {...settings}>
                            {
                                aboutSays?.map((item, indx) => (
                                    <div key={indx} className="max-w-[600px] w-full h-auto space-y-4">
                                        <p className="text-lg text-[#36526c] italic font-normal leading-9"> {item?.description}</p>
                                        <div className="flex items-center gap-3">
                                            <img className="w-[50px] h-[50px] rounded-full" src={item?.image} alt={item?.author} />

                                            <div className="flex flex-col justify-center space-y-2">
                                                <h4 className="text-[1.1rem] text-[#1b1b1b] font-medium capitalize">{item?.author}</h4>
                                                <span className="text-base text-[#595959] font-normal leading-4 capitalize">{item?.sector}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>

                </div>


                {/* right wrapper  */}
                <div className="right_wrapper max-w-[693px] w-full min-h-[569px] h-full">
                    <img src="/about/about.png" className="w-full h-full object-cover" alt="about image" />
                </div>

            </div>
        </div>
    );
};

export default About;