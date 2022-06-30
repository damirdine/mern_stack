import React,{useState,useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../components/CartItem";
let Cart = ({cartItems,deleteFromCart,setCartItems,increaseQuantity,decreaseQuantity}) =>{
    const [pizzaData, setPizzasData] = useState(null);
    function getPrice(item){
        fetch("http://localhost:8080/pizzas")
        .then(response => {
            if(response.ok){
                return response.json()
            }
        })
        .then(data => {setPizzasData(data)})
        .catch(err => {console.log(err,"WE CATCH AN ERROR")})

        console.log(pizzaData)
    }
    
    return(
        <Container>
            <h2>Panier</h2>
            {cartItems.length === 0 && (
                <h3 gap={3} className="text-center">
                    Panier vide
                </h3>
            )}
            <Container>
                {cartItems.map((item) => (
                    <CartItem item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} deleteFromCart={deleteFromCart}/>
                ))}
            </Container>
            <h3>Total : {cartItems.length} €</h3>
        </Container>
    )
}
export default Cart