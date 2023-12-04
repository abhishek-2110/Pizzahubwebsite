
function addtocart(productName, price) 
{
 
  const cart = document.getElementById("cart-items");
  const listItem = document.createElement("li");
  listItem.textContent = `. ${productName} - $${price.toFixed(2)}`;
  

  cart.appendChild(listItem);
  

  const cartTotal = document.getElementById("cart-total");
  const currentTotal = parseFloat(cartTotal.textContent);
  const newTotal = currentTotal + price;
  cartTotal.textContent = newTotal.toFixed(2);
}


function checkout() {

  alert("Thank you for shopping with us!");
}
