let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");


let basket = JSON.parse(localStorage.getItem("data")) || [];
let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        
    let {id,item}=x;
    let search = shopItemsData.find((y)=>y.id==id) || [];
    let {img,name,price}=search
      return `<div class="cart-item"><img src=${img} width="100" >
                <div class="detiails">
      
                <div class="title-price-x">
                    <h4 class ="title-price">
                    <p>${name}</p>
                    <p class="cart-item-price">$ ${price}</p>
                    </h4>
          <i class="bi bi-x-lg" onclick="removeItem(${id})"></i>
      </div>
      <div class="buttons">
          <i onclick="decreament(${id})" class="bi bi-dash"></i>
          <div id=${id} class="quantity1">${item}</div>
          <i onclick="increament(${id})" class="bi bi-plus-lg"></i>
      </div>  
      <br>    
     <h3 style="margin-left:10px">$ ${item* search.price}</h3>
      </div>
      </div>`}).join(""))
      

}else{
  ShoppingCart.innerHTML="";
  label.innerHTML=`<h2>Your cart is Empty</h2>
  <a href="main.html" > <button class= "Homebtn"> Back to home</button></a>`
}
};

generateCartItems();
let increament=(id)=>{
  let selectedItem=id;
  let search=basket.find((x)=> x.id===selectedItem.id)
  if (search===undefined){
  basket.push({id:selectedItem.id,item:1});
 
}
  else{
      search.item+=1
  }
  // console.log(basket)
  
  update(selectedItem.id)
  generateCartItems();
  localStorage.setItem("data",JSON.stringify(basket))
}
let decreament=(id)=>{
  let selectedItem=id;
  let search=basket.find((x)=> x.id===selectedItem.id)
  if (search===undefined) {return}
  else if (search.item===0){
return}    else{
      search.item-=1
  }
  generateCartItems()
  update(selectedItem.id);
  basket=basket.filter((x)=>x.item!==0)
  

  generateCartItems()
  localStorage.setItem("data",JSON.stringify(basket))

}
let update=(id)=>{
  let search=basket.find((x)=>x.id===id)
 document.getElementById(id).innerHTML=search.item
 calculation()
 totalAmount()
}
let removeItem=(id)=>{
  let selectedItem=id
  basket = basket.filter((x)=> x.id !== selectedItem.id)
  localStorage.setItem("data",JSON.stringify(basket))
  totalAmount()
  calculation()
  generateCartItems()
}
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
let clearcart=()=>{
  
  let basket=[]
  // generateCartItems();
  localStorage.setItem("data",JSON.stringify(basket))
  
  generateCartItems()
  calculation()
  history.go() /** use this if generateCartItems not works after clear  */

}
let totalAmount = ()=>{

  if(basket.length!==0){
    let amount = basket.map((x)=>{
    let {item,id} =x;
    let search = shopItemsData.find((y)=>y.id==id) || [];
    return item*search.price

    }).reduce((x,y)=> x+y)
    label.innerHTML=`
    <h2>Total  Bill :$ ${amount}</h2>
    <button class="checkOut" id="checkout" >Checkout</button>
    <button class="clearCart" onclick="clearcart()" >clear cart</button>



    `
  }
  else {
    return
  }
}
totalAmount()

document.getElementById('checkout').addEventListener('click', function() {
  // Define the size and properties of the popup window
  var popupWidth = 300;
  var popupHeight = 200;
  var leftPosition = (window.innerWidth - popupWidth) / 2;
  var topPosition = (window.innerHeight - popupHeight) / 2;

  // Open a new popup window with specific dimensions
  window.open('about: checkout.html', 'PopupWindow', 'width=' + popupWidth + ', height=' + popupHeight + ', left=' + leftPosition + ', top=' + topPosition);
});


