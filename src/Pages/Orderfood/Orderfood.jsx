import Pagecover from "../Shared/PageCover/Pagecover";
import ordercover from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../HOOKS/useMenu";
import Foodcard from "../../components/Foodcard/Foodcard";
import Ordertab from "./Ordertab";
import { useParams } from "react-router-dom";
const Orderfood = () => {
    const [menu]=useMenu()
    const categories=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams()
    const initialindex=categories.indexOf(category)
    const dessert=menu.filter(item=>item.category==="dessert")
    const pizza=menu.filter(item=>item.category==="pizza")
    const salad=menu.filter(item=>item.category==="salad")
    const soup=menu.filter(item=>item.category==="soup")
    const drinks=menu.filter(item=>item.category==="drinks")
    const [tabIndex,settabIndex] =useState(initialindex)
    return (
        <div>
            <Pagecover backimage={ordercover}
                title={"OUR SHOP"}
                description={"Would you like to try a dish?"}></Pagecover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <Ordertab items={salad}></Ordertab>
                    
                </TabPanel>
                <TabPanel>  <Ordertab items={soup}></Ordertab> </TabPanel>
                <TabPanel>  <Ordertab items={pizza}></Ordertab> </TabPanel>
                <TabPanel>  <Ordertab items={dessert}></Ordertab> </TabPanel>
                <TabPanel>  <Ordertab items={drinks}></Ordertab> </TabPanel>
            </Tabs>
        </div>
    );
};

export default Orderfood;