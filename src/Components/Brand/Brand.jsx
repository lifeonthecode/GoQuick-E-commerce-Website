import SectionTitle from "../SectionTitle/SectionTitle";

const Brand = () => {

    const brands = [
        {
            brandLogo: '/src/assets/brand/brand_1.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_2.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_3.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_4.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_5.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_6.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_7.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_8.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_9.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_10.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_11.png'
        },
        {
            brandLogo: '/src/assets/brand/brand_12.png'
        }
    ]
    return (
        <div className="lg:container mx-auto">
            <SectionTitle title={'popular brands'}></SectionTitle>

            <div className="grid grid-cols-6 gap-6">
                {
                    brands?.map((item, indx) => (
                        <div key={indx} className="">
                            <img src={item?.brandLogo} alt={`brand ${1 + indx}`} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Brand;