import SectionTitle from "../SectionTitle/SectionTitle";

const Category = () => {



    const categories = [
        {
            title: 'meat & fish',
            categoryItem: '15 items',
            image: '/src/assets/popular/popular_2.png',
            color: 'bg-[#fce0ca]'
        },
        {
            title: 'cooking',
            categoryItem: '252 items',
            image: '/src/assets/popular/popular_3.png',
            color: 'bg-[#d6f2f3]'
        },
        {
            title: 'beverages',
            categoryItem: '35 items',
            image: '/src/assets/popular/popular_4.png',
            color: 'bg-[#ffecb4]'
        },
        {
            title: 'home & cleaning',
            categoryItem: '80 items',
            image: '/src/assets/popular/popular_5.png',
            color: 'bg-[#ffedf1]'
        },
        {
            title: 'pest control',
            categoryItem: '80 items',
            image: '/src/assets/popular/popular_6.png',
            color: 'bg-[#e0d8c9]'
        },
        {
            title: 'stationery & office',
            categoryItem: '80 items',
            image: '/src/assets/popular/popular_2.png',
            color: 'bg-[#fee7d7]'
        },
    ]

    return (
        <div className="lg:container mx-auto">

            {/* section title  */}
            <SectionTitle title={'popular categories'}></SectionTitle>

            <div className="grid grid-cols-2">

                {/* left side wrapper  */}
                <div className="max-w-[650px] w-full min-h-[660px] h-full bg-[#fbf3ee] rounded-l-2xl flex flex-col justify-between pt-4 items-center ">

                    <div className="flex items-center justify-center flex-col space-y-3">
                        <h4 className="text-lg text-[#1b1b1b] font-medium capitalize">Fruits & vegetables</h4>
                        <span className="text-sm text-[595959] font-normal">2 items</span>
                    </div>

                    <div className="w-full">
                        <img className="w-full object-cover" src="/src/assets/popular/popular_1.png" alt="fruits & vegetables" />
                    </div>
                </div>


                {/* right side wrapper  */}
                <div className="grid grid-cols-3 gap-6">
                    {
                        categories?.map((item, indx) => {
                            return (
                                <div key={indx} className={`max-w-[350px] w-full min-h-[320px] h-full flex flex-col items-center justify-center space-y-6 rounded-lg ${item?.color}`}>
                                    <div className="p-3 rounded-full" style={{
                                        border: '3px dotted white'
                                    }}>
                                        <img src={item?.image} alt={item?.title} />
                                    </div>

                                    <div className="flex items-center justify-center flex-col space-y-3">
                                        <h4 className="text-lg text-[#1b1b1b] font-medium capitalize">{item?.title}</h4>
                                        <span className="text-sm text-[595959] font-normal">{item?.categoryItem}</span>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Category;