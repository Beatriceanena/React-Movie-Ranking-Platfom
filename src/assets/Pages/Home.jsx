import React from 'react'
import Header from '../Components/Header'
import Herosection from '../Components/Herosection'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Herosection />
      <div>
        <h2 className='font-bold text-[#f4bb01] text-4xl text-center'>Categories</h2>

        <div className="">
          <ul className="flex justify-center my-12 space-x-8 text-black text-2sm">
            <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Action</li>
            <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Drama</li>
            <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Thriller</li>
            <li className=" py-4 px-16 bg-[#f4bb01] rounded-md">Adventure</li>
          </ul>
        </div>
      </div>

      <div className='mt-16'>
        <h2 className='font-bold text-[#f4bb01] text-4xl text-center mt-20 mb-16'>My Favourite Movies</h2>
      </div>

      <div className="flex justify-around w-[93%] m-auto">
        <Cards
          title="Categories"
          image="https://images.saymedia-content.com/.image/t_share/MTg1ODM2MzY0NTYwOTk5ODI4/should-i-watch-the-sound-of-music.jpg"
          category="Sound of Music"
        />
        <Cards
        title="Categories"
        image="https://m.media-amazon.com/images/M/MV5BMjViMzJhZmMtYzVhZC00NDk0LWFmM2YtYzE0YTU3N2QyN2Y2XkEyXkFqcGdeQXVyMTAxNDc4OTgy._V1_.jpg"
        category="Sugar Rush"
      />
      <Cards
      title="Categories"
      image="https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
      category="Bad Boys for life"
    />
    <Cards
    title="Categories"
    image="https://cdn.europosters.eu/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg"
    category="Avengers"
  />
  <Cards
  title="Categories"
  image="https://pm1.aminoapps.com/7223/28fdc4d6b080623800bfe1b8d34dc8b06a11064er1-426-597v2_uhq.jpg"
  category="Perfect Date"
/>
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home