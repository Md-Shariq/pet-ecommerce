import React, { useEffect } from 'react'
import NavBar from '../../component/navBar/navBar'
import Footer from '../../component/footer/footer'
import "./home.css"
import { petList } from '../../service/apiService';

import headerimg from "../../assets/header.jpeg"
import pet_1 from "../../assets/pet-1.jpg"
import pet_2 from "../../assets/pet-2.jpg"
import pet_3 from "../../assets/pet-3.jpg"
import pet_4 from "../../assets/pet-4.jpg"
import pet_5 from "../../assets/pet-5.jpg"
import pet_7 from "../../assets/pet-7.jpg"
import pet_8 from "../../assets/pet-8.jpg"
import pet_9 from "../../assets/pet-9.jpg"
import pet_10 from "../../assets/pet-10.jpg"
import pet_11 from "../../assets/pet-11.jpg"
import pet_12 from "../../assets/pet-12.jpg"
import pet_13 from "../../assets/pet-13.jpg"


import PetCard from '../../component/petCard/petCard'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate()
  function removeToFavouriteList(index) {
     console.log('remove', index)
     petList[index].favourite = false;
     console.log(petList);
     navigate('/favourite');
  }

  function addToFavouriteList(index) {
    console.log('add', index)
    petList[index].favourite = true;
    console.log(petList);
    navigate('/favourite');
  }

  return (
    <>
     
      <header className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <p className='heading'>Find Your Perfect Pet</p>
              <p className='text-secondary'>Pariatur quis minim ad anim excepteur elitelit idexcepteur mollit consequat ullamco exercitation adipissicing. Cupidatat ullamco aliquip</p>
            </div>
            <div className='col-md-7'>
              <div className='d-flex justify-content-center'>
                <img src={headerimg} alt="" className='header-img' />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className='section-1'>
        <div className='container-fluid px-md-5 px-0 '>
          <p className='fw-600 fs-30 ps-3'>Pet List</p>

          <div className='row'>

           {petList.map((data, index)=> {
                     return ( <div className='col-md-3'>
                      <PetCard img={data.img} name={data.name} cotegory={data.category} price={data.price} favourite={data.favourite} index={index} addFavourite={()=>addToFavouriteList(index)} removeFavourite={()=>removeToFavouriteList(index)}/>
                    </div>);
           }) }
          </div>

        </div>
      </section>   
    </>

  )
}
