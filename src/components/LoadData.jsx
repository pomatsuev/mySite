import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  isLoading: false,
  data: null,
  error: null,  
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {...state, isLoading: true};
    case 'error':
      return {...state, error: action.payload, isLoading: false}
    case 'success':
      return { isLoading: false, data: action.payload, error: null }
    default:
      throw new Error();
  }
}

export const LoadData = ({url, children}) =>{
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    dispatch({type: 'loading'});
    axios.get(url,{ timeout: 10000 })
      .then(res=>{        
        if(res.status==200){
          dispatch({type: 'success', payload: res.data}); 
        } else {
          dispatch({type: 'error', payload: res.statusText})
        }               
      })
      .catch(err=>{
        dispatch({type: 'error', payload: err});
      })
  }, []);
  if(typeof children == 'function'){
    return children(state.isLoading, state.error, state.data);
  } else {
    return children;
  }
}