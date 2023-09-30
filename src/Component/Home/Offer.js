import React from 'react'
import comp from '../../images/camp.png';
import { Container } from 'react-bootstrap';
import { FaComputer } from "react-icons/fa6";
import '../../css/homePage/offer.css';
import Computer from '../../images/camputer.png';
export const Offer = () => {
  return (
    <Container>
        <div className='a'>
            <div>
            <p className='s'>خصم على جميع أنواع الكمبيوتارات بنسبة 50%</p>
            </div>
            <div>
                <img src={Computer} className='icon' draggable={false}/>
            </div>
        </div>
    </Container>
  )
}
