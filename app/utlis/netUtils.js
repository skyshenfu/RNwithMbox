export const BASE_URL="http://all-help.com/mobile"
export const postNewsList=(url,params)=>{
    fetch(BASE_URL+url,{
        method :'POST',
        headers:{
            'Accept': 'application/xml',
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body:params
    }).then(response => response.json())
        .then((rj)=>console.log(rj))
        .catch((error) => {
            console.error(error);
        });
}
 export function buidPostRequest(params) {

    return{
        method :'POST',
        headers:{
            'Accept': 'application/xml',
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body:params
    }
}