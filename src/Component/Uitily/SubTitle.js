import React from 'react'
import "../../css/homePage/Prodects.css";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const SubTitle = ({Name,btnName = false,path}) => {
  return (
    <Container className='my-3'>
        <div className='conCategory'>
        <h1>{Name}</h1>
        {
          btnName !== false? <Link to={"/" + path}><button className='btn btn-outline-dark'>{btnName}</button></Link> : null
        }
      </div>
    </Container>
  )
}
