import React,{useState} from 'react';
import ProductStore from '../store/productstore';
import { Link } from 'react-router-dom';
import ProductsSkeleton from './../skeleton/products-skeleton';
import StarRatings from 'react-star-ratings';



const ProductList = (props) => {
    const {ListProduct,BrandList,CategoryList}=ProductStore();
    let [Filter,setFilter]=useState({brandID:'',categoryID:'',priceMax:'',priceMin:''})
    return (
        <div className="container mt-2">
        <div className="row">
            <div className="col-md-3 p-2">
                <div className="card vh-100 p-3 shadow-sm">
                    <label className="form-label mt-3">Brands</label>
                    <select value={Filter.brandID} onChange={async (e)=>{await inputOnChange('brandID',e.target.value)}}  className="form-control form-select">
                        <option value="">Choose Brand</option>
                        {BrandList!==null?(
                            BrandList.map((item,i)=>{
                                return (<option value={item['_id']}>{item['brandName']}</option>)
                            })

                        ):<option></option>}

                    </select>
                    <label className="form-label mt-3">Categories</label>
                    <select value={Filter.categoryID} onChange={async (e)=>{await inputOnChange('categoryID',e.target.value)}} className="form-control form-select">
                        <option value="">Choose Category</option>
                        {CategoryList!==null?(
                            CategoryList.map((item,i)=>{
                                return (<option value={item['_id']}>{item['categoryName']}</option>)
                            })

                        ):<option></option>}



                    </select>
                    <label className="form-label mt-3">Maximum Price ${Filter.priceMax}</label>
                    <input value={Filter.priceMax} onChange={async (e)=>{await inputOnChange('priceMax',e.target.value)}} min={0} max={1000000} step={1000} type="range" className="form-range" />


                    <label className="form-label mt-3">Minimum Price ${Filter.priceMin}</label>
                    <input value={Filter.priceMin} onChange={async (e)=>{await inputOnChange('priceMin',e.target.value)}} min={0} max={1000000} step={1000} type="range" className="form-range" />
                </div>
            </div>
            <div className="col-md-9 p-2">
                <div className="container">
                    <div className="row">

                        {
                            ListProduct===null?(<ProductsSkeleton/>):(
                                <div className="container">
                                    <div className="row">
                                        {
                                            ListProduct.map((item,i)=>{

                                                let price=<p className="bodyMedium  text-dark my-1">Price: ${item['price']} </p>
                                                if(item['discount']===true){
                                                    price=<p className="bodyMedium  text-dark my-1">Price:<strike> ${item['price']} </strike> ${item['discountPrice']} </p>
                                                }
                                                return(
                                                    <div className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                        <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                            <img className="w-100 rounded-top-2" src={item['image']} />
                                                            <div className="card-body">
                                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                {price}
                                                                <StarRatings rating={parseFloat(item['star'])} starRatedColor="red" starDimension="15px" starSpacing="2px" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default ProductList;