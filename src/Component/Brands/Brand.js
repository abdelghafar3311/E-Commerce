import React from 'react'
import { Row  , Col, Card, Container } from 'react-bootstrap'
import '../../css/Brand/Brand.css';
import { Link } from 'react-router-dom';
export const Brand = ({imgs,links}) => {
  return (
    <Container>
        <Row className='my-2 d-flex justify-content-center'>
                {
                    imgs.length > 0? (imgs.map((item,index) => {
                        return(
                            <Col
                            xs ='6'
                            sm ="6"
                            md="4"
                            lg="2"
                            >
                                <Card style={{width : '140px' , height : '140px' , margin: '5px'}}>
                                    <img src={item} className='image' draggable={false} alt="photo"/>
                                </Card>
                            </Col>
                        )
                    })) : <div className='Error'>Not Found Any Thing!</div>
                }
            </Row>
    </Container>
  )
}
