import React from 'react'
import './Category.scss'
import CreateCategory from './CreateCategory'
import CategoryList from './CategoryList'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../../redux/features/categoryAndBrand/categoryAndBrandSlice'

const Category = () => {
    const dispatch = useDispatch();

    const reloadCategory = () => {
        dispatch(getCategories());
    }
  return (
    <section>
        <div className="container coupon">
            <CreateCategory reloadCategory={reloadCategory}/>
            <CategoryList/>
        </div>
    </section>
  )
}

export default Category