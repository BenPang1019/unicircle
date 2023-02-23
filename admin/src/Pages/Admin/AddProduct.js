import React, { useEffect,useContext } from "react";
import home from "../../Images/Home.svg"

import xIcon from '../../Images/xIcon.png'

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import Swal from 'sweetalert2'


import '../Admin/Edit.css'
import { AuthContext } from "../../Context/AuthContext";

export const AddProduct = () => {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});

    const [fileOne, setFileOne] = useState('');

    const [fileTwo, setFileTwo] = useState('');

    const [fileThree, setFileThree] = useState('');

    const [fileFour, setFileFour] = useState('');

    const [product, setProduct] = useState({
        productName:"",
        category:"",
        subTitle:"",
        productImageOne:"",
        productImageTwo:"",
        productImageThree:"",
        productImageFour:"",
        materials:"",
        standards:"",
        finisher:"",
        diameterOne:"",
        lengthOne:"",
        dsOne:"",
        hlOne:"",
        diameterTwo:"",
        lengthTwo:"",
        dsTwo :"",
        hlTwo :"",
        diameterThree:"",
        lengthThree:"",
        dsThree:"",
        hlThree :"",
        diameterFour:"",
        lengthFour :"",
        dsFour:"",
        hlFour:"",
        diameterFive:"",
        lengthFive:"",
        dsFive:"",
        hlFive :"",
        diameterSix:"",
        lengthSix:"",
        dsSix:"",
        hlSix:"",
        description:"",
    });


      const optionsCategory = [
        {id:"1",name:"Anchor"},
        {id:"2",name:"Bolt"},
        {id:"3",name:"Clip"},
        {id:"4",name:"Machine Screw"},
        {id:"5",name:"Nut"},
        {id:"6",name:"Pin"},
        {id:"7",name:"Recoil"},
        {id:"8",name:"Rivet"},
        {id:"9",name:"Socket Screw"},
        {id:"10",name:"Washer"},
        {id:"11",name:"Other"},
    ];


      const[Category, setcategory] = useState([]); 

      useEffect(()=>{
        setcategory(optionsCategory);
      },[]) 

      const [error,setError] = useState(false);
    
      const navigate = useNavigate();

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
    
      const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

      const handleChangeTwo = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileTwo(result)
        })
        .catch(err => {
            
        });
      };

      const handleChangeThree = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileThree(result)
        })
        .catch(err => {
            
        });
      };

      const handleChangeFour = (e) => {

        let { file } = state;

        file = e.target.files[0];

        getBase64(file)
        .then(result => {
            file["base64"] = result;
            setFileFour(result)
        })
        .catch(err => {
            
        });
      };

      
      
      const deleteImageOne =  () => {
        setFileOne("")
      }
    
      const deleteImageTwo =  () => {
        setFileTwo("")
      }
    
      const deleteImageThree =  () => {
        setFileThree("")
      }
    
      const deleteImageFour =  () => {
        setFileFour("")
      }

    const handleClick = async e => {
        e.preventDefault();
        product.productImageOne=fileOne;
        product.productImageTwo=fileTwo;
        product.productImageThree=fileThree;
        product.productImageFour=fileFour;
            try {
              await axiosInstance.post("/product/addProduct", product);
            } catch (err) {
              console.log(err);
              setError(true)
            }
        
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
                navigate("/adminProduct");
            }
            })
        
    }

    const {currentAdmin,adminLogout} = useContext(AuthContext);

    const navigatetohome= () =>{
    navigate('/adminMainPage');
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

    console.log(product)

    return(

        <div className="editProduct">
        {currentAdmin ? 
      (
        <>
            <section className="EDfirstsection">
                <div className="EDfirstcontainer">
                    <div className="EDcolumn-30 grow" onClick={scrollToTop}>
                        <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                    </div>
                    
                    <div className="EDcolumn-30 right grow" onClick={scrollToTop}>
                        <button className='EDbacktbtn' onClick={() => navigate(-1)}>BACK</button>
                    </div>
                </div>
            </section>

            <section className="EDsecondsection">
                <div className="EDcenter-container">
                    <div className="EDsecondColumn-30 left">
                        <h1 className="EDh1Text">featured image</h1>
                        {fileOne?
                        <img src={xIcon} onClick={deleteImageOne} className='xIconOne'/>
                        :
                        null
                        }
                        <img src={fileOne} className='imgstyle'></img><br/><br/>
                        <label for="productImageOne" className="labelButton grow">
                                Image One
                            <input
                                id="productImageOne"
                                name="productImageOne"
                                className="fileButton"
                                onChange={handleChangeOne}
                                type="file"
                                accept=".jpg, .jpeg, .png"
                            />
                        </label>
                        <br/><br/>
                        <h1 className="EDh1Text">Name</h1>
                        <input type="text" placeholder="Product Name..." className="EDinput" onChange={handleChange} name="productName"/>
                        <h1 className="EDh1Text">Categories</h1>
                        <select className="selectStyles" onChange= {handleChange} name="category"> 
                            <option value="">Please Choose One</option>
                            {
                                Category && 
                                Category !== undefined ?
                                Category.map((optionCat,index) => {
                                    return(
                                        <option key={index} value={optionCat.name}>{optionCat.name}</option>
                                    )
                                })
                                : "No Category"
                            }
                        </select>

                    </div>
                    <div className="EDcolumn left">
                        <h1 className="EDh1Text">images</h1>
                        <div className="imagecontainer">
                        {fileTwo?
                        <img src={xIcon} onClick={deleteImageTwo} className='xIconTwo grow'/>
                        :
                        null
                        }
                        {fileThree?
                        <img src={xIcon} onClick={deleteImageThree} className='xIconThree grow'/>
                        :
                        null
                        }
                        {fileFour?
                        <img src={xIcon} onClick={deleteImageFour} className='xIconFour grow'/>
                        :
                        null
                        }
                            <img src={fileTwo} className='otherImgstyle '></img>
                            <img src={fileThree} className='otherImgstyle '></img>
                            <img src={fileFour} className='otherImgstyle '></img><br/><br/>
                            <label for="productImageTwo" className="labelButton grow">
                                Image Two
                            <input
                                id="productImageTwo"
                                name="productImageTwo"
                                className="fileButton"
                                onChange={handleChangeTwo}
                                type="file"
                                accept=".jpg, .jpeg, .png"
                            />
                            </label>
                            <label for="productImageThree" className="labelButton grow">
                                Image Three
                            <input
                                id="productImageThree"
                                name="productImageThree"
                                className="fileButton"
                                onChange={handleChangeThree}
                                type="file"
                                accept=".jpg, .jpeg, .png"
                            />
                            </label>
                            <label for="productImageFour" className="labelButton grow">
                                Image Four
                            <input
                                id="productImageFour"
                                name="productImageFour"
                                className="fileButton"
                                onChange={handleChangeFour}
                                type="file"
                                accept=".jpg, .jpeg, .png"
                            />
                            </label>
                            <br/><br/>
                        </div>
                        
                        <h1 className="EDh1Text">Sub Title</h1>
                        <input type="text" placeholder="SubTitle..." className="EDinput" onChange={handleChange} name="subTitle"/>
                        <h1 className="EDh1Text">Spec</h1>
                        <table className="">
                            <tr className="">
                                <td></td>
                                <td className="test">1</td>
                                <td>2</td>
                                <td>2</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            <tr className="tableLeft">
                                <td>Diameter</td>
                                <td ><input className="tableInput" name="diameterOne" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="diameterTwo" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="diameterThree" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="diameterFour" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="diameterFive" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="diameterSix" onChange={handleChange}/></td>
                            </tr>
                            <tr className="tableLeft">
                                <td>Length</td>
                                <td ><input className="tableInput" name="lengthOne" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="lengthTwo" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="lengthThree" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="lengthFour" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="lengthFive" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="lengthSix" onChange={handleChange}/></td>
                            </tr>
                            <tr className="tableLeft">
                                <td>Ds</td>
                                <td ><input className="tableInput" name="dsOne" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="dsTwo" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="dsThree" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="dsFour" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="dsFive" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="dsSix" onChange={handleChange}/></td>
                            </tr>
                            <tr className="tableLeft">
                                <td>Hl</td>
                                <td ><input className="tableInput" name="hlOne" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="hlTwo" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="hlThree" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="hlFour" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="hlFive" onChange={handleChange}/></td>
                                <td ><input className="tableInput" name="hlSix" onChange={handleChange}/></td>
                            </tr>
                        </table>

                        <h1 className="EDh1Text">Materials</h1>
                        <textarea rows="3" cols="75" placeholder="Materials..." className="EDinput" onChange={handleChange} name="materials"/>
                        <h1 className="EDh1Text">Standards</h1>
                        <textarea rows="3" cols="75" placeholder="Standards..." className="EDinput" onChange={handleChange} name="standards"/>
                        <h1 className="EDh1Text">Finisher</h1>
                        <textarea rows="3" cols="75" placeholder="Finisher..." className="EDinput" onChange={handleChange} name="finisher"/>
                        <h1 className="EDh1Text">Description</h1>
                        <textarea rows="3" cols="75" placeholder="Desc..." className="EDinput" onChange={handleChange} name="description"/>
                    </div>
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