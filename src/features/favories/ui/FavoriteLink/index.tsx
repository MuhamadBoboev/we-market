'use client'
import { Button } from "@shared/ui/Button"
import classes from './favorie.module.scss'
import useFavoriteStore from "../../model/favoriteSlice"

interface FavoriteLinkProps {
    id: number;
}       
export const FavoriteLink = ({id}:FavoriteLinkProps) => {
    const { toggleFavorite, isFavorite } = useFavoriteStore((state) => state);

    const handleToggleFavorite = () => {
        toggleFavorite(id);
        // toast.success('Успешно добавлено!')
    };
    console.log(isFavorite)
    return <Button 
            className={classes.button}
            variant="outlined" 
            bg='secondary' 
            fullWidth
            onClick={handleToggleFavorite}
            >
                {isFavorite(id) ? 'Удалить из избранного' : 'Добавить в избранное'}
    </Button>
}