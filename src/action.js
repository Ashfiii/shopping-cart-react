export const getJsonData = () => async (dispatch) => {
   await fetch('product.json')
      .then((response)=>{
        return response.json();
      })
      .then((myJson) =>{
        dispatch({
          type: 'ADD_DATA',
          data: myJson
        })
      }
    ); 
}