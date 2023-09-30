import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Paginate } from '../../Component/Uitily/Paginaton'
import CategoryHeader from '../../Component/Category/CategoryHeader'
import SearchCountResult from '../../Component/Uitily/SearchCountResult'
import SideFilter from '../../Component/Uitily/SideFilter'
import CardProductsContainer from '../../Component/Produce/CardProductsContainer'
import { Produce } from '../../Component/Produce/Produce'

const ShopProductsPage = () => {
    const num = [1,2,3,4,5,6]
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader/>
                <SearchCountResult title="400 نتجية بحث" />
                <Row className='d-flex'>
                    <Col sm='12' md='12' lg='2' className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm='12' md='12' lg='10'>
                         {/* <CardProductsContainer title="" btntitle=""/> */}
                         <Produce Type={false} index={num}/>
                         <Paginate count={150} />
                    </Col>
                </Row>
        </div>
    )
}

export default ShopProductsPage
