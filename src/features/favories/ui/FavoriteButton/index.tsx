'use client'
import { Button } from "@shared/ui/Button"
import classes from './favorie.module.scss'
import useFavoriteStore from "../../model/favoriteSlice"
import toast from "react-hot-toast";


export const FavoriteButton = ({id}: {id: number}) => {
    const { toggleFavorite, isFavorite } = useFavoriteStore((state) => state);

    const handleToggleFavorite = () => {
        toggleFavorite(id);
        if(isFavorite(id)) {
            toast.success('Успешно добавлено!')
        } else {
            toast.error('Успешно удалено!')
        }
    };

    return <Button 
            className={classes.button}            
            fullWidth
            onClick={handleToggleFavorite}
            >
                {isFavorite(id) ? 'Удалить' : 'Добавить'}
    </Button>
}