import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useState} from "react";
import {Shimmer} from "./Shimmer.jsx"
import { MenuCard } from "./MenuCard.jsx";
import {Header} from './Header.jsx'



const Menu = () => {
    const {id} = useParams();
    const [dynamicMenu,setDynamicMenu] = useState([]);


    useEffect(() => {
        getData();
    },[])


    const getData = async() => {
      
            const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.0776598&lng=72.8837116&restaurantId="+id;
      
            const data = await fetch(url);
            const json = await data.json();
            // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.slice(1));
            if(json?.data?.cards?.length === 3){
              setDynamicMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards);
            }
            else{
              setDynamicMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap.REGULAR.cards);
            }

        
    }
   
    return (!dynamicMenu) ? <Shimmer/> :(
        <div className="menu">
               <Header/>
          <h2>{dynamicMenu[dynamicMenu.length-1]?.card?.card?.name}</h2>
          <h3>Menu</h3>
             {dynamicMenu?.map(ele => {
               return <MenuCard {...ele} title = {dynamicMenu[dynamicMenu.length-1]}/>
             })} 
        </div>
    )
};

export default Menu;