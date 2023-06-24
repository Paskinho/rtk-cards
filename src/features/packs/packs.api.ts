import {instance} from "../../common/api/common.api";


export const packsApi = {
    getPacks: (arg: ArgGetPacksType) => {
        return instance.get<GetPacksType>('/cards/pack', {params: {...arg}}) // Уточнить по arg
    }
}

export type ArgGetPacksType = {
    packName?: string;
    min?: number
    max?: number
    sortPacks?: number
    page?:number
    pageCount?:number
    user_id?:string
    block?: boolean
}



export type GetPacksType = {
    cardPacks: CardsPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

type CardsPackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}