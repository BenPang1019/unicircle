import React, { useEffect } from "react";
import home from "../../Images/Home.svg"
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'
import xIcon from '../../Images/xIcon.png'

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";

import Swal from 'sweetalert2'

import '../Admin/Edit.css'

export const UpdateProduct = () => {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,});

  const [updateProduct, setUpdateProduct] = useState({
    productName:"",
    category:"",
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
  })

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

    

  const [activeImageOne , setActiveImageOne] = useState(true)
  const [activeImageTwo , setActiveImageTwo] = useState(true)
  const [activeImageThree , setActiveImageThree] = useState(true)
  const [activeImageFour , setActiveImageFour] = useState(true)
  const [activeCatalogue , setActiveCatalogue] = useState(true)
  
  const [productdata, setproductdata] = useState("")

  const location = useLocation();
  const productId=location.state.product.id
  const [error,setError] = useState(false);
  const[Category, setcategory] = useState([]); 



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

  const [fileOne, setFileOne] = useState('');

  const [fileTwo, setFileTwo] = useState('');

  const [fileThree, setFileThree] = useState('');

  const [fileFour, setFileFour] = useState('');

  useEffect(()=>{
    setcategory(optionsCategory);
  },[]) 

  const handleChange = (e) => {
    setUpdateProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeOne = (e) => {
    setUpdateProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
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
    setUpdateProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    setUpdateProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    setUpdateProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/product/getProduct/${productId}`);
        setproductdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [productId]);

  const handleClick = async (e) => {

    if(updateProduct.productName==""){
      setUpdateProduct(updateProduct.productName=productdata.productName) 
    }
    if(updateProduct.category==""){
      setUpdateProduct(updateProduct.category=productdata.category)
    }
    if(updateProduct.description==""){
      setUpdateProduct(updateProduct.description=productdata.description)
    }
    if(updateProduct.materials==""){
      setUpdateProduct(updateProduct.materials=productdata.materials)
    }
    if(updateProduct.standards==""){
      setUpdateProduct(updateProduct.standards=productdata.standards)
    }
    if(updateProduct.finisher==""){
      setUpdateProduct(updateProduct.finisher=productdata.finisher)
    }
    if(updateProduct.diameterOne==""){
      setUpdateProduct(updateProduct.diameterOne=productdata.diameterOne)
    }
    if(updateProduct.lengthOne==""){
      setUpdateProduct(updateProduct.lengthOne=productdata.lengthOne)
    }
    if(updateProduct.dsOne==""){
      setUpdateProduct(updateProduct.dsOne=productdata.dsOne)
    }
    if(updateProduct.hlOne==""){
      setUpdateProduct(updateProduct.hlOne=productdata.hlOne)
    }
    if(updateProduct.diameterTwo==""){
      setUpdateProduct(updateProduct.diameterTwo=productdata.diameterTwo)
    }
    if(updateProduct.lengthTwo==""){
      setUpdateProduct(updateProduct.lengthTwo=productdata.lengthTwo)
    }

    if(updateProduct.dsTwo==""){
      setUpdateProduct(updateProduct.dsTwo=productdata.dsTwo)
    }

    if(updateProduct.hlTwo==""){
      setUpdateProduct(updateProduct.hlTwo=productdata.hlTwo)
    }

    if(updateProduct.diameterThree==""){
      setUpdateProduct(updateProduct.diameterThree=productdata.diameterThree)
    }

    if(updateProduct.lengthThree==""){
      setUpdateProduct(updateProduct.lengthThree=productdata.lengthThree)
    }

    if(updateProduct.dsThree==""){
      setUpdateProduct(updateProduct.dsThree=productdata.dsThree)
    }

    if(updateProduct.hlThree==""){
      setUpdateProduct(updateProduct.hlThree=productdata.hlThree)
    }

    if(updateProduct.diameterFour==""){
      setUpdateProduct(updateProduct.diameterFour=productdata.diameterFour)
    }
    if(updateProduct.lengthFour==""){
      setUpdateProduct(updateProduct.lengthFour=productdata.lengthFour)
    }

    if(updateProduct.dsFour==""){
      setUpdateProduct(updateProduct.dsFour=productdata.dsFour)
    }

    if(updateProduct.hlFour==""){
      setUpdateProduct(updateProduct.hlFour=productdata.hlFour)
    }

    if(updateProduct.diameterFive==""){
      setUpdateProduct(updateProduct.diameterFive=productdata.diameterFive)
    }
    if(updateProduct.lengthFive==""){
      setUpdateProduct(updateProduct.lengthFive=productdata.lengthFive)
    }

    if(updateProduct.dsFive==""){
      setUpdateProduct(updateProduct.dsFive=productdata.dsFive)
    }

    if(updateProduct.hlFive==""){
      setUpdateProduct(updateProduct.hlFive=productdata.hlFive)
    }

    if(updateProduct.diameterSix==""){
      setUpdateProduct(updateProduct.diameterSix=productdata.diameterSix)
    }

    if(updateProduct.lengthSix==""){
      setUpdateProduct(updateProduct.lengthSix=productdata.lengthSix)
    }

    if(updateProduct.dsSix==""){
      setUpdateProduct(updateProduct.dsSix=productdata.dsSix)
    }

    if(updateProduct.hlSix==""){
      setUpdateProduct(updateProduct.hlSix=productdata.hlSix)
    }

    if(activeImageOne==false && updateProduct.productImageOne==""){
      setUpdateProduct(updateProduct.productImageOne="")
    }
    else if(updateProduct.productImageOne==""){
      setUpdateProduct(updateProduct.productImageOne=productdata.productImageOne)
    }else if(updateProduct.productImageOne!==""){
      setUpdateProduct(updateProduct.productImageOne=fileOne)
    }

    if(activeImageTwo==false && updateProduct.productImageTwo==""){
      setUpdateProduct(updateProduct.productImageTwo="")
    }
    else if(updateProduct.productImageTwo==""){
      setUpdateProduct(updateProduct.productImageTwo=productdata.productImageTwo)
    }else if(updateProduct.productImageTwo!==""){
      setUpdateProduct(updateProduct.productImageTwo=fileTwo)
    }

    if(activeImageThree==false && updateProduct.productImageThree==""){
      setUpdateProduct(updateProduct.productImageThree="")
    }
    else if(updateProduct.productImageThree==""){
      setUpdateProduct(updateProduct.productImageOne=productdata.productImageThree)
    }else if(updateProduct.productImageThree!==""){
      setUpdateProduct(updateProduct.productImageThree=fileThree)
    }

    if(activeImageFour==false && updateProduct.productImageFour==""){
      setUpdateProduct(updateProduct.productImageFour="")
    }
    else if(updateProduct.productImageFour==""){
      setUpdateProduct(updateProduct.productImageFour=productdata.productImageFour)
    }else if(updateProduct.productImageFour!==""){
      setUpdateProduct(updateProduct.productImageFour=fileFour)
    }
    

    try {
      await axiosInstance.put(`/product/updateProduct/${productId}`, updateProduct);
      Swal.fire({
        title: 'Edit Successfully',
        text: "Your product has been modified successfully. Press OK to continue.",
        width:'700px',
        height:'300px',
        
  
        confirmButtonText: 'OK',
        confirmButtonColor:"white",
  
        customClass:{
            confirmButton:'confirmButton',
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
    } catch (err) {
      console.log(err);
      setError(true)
    }   
  };

  const handleDelete = async ()=>{
    Swal.fire({
      title: 'Delete Product',
      text: "Are you sure you want to delete? Your product will be cleared forever.",
      width:'700px',
      height:'300px',
      showCancelButton: true,
      confirmButtonText: 'YES',
      confirmButtonColor:"white",
      cancelButtonText:'NO',
      cancelButtonColor:"white",
      customClass:{
          confirmButton:'confirmButton grow',
          cancelButton:'confirmButton grow',
          title:'title',
          popup:'popup',
          validationMessage:'title'
      },
      allowOutsideClick:false,
      }).then((result) => {
      if (result.isConfirmed) {
        try {
          axiosInstance.delete(`/product/deleteProduct/${productId}`);
        } catch (err) {
          console.log(err);
        }
          Swal.fire({
            title: 'Delete Successfully',
            text: "Your product has been removed successfully. Press OK to continue.",
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
      })

  };

  const navigate = useNavigate();
  const navigatetohome= () =>{
    navigate('/adminMainPage');
  };

  const deleteImageOne =  () => {
    setActiveImageOne(false)
    setFileOne("")
  }

  const deleteImageTwo =  () => {
    setActiveImageTwo(false)
    setFileTwo("")
  }

  const deleteImageThree =  () => {
    setActiveImageThree(false)
    setFileThree("")
  }

  const deleteImageFour =  () => {
    setActiveImageFour(false)
    setFileFour("")
  }

    return(
        <div className="editProduct">    
                <section className="EDfirstsection">
                    <div className="EDfirstcontainer">
                        <div className="EDcolumn-30 grow">
                            <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                        </div>
                        <div className="EDcolumn-40 ">
                            <Link to={`/viewProduct`} state={{ product:location.state.product }}><iconbutton><img src={eye} className="btnstyle grow"/></iconbutton></Link>
                            <iconbutton onClick={handleDelete}><img src={dele} className="btnstyle1 grow"/></iconbutton>
                        </div>
                        <div className="EDcolumn-30 right grow">
                            <button className='EDbacktbtn' onClick={() => navigate(-1)}>BACK</button>
                        </div>
                    </div>
                </section>

                <section className="EDsecondsection">
                <div className="EDcenter-container">
                    <div className="EDsecondColumn-30 left">
                        <h1 className="EDh1Text">featured image</h1>
                        {productdata.productImageOne && activeImageOne==true || fileOne?
                        <img src={xIcon} onClick={deleteImageOne} className='xIconOne grow'/>
                        :
                        null
                        }
                        {activeImageOne ?
                        <>
                        
                        <img src={updateProduct.productImageOne?fileOne:productdata.productImageOne} className='imgstyle'></img><br/><br/>
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
                        </>
                        :
                        <>
                        <img src={updateProduct.productImageOne?fileOne:null} className='imgstyle'></img><br/><br/>
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
                        </>
                        }
                        <br/><br/>
                        <h1 className="EDh1Text">Name</h1>
                        <input type="text" defaultValue={productdata.productName} className="EDinput" onChange={handleChange} name="productName"/>
                        <h1 className="EDh1Text">Categories</h1>
                        <select className="selectStyles" onChange= {handleChange} name="category"> 
                            <option value="">{productdata.category}</option>
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
                        {productdata.productImageTwo && activeImageTwo==true || fileTwo?
                        <img src={xIcon} onClick={deleteImageTwo} className='xIconTwo grow'/>
                        :
                        null
                        }
                        {productdata.productImageThree && activeImageThree==true || fileThree?
                        <img src={xIcon} onClick={deleteImageThree} className='xIconThree grow'/>
                        :
                        null
                        }
                        {productdata.productImageFour && activeImageFour  ==true || fileFour?
                        <img src={xIcon} onClick={deleteImageFour} className='xIconFour grow'/>
                        :
                        null
                        }
                        <div className="">
                        {activeImageTwo?
                        <img src={updateProduct.productImageTwo?fileTwo:productdata.productImageTwo} className='otherImgstyle'></img>
                        :
                        <img src={updateProduct.productImageTwo?fileTwo:null} className='otherImgstyle'></img>
                        }
                        {activeImageThree?
                        <img src={updateProduct.productImageThree?fileThree:productdata.productImageThree} className='otherImgstyle'></img>
                        :
                        <img src={updateProduct.productImageThree?fileThree:null} className='otherImgstyle'></img>
                        }
                        {activeImageFour?
                        <img src={updateProduct.productImageFour?fileFour:productdata.productImageFour} className='otherImgstyle'></img>
                        :
                        <img src={updateProduct.productImageFour?fileFour:null} className='otherImgstyle'></img>
                        }
                        <br/><br/>
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
                                <td ><input className="tableInput" name="diameterOne" onChange={handleChange} defaultValue={productdata.diameterOne}/></td>
                                <td ><input className="tableInput" name="diameterTwo" onChange={handleChange} defaultValue={productdata.diameterTwo}/></td>
                                <td ><input className="tableInput" name="diameterThree" onChange={handleChange} defaultValue={productdata.diameterThree}/></td>
                                <td ><input className="tableInput" name="diameterFour" onChange={handleChange} defaultValue={productdata.diameterFour}/></td>
                                <td ><input className="tableInput" name="diameterFive" onChange={handleChange} defaultValue={productdata.diameterFive}/></td>
                                <td ><input className="tableInput" name="diameterSix" onChange={handleChange} defaultValue={productdata.diameterSix}/></td>
                            </tr>
                            <tr className="tableLeft">
                                <td>Length</td>
                                <td ><input className="tableInput" name="lengthOne" onChange={handleChange} defaultValue={productdata.lengthOne}/></td>
                                <td ><input className="tableInput" name="lengthTwo" onChange={handleChange} defaultValue={productdata.lengthTwo}/></td>
                                <td ><input className="tableInput" name="lengthThree" onChange={handleChange} defaultValue={productdata.lengthThree}/></td>
                                <td ><input className="tableInput" name="lengthFour" onChange={handleChange} defaultValue={productdata.lengthFour}/></td>
                                <td ><input className="tableInput" name="lengthFive" onChange={handleChange} defaultValue={productdata.lengthFive}/></td>
                                <td ><input className="tableInput" name="lengthSix" onChange={handleChange} defaultValue={productdata.lengthSix}/></td>
                            </tr>
                            <tr className="tableLeft">
                                <td>Ds</td>
                                <td ><input className="tableInput" name="dsOne" onChange={handleChange} defaultValue={productdata.dsOne}/></td>
                                <td ><input className="tableInput" name="dsTwo" onChange={handleChange} defaultValue={productdata.dsTwo}/></td>
                                <td ><input className="tableInput" name="dsThree" onChange={handleChange} defaultValue={productdata.dsThree}/></td>
                                <td ><input className="tableInput" name="dsFour" onChange={handleChange} defaultValue={productdata.dsFour}/></td>
                                <td ><input className="tableInput" name="dsFive" onChange={handleChange} defaultValue={productdata.dsFive}/></td>
                                <td ><input className="tableInput" name="dsSix" onChange={handleChange} defaultValue={productdata.dsSix}/></td>
                            </tr>
                            <tr className="tableLeft">
                                <td>Hl</td>
                                <td ><input className="tableInput" name="hlOne" onChange={handleChange} defaultValue={productdata.hlOne}/></td>
                                <td ><input className="tableInput" name="hlTwo" onChange={handleChange} defaultValue={productdata.hlTwo}/></td>
                                <td ><input className="tableInput" name="hlThree" onChange={handleChange} defaultValue={productdata.hlThree}/></td>
                                <td ><input className="tableInput" name="hlFour" onChange={handleChange} defaultValue={productdata.hlFour}/></td>
                                <td ><input className="tableInput" name="hlFive" onChange={handleChange} defaultValue={productdata.hlFive}/></td>
                                <td ><input className="tableInput" name="hlSix" onChange={handleChange} defaultValue={productdata.hlSix}/></td>
                            </tr>
                        </table>

                        <h1 className="EDh1Text">Materials</h1>
                        <textarea rows="3" cols="75" placeholder="Materials..." className="EDinput" onChange={handleChange} name="materials" defaultValue={productdata.materials}/>
                        <h1 className="EDh1Text">Standards</h1>
                        <textarea rows="3" cols="75" placeholder="Standards..." className="EDinput" onChange={handleChange} name="standards" defaultValue={productdata.standards}/>
                        <h1 className="EDh1Text">Finisher</h1>
                        <textarea rows="3" cols="75" placeholder="Finisher..." className="EDinput" onChange={handleChange} name="finisher" defaultValue={productdata.finisher}/>
                        <h1 className="EDh1Text">Description</h1>
                        <textarea rows="3" cols="75" placeholder="Desc..." className="EDinput" onChange={handleChange} name="description" defaultValue={productdata.description}/>
                    </div>
                </div>
            </section>

                <section className="EDthirdsection">
                    <button className='EDbacktbtn grow' onClick={handleClick}>UPDATE</button>
                </section>
           </div> 
    )
}


    