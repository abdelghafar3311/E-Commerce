import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { Row , Col, Button } from 'react-bootstrap'
import PostCommit from './PostCommit';
import Commit from './Commit';


function CommitContainer() {
  return (
    <div>
        <Row>
            <Col className="d-flex align-items-center">
                <div className="sub-tile d-inline p-1 ">التقيمات</div>
                <AiFillStar className='stare text-warning'/>
                <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
            </Col>
        </Row>
        <PostCommit/>
        <div className='alert alert-light mt-2'>
            <Commit/>
            <Commit/>
            <Commit/>
            <Commit/>
            <Commit/>
        </div>
        <Button variant='outline-dark' className='w-100 text-center'>المزيد</Button>
    </div>
  )
}

export default CommitContainer