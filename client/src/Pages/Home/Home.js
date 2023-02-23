import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import UCF from '../../Images/UCF.png'
import UCFTwo from '../../Images/UCFTwo.jpg'
import Socket from '../../Images/Socket.jpg'
import Bolt from '../../Images/Bolt.jpg'
import MachineScrew from '../../Images/MachineScrew.jpg'
import Washer from '../../Images/Washer.jpg'
import Clip from '../../Images/Clip.jpg'
import Rivet from '../../Images/Rivet.jpg'
import Recoil from '../../Images/Recoil.jpg'
import Pin from '../../Images/Pin.jpg'
import Nut from '../../Images/Nut.jpg'
import Miscellaneous from '../../Images/Miscellaneous.jpg'
import Anchor from '../../Images/Anchor.jpg'

import '../Home/Home.css'

import {motion} from "framer-motion"

export const Home = () => {
    return(
        <motion.div className='home' intial={{ width:1}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>

            <div className='containerOne'>
                <img src={UCF} className="image" />
            </div>

            <div className='containerTwo'>
                <h1 className='containerTwoHOne'>Uni Circle Fasteners</h1>
                <h3 className='containerTwoHTwo'>Screw, Bolts & Nuts Supplier<br/> in Selangor, Maysia</h3>
            </div>

            <div className='containerThree'>
                <h1 className='containerThreeHOne'>Every type of Fasteners you’ll ever need, <b>In One Place</b></h1>
                <p className='containerThreePOne'>No matter what type of bolts, nuts, fastener needs and solution, you will be able to find it here. Uni Circle Fastener SDN BHD is one of the largest fastener suppliers in Selangor, housing and maintaining more than 10,000 different types of fasteners today, and comes with various sizes, materials and standard. Other than that, Uni Circle Fastener also provide customization to customer by request to satisfy their special needs. What’s more? Uni Circle Fastener also implemented tight quality control in our business process to ensure our customer would have a peace in mind when purchasing with us.</p>
            </div>

            <div className='containerFour'>
                <div className='inline grow'>
                    <img src={Socket} className="imageFirstRow" />
                    <h1 className='containerFourH'>Socket Screw</h1>
                </div>

                <div className='inline grow'>
                    <img src={Bolt} className="imageFirstRow" />
                    <h1 className='containerFourH'>Bolt</h1>
                </div>

                <div className='inline grow'>
                    <img src={MachineScrew} className="imageFirstRow" />
                    <h1 className='containerFourH'>Machine Screw</h1>
                </div>
            </div>

            <div className='containerFourSecond'>
                <div className='inline grow'>
                    <img src={Washer} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Washer</h1>
                </div>

                <div className='inline grow'>
                    <img src={Clip} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Clip</h1>
                </div>

                <div className='inline grow'>
                    <img src={Rivet} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Rivet</h1>
                </div>

                <div className='inline grow'>
                    <img src={Recoil} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Recoil</h1>
                </div>

                <div className='inline grow'>
                    <img src={Pin} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Pin</h1>
                </div>

                <div className='inline grow'>
                    <img src={Nut} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Nut</h1>
                </div>

                <div className='inline grow'>
                    <img src={Miscellaneous} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Others</h1>
                </div>

                <div className='inline grow'>
                    <img src={Anchor} className="padding imageSecondRow" />
                    <h1 className='containerFourH'>Anchor</h1>
                </div>
            </div>

            <div className='containerFive'>
                <div className='layer'>
                    <h1 className='containerFiveH'>Top Fastener Supplier & Supplier In Selangor</h1>
                    <p className='containerFiveP'>Uni Circle Fastener SDN BHD offers quality, user-friendly, and cost efficiency fasteners that would benefits our customer. Uni Circle Fastener SDN BHD philosophy is to strive to provide the best quality of product and services in line that would benefits the most for our customer. If you are looking for Screw, Bolts, Nuts or any kind of Fasteners in Selangor, don’t hesitate to reach out to Uni Circle Fastener SDN BHD.</p>
                </div>
            </div>

            <div className='containerSix grow'>
                <img src={UCFTwo} className="imgUCF" />
            </div>

            <div className='containerSeven'>
                <h1 className='containerSevenH'><b>High Quality</b><br/>Bolt and Nuts Supplier in Malaysia</h1>
                <p className='containerSevenP'>Uni Circle Fasteners has been actively engaged in the fasteners industry for more than 20 years. Since then, Uni Circle Fasteners have developed into a reliable and trustworthy fasteners supplier that caters to both businesses and consumers in Malaysia. Today, Uni Circle Fasteners SDN BHD has been recognized as one of the top Screw, Bolts and Nuts Supplier in Selangor, and is striving to be the industry pioneer in Malaysia.</p>
            </div>
            </div>



            <div className='mobile'>
            <div className='containerOne'>
                <img src={UCF} className="image" />
            </div>

            <div className='containerTwo'>
                <h1 className='containerTwoHOne'>Uni Circle Fasteners</h1>
                <h3 className='containerTwoHTwo'>Screw, Bolts & Nuts Supplier<br/> in Selangor, Maysia</h3>
            </div>

            <div className='containerThree'>
                <h1 className='containerThreeHOne'>Every type of Fasteners you’ll ever need, <br/><b>In One Place</b></h1>
                <p className='containerThreePOne'>No matter what type of bolts, nuts, fastener needs and solution, you will be able to find it here. Uni Circle Fastener SDN BHD is one of the largest fastener suppliers in Selangor, housing and maintaining more than 10,000 different types of fasteners today, and comes with various sizes, materials and standard. Other than that, Uni Circle Fastener also provide customization to customer by request to satisfy their special needs. What’s more? Uni Circle Fastener also implemented tight quality control in our business process to ensure our customer would have a peace in mind when purchasing with us.</p>
            </div>

            <div className='containerFourOne'>
                <div className='inline grow'>
                    <img src={Socket} className="imageCardOne" />
                    <h1 className='containerFourH'>Socket Screw</h1>
                </div>

                <div className='inline grow'>
                    <img src={Bolt} className="imageCardOne" />
                    <h1 className='containerFourH'>Bolt</h1>
                </div>

                <div className='inline grow'>
                    <img src={MachineScrew} className="imageCardOne" />
                    <h1 className='containerFourH'>Machine Screw</h1>
                </div>
            </div>
            <div className='containerFour'>

                <div className='inline grow'>
                    <img src={Washer} className="imageCard" />
                    <h1 className='containerFourH'>Washer</h1>
                </div>

                <div className='inline grow'>
                    <img src={Clip} className="imageCard" />
                    <h1 className='containerFourH'>Clip</h1>
                </div>

                <div className='inline grow'>
                    <img src={Rivet} className="imageCard" />
                    <h1 className='containerFourH'>Rivet</h1>
                </div>

                <div className='inline grow'>
                    <img src={Recoil} className="imageCard" />
                    <h1 className='containerFourH'>Recoil</h1>
                </div>

                <div className='inline grow'>
                    <img src={Pin} className="imageCard" />
                    <h1 className='containerFourH'>Pin</h1>
                </div>

                <div className='inline grow'>
                    <img src={Nut} className="imageCard" />
                    <h1 className='containerFourH'>Nut</h1>
                </div>

                <div className='inline grow'>
                    <img src={Miscellaneous} className="imageCard" />
                    <h1 className='containerFourH'>Others</h1>
                </div>

                <div className='inline grow'>
                    <img src={Anchor} className="imageCard" />
                    <h1 className='containerFourH'>Anchor</h1>
                </div>
            </div>

            {/* <div className='containerFour'>
                <div className='inline'>
                    <img src={Washer} className="padding" />
                    <h1 className='containerFourH'>Washer</h1>
                </div>

                <div className='inline'>
                    <img src={Clip} className="padding" />
                    <h1 className='containerFourH'>Clip</h1>
                </div>

                <div className='inline'>
                    <img src={Rivet} className="padding" />
                    <h1 className='containerFourH'>Rivet</h1>
                </div>

                <div className='inline'>
                    <img src={Recoil} className="padding" />
                    <h1 className='containerFourH'>Recoil</h1>
                </div>

                <div className='inline'>
                    <img src={Pin} className="padding" />
                    <h1 className='containerFourH'>Pin</h1>
                </div>

                <div className='inline'>
                    <img src={Nut} className="padding" />
                    <h1 className='containerFourH'>Nut</h1>
                </div>

                <div className='inline'>
                    <img src={Miscellaneous} className="padding" />
                    <h1 className='containerFourH'>Miscellaneous</h1>
                </div>

                <div className='inline'>
                    <img src={Anchor} className="padding" />
                    <h1 className='containerFourH'>Anchor</h1>
                </div>
            </div> */}

            <div className='containerFive'>
                <div className='layer'>
                    <h1 className='containerFiveH'>Top Fastener Supplier & Supplier In Selangor</h1>
                    <p className='containerFiveP'>Uni Circle Fastener SDN BHD offers quality, user-friendly, and cost efficiency fasteners that would benefits our customer. Uni Circle Fastener SDN BHD philosophy is to strive to provide the best quality of product and services in line that would benefits the most for our customer. If you are looking for Screw, Bolts, Nuts or any kind of Fasteners in Selangor, don’t hesitate to reach out to Uni Circle Fastener SDN BHD.</p>
                </div>
            </div>

            <div className='containerSix grow'>
                <img src={UCFTwo} className="logo" />
            </div>

            <div className='containerSeven'>
                <h1 className='containerSevenH'><b>High Quality</b><br/>Bolt and Nuts Supplier in Malaysia</h1>
                <p className='containerSevenP'>Uni Circle Fasteners has been actively engaged in the fasteners industry for more than 20 years. Since then, Uni Circle Fasteners have developed into a reliable and trustworthy fasteners supplier that caters to both businesses and consumers in Malaysia. Today, Uni Circle Fasteners SDN BHD has been recognized as one of the top Screw, Bolts and Nuts Supplier in Selangor, and is striving to be the industry pioneer in Malaysia.</p>
            </div>
            </div>
        </motion.div>
    )
}