import './thanhtoan.css';
import anh1 from '../../img/Trini_Arnold_Votay1 2.png';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { FaCalendarAlt } from 'react-icons/fa';

const thanhtoan =() => {
    const containerStyle1 = {
        padding: '10px',
        // border: '5px solid black',
        border: '2px dashed #FF7A00 ',
        position: 'absolute',
        left: '160px',
        top: '240px',
        bottom: '100px',
        background: '#FFF6D4',
        height: '450px',
        width: '800px',
       
      };
      const containerStyle2 = {
        border: '2px dashed #FF7A00 ',
        padding: '10px',
      
        position: 'absolute',
        left: '1000px',
        
        top: '240px',
        bottom: '100px',
        background: '#FFF6D4',
        height: '450px',
        width: '350px',
    
      };
      const containerStyle3={
   
        position: 'absolute',
        height: '50px',
        width: '230px',
        top: '-20px',
        left:'260px',
        background: 'red'
    
      };
      const containerStyle4={
   
        position: 'absolute',
        height: '50px',
        width: '230px',
        top: '-20px',
        left:'70px',
        background: 'red'
    
      };

      return   <div  >   
				<h1 className='thanhtoan '>Thanh Toán</h1>
        
                <div className='vien' style={containerStyle1}>
                <div className='nutvett' style={containerStyle3}>
                <p className='vett'>Vé cổng-vé gia đình</p>
              </div>
                    <div className='chu'>
                    <p className='tt'>Tiền thanh toán</p>
                    <p className='slv'>Số lượng vé</p>
                    <p className='ngay' >Ngày sử dụng</p>
                    <p className='thongtin' >Thông tin liên hệ</p>
                    <p className='sdt1' >Số điện thoại</p>
                    <p className='emailtt' >Email</p>
                    
                    </div>
                <div>
                <input className="vien1" type="text" />
                <input className="vien2" type="text" />
                <input className="vien3" type="text" />
                <input className="vien4" type="text" />
                <input className="vien5" type="text" />
                <input className="vien6" type="text" />
                </div>
                </div>
                <img className='logott' src={anh1}alt="Four slide"/>
                <div  className='vien' style={containerStyle2}>
                  <div className='nutvett' style={containerStyle4}>
                  <p className='vett'>Thông tin thanh toán</p>
                  </div>
                  <div className='chu'>
                <p className='sothe'>Số thẻ</p>
                <p className='hvtct'>Họ và tên chủ thể</p>
                <p className='nhh' >Ngày hết hạn</p>
                <p className='cvv' >CVV/CVC</p>
                </div>
                <div>
                <input className="vien7" type="text" />
                <input className="vien8" type="text" />
                <input className="vien9" type="text" />
                <input className="vien10" type="text" />
                </div>
                <Link to="/thanhtoan/thanhtoantc"><Button variant="danger" className='nuttt'> Đặt vé </Button></Link>
                <Button className='lichtt' variant="warning" ><FaCalendarAlt color='white' /></Button>
                </div>
               
				
	        </div>  
 }
 export default thanhtoan;
