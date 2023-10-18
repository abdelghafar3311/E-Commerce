import React from 'react'
// here components 
import Slider from '../../Component/slider/Slider';
import { Produce } from '../../Component/Produce/Produce.js';
import { Offer } from '../../Component/Home/Offer.js';
import { ComBrand } from '../../Component/Brands/ComBrand.js';
import { FirstCategoryContainer } from '../../Component/Category/FirstCategoryContainer';
import { SubTitle } from '../../Component/Uitily/SubTitle';

function HomePage() {
  let ii = [1,2,3]
  return (
    <div>
      <Slider/>
      <SubTitle Name='التصنيفات' path='allCategory' btnName='المزيد'/>
      <FirstCategoryContainer/>
      <Produce name='الاكثر شهرة' Type='المزيد' Path="products?page=0"/>
      <Offer/>
      
      <ComBrand/>
    </div>
  )
}

export default HomePage;