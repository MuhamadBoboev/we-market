'use client'
import { Button } from "@shared/ui/Button"
import classes from './favorie.module.scss'
import useFavoriteStore from "../../model/favoriteSlice"
import Link from "next/link";
import { HandySvg } from "handy-svg";

export const FavoriteLink = () => {
    const { favorites } = useFavoriteStore((state) => state);

    return <Link className={classes.link} href={'favorites'} >
        <HandySvg 
            src='/assets/icons/favorites.svg' 
            width={24}
            height={24}
            alt={'favorites-button'}
            />
        <p className={classes.text} >
            Избранное
        </p>
        {favorites.length > 0 && <div className={classes.mount} >
            {favorites.length}
        </div>}
    </Link>
}