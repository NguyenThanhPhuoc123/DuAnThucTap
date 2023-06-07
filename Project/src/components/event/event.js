
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCalendarAlt } from 'react-icons/fa';

import { Link } from "react-router-dom";

const event=() => {

      return   <div className='card'  class="row ">   
				
				<h1 className='sukien'>SỰ KIỆN NỔI BẬT</h1>
				
					<Card  style={{ width: '16rem',margin: "10px" }}>
					<Card.Img variant="top" src={require('../../img/sk1.png')} />
					<Card.Body>
						<Card.Title className='chusk'>Sự kiện 1</Card.Title>
						<Card.Text>
						Đầm Sen Park
						</Card.Text>
                        <div>
                        <FaCalendarAlt color='#FFB809' /> 30/05/2021 - 01/06/2021
                        </div><br/>
						<Card.Text>
						<h3 className='gia'> 25.000 VND </h3>
						</Card.Text>
                        <Link to="/event/sk1"><Button variant="danger">Xem chi tiết</Button></Link>
					</Card.Body>
					</Card>

					<Card style={{ width: '16rem' }}>
					<Card.Img variant="top" src={require('../../img/sk1.png')} />
					<Card.Body>
						<Card.Title className='chusk'>Sự kiện 1</Card.Title>
						<Card.Text>
						Đầm Sen Park
						</Card.Text>
                        <div>
                        <FaCalendarAlt color='#FFB809' /> 30/05/2021 - 01/06/2021
                        </div><br/>
						<Card.Text>
						<h3 className='gia'> 25.000 VND </h3>
						</Card.Text>
						<Link to="/event/sk1"><Button variant="danger">Xem chi tiết</Button></Link>
					</Card.Body>
					</Card>

					<Card style={{ width: '16rem' }}>
					<Card.Img variant="top" src={require('../../img/sk2.png')} />
					<Card.Body>
						<Card.Title className='chusk'>Sự kiện 2</Card.Title>
						<Card.Text>
						Đầm Sen Park
						</Card.Text>
                        <div>
                        <FaCalendarAlt color='#FFB809' /> 30/05/2021 - 01/06/2021
                        </div><br/>
						<Card.Text>
						<h3 className='gia'> 25.000 VND </h3>
						</Card.Text>
						<Link to="/event/sk1"><Button variant="danger">Xem chi tiết</Button></Link>
					</Card.Body>
					</Card>

					<Card style={{ width: '16rem' }}>
					<Card.Img variant="top" src={require('../../img/sk3.png')} />
					<Card.Body>
						<Card.Title className='chusk'>Sự kiện 3</Card.Title>
						<Card.Text>
						Đầm Sen Park
						</Card.Text>
                        <div>
                        <FaCalendarAlt color='#FFB809' /> 30/05/2021 - 01/06/2021
                        </div><br/>
						<Card.Text>
						<h3 className='gia'> 25.000 VND </h3>
						</Card.Text>
						<Link to="/event/sk1"><Button variant="danger">Xem chi tiết</Button></Link>
					</Card.Body>
					</Card>
	        </div>  
 }
 export default event;
