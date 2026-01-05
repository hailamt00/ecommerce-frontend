import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

function Home() {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart([...cart, product]);
    }

    return (
        <div className="container">
            <h1>🛒 E-commerce Store</h1>

            <div className="layout">
                <div className="products">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>

                <Cart cart={cart} />
            </div>
        </div>
    );
}

export default Home;
