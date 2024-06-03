"use client";
import { getTrackedProducts } from '@/actions/serverRouting';
import { useState, useEffect } from 'react';

const TrackProducts = () => {  // Renamed to start with an uppercase letter
  const [trackedProducts, setTrackedProducts] = useState([]);

  useEffect(() => {
    const fetchTrackedProducts = async () => {
      try {
        const response = await getTrackedProducts();
        console.log(response);
        setTrackedProducts(response);
      }
      catch (error) {
        console.error('No tracked products found!');
      }
    };
    fetchTrackedProducts();
  }, []);

  return (
    <div>
      {trackedProducts.length > 0 && (
        <section className='search-section'>
          <h2 className="section-text">Tracked Products</h2>
  
          <div className='flex flex-wrap gap-x-20 gap-y-16'>
            {trackedProducts.map((product, index) => (
              // Added "key" prop using index, ideally use a unique identifier from "product"
              <h2 key={index}>{product}</h2>  
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TrackProducts;
