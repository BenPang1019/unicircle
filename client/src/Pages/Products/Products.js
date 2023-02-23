import React, { useState,useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

import UCF from '../../Images/UCF.png'
import Arrow from '../../Images/Arrow.jpg'

import axios from 'axios'

import '../Products/Products.css'

import {motion} from "framer-motion"


export const Products = () => {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});

    const [data,setData] = useState([])

    const scrollToTop = () => {
        window.scrollTo(0, 250)
    }

    const [isActive,setIsActive] = useState(false)
    const [isActiveOne,setIsActiveOne] = useState(false)
    const [isActiveTwo,setIsActiveTwo] = useState(false)
    const [isActiveThree,setIsActiveThree] = useState(false)
    const [isActiveFour,setIsActiveFour] = useState(false)
    const [isActiveFive,setIsActiveFive] = useState(false)
    const [isActiveSix,setIsActiveSix] = useState(false)
    const [isActiveSeven,setIsActiveSeven] = useState(false)
    const [isActiveEight,setIsActiveEight] = useState(false)
    const [isActiveNine,setIsActiveNine] = useState(false)
    const [isActiveTen,setIsActiveTen] = useState(false)
    const [isActiveEleven,setIsActiveEleven] = useState(false)
    
    const [filters, setFilters] = useState({
        category: '',
      }); 

    useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axiosInstance.get(`/product/getProducts`); 
            console.log(res)
            setData(res.data);
        } catch (err) {
        console.log(err);
        }
    };
    fetchData();
    }, []);
    

    const displayProduct = data
    .filter(prod =>
        prod.category.includes(filters.category) 
      )
    .map(data => {
        return(
            <div class="flip-card inline" key={data.id}>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={data.productImageOne} className="productImage"/>
                        <Link to="/productDetails" state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><h1 className='containerFourH'>{data.productName}</h1></Link>
                    </div>
                    <div class="flip-card-back" >
                        <img src={data.productImageOne} className="productImageDescription"/>
                        <Link to="/productDetails" state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><h1 className='description'>{data.description}</h1></Link>
                    </div>
                </div>
            </div>
        )
    })

    const selectedProduct = data
    .filter(prod =>
        prod.category.includes(filters.category) 
      )
    .map(data => {
        return(
            <div className='' key={data.id}>
                <Link to="/productDetails" state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><h1 className='selectedH'>{data.productName}</h1></Link>
            </div>  
        )
    })

    const anchor = () => {
        setFilters({...filters,category: 'Anchor',})
        setIsActiveOne(!isActiveOne)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const bolt = () => {
        setFilters({...filters,category: 'Bolt',})
        setIsActiveOne(false)
        setIsActiveTwo(!isActiveTwo)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const clip = () => {
        setFilters({...filters,category: 'Clip',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(!isActiveThree)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const machineScrew = () => {
        setFilters({...filters,category: 'Machine Screw',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(!isActiveFour)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const miscellaneous = () => {
        setFilters({...filters,category: 'Miscellaneous',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(!isActiveFive)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const nut = () => {
        setFilters({...filters,category: 'Nut',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(!isActiveSix)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const pin = () => {
        setFilters({...filters,category: 'Pin',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(!isActiveSeven)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const recoil = () => {
        setFilters({...filters,category: 'Recoil',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(!isActiveEight)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const rivet = () => {
        setFilters({...filters,category: 'Rivet',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(!isActiveNine)
        setIsActiveTen(false)
        setIsActiveEleven(false)
    }

    const socketScrew = () => {
        setFilters({...filters,category: 'Socket Screw',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(!isActiveTen)
        setIsActiveEleven(false)
    }

    const washer = () => {
        setFilters({...filters,category: 'Washer',})
        setIsActiveOne(false)
        setIsActiveTwo(false)
        setIsActiveThree(false)
        setIsActiveFour(false)
        setIsActiveFive(false)
        setIsActiveSix(false)
        setIsActiveSeven(false)
        setIsActiveEight(false)
        setIsActiveNine(false)
        setIsActiveTen(false)
        setIsActiveEleven(!isActiveEleven)
    }
    

    return(
        <motion.div className='products' intial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <img src={UCF} className="image" />
                </div>
                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>Comprehensive</h1>
                    <h3 className='containerTwoHTwo'>range fo HIGH-QUALITY FASTENERS</h3>
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Product Categories</h1>

                    <div className='containerCategory inlineT'>
                        <ul className='categoryUl'>
                            <li  onClick={anchor}>+ Anchor
                                {isActiveOne ?
                                    <div className='selectedUl'>
                                    {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={bolt}>+ Bolt
                                {isActiveTwo?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={clip}>+ Clip
                                {isActiveThree?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={machineScrew}>+ Machine Screw
                                {isActiveFour?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={miscellaneous}>+ Miscellaneous
                                {isActiveFive?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={nut}>+ Nut
                                {isActiveSix?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={pin}>+ Pin
                                {isActiveSeven?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={recoil}>+ Recoil
                                {isActiveEight?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={rivet}>+ Rivet
                                {isActiveNine?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={socketScrew}>+ Socket Screw
                                {isActiveTen?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={washer}>+ Washer
                                {isActiveEleven?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                        </ul>
                    </div>

                    <div className='containerProduct inlineT'>
                        {displayProduct}
                    </div>

                </div>
            </div>

            <div className='mobile'>
                <div className='containerOne'>
                    <img src={UCF} className="image" />
                </div>

                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>Comprehensive</h1>
                    <h3 className='containerTwoHTwo'>range fo HIGH-QUALITY FASTENERS</h3>
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Product Categories</h1>

                    <div className='containerCategory'>
                        <h3 className='containerCategoryHOne inline' >Select Category</h3>
                        <img src={Arrow} className='' onClick={()=>{setIsActive(!isActive)}}/>
                        <hr className='underline'></hr>

                        {isActive &&
                        <div className='containerUl'>
                        <ul className='categoryUl'>
                            <li  onClick={anchor}>+ Anchor
                                {isActiveOne ?
                                    <div className='selectedUl'>
                                    {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={bolt}>+ Bolt
                                {isActiveTwo?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={clip}>+ Clip
                                {isActiveThree?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={machineScrew}>+ Machine Screw
                                {isActiveFour?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={miscellaneous}>+ Miscellaneous
                                {isActiveFive?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={nut}>+ Nut
                                {isActiveSix?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={pin}>+ Pin
                                {isActiveSeven?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={recoil}>+ Recoil
                                {isActiveEight?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={rivet}>+ Rivet
                                {isActiveNine?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={socketScrew}>+ Socket Screw
                                {isActiveTen?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                            <li onClick={washer}>+ Washer
                                {isActiveEleven?
                                    <div className='selectedUl'>
                                        {selectedProduct}
                                    </div>
                                    :
                                    null
                                }
                            </li>
                        </ul>
                        </div>
                        }
                    </div>

                    <div className='containerProduct'>
                        {displayProduct}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
