import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pet_11 from "../../assets/pet-11.jpg"
import { petList } from '../../service/apiService'
import "./detail.css"

export default function Detail() {

  const [petDetail, setpetDetail] = useState('')
  const {id} = useParams();
  useEffect(() => {
   console.log(id);
   setpetDetail(petList[id])
   console.log(petDetail, petList[id]);
  }, [])
  
  return (
   
    <>
       <div className='containet-fluid my-5'>
           <div className='row'>
             <div className='col-md-5'>
                <div className='mx-4'>
                    <img src={petDetail.img} alt=""  width="100%"/>
                </div>
             </div>
             <div className='col-md-7'>
                <p className='pet-name'>{petDetail.name}</p>
                <p className='text-secondary fw-500 m-0 fs-14 mb-2'>Refrence</p>
                <div className='d-flex'>
                 <div>
                     <i class="fa-solid fa-star star-icon"></i>
                     <i class="fa-solid fa-star  star-icon"></i>
                     <i class="fa-solid fa-star  star-icon"></i>
                     <i class="fa-solid fa-star  star-icon"></i>
                     <i class="fa-solid fa-star-half  star-icon"></i>
                 </div>
                 <div>
                     <p className='text-secondary fw-500 fs-14 m-0'>2 Reviews</p>
                 </div>
                 </div>

                 <hr/>

                 <p className='text-secondary fs-14'>There are numerous adorable fur babies who are waiting to have their home. You can be their home.</p>
                 <p className='fs-14 fw-500'>One can easily purchase Persian kitten (blue eyes) in between the range of Rs.18,000 across India. It is always suggested to buy these pups from home bred litter or from trusted breeders or stores. Never purchase from puppy mills, animal farms, or puppy farms. Never purchase from mills, animal farms, or puppy farms. </p>
                 <p className='text-secondary fw-500 m-0'>Gender : <span className='text-dark'>Male</span></p>
                 <p className='text-secondary fw-500 m-0'>Weight : <span className='text-dark'>22.5 kg</span></p>
                 <p className='text-secondary fw-500 m-0'>Height : <span className='text-dark'>24.32 inch</span></p>
                 <p className='text-secondary fw-500'>Colour : <span className='text-dark'>Fawn</span></p>

                 <button className='btn  btn-secondary add-to-cart-btn'><i class="fa-solid fa-cart-arrow-down me-2"></i>Add to cart</button>
             </div>
           </div>

       </div>
    
    
    </>
  )
}
