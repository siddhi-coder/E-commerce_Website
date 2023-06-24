import './App.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function App() {
  return (
    <div className="App">
      <div className="header_logo"></div>

      <div className="header_search"></div>

      <div className="header_nav">

        <div className="nav_item">

          <span className="item_LineOne">Hello Guest</span>
          <span className="item_LineTwo">Sign In</span>

        </div>

        <div className="nav_item">

          <span className="item_LineOne">Your</span>
          <span className="item_LineTwo">Shop</span>
        </div>

        <div className="nav_item">
          <ShoppingBasketIcon fontSize="large"/>
          <span className="item_LineTwo">0</span>
        </div>

      </div>
    </div>

  );
}

export default App;
