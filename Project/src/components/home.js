
import anh1 from '../img/image 2.png';
// import anh2 from '../img/18451 [Converted]-02 1.png';
import anh3 from '../img/18451 [Converted]-03 1.png';
import anh4 from '../img/render fix hair 1.png';
import anh5 from '../img/Lisa_Arnold_Lay_Do_F2 3.png';
import anh6 from '../img/logo1.png';
import anh7 from '../img/logo2.png';
import { IoMdStar } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { FaCalendarAlt } from 'react-icons/fa';
// import React, { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';

// import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
  const containerStyle1 = {
    padding: '10px',
    // border: '5px solid black',
    border: '2px dashed #FF7A00 ',
    position: 'absolute',
    left: '160px',
	right: '190px',
	top: '300px',
	bottom: '100px',
    background: '#FFF6D4',
    height: '359px',
    width: '750px',
   
  };
  const containerStyle2 = {
    border: '2px dashed #FF7A00 ',
    padding: '10px',
  
    position: 'absolute',
    left: '960px',
	right: '90px',
	top: '300px',
	bottom: '100px',
    background: '#FFF6D4',
    height: '359px',
    width: '350px',

  };
  const containerStyle3={
   
    position: 'absolute',
    height: '50px',
width: '200px',
top: '-10px',
left:'70px',
background: 'red'

  };
    


    return (
      
      <div >
        <img className='logosen' src={anh1}alt="Four slide"/>
        <p className='chu1'>Đầm Sen</p>
        <h1 className='chu2'>Part</h1>
        {/* <img className='logo1' src={anh2}alt="Four slide"/> */}
        <img className='logo2' src={anh3}alt="Four slide"/>
        <img className='logo3' src={anh4}alt="Four slide"/>
        <img className='logotrai' src={anh6}alt="Four slide"/>
        <img className='logophai' src={anh7}alt="Four slide"/>
        
        <div className='vien1' style={containerStyle1 }  >
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse ac mollis 
          justo.Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis<br/><br/>
              Suspendisse iaculis libero lobortis condimentum gravida.
              Aenean auctor iaculis risus, lobortis molestie lectus consequat a</p>
              <div className='start'>
              <IoMdStar size={32} color="gold"/><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i><br/>
              <IoMdStar size={32} color="gold"/><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i><br/>
              <IoMdStar size={32} color="gold"/><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i><br/>
              <IoMdStar size={32} color="gold"/><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i><br/>
            </div>
        </div>
        
        <div className='vien2' style={containerStyle2}>
        <div className='nutve' style={containerStyle3}>
          <p className='ve'>Vé của bạn</p>
        </div>
        <input className="goi" type="text" placeholder="Gói gia đình"/>
        <Button className='lichicon' variant="warning" ><FaCalendarAlt color='white' /></Button>
        <Button className='chonicon'  variant="warning" ><RiArrowDropDownLine  color='white'/></Button>
        
        <input className="giave" type="number" placeholder="số lượng vé" />
        <input className="date" type="text" placeholder="Ngày sử dụng"/>
        <input className="hovaten" type="text" placeholder="Họ và tên" />
        <input className="sdt" type="text" placeholder="Số điện thoại" />
        <input className="email1" type="text" placeholder="Địa chỉ Email" />
        <Link to="/thanhtoan"><Button variant="danger" className='nuthome'> Đặt vé </Button></Link>
        </div>
        <img className='logo4' src={anh5}alt="Four slide"/>
      </div>  
    
    )
}
export default Home;
