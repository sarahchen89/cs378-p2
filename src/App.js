import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import MenuItem from './components/MenuItem';
import Subtotal from './components/Subtotal';
import OrderButton from './components/OrderButton';
import ClearButton from './components/ClearButton';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  // menu item counts are stored in an object, key is the id, value is the count of that menu item
  const [itemCounts, setCounts] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  // event handlers for adding and removing menu items
  const increaseCount = (id, price) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    setTotalCost(prev => prev + price);
  };

  const decreaseCount = (id, price) => {
    if (itemCounts[id] > 0) {
      setCounts(prev => ({
        ...prev,
        [id]: prev[id] - 1,
      }));
      setTotalCost(prev => prev - price);
    }
  };

  // event handler for order button alert
  const handleOrder = () => {
    let order = "";

    Object.entries(itemCounts).forEach(([id, count]) => {
      if (count > 0) {
        // find only the items with a count greater than 0
        const menuItem = menuItems.find(item => item.id === parseInt(id));
        // update the order
        order += `${count} ${menuItem.title}\n`;
      }
    });

    // only display order alert if there were ordered items
    if (order) {
      alert(`This page says\n\nOrder placed!\n${order}`)
    } else {
      alert("There are no items in your cart");
    }

  };

  // event handler for clear button
  const handleClear = () => {
    setCounts({});
    setTotalCost(0);
  };



  return (
    <div>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        <div className="row">
          <Title/>
        </div>
        <div className="row"> 
          <div className="col">
            {/* loop through all of the menu items and display them */}
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                title={item.title}
                description={item.description}
                imageName={item.imageName}
                price={item.price} 
                count={itemCounts[item.id] || 0} 
                onIncrease={() => increaseCount(item.id, item.price)} 
                onDecrease={() => decreaseCount(item.id, item.price)} 
              MenuItem/>
            ))}
            <div className="row">
              <div className="col-2"><Subtotal totalCost={totalCost}/></div>
              <div className="col-auto"><OrderButton onOrder={handleOrder}/></div>
              <div className="col-auto"><ClearButton onClear={handleClear}/></div>
            </div>
            
          </div>
        </div>

      </div> {/*end of menu div*/}
    </div>
  );
}

export default App;
