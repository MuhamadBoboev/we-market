'use client'
import { HandySvg } from 'handy-svg'
import classes from './nav-bar.module.scss'
import Link from 'next/link'

export const NavBar = () => {
    return  <div className={classes.nav} >
                <Link className={classes.link} href={'favorites'} >
                    <HandySvg 
                        src='/assets/icons/favorites.svg' 
                        width={24}
                        height={24}
                        alt={'favorites-button'}
                        />
                    <p className={classes.text} >
                        Избранное
                    </p>
                </Link>
                <Link className={classes.link} href={'cart'} >
                    <HandySvg 
                        src='/assets/icons/cart.svg' 
                        width={24}
                        height={24}
                        alt={'cart-button'}
                        />
                    <p className={classes.text} >
                        Корзина
                    </p>
                </Link>
                <Link className={classes.link} href={'shopping'} >
                    <HandySvg 
                        src='/assets/icons/shopping.svg' 
                        width={24}
                        height={24}
                        alt={'shopping-button'}
                        />
                    <p className={classes.text} >
                        Заказы
                    </p>
                </Link>
            </div>
}