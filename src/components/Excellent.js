import React from "react";
import Card from "./Card";
import { useState } from "react";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

function Excellent (props){
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function LeftShiftHandler(){
        if(index>0){
            setIndex(index-1);
        }
        else{
            setIndex(reviews.length-1);
        }
    }
    function RightShiftHandler(){
        if(index+1<reviews.length){
            setIndex(index+1);
        }
        else{
            setIndex(0);
        }
    }
    function SurpriseHandler(){
        let randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="card w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg rounded-md mx-auto ">
            <Card review={reviews[index]}></Card>
            <div className="mx-auto flex text-3xl mt-7 gap-3 text-violet-400 font-bold">
                <button onClick={LeftShiftHandler} className="cursor-pointer hover:text-violet-500">
                <IoIosArrowBack/>
                </button>
                <button onClick={RightShiftHandler} className="cursor-pointer hover:text-violet-500">
                <IoIosArrowForward/>
                </button>
            </div>
            <div>
                <button onClick={SurpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursour-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4">Surprise Me</button>
            </div>
        </div>
    )
}

export default Excellent;