export const initialState = {
    cartData : [],
    jsonData: ''
}    

const cartReducers = (state=initialState, action) =>{
    switch (action.type){

        case 'ADD_TO_CART':
            return {
                ...state,
                cartData: [...state.cartData , action.item] 
            }
        case 'REMOVE_FROM_CART':
            const index = state.cartData.findIndex((cartItem)=> cartItem.id === action.id);
            let newCart = [...state.cartData];
    
            if(index>=0){
                newCart.splice(index, 1);
            }else{
                console.warn(`Cannot remove product as (id: ${action.id}) is not in cartData`)
            }
    
            return{
                ...state,
                cartData: newCart
            }
        
        default :
            return state;
    }
}

const jsonDataReducers = (state=initialState, action) =>{
    switch (action.type){
        case 'ADD_DATA':
            return{
                ...state,
                jsonData: [...state.jsonData , action.data]
            }
        
        default :
            return state;
    }
}

export {cartReducers, jsonDataReducers};