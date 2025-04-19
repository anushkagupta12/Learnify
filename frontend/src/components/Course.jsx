import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import list from '../../public/list.json';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() =>{
    const getBook = async() => {
      try{
      const res = await axios.get("https://learnify-7p7l.onrender.com");
      console.log(res.data)
      setBook(res.data)
      } catch(error){
        console.log(error)
      }
    };
    getBook();

  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className = 'mt-28 items-center justify-center text-center'>
        <h1 className = 'text-2xl md:text-4xl'>
          We're delighted to have you{" "}
          <span className = 'text-pink-600'>Here!</span>
          </h1>
          <p className = 'mt-12'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt explicabo libero unde obcaecati, quisquam consequatur a accusantium assumenda neque alias illo impedit corrupti repellat? Quo exercitationem provident culpa pariatur dolorum?
            Assumenda deserunt ipsa mollitia dicta, minus vitae repellendus voluptate perferendis in cum at iusto quaerat odit obcaecati nemo unde. Velit ex nam unde harum adipisci! Quod est nulla ad. Quia!
            Minus blanditiis nobis ut debitis. Explicabo magni impedit ab sint distinctio similique fugit veniam rem fuga adipisci inventore totam voluptatem, ex sunt consectetur earum possimus. Eos ea neque non distinctio?
          </p>
         <Link to= "/">
         <button className = 'mt-6 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
            Back
          </button>
         </Link>
      </div>
      <div className = 'mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item)=> (
            <Cards key={item.id} item = {item}/>
          ))}
      </div>
    </div>
    </>
  )
}

export default Course
