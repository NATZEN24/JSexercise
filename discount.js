// Task 1:
// Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with:
// the new property - discount and the corresponding value (7% or 10%) and the new price.
let product = {
  name: "headphones",
  price: 100,
  discount: 0,
};
if (product.price > 100){
    product.discount = 10;
    product.price = product.price - product.price * 0.1;
}else{
    product.discount = 7;
    product.price = product.price - product.price * 0.07;
}
console.log(product);

// Task 2:
// Use the given object and loop through its properties and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount).
// Check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.
let prod = {
  name: "headphones",
  price: 83.7,
  discount: "7%",
};
for (let key in prod){
    key === "discount"; 
}
console.log(`Already discounted by ${prod.discount}”`)

if (prod.price > 100) {

    prod.discount = "10%";
    prod.price = math.floor(prod.price - prod.price * 0.1); 
} else {
    prod.discount = "7%";
    prod.price = Math.floor(prod.price - prod.price * 0.07); 
}

console.log(prod);

