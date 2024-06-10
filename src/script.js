let shop = document.getElementById("shop")
let basket=JSON.parse(localStorage.getItem("data"))||[]

let generateShop=()=>{
    return shop.innerHTML=shopItemsData.map((x)=>{
        let {id,name,price,desc,img}=x;
        let search=basket.find((x)=>x.id===id) || []
        return `<div class="item" id=product-id-${id}>
    <img src=${img} alt="" width="200" onclick="showimage(${id}))" >
    <div class="details">
        <h2>${name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <div class="price-quantity">
    <h2>$ ${price}</h2>
    <div class="buttons">
    <div id=${id} class="quantity"></div>
    <button onclick="increament(${id})" class="addtocart" onclick="success(${id})">Add to cart <span class="bi bi-bag"></span</button>
    </div>
    </div>        </div>
    </div>`}).join("")
}
generateShop()
let increament=(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=> x.id===selectedItem.id)
    if (search===undefined){
    basket.push({id:selectedItem.id,item:1});
   
}
    else if (search.item==1){
        return 

    }
    else{
        search.item+=1
    }
    // console.log(basket)
    
    update(selectedItem.id)
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
    // console.log(basket)
    update(selectedItem.id);
    basket=basket.filter((x)=>x.item!==0)
    
   
    localStorage.setItem("data",JSON.stringify(basket))

}
let update=(id)=>{
    let search=basket.find((x)=>x.id===id)
   document.getElementById(id).innerHTML=search.item
   calculation()
}
let calculation=()=>{
    let cartIcon=document.getElementById("cartAmount")
  cartIcon.innerHTML=  basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
 calculation()
 

function logout() {
    
window.close()
open("login.html")
  }

let success=(id)=>{
    console.log(id)
}
