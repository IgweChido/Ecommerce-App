import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action/index1';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';


export default function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() =>{
        const getProduct = async ()=>{
            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className='skelpro'>
                    <Skeleton/>
                </div>

                <div className='skelsechalf'>
                    <div className='skelpro1'>
                         <Skeleton  />
                    </div>
                    <div className='skelpro11'>
                         <Skeleton  />
                    </div>
                    <div className='skelpro12'>
                         <Skeleton   />
                    </div>

                    <div className='skelpro13'>
                         <Skeleton   />
                    </div>
                    <div className='skelpro14'>
                         <Skeleton   />
                    </div>
                    <div className='skelpro15'>
                         <Skeleton   />
                    </div>
                    <div className='skelpro16'>
                         <Skeleton   />
                    </div>
                   
                   
                </div>
            </>
        )
    }

    const ShowProduct = () =>{
        return(
            <>

            {/* 1st Half Page */}
            <div  className='firsthalf'>
            <div className='proimg2'>
                <img src={product.image} alt={product.title}></img>
            </div>

            </div>

             {/* 2nd Half Page */}
             <div className='secondhalf'>
                <p className='mencloth'>{product.category}</p>
                <p className='proname2'>{product.title}</p>
                <p className='rating'>Rating {product.rating && product.rating.rate}<FontAwesomeIcon icon={faStar} className='navFA'></FontAwesomeIcon></p>


                <p className='proprice2'>${product.price}</p> 
                <p className='prodesc'>{product.description}</p>

                <Link to={`/products/${product.id}`}><button className='probtn2' onClick={()=>addProduct(product)}>Add to Cart</button></Link>
                <Link to={`/products/${product.id}`}><button className='probtn2'>Go to Cart</button></Link>

            </div>
            
            
            </>
        )
    }


  return (
  <div>
      <div>
          <div>
              {loading ? <Loading/> : <ShowProduct/>}
          </div>
      </div>

  </div>
  );
}
