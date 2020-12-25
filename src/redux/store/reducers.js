import { GET_ALL_POSTS, GET_POST } from "./actions";

 
const postReducer = (state={}, {type, posts})=>{
    switch (type) {
      case GET_ALL_POSTS:
        return {...state, posts:posts}
        break; 
      case GET_POST:
        return {...state, posts:posts}
        break; 
      default:
        return state
        break;
    }
}


export {postReducer}
