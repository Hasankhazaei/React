import React, {useState, useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider';

const Products = () =>{

    const [data,setData] = useState([]);
    const [filter,setFilter] = useState([]);
    const [loading,setLoding] = useState(false);
    let componentMoounted = true;


    const getProducts = async () =>{
        try{
            setLoding(true);
            const response = await axios({
                url:'https://fakestoreapi.com/products'
            });
           if(componentMoounted){
                setData(response.data);
                setFilter(response.data);
                setLoding(false);
            }
            return () => {
                componentMoounted = false;
            }


        }catch (error){
           console.log(error);
           
        }
        
    }

   useEffect(()=>{
       getProducts();
   },[]);


    const Loading = () => {
        return(
            <>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
            
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList);
    }
    
    const ShowProducts = () =>{
          return (
              <>
                  <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                      <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
                  </div>
                  {filter.map((product)=>{
                      return(
                        <div className="col-md-3 mb-4" key={product.id}>
                             <div className="card h-100 text-center p-4">
                                 <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                     <div className="card-body">
                                         <h5 className="card-title md-0">{product.title.substring(0,12)}...</h5>
                                         <p className="card-text lead fw-bold">
                                                 ${product.price}
                                         </p>
                                         <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                     </div>
                               </div>
                           </div>
                      )
                  })}
              </>
          );
    };
    
    return(
        <div>
           <div className="container my-5 py-5">
               <div className="row">
                   <div className="col-12 mb-5">
                       <h1 className="display-6 fw-bolder text-center"> Products</h1>
                       <hr/>
                   </div>
               </div>
               <div className="row justify-content-center">
                   {loading ? <Loading/> : <ShowProducts/>}
               </div>
               <Slider/> 
               <Slider/> 
               <Slider/> 
           </div>
        </div>
    )
}

export default Products;