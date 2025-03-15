import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router";

const CommonQuestions = () => {


    const [active, setActive] = useState(0);

    const commonQuestions = [
        {
            title: 'Q. What is your policy on refunds?',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur'
        },
        {
            title: 'Q. What are your delivery hours?',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur'
        },
        {
            title: 'Q. What about the prices?',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur'
        },
        {
            title: 'Q. Do y serve my area?',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique explicabo labore soluta distinctio? Est impedit voluptatem consequatur aliquid beatae necessitatibus debitis obcaecati sapiente tenetur'
        },
    ]

    return (
        <div className="lg:container mx-auto">

            <SectionTitle title={'Common Questions'} ></SectionTitle>

            <div>
                {

                    commonQuestions?.map((item, index) => (
                        <div key={index} onClick={() => setActive(index)} className={`collapse collapse-arrow border-t-[1px] ${
                            index === 0 || index === 1 || index === 2  ? 'border-b-0' : 'border-b-[1px]'
                        } border-[#999999] rounded-none mb-3`}>
                            <input type="radio" name="my-accordion-2" defaultChecked={
                                index === 0 ? true : false
                            } />
                            <div className={`collapse-title capitalize text-lg font-semibold ${ active === index ? 'text-[#05a845]' : 'text-[#1b1b1b]'}`} >{item?.title}</div>
                            <div className="collapse-content text-sm">{item?.description}</div>
                        </div>
                    ))

                }
            </div>

            <div className="w-full min-h-[176px] h-full bg-[#fffaf0] rounded-lg flex items-center justify-between mt-8 p-8">
                <div className="flex flex-col justify-center gap-4">
                    <h3 className="text-xl text-[#1b1b1b] font-semibold capitalize">still have questions?</h3>
                    <p className="text-base text-[1b1b1b] font-normal leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, maiores.</p>
                </div>
                <div>
                    <button><Link className="max-w-[150px] w-full h-[50px] p-4 flex items-center justify-center bg-[#05a845] rounded-lg text-base text-white capitalize font-medium">get in touch</Link></button>
                </div>
            </div>

        </div>
    );
};

export default CommonQuestions;