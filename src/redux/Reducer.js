
initialState = {
    Products : []
}

export const ProductsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'DELETE_PRODUCT':
            return Object.assign({}, state, {
                Products:[
                    ...state.Products.filter((prod) => prod.id !== action.payload)
                ]
            })
        case 'UPDATE_PRODUCT':
            return Object.assign({}, state, {
                Products: [
                    ...state.Products.map((prod) => {
                        return prod.id === action.payload.id
                        ? action.payload
                        :prod
                    })
                ]
            })
        case 'FETCH_PRODUCTS':
            return Object.assign({}, state, {
                Products: action.payload
                 
            })
        case 'ADD':
            return Object.assign({}, state, {
                Products:[
                    ...state.Products, {
                        title: action.payload.title,
                        description: action.payload.description,
                        quantity: action.payload.quantity,
                        id: action.payload.id,
                    }
                ]
            })
        default:
            return state
    }
}