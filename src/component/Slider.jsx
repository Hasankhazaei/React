import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay,EffectCube,Navigation} from 'swiper';




const Slider =() => {

    const [data,setData] = useState([]);
      


    const getProducts = async () =>{
        try{
            const response = await axios({
                url:'https://fakestoreapi.com/products'
            });
                setData(response.data);
    
        }catch (error){
           console.log(error);
           
        }
        
    }

   useEffect(()=>{
       getProducts();
   },[]);












    return(
        <div className="container bg-secondary rounded-3 p-5 my-5 ">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                <Swiper modules={[Autoplay,EffectCube,Navigation]} className="ProductsBar"
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 15
                              },
                              480: {
                                slidesPerView: 3,
                                spaceBetween: 25
                              },
                              640: {
                                slidesPerView: 4,
                                spaceBetween: 30
                              }
                          
                        }}
                        navigation
                >
                    {data.map((elem) =>{
                        return <SwiperSlide key={elem.id} tag="section" className="col-md-3 mb-2">
                                 <div className="col-md-10 mb-2" key={elem.id}>
                             <div className="card h-100 text-center p-4">
                                 <img src={elem.image} className="card-img-top p-3
                                 " alt={elem.title} height="100px"/>
                                     <div className="card-body">
                                         <h5 className="card-title md-0">{elem.title.substring(0,12)}...</h5>
                                         <p className="card-text lead fw-bold">
                                                 ${elem.price}
                                         </p>
                                         <Link to={`/products/${elem.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                     </div>
                               </div>
                           </div>
                        </SwiperSlide>
                    })}
                </Swiper>
                </div>
            </div>
       </div>
    )
}
export default Slider;


