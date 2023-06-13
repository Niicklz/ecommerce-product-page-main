const cartList = document.getElementById("cartList");
const numberOfProducts = document.getElementById("numberOfProducts");
const quantityProducts = document.getElementById("quantity");
let totalProducts = Number(quantityProducts.textContent);
let totalItems = 0;
console.log(totalProducts);

function toggleShopCartList() {
  cartList.classList.toggle("inactive");
}

function addition() {
  totalProducts++;
  quantityProducts.textContent = totalProducts;
  console.log(totalProducts);
}

function substraction() {
  if (totalProducts <= 0) {
    quantityProducts.textContent = totalProducts;
    console.log(totalProducts);
    return;
  }
  totalProducts--;
  quantityProducts.textContent = totalProducts;
  console.log(totalProducts);
}

function addProductsToCart() {
    console.log(totalProducts);
    if(totalProducts > 0){
        numberOfProducts.classList.remove("inactive");

  const itemList = document.getElementById("itemList");
  document.getElementById("emptyMsg").classList.add("inactive");

  itemList.innerHTML += createItemElement(totalProducts);
  totalItems++;
  numberOfProducts.textContent = totalItems;

  document.getElementById("checkout").classList.remove("inactive");
    }
  
}

function deleteItem() {
  totalItems--;
  numberOfProducts.textContent = totalItems;
  document.querySelector(".item").remove();
  console.log(document.querySelectorAll("#item").length);
  if (totalItems === 0) {
    document.getElementById("emptyMsg").classList.remove("inactive");
    numberOfProducts.classList.add("inactive");
    document.getElementById("checkout").classList.add("inactive");

  }
}
