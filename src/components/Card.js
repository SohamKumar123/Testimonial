import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function Card(props){
    let review=props.review;
    return (
        <div className="relative sm:relative flex flex-col">
            <div className="absolute top-[-7rem] z-[10] left-[-3rem]  ">
                <img alt="Nhi aa rha "src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-25  "/>
                <div className="bg-indigo-500  w-[140px] h-[140px] rounded-full absolute top-[-6px] left-[10px] z-[-10]"></div>
            </div>
            <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
            <p className="text-violet-300 uppercase text-sm mt-2">{review.job}</p>
            </div>
            <div className="text-violet-400 mx-auto mt-5">
              <FaQuoteLeft className="quote-icon" />
            </div>
            <div className="text-center mt-4 text-slate-500">
                <p>{review.text}</p>
            </div>
            <div>
               <FaQuoteRight className="text-violet-400 mx-auto mt-5" />
            </div>
        </div>
    ) ;
}

export default Card;