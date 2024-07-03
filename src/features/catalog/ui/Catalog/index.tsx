'use client'
import { useCatalogStore } from '@features/catalog/model/catalogStore'
import { ButtonCatalog } from '../Button'
import classes from './catalog.module.scss'
import clsx from 'clsx'
import { Portal } from '@shared/ui/Portal'

export const Catalog = () => {
    const {isOpen} = useCatalogStore((state) => (state))

    return <Portal isOpen={isOpen} rootId='catalog-root' > 
        <div className={classes.main}>
            <div className={classes.wrapper} >
                <div className={classes.body_main} >
                    <ul className={classes.items} >
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                    </ul>
                </div>
                <div className={classes.body_second} >
                    <h3 className={classes.title} >
                        Обувь
                    </h3>
                    <ul className={classes.items} >
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                        <ButtonCatalog />
                    </ul>
                </div>
            </div>
            <div className={classes.bg}></div>
        </div>
    </Portal>
}