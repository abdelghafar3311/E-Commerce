import React from 'react'
import '../../css/ErrorStyle/error.css';
import { Link } from 'react-router-dom';
export const MakeNeer = () => {
  return (
    <div className="text-center mt-5 comS">
        <h1 className="d text-center">
            إن هذة الصفحة لم يتم بنائها بعد. يرجا معاودة الزيارة في يومٍ أخر
            !
        </h1>
        <p className="text-center">قريبا ستبنا إن شاء الله..</p>
        <Link to='/' className='mt-5' style={{margin: '10px' , transform: 'translateY(10px)'}}>الرجوع الى الصفحة الرئيسة</Link>
    </div>
  )
}
