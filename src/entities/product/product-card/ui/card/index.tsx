import classes from './product-card.module.scss'
import { Card as CardWrapper } from '@entities/product/card'
import { IProduct } from '../../model/Product'
import { ReactNode } from 'react'

interface Props {
    product: IProduct
    bottomSlot?: ReactNode
    children?: ReactNode
}

export const Card = ({product, bottomSlot, children}: Props) => {
    return <CardWrapper name={product.name} image={product.image} href={`/product/${product.slug}`} >
        <div className={classes.body} >
            <div className={classes.content}>
                <h3 className={classes.title} >{product.name}</h3>
                <p className={classes.description} >
                    {product.description}
                </p>
            </div>
            {bottomSlot}
        </div>
    </CardWrapper> 
}
