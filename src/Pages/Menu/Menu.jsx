import { Helmet } from "react-helmet-async";
import Pagecover from "../Shared/PageCover/Pagecover";
import menuback from "../../assets/menu/banner3.jpg"
import Popularmenu from "../Home/Popularmenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
        <title>TasteTrove | Menu</title>
       
      </Helmet>
      <Pagecover backimage={menuback}
      title={"OUR MENU"}
      description={"Would you like to try a dish?"}></Pagecover>
      <Popularmenu></Popularmenu>
      <Pagecover backimage={menuback}
      title={"DESSERTS"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Pagecover>
      <Popularmenu></Popularmenu>
      <Pagecover backimage={menuback}
      title={"PIZZA"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Pagecover>
      <Popularmenu></Popularmenu>
      <Pagecover backimage={menuback}
      title={"SALADS"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Pagecover>
      <Popularmenu></Popularmenu>
      <Pagecover backimage={menuback}
      title={"SOUPS"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Pagecover>
      <Popularmenu></Popularmenu>
        </div>
    );
};

export default Menu;