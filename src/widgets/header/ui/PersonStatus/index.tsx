'use client'
import { HandySvg } from 'handy-svg'
import classes from './person-status.module.scss'
import Link from 'next/link'
import { Button } from '@shared/ui/Button'

export const PersonStatus = () => {
    return  <div className={classes.wrapper} >
                <Button variant='outlined' bg='secondary' buttonSize='small'>
                    Авторизоваться
                </Button>
            </div>
}