import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


const factorsState = atom({
    key :'factorsState',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export default factorsState;