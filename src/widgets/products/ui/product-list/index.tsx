import { ProductsList } from '@entities/product'
import classes from './product-list.module.scss'
import { IProduct } from '@entities/product/product-card/model/Product'
import { ProductCard } from '@entities/product/product-card/ui'
import { Wrapper } from '@shared/ui/Wrapper'
import { productsDate } from '@widgets/products/const/productsDate'
import { FavoriteButton } from '@features/index'

interface Props {
    products: IProduct[]
}

export const List = () => {
    return <Wrapper>
        <ProductsList products={productsDate} bottomSlot={FavoriteButton} />
    </Wrapper>
}
