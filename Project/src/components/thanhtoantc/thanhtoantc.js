import './thanhtoantc.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qr from '../../img/image 3.png';
import { FaCheck } from 'react-icons/fa';
import logotttc from '../../img/Alvin_Arnold_Votay1 1.png';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FFDE32" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FFDE32"}}
        onClick={onClick}
      />
    );
  }


const thanhtoantc =() => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        maring:'10px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      const containerStyle1 = {
        padding: '10px',
        // border: '5px solid black',
        border: '2px dashed #FF7A00 ',
        position: 'absolute',
        left: '170px',
        top: '220px',
        bottom: '100px',
        background: '#FFF6D4',
        height: '450px',
        width: '1225px',
       
      };
      return   <div  >   
        <h1 className='thanhtoantc '>Thanh Toán</h1>
        <div className='vien' style={containerStyle1}>
             <div className='khung' style={{width: '900px'}}>
                <Slider {...settings}>
                <div className='slider'>
                <img className='qr1' src={qr}alt="Four slide"/>
                <h2  className=''>ALT20210501</h2>
                <h3>VÉ CỔNG</h3>
                <p>Ngày sử dụng: 31/05/2021</p>
                <FaCheck className='check' />
                
                </div>
                <div className='slider'>
                <img className='qr1' src={qr}alt="Four slide"/>
                <h2>ALT20210501</h2>
                <h3>VÉ CỔNG</h3>
                <p>Ngày sử dụng: 31/05/2021</p>
                <FaCheck className='check' />
                </div>
                <div className='slider'>
                <img className='qr1' src={qr}alt="Four slide"/>
                <h2>ALT20210501</h2>
                <h3>VÉ CỔNG</h3>
                <p>Ngày sử dụng: 31/05/2021</p>
                <FaCheck className='check' />
                </div>
                <div className='slider'>
                <img className='qr1' src={qr}alt="Four slide"/>
                <h2>ALT20210501</h2>
                <h3>VÉ CỔNG</h3>
                <p>Ngày sử dụng: 31/05/2021</p>
                <FaCheck className='check' />
                </div>
                <div className='slider'>
                <img className='qr1' src={qr}alt="Four slide"/>
                <h2>ALT20210501</h2>
                <h3>VÉ CỔNG</h3>
                <p>Ngày sử dụng: 31/05/2021</p>
                <FaCheck className='check' />
                </div>
                <div className='slider'>
                <img className='qr1' src={qr}alt="Four slide"/>
                <h2>ALT20210501</h2>
                <h3>VÉ CỔNG</h3>
                <p>Ngày sử dụng: 31/05/2021</p>
                <FaCheck className='check' />
                </div>
                </Slider>
	            </div>  
        </div>
        <img className='logotttc' src={logotttc}alt="Four slide"/>
        <Button className='taive' variant="danger" >Tải về</Button>
        <Button className='guiemail' variant="danger" >Gửi Eamil</Button>
       
         </div>
         
      
 }
 export default thanhtoantc;
