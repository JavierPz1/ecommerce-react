import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchData } from '../../fetchData';
import ProductCard from '../ProductCard/ProductCard';
import './ItemListContainer.css';
import Loader from '../Loader/Loader';

function ItemListContainer() {

    const [loading, setLoading] = useState(true);
    const [allProducts, fetchAllProducts] = useState(null);
    const { categoria } = useParams();

    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        
        if (!allProducts) {          
            fetchData()
            .then(response => {
                fetchAllProducts(response)
                console.log(response)
            })
            .catch(err => console.error(err));
        }
        
    }, [categoria]);
    
    return (
        loading ?
            
        <Loader />
            
            :
            
        <div>
            <div className='containerProducts'>
                {
                    categoria ?
                        allProducts.filter(el=> el.categoria === categoria).map(el => {
                            return (
                                <ProductCard key={el.id} producto={el} />
                            );
                        })
                    :
                            
                    allProducts.map(el => {
                        return (
                            <ProductCard key={el.id} producto={el}/>
                        );
                    })
                }
            </div>
        </div>
    )
};

export default ItemListContainer;