import { Button } from "@shared/ui/Button"
import classes from './favorie.module.scss'

export const FavoriteButton = () => {
    return <Button variant="outlined" bg='secondary' fullWidth >
        В корзину
    </Button>
}