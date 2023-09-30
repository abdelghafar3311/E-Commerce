import React from 'react'

export const Footer = () => {
  return (
    <div className='alert alert-dark bg-dark text-light w-100 d-flex justify-content-between align-items-center' style={{border: 'none',direction: 'rtl' , margin: '0',borderRadius: '0',minHeight: '40px', padding: '2px 8px'}}>
        <p className='' style={{letterSpacing: '0',color:'#fff'}}></p>
        <div className='d-flex justify-content-between align-items-center'>
          <a href='/' className='mx-2 text-light' style={{textDecoration: 'none',fontSize: '12px'}}>سياسة الخصوصية</a>
          <a href='/' className='mx-2 text-light' style={{textDecoration: 'none',fontSize: '12px'}}>من نحن</a>
        </div>
    </div>
  )
}
