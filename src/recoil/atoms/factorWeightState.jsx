import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const factorWeightState = atom({
    key:"factorWeightState",
    default:{},
    effects_UNSTABLE: [persistAtom]
})

export default factorWeightState;