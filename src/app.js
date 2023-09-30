// react library
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

// miens components

// Pages
import HomePage from "./pages/HomePage/Home"; // if here error not focus it
import ErrorPage from "./pages/Error/errorPage";
import LogIn from "./pages/LogInPage/LogIn";
import { Footer } from "./Component/Uitily/Footer";
import NavBarSite from "./Component/Uitily/navBar";
import { SignUpPage } from "./pages/LogInPage/SignUpPage";
import { AllCategory } from "./pages/AllCategory/AllCategory";
import { BrandPage } from "./pages/BrandPage/BrandPage";
import { MakeNeer } from "./Component/Error/MakeNeer";
import ShopProductsPage from "./pages/Products/ShopProductsPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import ShopingCart from "./pages/ShopingCart/ShopingCart";
import TypePayPage from "./pages/TypePayPage/TypePayPage";
const App = () => {

   
    return (   
        <div className='con'>
            
            <BrowserRouter>
                <NavBarSite/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/signIn" element={<LogIn/>}/>
                    <Route path="/signUp" element={<SignUpPage/>}/>
                    <Route path="/allCategory" element={<AllCategory/>}/>
                    <Route path="/allBrands" element={<BrandPage/>}/>
                    <Route path="/products" element={<ShopProductsPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<ShopingCart />} />
                    <Route path="/cart/typeBay" element={<TypePayPage />} />
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/FuturePage" element={<MakeNeer/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;