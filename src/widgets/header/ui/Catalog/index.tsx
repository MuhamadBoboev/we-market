'use client'
import { HandySvg } from 'handy-svg'
import classes from './catalog.module.scss'
import Link from 'next/link'
import { NavBar } from '../NavBar'
import { Search } from '../Search'
import { Button } from '@shared/ui/Button'

export const Catalog = () => {
    return <div className={classes.catalog}>
            <Button buttonSize='medium'>
                Каталог
            </Button>
    </div>
}