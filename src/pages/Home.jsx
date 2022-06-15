import React from 'react';
import './style.css'
import {Cards } from '../components'

const home = () => {
  return (
    <div className="tanglaw__page-title">
      <h2>Recent Additions</h2>
      <Cards />
    </div>
  )
}

export default home;