'use client'
import { Wrapper } from "@shared/ui/Wrapper"
import classes from './main.module.scss'
import { HandySvg } from "handy-svg"
import Link from "next/link"

export const Main = () => {
    return <div className={classes.wrapper} > 
            <Wrapper>
            <div className={classes.footer} >
                <div className={classes.left} >
                    <HandySvg 
                        src="/assets/icons/logo.svg" 
                        width={134}
                        height={48}
                        alt="logo"
                    />
                    <Link className={classes.link} href={'tel:+992919239212'}>
                        Нужны помощь: +992 919 23 92 12
                    </Link>
                </div>
            </div>
        </Wrapper>
    </div>
}