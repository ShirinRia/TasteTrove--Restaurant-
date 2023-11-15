import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import './Featured.css'
import featured from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <section className="featured-item bg-fixed my-32 py-16 px-16 text-white">
            <Sectiontitle heading={"Featured Item"}
                subheading={"---Check it out---"}></Sectiontitle>
            <div className="flex justify-center items-center py-8 px-16 bg-slate-500 bg-opacity-60">
                <div className="w-1/2">
                    <img src={featured} alt="" className="w-full" />
                </div>
                <div className="w-1/2 md:ml-10 space-y-5 ">
                    <div>
                        <p>
                            March 20, 2023 </p>
                        <p>  WHERE CAN I GET SOME? </p>
                        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                    </div>

                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>

        </section>
    );
};

export default Featured;