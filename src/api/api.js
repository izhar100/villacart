import axios from "axios"

const getData=(params={})=>{
    return axios.get(`https://server-tr52.onrender.com/products`,{
        params:{
         _page:params.page,
         _limit:params.limit,
         _sort:params.sort,
         _order:params.order
        }
    })
}
export {getData}