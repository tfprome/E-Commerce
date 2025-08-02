import {create} from 'zustand'
import axios from 'axios'


const ProductStore=create((set)=>({
    BrandList:null,
    BrandListRequest:async()=>{
        let res=await axios.get('/api/BrandList') 
        //console.log(res)
        if(res.data['status']==='success'){
            set({BrandList:res.data['data']})
        }
    },
    CategoryList:null,
    CategoryListRequest:async()=>{
        
        let res=await axios.get('/api/CategoryList')
        if(res.data['status']==='success'){
            set({CategoryList:res.data['data']})
        }
    },
    SliderList:null,
    SliderListRequest:async()=>{
        let res=await axios.get('/api/ProductListbySlider')
        if(res.data['status']==='success'){
            set({SliderList:res.data['data']})
        }
    },

    ListProduct:null,
    ListbyBrandRequest:async(BrandID)=>{
        set({ListProduct:null})
        //console.log(BrandID)
        let res=await axios.get(`/api/ProductListbyBrand/${BrandID}`)
        //console.log(res.data.status)
        if(res.data.status==='success'){
            set({ListProduct:res.data['data']})
        
        }
    },
    ListbyCategoryRequest:async(CategoryID)=>{
        set({ListProduct:null})
        let res=await axios.get(`/api/ProductListbyCategory/${CategoryID}`)
        console.log(res.status)
        if(res.data.status==='success'){
            set({ListProduct:res.data['data']})
        }
    },
    Details:null,
    DetailsRequest:async(id)=>{
        try{set({Details:null})
        let res=await axios.get(`/api/ProductDetailsID/${id}`)
        // console.log(res.data.status,res.data.data)
        console.log(res.data)
        if (res.status == "200" ) {
            //console.log("kdkd")
            // Ensure we always store an array, even if empty
           
            set({ Details: res.data });

        // if(res.data.status==='success'){
        //     set({Details:res.data['data']})
        }}
        catch(e){
            console.log('error:',e)
            set({Details:null})
        }
        
    },
    

}))

export default ProductStore;