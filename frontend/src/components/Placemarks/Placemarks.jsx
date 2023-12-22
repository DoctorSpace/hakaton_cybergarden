import React from "react";
import Placemark from "../Placemark/Placemark";

const Placemarks = (marks) => {


    // console.log('marks', marks);

    // console.log('marks.marks', marks.marks);


  return (
    <>
    {
       marks.marks.forEach(item => {
           Object.keys(item).forEach(key => {
               const value = item[key];

               <Placemark 
                coordinates={value.coordinates} 
                title={value.title}
                img={value.img}
                text={value.text}
                />
           });
       })
    }
    </>

);
};

export default Placemarks;
