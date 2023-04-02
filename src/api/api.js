import axios from "axios"

const getData=(params={},q='')=>{
    return axios.get(`https://fine-puce-hippo-gown.cyclic.app/products?q=${q}`,{
        params:{
         _page:params.page,
         _limit:params.limit,
         _sort:params.sort,
         _order:params.order,
         _q:params.query,
         _price_lte:params._price_lte,
         _price_gte:params._price_gte
        }
    })
}
const singleProductdata=(id)=>{
    return axios.get(`https://fine-puce-hippo-gown.cyclic.app/products/${id}`)
}
export {getData,singleProductdata}