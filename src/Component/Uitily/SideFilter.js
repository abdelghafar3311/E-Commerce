import React from 'react'
import { Row } from 'react-bootstrap'
import '../../css/Uitily/filter.css';

const SideFilter = () => {

  const sub = e => {
    e.preventDefault();
  }

    return (
        <form className="Filter-container" onSubmit={sub}>
          <div className="d-flex title-filters">
            <div className="filter-title">الفئة</div>
            <div className='title-items'>
            <div className="d-flex ">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            <div className="d-flex">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">اجهزة منزلية</div>
            </div>
            <div className="d-flex">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">اجهزة منزلية</div>
            </div>
            <div className="d-flex">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">اجهزة منزلية</div>
            </div>
            <div className="d-flex">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">اجهزة منزلية</div>
            </div>
            </div>
          </div>
  
          <div className="d-flex  Branch-filters">
            <div className="filter-title">الماركة</div>
            <div className='Branch-items'>
                <div className="d-flex">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">الكل</div>
                </div>
                <div className="d-flex">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">ابل</div>
                </div>
                <div className="d-flex">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">سامسونج</div>
                </div>
                </div>
          </div>
          
          <div className='Price-filters'>  
              <div className="filter-title">السعر</div>
              <div className='Price-items'>
                <div className="d-flex align-items-center">
                    <p className="filter-sub">من:</p>
                    <input
                      className="m-2 text-center"
                      type="number"
                      style={{ width: "50px", height: "25px" }}
                    />
                </div>

                <div className="d-flex">
                  <p className="filter-sub">الي:</p>
                  <input
                    className="m-2 text-center"
                    type="number"
                    style={{ width: "50px", height: "25px" }}
                  />
                </div>

              </div>
              <button type='submit' className='btn btn-outline-dark'>بحث</button>
          </div>
      </form>
    )
}

export default SideFilter
