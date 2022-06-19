import "./App.css";
import React from "react";
import { TestButton } from "./Button/Button.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
// import List from "./List";
// import ListItem from './List/ListItem/ListItem'
/*
Import use state and use effect into the project ✅
Set initial state to an object in the cat array ✅
Fetch Cat Images from API ✅
Set up a use effect function  ✅
Display cat images ✅
When the button is click, it shoul call a function to display a new image ✅
  - how to display a new cat image on click?
Create Button to display cat images ✅
Refactor button into a separate Component ✅
*/

//Overriding CSS styles of TestButton Component
const ModifiedTestButton = styled(TestButton)`
  font-family: "PT Sans", sans-serif;
`;

function App() {
  const [state, setState] = useState();

  async function getCatPhoto() {
    let catArray = "https://api.thecatapi.com/v1/images/search";
    const response = await fetch(catArray);
    const data = await response.json();
    console.log(data[0].url);
    setState(data[0].url);
  }

  useEffect(() => {
    getCatPhoto();
  }, []);

  function handleClick() {
    getCatPhoto();
  }

  return (
    <div>
      <div>
        <div id="navBar">
          <div id="topHalf">
            <div id="logoWrapper">
              <img
                id="logo"
                src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png"
              />
            </div>
            <input type="text" placeholder="Give me all your money" />
          </div>

          <div id="bottomHalf">
            <div id="department">Feline Department</div>
            <div id="sections">
              <div class="section">Your Catazon.com</div>
              <div class="section">Today's Deals</div>
              <div class="section">Kitty Wish List </div>
              <div class="section">Sell</div>
              <div class="section">Help/Meow</div>
            </div>
            <div id="accountStuff">
              <div class="section">Your Catcount</div>
              <div class="section">Try Prime</div>
              <div class="section">Lists</div>
              <div class="section">Cart</div>
            </div>
          </div>
        </div>
        <section className='heading'>
          <h1>404</h1>
          <h2>The requested URL was not found on this server.</h2>
          <h3>Scratch here for instant Dopamine Boost!</h3>
        </section>
        <div className="flex-container">
          <div className="button-container">
            <ModifiedTestButton className="cat-button" onClick={handleClick}>
              Next
            </ModifiedTestButton>
            <TestButton className="save-button" onClick={handleClick}>
              Save
            </TestButton>
          </div>
        </div>
      </div>
      <img className="cat-photo" src={state}></img>
    </div>
  );
}

export default App;
