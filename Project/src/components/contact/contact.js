import './contact.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import anh1 from '../../img/Alex_AR_Lay_Do shadow 1.png';
import { RiMailLine } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { GoLocation} from 'react-icons/go';


// import 'bootstrap/dist/css/bootstrap.min.css';
function RegisterForm (){
  const containerStyle1 = {
    position: 'absolute',
    padding: '10px',
    border: '2px solid black',
    left: '250px',
	top: '230px',
	bottom: '100px',
    background: '#FFF6D4',
    height: '459px',
    width: '700px',
  
  };
  const containerStyle2 = {
    position: 'absolute',
    padding: '10px',
    border: '2px solid black',
    left: '1000px',
	top: '230px',
	bottom: '100px',
    background: '#FFF6D4',
    height: '130px',
    width: '400px',
  
  };
  const containerStyle3 = {
    position: 'absolute',
    padding: '10px',
    border: '2px solid black',
    left: '1000px',
	top: '390px',
	bottom: '100px',
    background: '#FFF6D4',
    height: '130px',
    width: '400px',
  
  };
  const containerStyle4 = {
    position: 'absolute',
    padding: '10px',
    border: '2px solid black',
    left: '1000px',
	top: '550px',
	bottom: '100px',
    background: '#FFF6D4',
    height: '130px',
    width: '400px',
  
  };
  const [popupStyle,showPopup]=useState("hide")
  const popup=()=>{
    showPopup("login-popup")
    setTimeout(()=>showPopup("hide"),3000)
  }

    return (
      
      <div >
        <h1  className='lienhe'>LIÊN HỆ</h1>
        <div className='vienct' style={containerStyle1 }  >
            <p className="textlh">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
      
        <input className="ten" type="text" placeholder="Tên"/>
        <input className="email" type="email" placeholder="Email" />
        <input className="phone" type="number" placeholder="Số điện thoại"/>
        <input className="addres" type="text" placeholder="Địa chỉ" />
        <textarea id="comment" className="loinhan" name="comment" placeholder="Lời nhắn">
        </textarea>
        <Button variant="danger" onClick={popup} className="nut">Gửi liên hệ</Button>
         </div>
         <div className={popupStyle}>
            <p style={{textAlign: "center", display: "flex", justifyContent: "center"}}>Gửi liên hệ thành công<br/>Vui lòng kiên nhẫn chờ đợi phản hồi từ chúng tôi nhé</p>
        </div>
        <img className='logo' src={anh1}alt="Four slide"/>
        <div className='vienct' style={containerStyle2 }>
         <GoLocation size={30} color='red' />
         <p className='logo1'>Địa chỉ</p>
         <p className='textlogo'>86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
         
         </div>
         <div className='vienct' style={containerStyle3 }>
         <RiMailLine size={30} color='blue' />
         <p className='logo1'>Email</p>
         <p className='textlogo'>investigate@your-site.com</p>
         </div>
         <div className='vienct'  style={containerStyle4 }>
         <FaPhoneAlt size={30} color='red' />
         <p className='logo1'>Điện thoại</p>
         <p className='textlogo'>+84 145 689 798</p>
         </div>
        </div>
        
    )
}
export default RegisterForm;