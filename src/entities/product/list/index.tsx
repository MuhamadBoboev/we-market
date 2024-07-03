import classes from './product-list.module.scss'
import { IProduct } from '@entities/product/product-card/model/Product'
import { ProductCard } from '@entities/product/product-card/ui'
import { ReactNode } from 'react'


interface Props {
    products: IProduct[]
    bottomSlot?: ReactNode 
}

export const List = ({products, bottomSlot}: Props) => {
    return <ul className={classes.items} >
            {products.map((product) =>  <ProductCard key={product.id} product={product} bottomSlot={bottomSlot} />)}
        </ul>
}
