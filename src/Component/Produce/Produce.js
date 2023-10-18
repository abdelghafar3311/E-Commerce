import React , {useState,useEffect}from 'react'
import { Container, Row  } from 'react-bootstrap'
import { SubTitle } from '../Uitily/SubTitle'
import { Pro } from '../Uitily/Pro'
import Protects from '../../Data/Portucts'
import FetchData from '../../DataActions/FatchUrl'


export const Produce = ({name,Type,Path,page = 0}) => {

  // console.log(win)

  

  
  


  let prot = Protects[page].protects

  const index = prot

  return (
    <Container style={{direction : 'rtl'}}>
      <SubTitle Name={name} btnName={Type} path={Path}/>
      <Row className='my-2 d-flex justify-content-center align-item-center w-100'>
        {index.length > 0? (index.map((e) => {return <Pro text={e.explain} image={e.image} level={e.level} price={e.price} like={e.like} id={e.id} page={page} />})) : null}
      </Row>
    </Container>
  )
}
