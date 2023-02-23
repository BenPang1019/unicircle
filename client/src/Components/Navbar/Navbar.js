import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import $ from 'jquery'

import '../Navbar/Navbar.css'

import Arrow from '../../Images/Recoil.jpg'


export default function Navbar() {
  let activeStyle = {
    backgroundColor:'#280045',
    borderRadius:"10px"
  };

  return (
    <div className='navbarN navbarPD'>
    <div className='web'>
        <div className='layerN'>
        <ul >
          <li className='listItemsN firstListItemsN' >
            <NavLink to="/" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Home</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to="/about" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>About</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to='/products'  className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Products</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to="/guide" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Guide</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to="/enquiry" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Enquiry</NavLink>
          </li>
        </ul>
        </div>
    </div>

    <div className='mobile'>
        <div className='layerN'>
        <ul >
          <li className='listItemsN firstListItemsN' >
            <NavLink to="/" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Home</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to="/about" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>About</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to='/products' className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Products</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to="/guide" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Guide</NavLink>
          </li>

          <li className='listItemsN'>
            <NavLink to="/enquiry" className='listItemsLinkN' style={({ isActive }) =>isActive ? activeStyle : undefined}>Enquiry</NavLink>
          </li>
        </ul>
        </div>
    </div>
    </div>
  )
}
