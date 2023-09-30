import React from 'react'
import { Col, Container, Row  } from 'react-bootstrap'
import { SubTitle } from '../Uitily/SubTitle'
import { Pro } from '../Uitily/Pro'

export const Produce = ({name,Type,Path = false,index}) => {

  return (
    <Container style={{direction : 'rtl'}}>
      <SubTitle Name={name} btnName={Type} path={Path}/>
      <Row className='my-2 d-flex justify-content-center align-item-center w-100'>
        {index.length > 0? (index.map(() => {return <Pro text='كمبيوتر خاص بمكتب'/>})) : null}
        
        {/* <Pro text='كمبيوتر خاص بمكتب'/>
        <Pro text='كمبيوتر خاص بمكتب'/>
        <Pro text='كمبيوتر خاص بمكتب'/> */}
      </Row>
    </Container>
  )
}
