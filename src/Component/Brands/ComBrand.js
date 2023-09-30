import React from 'react'
import { SubTitle } from '../Uitily/SubTitle';
import { Brand } from './Brand'
import m1 from '../../images/m1.png';
import m2 from '../../images/m2.png';
import m3 from '../../images/m3.png';
import m4 from '../../images/m4.png';
import m5 from '../../images/m5.png';


export const ComBrand = () => {
  return (
    <div>
        <SubTitle Name='أشهر المركات' btnName='المزيد' path='allBrands'/>
        <Brand imgs={[m1,m2,m3,m4,m5]}/>
    </div>
  )
}
