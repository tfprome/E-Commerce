import create from 'zustand'
import axios from 'axios'

const Featrestore=create((set)=>({
    Featrestore:null,
    FeatureListRequest:async()=>{
        let res=await axios.get('/api/v1/FeaturesList')
        if(res.data['status']==='success'){
            set({FeaturesList:res.data['data']})
        }
    }
    

}))

export default Featrestore;