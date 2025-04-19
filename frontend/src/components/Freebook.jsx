import React, { useEffect, useState } from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from 'axios';

import Slider from "react-slick";


function Freebook() {
    const [book, setBook] = useState([]);
  useEffect(() =>{
    const getBook = async() => {
      try{
      const res = await axios.get("https://learnify-7klh.onrender.com/book");
    //   console.log(res.data)
      setBook(res.data.filter((data) => data.category === "Free"));
      console.log(res.data.filter((data) => data.category === "Free"));
      } catch(error){
        console.log(error)
      }
    };
    getBook();

  },[]);
    // const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni exercitationem dignissimos molestiae totam modi non, maiores quis illo numquam facilis. Dolore qui delectus odio adipisci omnis. Deleniti magni cumque blanditiis.
                    </p>
                </div>
           
            <div>
                <Slider {...settings}>
                    {book.map((item)=>(
                        <Cards item = {item} key = {item.id}/>
                    ))}
                </Slider>
            </div>
            </div>
        </>
    );
}

export default Freebook;
