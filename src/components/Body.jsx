import { useContext, useEffect, useState } from "react";
import RestaurantCards  from "./RestaurantCards.jsx";
import {Shimmer} from "./Shimmer.jsx"
import {Link} from "react-router-dom";
import {LocationContext} from '../context/Locationcontext.jsx';
import {Restaurantcontext} from '../context/Restaurantcontext.jsx';
import {Header} from './Header';


// const filterData = (strText,restaurants) => 
//     restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(strText.toLowerCase()));

    const ErrorMesage = () => {
        return (
            <h3>No Restauarant found </h3>
        )
    }
    

    const Body = () => {
       const [strText ,setStrText] = useState("");
       const {result} = useContext(LocationContext);
       
        const {allrestaurants,filterRestaurants,getRestaurants,dispatch,sort,search} = useContext(Restaurantcontext);
        
        useEffect(() => {
            getRestaurants(result);
           },[]);
           
          const filter = (text) => {
            
            if(text === "Delivery Time"){
                   return filterRestaurants?.sort((a,b) => a.data?.deliveryTime - b.data?.deliveryTime);
                  }
                  else if(text === "Ratings"){
                    return (filterRestaurants?.sort((a,b) => b.data?.avgRating - a.data?.avgRating));
                   
                  }
                  else if(text === "Cost: Low to High"){
                    return (filterRestaurants?.sort((a,b) => a.data?.costForTwo
                    - b.data?.costForTwo
                    ));
                    
                  }
                  else if(text === "Cost: High to Low"){
                    return (filterRestaurants?.sort((a,b) => b.data?.costForTwo
                    - a.data?.costForTwo
                    ));
                  }
                 } 

        const restaurants = sort?.length > 0 ? filter(sort[0]) : filterRestaurants; 

        const searchedRestaurants = search?.length > 0 ? restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(search.toLowerCase())) : restaurants;
       
        console.log(searchedRestaurants);
        
    return (
        <>
         <Header />
        <div className="search-container">
            <input type ="text"
            className = "search-input"
            value = {strText}
            placeholder="Enter Restaurant Name"
            onChange = {(e) => setStrText(e.target.value)}/>
            <button className="search-btn"
             onClick={() => dispatch({type : "SearchFilter",payload : strText})}>Search</button>
        </div>
    
        <div className="sorting">
        <div className = "length">16 Restaurants</div>
        <div className = "sorting-names">
            {/* <Link to = "/Relevance"><div onClick = {() => 
               filter("RELEVANCE")}>
                Relevance</div></Link> */}
                <div className = "filters" onClick = {() => dispatch({type : "Filter",payload : "Delivery Time"})}>
                    Delivery Time</div>
                <div className = "filters"  onClick = {() => dispatch({type : "Filter",payload : "Ratings"})}>
                Ratings
                </div>
                <div className = "filters" onClick = {() => dispatch({type : "Filter",payload : "Cost: Low to High"})}>
                    Cost: Low to High
                    </div>
                <div className = "filters"onClick = {() => dispatch({type : "Filter",payload : "Cost: High to Low"})}>
                    Cost: High to Low
                    </div>
        </div>
    </div>
       <hr></hr>
      <div className = 'list'>
        {
            allrestaurants?.length === 0 ? (<Shimmer />) :
            searchedRestaurants?.length === 0 ? <ErrorMesage /> :
            searchedRestaurants?.map(restaurant => {
                return <Link to = {"/restaurants/" + restaurant.data.id} key = {restaurant.data.id}>
                    <RestaurantCards  {...restaurant.data} /></Link>
            })
        }
       </div>
        </>
    )
  };
  export default Body;