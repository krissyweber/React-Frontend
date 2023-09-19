import { useEffect, useState } from "react";
import axios from "axios";


const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] =useState(false);

    const getProducts = async() => {
        try{
            setIsLoading(true);
            const response = await axios.get("http://localhost:3000/api/product/");
            console.log(response.data);
            setProducts(response.data);


        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    })

    return (
        <div>Home Page</div>
    )
}

export default HomePage;