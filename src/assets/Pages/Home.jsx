import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Herosection from '../Components/Herosection'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'


const Home = () => {
  let [genres, setGenres] = useState(null)
function fetchData() {
  let apiUrl = "https://movieplatform-strapi-backend.onrender.com/genres";
  console.log(genres)
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })

    .then((dataObject) => {
      let genreData = dataObject.data
      setGenres(genreData)
    })
}
useEffect(() => {
  fetchData();
}, [])

  return (
    <div>
      <Header />
      <Herosection />
      <div>
        <h2 className='font-bold text-[#f4bb01] text-4xl text-center'>Categories</h2>

        <div className="">
          <ul className="flex justify-center my-12 space-x-8 text-black ">
     
          <Link to='/Action'>
          <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Action</li>
          </Link>
      
          <Link to='/Drama'>
          <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Drama</li>
          </Link>

          <Link to='/Thriller'>
          <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Thriller</li>
          </Link>
       
          <Link to='/Adventure'>
          <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Adventure</li>
          </Link>
     
          </ul>
        </div>
      </div>

      <div className='mt-16'>
        <h2 className='font-bold text-[#f4bb01] text-4xl text-center mt-20 mb-16'>My Favourite Movies</h2>
      </div>

      <div className="flex justify-around w-[93%] m-auto md:flex-wrap">
        {
          genres!== null? (
            genres.map((item) => {
              return (
                <Cards
                  key={item.id}
                  image={`https://movieplatform-strapi-backend.onrender.com${item.attributes.image.data[0].attributes.url}`}
                  category={item.attributes.title}
                  link={item.attributes.links}
                />
              );
            })
          ) : (
            <p>Loading</p>
          )
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home