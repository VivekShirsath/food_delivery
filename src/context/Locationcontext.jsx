import { createContext,useState } from "react";
import { useNavigate } from 'react-router-dom';

export const LocationContext = createContext(null);

export const LocationProvider = ({children}) => {

    const [result , setResult]  = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    const get = async (text) => {
    
    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${text}%20&language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fba19d5dacmsh9779381eed4e676p1e4590jsn9657134d0fe7",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com"
      }
    };

    try {
      setResult({});
      setIsLoading(true);
      const response = await fetch(url, options);
      const res1 = await response.json();
      setIsLoading(false);
     
      setResult(res1?.results[0]?.location);
      navigate('/body');
    } catch (error) {
      console.error(error);
    }
  };
    return(
        <LocationContext.Provider value = {{get,result,isLoading}}>
            {children}
        </LocationContext.Provider>
    )

};
