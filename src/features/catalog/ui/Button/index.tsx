import Image from 'next/image'
import classes from './button.module.scss'
import { HandySvg } from 'handy-svg'

export const ButtonCatalog = () => {
    return <button className={classes.item}>
        <div className={classes.body} >
            <div className={classes.bl_img} >
                <Image 
                    src={'/assets/images/catalog/catalog_1.svg'}
                    width={40}
                    height={40}
                    alt='asd'
                />
            </div>
            <div className={classes.bl_text}>
                <p className={classes.text}>
                    Одежда и обувь
                </p>
            </div>
            <div className={classes.arrow} >
                <HandySvg 
                    src='/assets/icons/arrow-right.svg'
                    width={24}
                    height={24}
                    alt={'arrow'}
                />
            </div>
        </div>
    </button>
}