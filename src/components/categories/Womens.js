import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../categories/categories.css';
const Womens = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() =>{
       const fetchData = () =>{
            fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
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
        <div className='container elect-data-container'>
            <div className='row'>
                {
                    data.map((items) =>
                            <div className='col-lg-3 container-card'>
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

export default Womens