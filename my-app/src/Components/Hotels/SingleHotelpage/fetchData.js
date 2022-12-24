import axios from "axios"

const getData = async(id)=>{
    console.log("ID:-"+id);
    let res=await axios.get(`${process.env.REACT_APP_BASE_URL}/results/${id}`)
    return res.data
}

export default getData