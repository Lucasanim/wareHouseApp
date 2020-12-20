import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-uuid'

const SaveAsyncStorage = async(getState) => {
    const a = getState()
    const products = a.Products
    
    console.log('prod:', products)

    try {
        await AsyncStorage.setItem('producs', JSON.stringify(products))
    } catch (e) {
        alert(e)
    }
}

export const AddProduct = (title, description, quantity, callback) => async(dispatch, getState) => {
    console.log('title: ', title)

    let id = uuid()

    dispatch({type:'ADD', payload:{title, description, quantity, id}})

    SaveAsyncStorage(getState)

    if(callback){
        callback()
    }
}

export const FetchProducts = () => async(dispatch, getState) => {


    try {
        const products = await AsyncStorage.getItem('producs')
        const newProducts = JSON.parse(products)

        console.log('NP: ', newProducts)

        if (newProducts){
            dispatch({type:'FETCH_PRODUCTS', payload:newProducts})
        } 

    } catch (e) {
        alert(e)
    }

}

export const UpdateProduct = (title, description, quantity, callback, id) => async(dispatch, getState) => {

    dispatch({type:'UPDATE_PRODUCT', payload:{title, description, quantity, id}})

    SaveAsyncStorage(getState)

    if(callback){
        callback()
    }

}

export const DeleteProduct = (id, callback) => async (dispatch, getState) => {
    dispatch({type:'DELETE_PRODUCT', payload:id})

    SaveAsyncStorage(getState)

    if(callback) callback()

}