import React from 'react'
import { Button, InputGroup , Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const SignUpPage = () => {
  return (
    <div className='conS d-flex justify-content-center my-5'>
        <Form className='w-50 border-1 border-secondary bg-light' style={{direction:'rtl', borderStyle: 'solid' , padding: '10px'}}>
        <h4 className='my-2 text-center font-weight-bold'>إنشاء حساب</h4>
          <InputGroup className='my-2'>
            <Form.Control 
              aria-label='UserName'
              placeholder='أسم المستخدم'
              type='text'
            />
          </InputGroup>
          <InputGroup className='my-2'>
            <Form.Control 
              aria-label='email'
              placeholder='الايميل'
              type='email'
            />
          </InputGroup>
          <InputGroup className='my-2'>
            <Form.Control 
              aria-label='password'
              placeholder='كلمة المرور'
              type='password'
            />
          </InputGroup>
          <p className='my-2 text-dark' style={{letterSpacing: '0'}}> لتسجيل الدخول
            <Link to='/signIn' className='mx-1' style={{textDecoration: 'none'}}>أضغط هنا</Link>
          </p>
          <Button variant='primary' className='w-100'>أنشاء حساب</Button>
        </Form>
    </div>
  )
}
