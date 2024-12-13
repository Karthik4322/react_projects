import axios from "axios";

const axiosHttp = axios.create({
    baseURL: window.location.hostname.includes("localhost")?"http://localhost:3000/users":"http://www.hematitecorp.com"
});

//create interceptor for request

axiosHttp.interceptors.request.use(
    (config)=>{
        const token = !!sessionStorage.getItem("accessToken")
        return {
            ...config,
            headers:{
                ...axios(token && {'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`}),
                ...config.headers
            }
        }
    },

    (error)=>{
        return Promise.reject(error);
    }
);
    //create interceptor for response

    axiosHttp.interceptors.response.use(
        (response)=>{
            return response.data;
        },
        (error)=>{
            return Promise.reject(error);
        }
    )
    
// Global Request HTTP request:

export const GET =(url,header={})=>{
    return axiosHttp.get(url,{headers:header})

}
export const DELETE =(url,header={})=>{
    return axiosHttp.delete(url,{headers:header})

}
export const POST =(url,payload,header={})=>{
    return axiosHttp.delete(url,payload,{headers:header})

}
export const PUT =(url,payload,header={})=>{
    return axiosHttp.put(url,payload,{headers:header})

}
