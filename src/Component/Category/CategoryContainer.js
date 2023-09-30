import React from 'react'
import { Paginate } from '../Uitily/Paginaton';
import { FirstCategoryContainer } from './FirstCategoryContainer';
import { SubTitle } from '../Uitily/SubTitle';

export const CategoryContainer = () => {
  return (
    <div>
        <SubTitle Name='التصنيفات' path={false} btnName={false}/>
        <FirstCategoryContainer/>
        <FirstCategoryContainer/>
        <FirstCategoryContainer/>
        <Paginate count={150}/>
    </div>
  )
}
