import React,{useState,useEffect} from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import UCF from '../../Images/UCF.png'
import '../Guide/Guide.css'

import {motion} from "framer-motion"


import moment from 'moment'

export const Guide = () => {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});

    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axiosInstance.get(`/product/getGuides`); 
                console.log(res)
                setData(res.data);
            } catch (err) {
            console.log(err);
            }
        };
        fetchData();
        }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const displayProduct = data
    .map(data => {
        return(
            <div class="inline grow" key={data.id}>
                <Link to="/guideDetails" state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><img src={data.newsImage} className="newsImage"/></Link>
                <Link to="/guideDetails" state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><h1 className='containerThreeH'>{data.title}</h1></Link>
                <Link to="/guideDetails" state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><h1 className='containerThreeHTwo'>{moment(data.created_at).format('DD/MM/YYYY')}</h1></Link>
            </div>
        )
    })

    return(
        <motion.div className='guide' intial={{ width:1}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <img src={UCF} className="image" />
                </div>

                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>News & Updates</h1>
                    <h3 className='containerTwoHTwo'>Follow us to know more news and updates</h3>
                </div>

                <div className='containerThree'>
                    {displayProduct}
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <img src={UCF} className="image" />
                </div>

                <div className='containerTwo'>
                    <h1 className='containerTwoHOne'>News & Updates</h1>
                    <h3 className='containerTwoHTwo'>Follow us to know more news and updates</h3>
                </div>

                <div className='containerThree'>
                    {displayProduct}
                </div>
            </div>
        </motion.div>
    )
}