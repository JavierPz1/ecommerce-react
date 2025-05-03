import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';

function ItemListContainer() {

    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState(null);
    const { categoria } = useParams();

    const collectionProduct = collection(db, "productos");

    
    
    useEffect(() => {

        getDocs(collectionProduct).then(snapshot => {
            let arrayProducts = snapshot.docs.map(el => el.data());
            setAllProducts(arrayProducts);

        }).catch(err => console.error(err));
        
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        
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