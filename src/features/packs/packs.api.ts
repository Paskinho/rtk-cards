import {instance} from "../../common/api/common.api";


export const packsApi = {
    getPacks: (arg: GetPacksType) => {
        return instance.get<GetPacksType>('/cards/pack') // Уточнить по arg
    }
}

export type GetPacksType = {
    cardPacks: CardsPackType
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