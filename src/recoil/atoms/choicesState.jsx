import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const choicesState = atom({
    key :'choicesState',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export default choicesState;