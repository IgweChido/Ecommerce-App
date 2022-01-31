import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const[loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() =>{
        const getProducts = async () =>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return()=>{
                componentMounted = false;
            }

            
        }
        getProducts();

    }, []);


    const Loading = () => {
        return(
            <>
            <div className='ldn'>
                 <Skeleton  height={350}/>
            </div>
            <div className='ldn'>
                 <Skeleton  height={350}/>
            </div>
            <div className='ldn'>
                 <Skeleton  height={350}/>
            </div>
            <div className='ldn'>
                 <Skeleton  height={350}/>
            </div>
               
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList)
    }



    const ShowProducts = () => {
        return(
            <>
             <div className='btnn'> 
            <button className='btnlt'  onClick={() =>setFilter(data)}>All</button>
            <button className='btnlt' onClick={() =>filterProduct("men's clothing")}> Men's Clothing</button>
            <button className='btnlt'onClick={() =>filterProduct("jewelery")}>Jewelery</button>
            <button className='btnlt'onClick={() =>filterProduct("women's clothing")}>Women's</button>
            <button className='btnlt'onClick={() =>filterProduct("electronics")}>Electronic</button>
           
        </div>
        {filter.map((product) =>{
            return(
                <>
                
                <div className='displaydiv'>
                    <div className='productbox' key={product.id}>
                        <div className='proimg'>
                            <img src={product.image} alt={product.title}></img>
                        </div>
                        {/* {/* <p className='proname'>{product.title.substring(0,12)}....</p> */}
                        <p className='proprice'>${product.price}</p> 

                        <Link to={`/products/${product.id}`}><button className='probtn'>Buy Now</button></Link>
                    </div>
                </div>
                
                
                </>
            )
        })}
            </>
        );

       
    };


    return (
        <div>
            <p className='latestp'>Latest Products</p>
            <hr></hr>

            <div>
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
            
        </div>
    )
}
