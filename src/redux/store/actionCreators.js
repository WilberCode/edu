import Axios from "axios"
import {GET_ALL_POSTS} from './actions'

const API_URL =  process.env.REACT_APP_API_URL

const getAllPosts= ()=> dispatch =>{
  Axios.get(`${API_URL}/posts`)
  .then(response => dispatch({
    type: GET_ALL_POSTS,
    posts: response.data
  }))
} 
 


export {getAllPosts}
