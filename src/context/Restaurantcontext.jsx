import {  createContext} from "react";
import { useReducer } from "react";

export const Restaurantcontext = createContext(null);

const reducer = (state,action) => {

    switch(action.type){
        case "Initialization":{
            const arr = action.payload?.data?.cards.reduce((acc,{data}) =>{
                return [...acc,data];
              },[])
            return{
                ...state,
                allrestaurants : arr,
                filterRestaurants : arr,
            }
        }
        case "Filter":{
           
            return{
                ...state,
                sort : [action.payload]
            }  
        }
        case "SearchFilter":{
            return{
                ...state,
                search : action.payload,
            }
        }

    }
}

export const RestauarantProvider = ({children}) => {
      const [state,dispatch] = useReducer(reducer,{
        allrestaurants : [],
        filterRestaurants : [],
        sort : [],
        search : "",
      })


      const getRestaurants = async(result) => {
       
        const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${result?.lat}&lng=${result?.lng}&offset=15&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
        const data = await fetch(url);
        const json = await data.json();
        dispatch({ type: "Initialization", payload: json });
      };
      
    return(
        <Restaurantcontext.Provider value = {{...state,dispatch,getRestaurants}}>
            {children}
            </Restaurantcontext.Provider>
    )
}

