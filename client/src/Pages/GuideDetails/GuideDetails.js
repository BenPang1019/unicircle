import React from 'react'

import {useLocation} from 'react-router-dom';
import '../GuideDetails/GuideDetails.css'

import {motion} from "framer-motion"

import moment from 'moment'

export const GuideDetails = () => {

    const location = useLocation();
    
    return(
        <motion.div className='guideDetails' intial={{ width:1}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>{location.state.data.title}</h1>
                    <h2 className='containerOneHTwo'>{location.state.data.subTitle}</h2>
                    <h3 className='containerOneHThree'>{location.state.data.postBy} / {moment(location.state.data.created_at).format('DD.MM.YYYY')}</h3>
                </div>

                <div className='containerTwo grow'>
                    <img src={location.state.data.newsImage} className="newsImage" />
                </div>

                <div className='containerThree'>
                    <p className='description'>{location.state.data.description}</p>
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>{location.state.data.title}</h1>
                    <h2 className='containerOneHTwo'>{location.state.data.subTitle}</h2>
                    <h3 className='containerOneHThree'>{location.state.data.postBy} / {location.state.data.created_at}</h3>
                </div>

                <div className='containerTwo grow'>
                    <img src={location.state.data.newsImage} className="newsImage" />
                </div>

                <div className='containerThree'>
                    <p className='description'>{location.state.data.description}</p>
                </div>
            </div>
        </motion.div>
    )
}