import {TAMBAH, KURANG} from './tipe'

const initData = {
    counter:0
}

export const reducerCounter = (state = initData, action) => {
    switch(action.type){
        case TAMBAH:
            console.log('tambah')
            return{...state,counter:action.data+1}
        case KURANG:
            console.log('kurang');
            return {...state,counter:action.data-1}
        default:return state;;
    }
}