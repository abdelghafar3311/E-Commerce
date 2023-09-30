import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/Uitily/SearchCountResult.css';
const SearchCountResult = ({title}) => {
    const handler=()=> {

    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2" style={{background:'#fff'}}>
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                الترتيب
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">لاكثر مبيعا</Dropdown.Item>
                <Dropdown.Item href="#">الاعلي تقييما</Dropdown.Item>
                <Dropdown.Item href="#">السعر من الاقل للاعلي</Dropdown.Item>
                <Dropdown.Item href='#'>السعر من الاعلي للاقل</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
