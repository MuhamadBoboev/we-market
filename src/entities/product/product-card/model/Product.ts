import { IAttribute } from "@shared/model/IAttribute"
import { IImage } from "@shared/model/IImage"

export interface IProduct {
    id: number 
    name: string 
    image: string 
    price: number
    description: string
    slug: string
    images: IImage[]
    attributes: IAttribute[]
    video_id: string | null
    phone: string | null
    whatsapp: string | null
    website: string | null
}


