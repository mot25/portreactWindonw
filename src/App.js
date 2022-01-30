import React from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Main from "./componets/Main";
import { ShopProvider } from "./Context.js";

export default function App() {
  return (
    <>
      <ShopProvider>

        <Header />
        <Main />
        <Footer />
      </ShopProvider>
      
    </>
  );
}
