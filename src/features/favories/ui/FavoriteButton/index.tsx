'use client'
import { Button } from "@shared/ui/Button"
import classes from './favorie.module.scss'
import useFavoriteStore from "../../model/favoriteSlice"
import toast from "react-hot-toast";

interface FavoriteButtonProps {
    id: number;
}       
export const FavoriteButton = ({id}:FavoriteButtonProps) => {
    const { toggleFavorite, isFavorite } = useFavoriteStore((state) => state);

    const handleToggleFavorite = () => {
        toggleFavorite(id);
        console.log(isFavorite(id))
        // toast.success('Успешно добавлено!')
    };

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