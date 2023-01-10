import React, { Fragment } from 'react';
import picture from './Logo.png';
// Carousel  imports
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Images for carousel
import image1 from './Beauty.png';
import image2 from './Comp.png';
import image3 from './CURRENCY.png';
import image4 from './Sofa.png';
import image5 from './Boxes.png';
import image6 from './Toys.png'
// Importing images for Products
import Dress from './Dress.png'
import Gym from './Gym2.png'
import White from './White.png';
import Bear from './Bear.png';
import Tape from './Tape.png'
//Amazon boxes
import Boxes from './Blue.png';
// Gaming Products
import chair from './G-chair.png';
import mouse from './G-Mouse.png';
import Keyboard from './G-keyboard.png';
import HS from './G-headphones.png'
//Electronics
import Electronics from './Electronics.png'
//Shop by Category
import PL from './P-Laptop.png';
import VG from './Video-games.png'
// Baby
import Baby from './Baby.png';
// Toys
import cToys from './Toys3.png'
// Navbar
import picture2 from './Search.png';
import picture3 from './Deliver.png';
import './App.css';

function App() {
  return (
    <Fragment>

      <nav className="navbar">
        <img src={picture} alt="Company logo" className="Logo-nav" />
      </nav>
      {/* Search bar */}
      <div className="search-bar">
        <form className="search-form">
          <input type="text" />
          {/* Dropdown of search bar */}
          <select className="dropdown">
            <option value="option1">All</option>
            <option value="option2">All Departments</option>
            <option value="option3">Arts & Crafts</option>
            <option value="option3">Automative</option>
            <option value="option3">Baby</option>
            <option value="option3">Beauty & Personal Care</option>
            <option value="option3">Books</option>
            <option value="option3">Boys' Fashion</option>
            <option value="option3">Computers</option>
            <option value="option3">Deals</option>
            <option value="option3">Digital Music</option>
            <option value="option3">Electronics</option>
            <option value="option3">Girls' Fashion</option>
            <option value="option3">Health & Household</option>
            <option value="option3">Home & Kitchen</option>
            <option value="option3">Industrial & Scientific</option>
            <option value="option3">Kindle Store</option>
            <option value="option3">Luggage</option>
            <option value="option3">Men's Fashion</option>
            <option value="option3">Movies & TV</option>
            <option value="option3">Music, CDs & Vinyl</option>
            <option value="option3">Pet Supplies</option>
            <option value="option3">Prime Video</option>
            <option value="option3">Software</option>
            <option value="option3">Sports & Outdoors</option>
            <option value="option3">Tools & Home Improvement</option>
            <option value="option3">Toys & Games</option>
            <option value="option3">Video Games</option>
            <option value="option3">Women's Fashion</option>
          </select>
          <img src={picture3} className="Deliver" alt="deliver" width="80px" height="60px" />
          <img className="Search" src={picture2} alt="search" width="40px" height="38px" />


        </form>
        {/* Carousel */}

        <Carousel className='Carousel'
          additionalTransform={0}
          autoplaySpeed={3000}
          centerMode={false}
          draggable
          arrows
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 1024,
                min: 480,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 768,
              },
              items: 1,
            },
          }}
          sliderClass=""
          slidesToSlide={1}
          swipeable

        >
          <img src={image1}
            style={{
              display: "block",
              height: "30rem",
              margin: "auto",
              width: "100%",
              objectFit: "fill",
            }}
            alt=""
          />
          <img src={image2}
            style={{
              display: "block",
              height: "30rem",
              margin: "auto",
              width: "100%",
              objectFit: "fill",
            }}
            alt=""
          />
          <img src={image3}
            style={{
              display: "block",
              height: "30rem",
              margin: "auto",
              width: "100%",
              objectFit: "fill",
            }}
            alt=""
          />
          <img src={image4}
            style={{
              display: "block",
              height: "30rem",
              margin: "auto",
              width: "100%",
              objectFit: "fill",
            }}
            alt=""
          />
          <img src={image5}
            style={{
              display: "block",
              height: "30rem",
              margin: "auto",
              width: "100%",
              objectFit: "fill",
            }}
            alt=""
          />
          <img src={image6}
            style={{
              display: "block",
              height: "30rem",
              margin: "auto",
              width: "100%",
              objectFit: "fill",
            }}
            alt=""
          />
        </Carousel>
        {/* Products */}
        {/* White */}
        <div>
          <div className="product-wrap">
            <div className="product">
              <img src={White} alt="" width="330px" height="420px" />
            </div>
            <div className="product1">
              <img src={White} alt="" width="330px" height="420px" />
            </div>
            <div className="product2">
              <img src={White} alt="" width="330px" height="420px" />
            </div>

          </div>
        </div>
        {/* Dress */}
        <div className="dress">
          <img src={Dress} alt="" width="280px" height="330px" />
        </div>
        {/* Dress Text */}
        <div className="dress-txt">
          <h3>Dresses</h3>
        </div>
        {/* Gym */}
        <div className="Gym-g">
          <img src={Gym} alt="" width="280px" height="330px" />
        </div>
        {/* Gym Text */}
        <div className="gym-txt">
          <h3>Get fit at home</h3>
        </div>
        {/* Bear */}
        <div className="bear">
          <img src={Bear} alt="" width="280px" height="330px" />
        </div>
        <div className="bear-txt">
          <h3>Health & Personal Care</h3>
        </div>

        <div className="Sign-in">
          <img src={White} alt="" width="270px" height="150px" />
        </div>
        <div className="signIn-txt">
          <h3>Sign in for the best </h3>
        </div>
        <div className="signIn-txt2">
          <h3>experience</h3>
        </div>
        <button className="signIn-btn">
          Sign in securely
        </button>
      </div>
      <div className="boxes">
        <img src={Boxes} alt="" width="280px" height="250px" />
      </div>
      {/* 2nd row of Products */}

      <div className="Easy">
        <img src={White} alt="" width="330px" height="400px" />
      </div>
      {/* Tape */}
      <div className="Tape">
        <img src={Tape} alt="" width="280px" height="320px" />
      </div>
      <div className="Tape-txt">
        <h3>Easy returns</h3>
      </div>
      {/* Gaming-Box */}
      <div className="gaming-b">
        <img src={White} alt="" width="330px" height="400px" />
      </div>
      {/* Gaming Acessories */}
      <div className="g-main-txt">
        <h3>Gaming Acessories</h3>
      </div>
      {/* Img of Headphones */}
      <div className="HS">
        <img src={HS} alt="" width="130px" height="120px" />
      </div>
      {/* Txt for Headsets */}
      <div className="HS-txt">
        Headsets
      </div>
      {/* Img for Keyboard */}
    <div className="k-b">
      <img src={Keyboard} alt="" width="130px" height="120px" />
    </div>
    {/* Text for Keyboard */}
    <div className="k-b-txt">
      Keyboards
    </div>
    {/* Mouse image */}
    <div className="mouse">
      <img src={mouse} alt=""width="130px" height="120px"  />
    </div>
    {/* Text for mouse */}
    <div className="mouse-txt">
      Computer Mice
    </div>
    {/* ImG for Chair */}
    <div className="Chair">
      <img src={chair} alt="" width="130px" height="120px"/>
    </div>
    {/* Text for chair */}
    <div className="Chair-txt">
      Chairs
    </div>
    {/* White for Electronics */}
    <div className="W-electronics">
      <img src={White} alt="" width="330px" height="400px"/>
    </div>
    {/* Image for Electronics */}
    <div className="Electronics">
      <img src={Electronics} alt="" width="280px" height="300px" />
    </div>
    {/* Text for Electronics*/}
    <div className="E-txt">
      <h3>Electronics</h3>
    </div>
    {/* W-Shop */}
    <div className="W-shop">
      <img src={White} alt=""width="282px" height="400px" />
    </div>
    {/* Shop by Category */}
    <div className="S-b-c">
      <h3>Shop by Category </h3>
    </div>
    {/* Black Laptop */}
    <div className="PL">
      <img src={PL} alt="" width="130px" height="120px" />
    </div>
    {/* Text for laptop */}
    <div className="PL-txt">
      Computers & 
    </div>
    <div className="PL-txt2">
      Accessories
    </div>
    {/* Video games */}
    <div className="VG">
      <img src={VG} alt="" width="90px" height="80px" />
    </div>
    {/* Text Vg */}
    <div className="VG-txt">
     Video Games
    </div>
    {/* Baby */}
    <div className="baby">
      <img src={Baby} alt="" width="110px" height="100px" />
    </div>
    {/* Baby text */}
    <div className="baby-txt">
      Baby
    </div>
    {/* Toys in Shop bycategory */}
    <div className="Ctoys">
      <img src={cToys} alt=""width="130px" height="140px" />
    </div>
    {/* Ctoys Text */}
    <div className="Ctoys-txt">
      Toys & Games
    </div>
    {/* Horizontal Carosuel */}
      

    </Fragment>
  );
}

  
   



export default App;
