
import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";
import Menucard from "../Shared/Menucard";
import useMenu from "../../HOOKS/useMenu";


const Popularmenu = () => {
    
   
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==="popular")
           
    return (
       <section className="my-32">
        <Sectiontitle heading={"FROM OUR MENU"} 
        subheading={"---Check it out---"}></Sectiontitle>
        <div className="grid grid-cols-1 gap-10  md:grid-cols-2">
           { popular.map(item=><Menucard key={item._id} item={item}></Menucard>)}
        </div>
        <div className="text-center mt-8"> <button className="btn btn-outline border-0 border-b-4 ">View Full Menu</button></div>
       
       </section>
    );
};

export default Popularmenu;