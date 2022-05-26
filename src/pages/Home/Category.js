import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className='grid gap-2 lg:grid-cols-9 md:grid-cols-3 sm:grid-cols-2 my-5'>
            {
                categories.map(category =>  <Link key={category.id} to='#'> <div class="bg-base-100 border-2 lg:border-0">
                    <img src={category.img} alt="" />
                    <h2 class="text-md text-center text-accent font-semibold hover:text-primary">{category.name}</h2>
                </div> </Link>)
            }
        </div>
    );
};

export default Category;