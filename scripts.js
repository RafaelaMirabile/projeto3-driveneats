
let mainItem
let mainFoodPrice
let beverageItem
let beveragePrice
let dessertItem
let dessertPrice
let name
let address
let bPrice
let fPrice
let dPrice
let total
let t
let tt
let ttt
let foodName  
let beverageName 
let dessertName 

function selectedMainCourse(greenFood){
   let greenBorderFood = document.querySelector(".foodOptions .selectedItem" );
    if (greenBorderFood !== null){
        greenBorderFood.classList.remove('selectedItem');
    }
    greenFood.classList.add("selectedItem");
     mainFoodPrice = document.querySelector(".foodOptions .selectedItem .price").innerHTML; 
     fPrice = parseFloat(mainFoodPrice.replace(',', '.'));
     mainItem = "greenFood"
     console.log( typeof(fPrice))

     selectedButton();
}

function selectedBeverage(greenBeverage){
    let greenBorderBeverage = document.querySelector(".beverageOptions .selectedItem")
    if(greenBorderBeverage !== null){
        greenBorderBeverage.classList.remove("selectedItem");
    }
    greenBeverage.classList.add("selectedItem");
    beveragePrice = document.querySelector(".beverageOptions .selectedItem .price").innerHTML;
    bPrice =parseFloat(beveragePrice. replace(',', '.'));
    beverageItem = "greenBeverage"
    console.log(typeof(bPrice))
    
    selectedButton();
}

function selectedDessert(greenDessert){
    let greenBorderDessert = document.querySelector(".dessertOptions .selectedItem")
    if(greenBorderDessert !== null){
        greenBorderDessert.classList.remove("selectedItem")
    }
    greenDessert.classList.add("selectedItem");
    dessertPrice = document.querySelector(".dessertOptions .selectedItem .price").innerHTML;
    dPrice =parseFloat(dessertPrice. replace(',', '.'));
    dessertItem = "greenDessert"
    console.log(typeof(dPrice));
    
    selectedButton();
}

function selectedButton(){
    let greenButton = document.querySelector(".orderButton");
    if(mainItem !== undefined && dessertItem !== undefined && beverageItem !== undefined){
        greenButton.classList.add("greenBackground")
        greenButton.innerHTML ='Fechar pedido';
    }
}

function sendOrder(){
    total = dPrice+ fPrice +bPrice;
    t = total.toFixed(2);
    tt = t.toString();
    ttt = tt.replace("." , ",");
    foodName = document.querySelector(".foodOptions .selectedItem h3").innerHTML;
    beverageName =document.querySelector(".beverageOptions .selectedItem h3").innerHTML;
    dessertName = document.querySelector(".dessertOptions .selectedItem h3").innerHTML;

    let sOrder = document.querySelector(".confirmOrder");
    sOrder.classList.add('confirmOrderInline');
    sOrder.innerHTML=`<h6>Confirme seu Pedido</h6>
    <div class="orders">
        <div><div>${foodName}</div>${mainFoodPrice}</div>
        <div> ${beverageName}<div>${beveragePrice}</div></div>
        <div>${dessertName}<div>${dessertPrice}</div></div>
        <div>Total<div>${ttt}</div></div>
    </div>
    <div class="verify"><button onclick="sendMessage()">Tudo certo, pode pedir!</button></div>
    <div class="cancel">Cancelar</div>`
}




