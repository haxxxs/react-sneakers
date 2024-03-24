import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorieItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://65fe0163b2a18489b385b2ac.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://65fe0163b2a18489b385b2ac.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToFavorite = (obj) => {
    setFavoriteItems((prev) => [...prev,obj])
  }

  const onAddToCart = (obj) => {
    axios.post("https://65fe0163b2a18489b385b2ac.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev.filter(item => item.obj === obj), obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65fe0163b2a18489b385b2ac.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onChacheSeatchInput = (event) => {
    setSearchValue(event.target.value);
  };

  console.log(favorieItems);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer onRemove = {onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/imgs/search.svg" alt="Search"></img>
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/imgs/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChacheSeatchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
