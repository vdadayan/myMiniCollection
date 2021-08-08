import axios from "axios";
import data from '../alco.json'

// export const instance = axios.create({
//     baseURL: "../alco.json",
// })
export const alcoAPI = {
    getAlcoItems: async () => {
        const res = await axios.get(data)
        console.log(res)
        return res
    }
}