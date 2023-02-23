import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import UCF from '../../Images/UCF.png'
import Shop from '../../Images/Shop.jpg'
import Screw from '../../Images/ScrewTwo.jpg'

import '../About/About.css'

import {motion} from "framer-motion"

export const About = () => {
    return(
        <motion.div className='about' intial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <img src={UCF} className="image" />
                </div>

                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>Industrial Fasteners</h1>
                    <h3 className='containerTwoHTwo'>Uni Circle Fasteners Sdn. Bhd.<br/> supplier and stockist</h3>
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Company Profile</h1>
                    <img src={Shop} className="containerThreeImage grow" />
                    <h1 className='containerThreeHTwo'>Standing in the industry for more than</h1>
                    <h1 className='containerThreeHThree'>20 Years</h1>
                    <p className='containerThreePOne'>Uni Circle Fasteners SDN BHD has developed into a reliable, trustworthy local fasteners supplier that cater to both businesses and customer in Selangor, Malaysia.</p>

                    <div className='inline containerThreeCardOne'>
                        <h1 className='containerTwoVison'>Vision</h1>
                        <h1 className='containerTwoVisonH'><br/><br/>To be Malaysia’s leading distributor and supplier <br/>of high-quality fasteners.</h1>
                    </div>

                    <div className='inline containerThreeCardTwo'>
                        <h1 className='containerTwoMission'>Mission</h1>
                        <h1 className='containerTwoMissionH'><br/>We strive to provide our customers with <br/>high-quality fasteners along with<br/>outstanding customer services</h1>
                    </div>
                </div>

                <div className='containerFour'>
                    <div className='layer'>
                        <h1 className='containerFourHOne'>Being one of the Leading Fastener Supplier in Selangor, Uni Circle <br/>Fastener SDN BHD now maintaining an inventory of more than</h1>
                        <h1 className='containerFourHTwo'>10,000 Different Fasteners</h1>
                        <h1 className='containerFourHThree'>in various size, material and standards<br/> and is still continue developing rapidly.</h1>
                    </div>
                </div>

                <div className='containerFive grow'>
                    <img src={Screw} className="imageScrew" />
                </div>

                <div className='containerSix'>
                    <h1 className='containerSixH'>Uni Circle Fastener SDN BHD</h1>
                    <p className='containerSixP'>valued their product quality and service excellency very much, that’s what make Uni Circle Fastener SDN BHD one of the recognizable Fastener Supplier in Selangor.<br/> <br/>Therefore, every product at Uni Circle goes through tight quality control before providing to our Valued Customer to minimized defects and ensuring the product delivered met the standards. Additionally, customized fastener is also provided as requested by customer to meet their special needs</p>
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne '>
                    <img src={UCF} className="image" />
                </div>

                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>Industrial Fasteners</h1>
                    <h3 className='containerTwoHTwo'>Uni Circle Fasteners Sdn. Bhd.<br/> supplier and stockist</h3>
                </div>

                <div className='containerThree '>
                    <h1 className='containerThreeHOne'>Company Profile</h1>
                    <img src={Shop} className="containerThreeImage grow" />
                    <h1 className='containerThreeHTwo'>Standing in the industry for more than</h1>
                    <h1 className='containerThreeHThree'>20 Years</h1>
                    <p className='containerThreePOne'>Uni Circle Fasteners SDN BHD has developed into a reliable, trustworthy local fasteners supplier that cater to both businesses and customer in Selangor, Malaysia.</p>

                    <div className='inline containerThreeCardOne'>
                        <h1 className='containerTwoVison'>Vision</h1>
                        <h1 className='containerTwoVisonH'>To be Malaysia’s leading distributor and supplier of high-quality fasteners.</h1>
                    </div>

                    <div className='inline containerThreeCardTwo'>
                        <h1 className='containerTwoMission'>Mission</h1>
                        <h1 className='containerTwoMissionH'>We strive to provide our customers with high-quality fasteners along with outstanding customer services</h1>
                    </div>
                </div>

                <div className='containerFour'>
                    <div className='layer'>
                        <h1 className='containerFourHOne'>Being one of the Leading Fastener Supplier in Selangor, Uni Circle <br/>Fastener SDN BHD now maintaining an inventory of more than</h1>
                        <h1 className='containerFourHTwo'>10,000 Different Fasteners</h1>
                        <h1 className='containerFourHThree'>in various size, material and standards<br/> and is still continue developing rapidly.</h1>
                    </div>
                </div>

                <div className='containerFive grow'>
                    <img src={Screw} className="screwImg" />
                </div>

                <div className='containerSix'>
                    <h1 className='containerSixH'>Uni Circle Fastener SDN BHD</h1>
                    <p className='containerSixP'>valued their product quality and service excellency very much, that’s what make Uni Circle Fastener SDN BHD one of the recognizable Fastener Supplier in Selangor.<br/> <br/>Therefore, every product at Uni Circle goes through tight quality control before providing to our Valued Customer to minimized defects and ensuring the product delivered met the standards. Additionally, customized fastener is also provided as requested by customer to meet their special needs</p>
                </div>
            </div>
        </motion.div>
    )
}