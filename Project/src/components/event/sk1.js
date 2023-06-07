import sk1 from '../../img/sk3.png';

import { FaCalendarAlt } from 'react-icons/fa';



const event1=() => {
    const containerStyle3 = {
        padding: '10px',
        border: '1px solid black',
        position: 'absolute',
        left: '160px',
        right: '120px',
        top: '200px',
        bottom: '200px',
        background: '#FFF6D4',
        height: '490px',
        width: '1150px',
        // height: 623.2723388671875px;
        // width: 1519px;
        // left: 0px;
        // top: 30.72760009765625px;
        // border-radius: 0px;
        
       
      };
      return   <div> 
                  <h1 className='sk1'>SỰ KIỆN 1</h1>  	
                   <div style={containerStyle3}>
                      <img className='anhsk1' src={sk1}alt="Four slide"/>
                      <div className='lich'>
                      <FaCalendarAlt color='#FFB809' /> 30/05/2021 - 01/06/2021<br/>
                      <p>Đầm Sen Park</p>
                      <h4 className='gia'>25.000 VND </h4>
                    </div>
                    <p className='textsk1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic sdsd typesetting,
                          remaining cssa essentially unchanged.
                       It was popularised in the 1960s with the release of 
                       Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.</p>
                       <img className='anhsk1-text' src={sk1}alt="Four slide"/>
                       <p className='textsk2'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                         words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</p>
                         <p className='textsk3'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                         words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</p>
                         <img className='anhsk1-text1' src={sk1}alt="Four slide"/>
                      </div>
                      
	              </div>  
 }
 export default event1;
