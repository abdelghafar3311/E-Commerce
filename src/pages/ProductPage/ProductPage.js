import React from 'react'
import CategoryHeader from '../../Component/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import { ProdectSlider } from '../../Component/Produce/ProdectSlider'
import ProductText from '../../Component/Produce/ProductText'
import CommitContainer from '../../Component/Commit/CommitContainer'
import { Produce } from '../../Component/Produce/Produce'

export const ProductPage = () => {
  return (
    <div className='conS'>
        <CategoryHeader/>
        <div className='px-2 d-flex justify-content-center align-items-center'>
        <Row className='py-3 w-100  justify-content-between align-items-center'>
            <Col sm='12' md = '12' lg = '4'> 
               <ProdectSlider/>
            </Col>
            <Col sm='12' md='12' lg='8'>
                <ProductText/>
            </Col>
        </Row>
        </div>
        <div className='conStylePadding'>
          <div className='alert alert-light'>
            <CommitContainer/>
          </div>
          <Produce  Type={false} name='منتجات قد تعجبك' index={[1,2,3]}/>
        </div>
    </div>
  )
}
