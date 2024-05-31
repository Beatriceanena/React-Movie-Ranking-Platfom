import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Adventure = () => {
  let [adventures, setAdventures] = useState(null)
  function fetchData() {
    let apiUrl = "https://movieplatform-strapi-backend.onrender.com/api/adventures?populate=*";
    console.log(adventures)
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
  
      .then((dataObject) => {
        let adventureData = dataObject.data
        setAdventures(adventureData)
      })
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
    <Header/>

    <div> <h2 className='font-bold text-[#f4bb01] text-4xl text-center mt-10 mb-20'>My Top 5 Adventure Movies </h2></div>
  
    <div className="flex justify-around w-[93%] m-auto">
    
    {
     adventures!== null? (
       adventures.map((item) => {
         return (
           <Cards
             key={item.id}
             image={item.attributes.image.data[0].attributes.url}
             category={item.attributes.title}
             link={item.attributes.link}
           />
         );
       })
     ) : (
       <p>Loading</p>
     )
   }
    
    </div>
    <Footer/>
    </div>
  )
}
 
export default Adventure