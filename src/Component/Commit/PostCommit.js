import React from 'react'
import { Button, Col,Row } from 'react-bootstrap';
import Stars from '../Stars/Stars';


function PostCommit() {

    return (
        <div>
        <Row className="mt-3 ">
          <Col sm="12" className="me-5  d-flex align-items-center">
            <div className="rate-name  d-inline ms-3 mt-1 ">عبد الغفار ناجي</div>
            <Stars/>
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            <textarea
              className="form-control p-2 mt-3 mb-2"
              rows="2"
              cols="20"
              placeholder="اكتب تعليقك...."
            />
            <div className=" d-flex justify-content-end al">
              <Button variant='outline-dark'>أضف تعليق</Button>
            </div>
          </Col>
        </Row>
      </div>
    )
}

export default PostCommit