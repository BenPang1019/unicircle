import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import Socket from '../../Images/Socket.jpg'

import '../ProductDetails/ProductDetails.css'

import {motion} from "framer-motion"

export const ProductDetails = () => {
    const location = useLocation();

    return(
        <motion.div className='productDetails' intial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.2} }}>
            <div className='web'>
                <div className='containerOne'>
                    <div className='containerImage inline'>
                        <img src={location.state.data.productImageOne?location.state.data.productImageOne:null} className="imgOne" />
                        <br/>
                        {location.state.data.productImageTwo?
                        <img src={location.state.data.productImageTwo?location.state.data.productImageTwo:null} className="imgTwo padding" />
                        :
                        null
                        }
                        {location.state.data.productImageThree?
                        <img src={location.state.data.productImageThree?location.state.data.productImageThree:null} className="imgThree padding" />
                        :
                        null
                        }
                        {location.state.data.productImageTwo?
                        <img src={location.state.data.productImageFour?location.state.data.productImageFour:null} className="imgFour padding" />
                        :
                        null
                        }
                    </div>

                    <div className='containerTable inline'>
                        <h1 className='containerTableHOne'>{location.state.data.productName}</h1>
                        <h1 className='containerTableHTwo'>{location.state.data.standards}</h1>
                        <h3 className='containerTableHThree'>Nominal Dimension</h3>
                        <table className='table'>
                            <tr>
                                <td className='tableLeft'>Diameter (d)</td>
                                <td className='tableRight'>{location.state.data.diameterOne}</td>
                                {location.state.data.diameterTwo?
                                <td className='tableRight'>{location.state.data.diameterTwo}</td>
                                :
                                null
                                }
                                {location.state.data.diameterThree?
                                <td className='tableRight'>{location.state.data.diameterThree}</td>
                                :
                                null
                                }
                                {location.state.data.diameterFour?
                                <td className='tableRight'>{location.state.data.diameterFour}</td>
                                :
                                null
                                }
                                {location.state.data.diameterFive?
                                <td className='tableRight'>{location.state.data.diameterFive}</td>
                                :
                                null
                                }
                                {location.state.data.diameterSix?
                                <td className='tableRight'>{location.state.data.diameterSix}</td>
                                :
                                null
                                }
                            </tr>
                            <tr>
                                <td className='tableLeft'>Length (l)</td>
                                <td className='tableRight'>{location.state.data.lengthOne}</td>
                                {location.state.data.lengthTwo?
                                <td className='tableRight'>{location.state.data.lengthThree}</td>
                                :
                                null
                                }
                                {location.state.data.lengthThree?
                                <td className='tableRight'>{location.state.data.lengthThree}</td>
                                :
                                null
                                }
                                {location.state.data.lengthFour?
                                <td className='tableRight'>{location.state.data.lengthFour}</td>
                                :
                                null
                                }
                                {location.state.data.lengthFive?
                                <td className='tableRight'>{location.state.data.lengthFive}</td>
                                :
                                null
                                }
                                {location.state.data.lengthSix?
                                <td className='tableRight'>{location.state.data.lengthSix}</td>
                                :
                                null
                                }
                            </tr>
                            <tr>
                                <td className='tableLeft'>ds</td>
                                <td className='tableRight'>{location.state.data.dsOne}</td>
                                {location.state.data.dsTwo?
                                <td className='tableRight'>{location.state.data.dsTwo}</td>
                                :
                                null
                                }
                                {location.state.data.dsThree?
                                <td className='tableRight'>{location.state.data.dsThree}</td>
                                :
                                null
                                }
                                {location.state.data.dsFour?
                                <td className='tableRight'>{location.state.data.dsFour}</td>
                                :
                                null
                                }
                                {location.state.data.dsFive?
                                <td className='tableRight'>{location.state.data.dsFive}</td>
                                :
                                null
                                }
                                {location.state.data.dsSix?
                                <td className='tableRight'>{location.state.data.dsSix}</td>
                                :
                                null
                                }
                            </tr>
                            <tr>
                                <td className='tableLeft'>hl</td>
                                <td className='tableRight'>{location.state.data.hlOne}</td>
                                {location.state.data.hlTwo?
                                <td className='tableRight'>{location.state.data.hlTwo}</td>
                                :
                                null
                                }
                                {location.state.data.hlThree?
                                <td className='tableRight'>{location.state.data.hlThree}</td>
                                :
                                null
                                }
                                {location.state.data.hlFour?
                                <td className='tableRight'>{location.state.data.hlFour}</td>
                                :
                                null
                                }
                                {location.state.data.hlFive?
                                <td className='tableRight'>{location.state.data.hlFive}</td>
                                :
                                null
                                }
                                {location.state.data.hlSix?
                                <td className='tableRight'>{location.state.data.hlSix}</td>
                                :
                                null
                                }
                            </tr>
                        </table>
                        <h3 className='containerTableHFour'>Unit: mm</h3>
                    </div>
                </div>

                <div className='containerTwo'>
                    <table className='tableTwo'>
                        <tr>
                            <td className='tableTwoLeft'>Materials Available</td>
                            <td className='tableTwoRight'>{location.state.data.materials}</td>
                        </tr>
                        <tr>
                            <td className='tableTwoLeft'>Finishes</td>
                            <td className='tableTwoRight'>{location.state.data.finisher}</td>
                        </tr>
                    </table>
                </div>
                <div className='ignore'></div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <div className='containerImage'>
                        <img src={location.state.data.productImageOne?location.state.data.productImageOne:null} className="imgOne" />
                        <br/>
                        <img src={location.state.data.productImageTwo?location.state.data.productImageTwo:null} className="imgTwo padding" />
                        <img src={location.state.data.productImageThree?location.state.data.productImageThree:null} className="imgThree padding" />
                        <img src={location.state.data.productImageFour?location.state.data.productImageFour:null} className="imgFour padding" />
                    </div>

                    <div className='containerTable'>
                        <h1 className='containerTableHOne'>{location.state.data.productName}</h1>
                        <h1 className='containerTableHTwo'>{location.state.data.standards}</h1>
                        <h3 className='containerTableHThree'>Nominal Dimension</h3>
                        <table className='table'>
                            <tr>
                                <td className='tableLeft'>Diameter (d)</td>
                                <td className='tableLeft'>Length (l)</td>
                                <td className='tableLeft'>ds</td>
                                <td className='tableLeft'>hl</td>                 
                            </tr>
                            <tr>
                                <td className='tableRight'>{location.state.data.diameterOne}</td>
                                <td className='tableRight'>{location.state.data.lengthOne}</td>
                                <td className='tableRight'>{location.state.data.dsOne}</td>
                                <td className='tableRight'>{location.state.data.hlOne}</td>
                            </tr>
                            {location.state.data.diameterTwo?
                            <tr>
                            <td className='tableRight'>{location.state.data.diameterTwo}</td>
                                <td className='tableRight'>{location.state.data.lengthTwo}</td>
                                <td className='tableRight'>{location.state.data.dsTwo}</td>
                                <td className='tableRight'>{location.state.data.hlTwo}</td>
                            </tr>
                            :
                            null
                            }
                            {location.state.data.diameterThree?
                            <tr>
                                <td className='tableRight'>{location.state.data.diameterThree}</td>
                                <td className='tableRight'>{location.state.data.lengthThree}</td>
                                <td className='tableRight'>{location.state.data.dsThree}</td>
                                <td className='tableRight'>{location.state.data.hlThree}</td>
                            </tr>
                            :
                            null
                            }
                            {location.state.data.diameterFour?
                            <tr>
                            <td className='tableRight'>{location.state.data.diameterFour}</td>
                                <td className='tableRight'>{location.state.data.lengthFour}</td>
                                <td className='tableRight'>{location.state.data.dsFour}</td>
                                <td className='tableRight'>{location.state.data.hlFour}</td>
                            </tr>
                            :
                            null}
                            {location.state.data.diameterFive?
                            <tr>
                            <td className='tableRight'>{location.state.data.diameterFive}</td>
                                <td className='tableRight'>{location.state.data.lengthFive}</td>
                                <td className='tableRight'>{location.state.data.dsFive}</td>
                                <td className='tableRight'>{location.state.data.hlFive}</td>
                            </tr>
                            :
                            null
                            }
                            {location.state.data.diameterSix?
                            <tr>
                                <td className='tableRight'>{location.state.data.diameterSix}</td>
                                <td className='tableRight'>{location.state.data.lengthSix}</td>
                                <td className='tableRight'>{location.state.data.dsSix}</td>
                                <td className='tableRight'>{location.state.data.hlSix}</td>
                            </tr>
                            :
                            null
                            }
                        </table>
                        <h3 className='containerTableHFour'>Unit: mm</h3>
                    </div>
                </div>

                <div className='containerTwo'>
                    <table className='tableTwo'>
                        <tr>
                            <td className='tableTwoLeft'>Materials Available</td>
                        </tr>
                        <tr>
                            <td className='tableTwoRight'>{location.state.data.materials}</td>
                        </tr>
                        <tr>
                            <td className='tableTwoLeft'>Finishes</td>
                        </tr>
                        <tr>
                            <td className='tableTwoRight'>{location.state.data.finisher}</td>
                        </tr>
                    </table>
                </div>
                <div className='ignore'></div>
            </div>
        </motion.div>
    )
}