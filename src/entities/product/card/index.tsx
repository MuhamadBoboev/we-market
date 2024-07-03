import Image from 'next/image'
import classes from './card.module.scss'
import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
    image: string  
    name?: string
    href: string 
    bottomSlot?: ReactNode
    children: ReactNode
}

export const Card = ({image, name, href, bottomSlot, children}: Props) => {
    return <article className={classes.card} >
        <div className={classes.bl_img} >
            <Image 
                src={image}
                width={190}
                height={220}
                alt={name ? name : 'card'}
                />
        </div>
        <div className={classes.content} >
           {children}
        </div>
        {bottomSlot && <div className={classes.bottom} >
            {bottomSlot}
        </div>}
        <Link className={classes.link} href={href} />
    </article>
}
