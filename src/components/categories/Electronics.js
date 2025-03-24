import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../categories/categories.css';
const Electronics = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            fetch('https://fakestoreapi.com/products/category/electronics')
                .then(response => response.json())
                .then(data => setData(data));
        }
        fetchData();
    }, [])

    const handleSeeMore = (productID) => {
        navigate(`/product/${productID}`);
    };
    return (
        <>
            <div className='container'>
                <div className='row elect-data-container'>
                    {
                        data.map((items) =>

                            <div className='col-lg-3 continer-card '>
                                <img width={100} src={items.image} alt='images' />
                                <h5>{items.title}</h5>
                                <p>${items.price}</p>
                                <button onClick={() => handleSeeMore(items.id)} className='btn btn-primary'>See More</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Electronics;