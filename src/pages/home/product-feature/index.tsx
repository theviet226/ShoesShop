// import React from 'react'
import css from "./product-feature.module.scss"
import ListCard from 'src/components/list-card'
import {useAppSelector} from 'src/redux/config-store'

function ProductFeature() {
    const list = useAppSelector((state) =>state.productReducer.listProduct)
  return (
    <div>
        <h2 className={css["heading"]}>Product Feature</h2>
        <ListCard list ={list}/>
    </div>
  )
}

export default ProductFeature