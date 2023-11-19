import { Helmet } from "react-helmet-async";
import Pagecover from "../Shared/PageCover/Pagecover";
import menuback from "../../assets/menu/banner3.jpg"

import useMenu from "../../HOOKS/useMenu";
import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";

import Menucategory from "../Shared/Menucategory/Menucategory";
import dessertback from "../../assets/menu/dessert-bg.jpeg"
import pizzaimg from "../../assets/menu/pizza-bg.jpg"
import saladimg from "../../assets/menu/salad-bg.jpg"
import soupimg from "../../assets/menu/soup-bg.jpg"
const Menu = () => {
    const [menu]=useMenu()
    const dessert=menu.filter(item=>item.category==="dessert")
    const pizza=menu.filter(item=>item.category==="pizza")
    const salad=menu.filter(item=>item.category==="salad")
    const soup=menu.filter(item=>item.category==="soup")
    const offered=menu.filter(item=>item.category==="offered")
           
    return (
        <div>
            <Helmet>
        <title>TasteTrove | Menu</title>
       
      </Helmet>
      <Pagecover backimage={menuback}
      title={"OUR MENU"}
      description={"Would you like to try a dish?"}></Pagecover>
      <Sectiontitle heading={"TODAYS OFFER"} subheading={"---Don't miss---"}></Sectiontitle>
      <Menucategory items={offered}  ></Menucategory>
      <Menucategory items={dessert} title={"dessert"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menuback={dessertback}></Menucategory>
      <Menucategory items={pizza} title={"pizza"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menuback={pizzaimg}></Menucategory>
      <Menucategory items={salad} title={"salad"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menuback={saladimg}></Menucategory>
      <Menucategory items={soup} title={"soup"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} menuback={soupimg}></Menucategory>
      
        </div>
    );
};

export default Menu;