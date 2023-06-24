import {useAppDispatch} from "common/components/hooks";
import {ArgGetPacksType, packsApi} from "features/packs/packs.api";
import {packsThunks} from "features/packs/packs.slice";
import {useEffect} from "react";
import {Table} from "@mui/material";


export const Packs = () => {

    const dispatch = useAppDispatch()


    // useEffect(() => {
    //     return dispatch(packsThunks.getPacks())
    // },)


    return <div>
       <Table>
       </Table>
    </div>
}