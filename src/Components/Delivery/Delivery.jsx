
const Delivery = () => {



    const deliveries = [
        {
            title: 'Quality assurance',
            description: 'lorem ipsum dolor sit amet consectetur, id eget condimentum elementum',
            image: '/delivery/delivery_1.png',
        },
        {
            title: 'Delivery from 2-4 hours',
            description: 'lorem ipsum dolor sit amet consectetur, id eget condimentum elementum',
            image: '/delivery/delivery_2.png',
        },
        {
            title: 'Pay after receiving products',
            description: 'lorem ipsum dolor sit amet consectetur, id eget condimentum elementum',
            image: '/delivery/delivery_3.png',
        },
    ]


    return (
        <div className="lg:container mx-auto">
            <div className="grid grid-cols-3">
                {
                    deliveries?.map((item, indx) => (
                        <div key={indx} className="flex items-center flex-col justify-center">
                            <div className="flex items-center justify-center mb-6">
                                <img className="w-full h-full object-cover" src={item?.image} alt={item?.title} />
                            </div>
                            <div className="flex items-center justify-center flex-col space-y-3 text-center">
                                <h4 className="text-lg text-[#1b1b1b] font-semibold capitalize">{item?.title}</h4>
                                <p className="text-base text-[#1b1b1b] font-normal leading-8 max-w-[305px] w-full">{item?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Delivery;