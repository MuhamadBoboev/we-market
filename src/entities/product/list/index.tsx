import classes from './product-list.module.scss'
import { IProduct } from '@entities/product/product-card/model/Product'
import { ProductCard } from '@entities/product/product-card/ui'
import { FC, ReactNode } from 'react'


interface Props {
    products: IProduct[]
    bottomSlot?: FC<{id: number}> 
}

export const List = ({products, bottomSlot: FavoriteButton}: Props) => {
    return <ul className={classes.items} >
            {products.map((product) =>  <ProductCard key={product.id} product={product} bottomSlot={FavoriteButton && <FavoriteButton id={product.id}/>} />)}
        </ul>
}
