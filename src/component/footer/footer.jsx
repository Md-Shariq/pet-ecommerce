import React from 'react'
import "./footer.css"
import headerimg from "../../assets/header.jpeg"

export default function Footer() {
  return (
    <>
      <footer className='footer-wrapper'>
          <div className='container'>
            <div className='row'>
             <div className='col-md-3'>
                 <div className='footer-img-wrapper'>
                     <img src={headerimg} alt="" className='footer-img' />
                 </div>
             </div>
             <div className='col-md-6'>
                <div className='py-4'>
                    <a href="" className='footer-item'>Home</a>
                    <a href=""  className='footer-item'>Sale</a>
                    <a href=""  className='footer-item'>Brees</a>
                    <a href=""  className='footer-item'>Contact</a>
                </div>
                <p className='fw-500 fs-14'><i class="fa-solid fa-circle-info"></i> Need help? Visit the <span><a href="" className='help-center'>help Center</a></span> </p>
             </div>
             <div className='col-md-3'>
               <div className='pt-4 text-end'>
                  <p className='fs-14 fw-500'>Follow ConsultAgora</p>
                  <div>
                     <i class="fa-brands fa-facebook-square contact-icon"></i>
                     <i class="fa-brands fa-linkedin contact-icon"></i>
                     <i class="fa-brands fa-twitter-square contact-icon"></i>
                  </div>
                </div>
             </div>
            </div>
            </div>
      </footer>
    </>
  )
}
