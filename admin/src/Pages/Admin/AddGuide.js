import React,{useContext} from "react";
import home from "../../Images/Home.svg"


import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";

import Swal from 'sweetalert2'

import '../Admin/Edit.css'
import { AuthContext } from "../../Context/AuthContext";

export const AddGuide = () => {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});

    const [guide, setGuide] = useState({
        newsImage:"",
        title:"",
        subTitle:"",
        postBy:"",
        description:""
  });

  const [fileOne, setFileOne] = useState('');

  const state = {
    file: null,
    base64URL: ""
  };

  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleChangeOne = (e) => {

    let { file } = state;

    file = e.target.files[0];

    getBase64(file)
    .then(result => {
        file["base64"] = result;
        setFileOne(result)
    })
    .catch(err => {
        
    });
  };

  const handleChange = (e) => {
    setGuide((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    guide.newsImage=fileOne
    try {
        await axiosInstance.post("/product/addGuide", guide);
        Swal.fire({
            title: 'ADD SUCESSFULLY',
            text: "Your product has been included successfully. Press OK to continue.",
            width:'700px',
            height:'300px',
            
    
            confirmButtonText: 'OK',
            confirmButtonColor:"white",
    
            customClass:{
                confirmButton:'confirmButton grow',
                title:'title',
                popup:'popup',
                validationMessage:'title'
            },
    
            allowOutsideClick:false,
            }).then((result) => {
            if (result.isConfirmed) {
                navigate("/adminGuide");
            }
            })
    } catch (err) {
        console.log(err);
    }
    
}

  const {currentAdmin,adminLogout} = useContext(AuthContext);


  const navigate = useNavigate();
  const navigatetohome= () =>{
    navigate('/adminMainPage');
  };

    return(

        <div className="editProduct">
        {currentAdmin ? 
      (
        <>
            <section className="EDfirstsection">
                <div className="EDfirstcontainer">
                    <div className="EDcolumn-30 grow">
                        <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                    </div>

                    <div className="EDcolumn-30 right">
                        <button className='EDbacktbtn grow' onClick={() => navigate(-1)}>BACK</button>
                    </div>
                </div>
            </section>

            <section className="EDsecondsection">
                <div className="ED2-center-container">
                    <img src={fileOne?fileOne:null} className="guideImage" name="guideImage"/>
                    <br/><br/>
                    <label for="imageGuide" className="labelButton grow">
                                Upload Image
                            <input
                                id="imageGuide"
                                name="newsImage"
                                className="fileButton"
                                onChange={handleChangeOne}
                                type="file"
                                accept=".jpg, .jpeg, .png"
                            />
                    </label>
                    <section className="detailsection">
                        <div className="EDsecondColumn-30 left">
                            <h1 className="EDh1Text">author</h1>
                            <input type="text"  className="EDinput" onChange={handleChange} name="postBy"/>
                        </div>

                        <div className="EDcolumn left">
                            <h1 className="EDh1Text">title</h1>
                            {/* <p className="EDText">Cheese Cake</p> */}
                            <input type="text"  className="EDinput" onChange={handleChange} name="title"/>
                            <h1 className="EDh1Text">sub-title</h1>
                            {/* <p className="EDText">When I was first married there was a woman at my church who made the most incredible desserts. My favorite of her creations were her mini chocolate cheesecakes – they were as delicious as they were cute. She was generous enough to share her recipe with me.</p> */}
                            <input type="text"  className="EDinput" onChange={handleChange} name="subTitle"/>
                            <h1 className="EDh1TextTwo">DESCRIPTION (Use "\n" as a blank line)</h1>
                            {/* <p className="EDText">When I was first married there was a woman at my church who made the most incredible desserts. My favorite of her creations were her mini chocolate cheesecakes – they were as delicious as they were cute. She was generous enough to share her recipe with me.</p> */}
                            <textarea className="EDinput" onChange={handleChange} name="description"/>
                        </div>
                    </section>
                </div>
            </section>

            <section className="EDthirdsection">
                <button className='EDbacktbtn grow' onClick={handleClick}>ADD</button>
            </section>

            </>
        ) : 
      (
        setTimeout(() => {
          navigate('/')
        }, 5)
      )
      }
                


        </div>
    )
}