import React , {useState} from 'react'
import { Card, Col } from 'react-bootstrap'
import b from '../../images/home/2.jpg';
import { AiFillHeart , AiOutlineHeart , AiFillStar } from "react-icons/ai";
import "../../css/homePage/Prodects.css";
import { Link } from 'react-router-dom';
export const Pro = ({text,image,level,price,like,id,page}) => {

    let [Like,setLike] = useState(like);

    function setLikeNow() {
        Like? setLike(false) : setLike(true);
    };

    function LikeIcon() {
        return(
            <>
               {Like ? <AiFillHeart className='text-danger likeA'/> : <AiOutlineHeart/>}
            </>
        )
    }


   

    return (
        <Col xs ='12' sm ="12" md="6" lg="4" xl='3'>
            <Card className='prod_new'>
                    <a href={`/product?page=${page}&id=${id}`}><Card.Img variant="top" src={image} className='imagePro' draggable={false} /></a>
                    <Card.Body>
                        <Card.Title style={{cursor:'pointer'}} className='like' onClick={() => setLikeNow()}><LikeIcon/></Card.Title>
                    <Card.Text className='text'>
                        {text}
                    </Card.Text>
                    <div className='footerPro'>
                        <div className='conStar'>
                            <AiFillStar className='stare text-warning'/>
                            <span className='text-warning'>{level}</span>
                        </div>
                        <div className='price'>
                            <span className='price_pro'>{price}</span>
                            <span>جنية</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}
