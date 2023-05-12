import React from "react";

 const Shimmer = () => {
   console.log("shimmer");
    return (
        <div className = "list">
           {Array(10)
           .fill("")
           .map(e => {
           return (
           <div className = "shimmer-card">
            <img className = "shimmer-img"/>
          <div className = "shimmer-name"></div>
        <div className = "shimmer-cuisine"></div>
        <div className = "shimmer-ratings"></div>
           </div>
           )})
           }
        </div>
    )
}

export {Shimmer};