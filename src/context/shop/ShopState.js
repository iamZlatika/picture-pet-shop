import React, { useReducer } from 'react';
import ShopContext from './ShopContext';
import ShopReducer from './ShopReducer';
import axios from 'axios';
import {
  GET_IMGS,
  SET_LOADING
} from '../types'

const ShopState = props => {
  const initialState = {
    imgs: [],
    loading: false
  }


  const [state, dispatch] = useReducer(ShopReducer, initialState);

  const loadImages = async type => {
    setLoading();

    const res = await axios
      .get(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${type}}&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`)

    dispatch({
      type: GET_IMGS,
      payload: res.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING })

  return <ShopContext.Provider
    value={{
      imgs: state.imgs,
      loading: state.loading,
      setLoading,
      loadImages
    }}>

    {props.children}
  </ShopContext.Provider>
}

export default ShopState
