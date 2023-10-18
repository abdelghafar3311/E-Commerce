import React, {useState,useEffect} from 'react'
import FetchData from '../../DataActions/FatchUrl'
import { Col, Container, Row } from 'react-bootstrap'
import { Paginate } from '../../Component/Uitily/Paginaton'
import CategoryHeader from '../../Component/Category/CategoryHeader'
import SearchCountResult from '../../Component/Uitily/SearchCountResult'
import SideFilter from '../../Component/Uitily/SideFilter'
import CardProductsContainer from '../../Component/Produce/CardProductsContainer'
import { Produce } from '../../Component/Produce/Produce'
import Protects from '../../Data/Portucts'

const ShopProductsPage = () => {
    
    // let props_page_url = window.location.search;

    const [pages,setPages] = useState(0);
    const [url,setUrl] = useState(window.location.search);

    let newObj = new FetchData(url);

  useEffect(() => {
    setUrl(url);
    newObj.Branch();
    newObj.getData()
    setPages(newObj.printData());

  },[pages])
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
                         <Produce Type={false} page={pages}/>
                         <Paginate count={Protects.length} page={pages} />
                    </Col>
                </Row>
        </div>
    )
}

export default ShopProductsPage
