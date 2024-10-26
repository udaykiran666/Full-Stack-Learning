import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get:async ()=>{
            const json = await axios.get("http://localhost:3000/notifications")
            return json.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})



export const noatifications = atom({
    key: "networkAtom",
    default:[]
});

export const noatificationsSelector = selector({
    key: "noatificationsSelector",
    get:async ()=>{
        const json = await axios.get("http://localhost:3000/notifications")
        return json.data
    }
    })