import React,{useState} from 'react'
import UCF from '../../Images/UCF.png'
import { Link } from 'react-router-dom'

import '../Footer/Footer.css'

import facebookIcon from '../../Images/facebookIcon.svg'
import whatsappIcon from '../../Images/whatsappIcon.svg'

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  
  return (
    <div className='footerN'>
    <div className='web'>
      <div className='center'>
        <div className='containerOneN inlineN'>
            <img src={UCF} className="imageOneN"/>
            <h2 className='containerOneHOneN'>Site Map</h2>
            <Link to="/"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Home</h3></Link>
            <Link to="/products"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Products</h3></Link>
            <Link to="/about"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>About</h3></Link>
            <Link to="/guide"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Guide</h3></Link>
            <Link to="/enquiry"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Enquiry</h3></Link>
            <Link to="/"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Privacy Policy</h3></Link>
        </div>

        <div className='containerTwoN inlineN'>
            <h2 className='containerTwoHOneN'>Contact Us</h2>
            <h3 className='containerTwoHTwoN'>Tel: 03-8068 2026</h3>
            <h3 className='containerTwoHTwoN'>Fax: 03-8068 3036</h3>
            <h3 className='containerTwoHTwoN'>E-mail: sales@unicircle.com.my</h3>
            <img src={facebookIcon} classNam="inlineI"/><h3 className='containerTwoHTwoNA inlineI'>Uni Circle Fasteners</h3><br/>
            <img src={whatsappIcon} classNam="inlineI"/><h3 className='containerTwoHTwoNA inlineI'>011-1638 1101</h3><br/>
            <img src={whatsappIcon} classNam="inlineI"/><h3 className='containerTwoHTwoNA inlineI'>012-818 2011</h3>
            <br/>
            <h2 className='containerTwoHOneN'>Opening Hours</h2>
            <h3 className='containerTwoHTwoN'>Mon - Fri:</h3>
            <h3 className='containerTwoHTwoN'>8:00 a.m. - 6:00 p.m.</h3>
            <h3 className='containerTwoHTwoN'>Sat & Sun: Closed</h3>
        </div>

        <div className='containerThreeN inlineN'>
            <h2 className='containerThreeHOneN'>Address</h2>
            <h3 className='containerThreeHTwoN'>No. 12 & 14, Jalan Utama 2/1,<br/>Taman Perindustrian Puchong Utama,<br/>47100 Puchong, Selangor.</h3>

            <h2 className='containerThreeHOneN'>Locate Us</h2>
            <iframe style={{ borderRadius:'10px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3634601208323!2d101.61031511530919!3d2.9964178549068237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb38215f41bcb%3A0xc1171407013e889!2sUni%20Circle%20Fasteners%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1672907538915!5m2!1sen!2smy" width="318" height="167" ></iframe>
        </div>
    </div>
        <div className='copyright'>
            <h1 className='copyrightH'>Copyright © 2022 UNI CIRCLE FASTENERS SDN. BHD. All rights reserved. | Another Site built on React by <a href='https://wdatechnology.com/' style={{ color:'white',textDecoration:'none' }}>WDA Technology Solution SDN BHD. </a></h1>
        </div>
      
    </div>


      <div className='mobile'>

      <div className='containerFixed '>
      <div className='containerOneN' >
        <img src={UCF} className="imageOneN"/>
      </div>

      <div>
      <div className='containerOneN '>
            <h2 className='containerOneHOneN'>Site Map</h2>
            <Link to="/"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Home</h3></Link>
            <Link to="/products"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Products</h3></Link>
            <Link to="/about"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>About</h3></Link>
            <Link to="/guide"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Guide</h3></Link>
            <Link to="/enqiury"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Enquiry</h3></Link>
            <Link to="/"  onClick={scrollToTop} style={{ textDecoration:'none' }}><h3 className='containerOneHTwoN'>Privacy Policy</h3></Link>
        </div>

        <div className='containerTwoN '>
            <h2 className='containerTwoHOneN'>Contact Us</h2>
            <h3 className='containerTwoHTwoN'>Tel: 03-8068 2026</h3>
            <h3 className='containerTwoHTwoN'>Fax: 03-8068 3036</h3>
            <h3 className='containerTwoHTwoN'>E-mail: sales@unicircle.com.my</h3>
            <img src={facebookIcon} classNam="inlineI"/><h3 className='containerTwoHTwoN inlineI'>Uni Circle Fasteners</h3><br/>
            <img src={whatsappIcon} classNam="inlineI"/><h3 className='containerTwoHTwoN inlineI'>011-1638 1101</h3><br/>
            <img src={whatsappIcon} classNam="inlineI"/><h3 className='containerTwoHTwoN inlineI'>012-818 2011</h3>
        </div>

        <div className='containerTwoN '>
            <h2 className='containerTwoHOneN'>Opening Hours</h2>
            <h3 className='containerTwoHTwoN'>Mon - Fri:</h3>
            <h3 className='containerTwoHTwoN'>8:00 a.m. - 6:00 p.m.</h3>
            <h3 className='containerTwoHTwoN'>Sat & Sun: Closed</h3>
        </div>
        
        <div className='containerTwoN '>
            <h2 className='containerThreeHOneN'>Address</h2>
            <h3 className='containerThreeHTwoN'>No. 12 & 14, Jalan Utama 2/1,<br/>Taman Perindustrian Puchong Utama,<br/>47100 Puchong, Selangor.</h3>
        </div>
        </div>

        <div className='containerThreeN' >
            <h2 className='containerThreeHOneN'>Locate Us</h2>
            <iframe style={{ borderRadius:'10px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3634601208323!2d101.61031511530919!3d2.9964178549068237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb38215f41bcb%3A0xc1171407013e889!2sUni%20Circle%20Fasteners%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1672907538915!5m2!1sen!2smy" width="318" height="167" ></iframe>
        </div>
        </div>

        <div className='copyright'>
            <h1 className='copyrightH'>Copyright © 2022 UNI CIRCLE FASTENERS SDN. BHD. All rights reserved.<br/> | Another Site built on React by <a href='https://wdatechnology.com/' style={{ color:'white',textDecoration:'none' }}>WDA Technology Solution SDN BHD. </a> </h1>
        </div>
      </div>
    </div>
  )
}
