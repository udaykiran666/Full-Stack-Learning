import {atom, selector} from "recoil"

export const networkAtom = atom({
    key:"networkAtom",
    default:102
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:100
})
export const messagingAtom = atom({
    key:"messagingAtom",
    default:19
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:20
})
//in selectors we can get and set...get is used to retrieve the values and set it used writebale the values.
export const totalnotificationSelector = selector({
    key:"totalNotifications",
    get :(props)=>{
        return props.get(networkAtom) + props.get(jobsAtom) + props.get(messagingAtom) + props.get(notificationsAtom)
    }
})