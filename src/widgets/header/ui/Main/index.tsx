'use client'
import { HandySvg } from 'handy-svg'
import classes from './main.module.scss'
import Link from 'next/link'
import { NavBar } from '../NavBar'
import { Search } from '../Search'
import { Catalog } from '../Catalog'
import { Wrapper } from '@shared/ui/Wrapper'
import { PersonStatus } from '../PersonStatus'

export const Main = () => {
    return <div>
        <div className={classes.section}>
            <Wrapper className={classes.wrapper}>
                <div className={classes.header}>
                    <div className={classes.left}>
                        <Link href="/" className={classes.bl_logo} >
                            <HandySvg 
                                src='/assets/icons/logo.svg'
                                width={134}
                                height={48}
                                alt={'logo'}
                                />
                        </Link>
                        <div className={classes.catalog} >
                            <Catalog />
                        </div>
                    </div>
                    <div className={classes.search} >
                        <Search />
                    </div>
                    <div className={classes.right} >
                        <NavBar />
                        <PersonStatus />
                    </div>
                </div>
            </Wrapper>
        </div>
        <div className={classes.header_top} ></div>
    </div>
}