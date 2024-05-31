import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import { useEffect, useState } from 'react'

const Action = () => {
  let [actions, setActions] = useState(null)
  function fetchData() {
    let apiUrl = "https://movieplatform-strapi-backend.onrender.com/api/actions?populate=*";
    console.log(actions)
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
  
      .then((dataObject) => {
        let actionData = dataObject.data
        setActions(actionData)
      })
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (

    <div>
    <Header/>

    <div> <h2 className='font-bold text-[#f4bb01] text-4xl text-center mt-10 mb-20'>My Top 5 Action Movies </h2></div>
  
    <div className="flex justify-around w-[93%] m-auto">
    
    {
     actions!== null? (
       actions.map((item) => {
         return (
           <Cards
             key={item.id}
             id={item.id}
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
    <Footer/>
    </div>
  )
}

export default Action