import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../categories/categories.css';
const Jewelery = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() =>{
       const fetchData = () =>{
            fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(response => response.json())
            .then(data => setData(data));
       }
       fetchData();
    },[]);

    const handleSeeMore = (productID) => {
        navigate(`/product/${productID}`);
    };
  return (
    <>
        <div className='container'>
            <div className='row elect-data-container'>
                {
                    data.map((items) =>
                    
                            <div className='col-lg-3 continer-card'>
                                <img width={100} src={items.image} alt='images'/>
                                <h3>{items.title}</h3>
                                <p>{items.price}</p>
                                <button onClick={() => handleSeeMore(items.id)} className='btn btn-primary'>See More</button>
                            </div>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Jewelery