import React from 'react'
import { CategoryMine } from './Category'
import { Container , Row } from 'react-bootstrap'
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

export const FirstCategoryContainer = () => {
  return (
    <Container>
            {/* <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" /> */}
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryMine title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryMine title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryMine title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryMine title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryMine title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryMine title="اجهزة منزلية" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
  )
}
