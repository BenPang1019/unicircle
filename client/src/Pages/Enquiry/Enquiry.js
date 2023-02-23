import React,{useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import UCF from '../../Images/UCF.png'

import '../Enquiry/Enquiry.css'

import axios from 'axios'

import {motion} from "framer-motion"

export const Enquiry = () => {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [company, setCompany] = useState('')
    const [designation, setDesignation] = useState('')

    const handleRequest = async (e) => {
        e.preventDefault()
    
        const body = {
            name,
            phone, 
            email, 
            message,
            company,
            designation
        }
    
        try {
          const res = await axiosInstance.post("/mail", body);
        } catch (err) {
          
        }
      }

    return(
        <motion.div className='enquiry' intial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <img src={UCF} className="image" />
                </div>

                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>Contact Us Now</h1>
                    <h3 className='containerTwoHTwo'>your best fasteners provider</h3>
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Get in Touch with us</h1>

                    <table className='containerThreeTable'>
                    <tbody>
                        <tr>
                            <td className='containerThreeTableLeft'>Address</td>
                            <td className='containerThreeTableRight'>No. 12 & 14, Jalan Utama 2/1,<br/>Taman Perindustrian Puchong Utama,<br/>47000 Puchong, Selangor, Malaysia.</td>
                        </tr>
                        <tr>
                            <td className='containerThreeTableLeft'>Phone</td>
                            <td className='containerThreeTableRight'>03-8068 2026</td>
                        </tr>
                        <tr>
                            <td className='containerThreeTableLeft'>E-mail</td>
                            <td className='containerThreeTableRight'>sales@unicircle.com.my</td>
                        </tr>
                        </tbody>
                    </table>
                    

                    <div className='containerThreeMap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3634601208323!2d101.61031511530919!3d2.9964178549068237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb38215f41bcb%3A0xc1171407013e889!2sUni%20Circle%20Fasteners%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1672907538915!5m2!1sen!2smy" width="600" height="450" ></iframe>
                    </div>
                </div>

                <div className='containerFour'>
                    <div className='containerFourEnquiry'>
                        <h1 className='containerFourEnquiryH'>Make an Enquiry</h1>
                        <p className='containerFourEnquiryP'>Fill in your contact information here. Our Customer Service will get back to you as soon as possible.</p>
                    </div>

                    <table className='containerFourTable'>
                    <tbody>
                        <tr>
                            <td className='containerFourTableLeft'>Name*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {name} onChange = {(e) => setName(e.target.value)} name="name"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Phone*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {phone} onChange = {(e) => setPhone(e.target.value)} name="phone"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>E-mail*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {email} onChange = {(e) => setEmail(e.target.value)} name="email"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Message*</td>
                            <td className='containerFourTableRight'><textarea className='tableInput' value = {message} onChange = {(e) => setMessage(e.target.value)} name="message"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Company*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {company} onChange = {(e) => setCompany(e.target.value)} name="company"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Designation*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {designation} onChange = {(e) => setDesignation(e.target.value)} name="designation"/></td>
                        </tr>
                    </tbody>
                    </table>
                    <button onClick={handleRequest}>Submit</button>
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <img src={UCF} className="image" />
                </div>

                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>Contact Us Now</h1>
                    <h3 className='containerTwoHTwo'>your best fasteners provider</h3>
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Get in Touch with us</h1>

                    <table className='containerThreeTable'>
                    <tbody>
                        <tr>
                            <td className='containerThreeTableLeft'>Address</td>
                            <td className='containerThreeTableRight'>No. 12 & 14, Jalan Utama 2/1,<br/>Taman Perindustrian Puchong Utama,<br/>47000 Puchong, Selangor, Malaysia.</td>
                        </tr>
                        <tr>
                            <td className='containerThreeTableLeft'>Phone</td>
                            <td className='containerThreeTableRight'>03-8068 2026</td>
                        </tr>
                        <tr>
                            <td className='containerThreeTableLeft'>E-mail</td>
                            <td className='containerThreeTableRight'>sales@unicircle.com.my</td>
                        </tr>
                        </tbody>
                    </table>
                    

                    <div className='containerThreeMap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3634601208323!2d101.61031511530919!3d2.9964178549068237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb38215f41bcb%3A0xc1171407013e889!2sUni%20Circle%20Fasteners%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1672907538915!5m2!1sen!2smy" width="300" height="300" ></iframe>
                    </div>
                </div>

                <div className='containerFour'>
                    <div className='containerFourEnquiry'>
                        <h1 className='containerFourEnquiryH'>Make an Enquiry</h1>
                        <p className='containerFourEnquiryP'>Fill in your contact information here. Our Customer Service will get back to you as soon as possible.</p>
                    </div>

                    <table className='containerFourTable'>
                    <tbody>
                        <tr>
                            <td className='containerFourTableLeft'>Name*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {name} onChange = {(e) => setName(e.target.value)} name="name"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Phone*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {phone} onChange = {(e) => setPhone(e.target.value)} name="phone"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>E-mail*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {email} onChange = {(e) => setEmail(e.target.value)} name="email"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Message*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {message} onChange = {(e) => setMessage(e.target.value)} name="message"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Company*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {company} onChange = {(e) => setCompany(e.target.value)} name="company"/></td>
                        </tr>
                        <tr>
                            <td className='containerFourTableLeft'>Designation*</td>
                            <td className='containerFourTableRight'><input className='tableInput' value = {designation} onChange = {(e) => setDesignation(e.target.value)} name="designation"/></td>
                        </tr>
                    </tbody>
                    </table>
                    <button onClick={handleRequest}>Submit</button>
                </div>
            </div>
        </motion.div>
    )
}