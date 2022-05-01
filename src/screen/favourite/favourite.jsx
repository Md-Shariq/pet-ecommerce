import React from 'react'
import NavBar from '../../component/navBar/navBar'
import Footer from '../../component/footer/footer'
import "./favourite.css"
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
import { petList } from '../../service/apiService'

export default function Favourite() {
  return (
    <>
      <section className='section-1'>
        <div className='container-fluid px-5'>
          <p className='fw-600 fs-30'>Favourite Pet</p>

          <div className='row'>
            {petList.map((data) => {
              return (data.favourite && <div className='col-md-3'>
                <PetCard img={data.img} name={data.name} cotegory={data.category} price={data.price} favourite={data.favourite} />
              </div>);
            })}
          </div>
        </div>
      </section>


    </>

  )
}
