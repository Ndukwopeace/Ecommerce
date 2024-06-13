import axios from "axios";

const Base_Url = "http://localhost:3002";

const Url = axios.create({baseURL: Base_Url});

const productsData = {
     getAll : () => Url.get('/product'),
    getById : (id: any) => Url.get(`/product/${id}`)
    
}

export default productsData;