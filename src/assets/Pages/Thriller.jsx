import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Thriller = () => {
  let [thrillers, setThrillers] = useState(null)
  function fetchData() {
    let apiUrl = "https://movieplatform-strapi-backend.onrender.com/api/thrillers";
    console.log(thrillers)
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
  
      .then((dataObject) => {
        let thrillerData = dataObject.data
        setThrillers(thrillerData)
      })
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
    <Header/>
     <div> <h2 className='font-bold text-[#f4bb01] text-4xl text-center mt-10 mb-20'>My Top 5 Thriller Movies </h2><div>
     </div>
     <div className="flex justify-around w-[93%] m-auto">
     
     {
      thrillers!== null? (
        thrillers.map((item) => {
          return (
            <Cards
              key={item.id}
              image={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
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
   
     </div>

    <Footer/>
    </div>
  )
}

export default Thriller