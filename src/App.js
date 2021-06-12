import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import Order from './components/Order';
import { useSelector } from 'react-redux';

function App() {

  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredData, setFilteredData] = useState([]);

  const data= useSelector(
    (state) => state.jsonInfo.jsonData[0]
    );

  const searchHandler = (searchTerm)=>{
    setSearchTerm(searchTerm);
    if(searchTerm!==""){
      const filteredList = data?.filter(item =>{
          return item.title.toLowerCase().includes(searchTerm.toLowerCase());
      })
      setFilteredData(filteredList)
    }else{
      setFilteredData(data)
    }
  }

  return (
    <div className="app">
        <Router>
          <Header term={searchTerm} searchKeyword={searchHandler}/>
            <Switch>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/orderconfirm">
                <Order />
              </Route>
              <Route exact path="/">
                <Home term={searchTerm} filteredData={filteredData}/>
              </Route>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
