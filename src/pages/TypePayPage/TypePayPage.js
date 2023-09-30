import React , {useState} from 'react'
import { Form } from 'react-bootstrap'

function TypePayPage() {

    const [type,setType] = useState('');
    const handelForm = event => {
        alert(`${type}`)
        event.preventDefault();
    }

  return (
    <div className='conS d-flex justify-content-center '>
        <div className='card w-50 p-3 d-flex flex-column gap-2'>
            <Form onSubmit={handelForm} style={{direction: 'rtl'}}>

                <Form.Check
                    type='radio'
                    name='Pay'
                    label='الشراء من خلال الفيزا'
                    value='visa'
                    id='t'
                    checked
                    onClick={(e) => setType(e.target.value)}
                    style={{direction: 'rtl'}}
                />
                <Form.Check
                    type='radio'
                    name='Pay'
                    label='الدفع عند التوصيل'
                    value='Kach'
                    id='s'
                    onClick={(e) => setType(e.target.value)}
                    style={{direction: 'rtl'}}
                />

                <div style={{direction: 'ltr', marginTop: '10px'}} >
                    <input type='submit' className='btn btn-outline-dark' value='تنفيذ النشاط'/>
                </div>

            </Form>
        </div>
    </div>
  )
}

export default TypePayPage