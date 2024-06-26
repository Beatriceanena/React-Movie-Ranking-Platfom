import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
    return (
        <div>
           
            <div className=" mb-8 " >
            <div>
            <img className='w-52 h-80 object-cover' src={props.image}  />
            </div>
            <h3 className="text-white text-8sm text-center py-4">{props.category}</h3>

    <Link to={props.link}>
    <button className=" rounded-md text-white border-solid border-2 border-[#f4bb01] py-2 px-8 ml-4 " >Watch Trailer</button>
    </Link>
            </div>
        </div>
        
    )
}

export default Cards