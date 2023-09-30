import React from 'react'
import { Paginate } from '../../Component/Uitily/Paginaton'
import { AllBrand } from '../../Component/Brands/AllBrand'
import { SubTitle } from '../../Component/Uitily/SubTitle'

export const BrandPage = () => {
  return (
    <div className='conS'>
        <SubTitle Name='أشهر المركات'  path={false}/>
        <AllBrand/>
        <Paginate count={1000}/>
    </div>
  )
}
