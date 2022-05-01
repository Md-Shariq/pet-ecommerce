import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/footer'
import NavBar from '../component/navBar/navBar'
import PetCard from '../component/petCard/petCard'
import { petList } from '../service/apiService'

export default function Main() {

  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer />

    </>
  )
}
