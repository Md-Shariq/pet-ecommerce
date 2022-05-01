import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./petCard.css"


export default function PetCard(props) {

  const navigate = useNavigate()

  function goToDetail(index) {
    navigate(`/detail/${index}`)
  }
  return (
    <>
      <div className='pet-card'>
        <div className='card-img-wrapper'>
          <img src={props.img} alt="" className='card-img' />
        </div>
        <div className='pet-detail'>
          <p className='m-0 fw-600'>{props.name}</p>
          <p className='m-0 fw-500 text-secondary'>{props.cotegory}</p>
          <div className='d-flex justify-content-between pb-3'>
            <div>
              <p className='fw-600 m-0'>{props.price} </p>
            </div>

            {!props.favourite && <div>
              <i class="fa-solid fa-heart" onClick={props.addFavourite}></i>
            </div>}
            {props.favourite && <div>
              <i class="fa-solid fa-heart red" onClick={props.removeFavourite}></i>
            </div>}
            
          </div>
          {!props.hideClickDetail && <button class="btn btn-warning detail-btn" onClick={()=>goToDetail(props.index)}>Detail</button>}
        </div>
      
      </div>

    </>
  )
}
