
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Category from "../../Components/Category/Category";
import CommonQuestions from "../../Components/CommonQuestions/CommonQuestions";
import Connected from "../../Components/Connected/Connected";
import Delivery from "../../Components/Delivery/Delivery";

const Home = () => {
    return (
        <div >



            {/* banner component in here call  */}
            <div className="flex items-center justify-center">
                <Banner></Banner>
            </div>


            {/* delivery component in here call  */}
            <div className="flex items-center justify-center pt-[80px] pb-[120px]">
                <Delivery></Delivery>
            </div>

            {/* category component in here call  */}
            <div className="flex items-center justify-center pb-[120px]">
                <Category></Category>
            </div>



            {/* category component in here call  */}
            <div className="flex items-center justify-center pt-[80px] pb-[120px]">
                <Brand></Brand>
            </div>




            {/* about component in here call  */}
            <div className="flex items-center justify-center pt-[80px] pb-[120px]">
                <About></About>
            </div>




            {/* connected component in here call  */}
            <div className="flex items-center justify-center pb-[120px]">
                <Connected></Connected>
            </div>


            {/* common question component in here call  */}
            <div className="flex items-center justify-center pt-[80px] pb-[120px]">
                <CommonQuestions></CommonQuestions>
            </div>


        </div>
    );
};

export default Home;