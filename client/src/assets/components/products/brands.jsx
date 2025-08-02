import React from 'react';
import { Link } from 'react-router-dom';
import ProductStore from '../store/productstore';
import Brandskeleton from '../skeleton/brands-skeleton';

const Brands = () => {
    const { BrandList } = ProductStore();

    if (!BrandList) return <Brandskeleton count={6} />;

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Brands</h2>
            <div className="row">
                {BrandList.map((brand) => (
                    <div key={brand._id} className="col-6 col-md-4 col-lg-2 mb-4">
                        
                        <Link to={`/by-brand/${brand._id}`} className="card border-0 text-center">
                            <div className="card-body">
                                <img 
                                    src={brand.brandImg} 
                                    alt={brand.brandName}
                                    className="img-fluid mb-3"
                                    style={{ height: '80px', objectFit: 'contain' }}
                                />
                                <h6>{brand.brandName}</h6>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;