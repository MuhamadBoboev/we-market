import { useCatalogStore } from '@features/catalog/model/catalogStore'
import classes from './catalog.module.scss'
import { Button } from '@shared/ui/Button'

export const Catalog = () => {

    const {toggle} = useCatalogStore((state) => state)

    return <div className={classes.catalog}>
            <Button 
                onClick={() => toggle()}
                >
                Каталог
            </Button>
    </div>
}