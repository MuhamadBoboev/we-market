import Image from 'next/image'
import classes from './card.module.scss'
interface Props {
    
}
export const Card = () => {
    return <article>
        <div className={classes.bl_img} >
            <Image 
                src='/assets/images/products.png'
                width={190}
                height={220}
                alt='product'
                />
            
        </div>
        <div className={classes.content} >
            <h3 className={classes.title} >

            </h3>
            <p className={classes.text} >

            </p>
        </div>
    </article>
}