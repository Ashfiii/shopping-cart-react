import React, {useState, useEffect} from 'react';
import './Home.css';
import Product from '../Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getJsonData } from './../../action';


function Home({term, filteredData}) {

    const [selectedCategory, setSelectedCategory] = useState('');

    const dispatch = useDispatch();

    const data= useSelector(
      (state) => state.jsonInfo.jsonData[0]
      );    

    useEffect( () => {
      dispatch(getJsonData());
    }, [dispatch]);

    const filterDropdown = data?.filter(result =>{
      return result.group.category === selectedCategory;       
  }); 

  const searchData = term.length<1 ? data:filteredData
  
    return (
      <div className="wrapper">
        <div className="dropdown">
          <select
            value={selectedCategory}
            onChange={(e)=>{setSelectedCategory(e.target.value)}}
          >
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Mobiles</option>
          </select>
        </div>

        <div className="home">
            <div className="home__row">
                {
                filterDropdown?.length>0 ?  
                filterDropdown?.map(selectedCategory => (
                    <Product 
                    key={selectedCategory.id} 
                    title={selectedCategory.title} 
                    price={selectedCategory.price} 
                    image={selectedCategory.image} 
                    category={selectedCategory.group.category}/>
                ))
                :
                searchData?.map((item)=>
                  <Product 
                  key={item.id} 
                  title={item.title} 
                  price={item.price} 
                  image={item.image} 
                  category={item.group.category}/>
                )} 
            </div>
        </div>
      </div>
    )
}

export default Home;




    