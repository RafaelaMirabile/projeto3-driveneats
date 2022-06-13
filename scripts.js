let mainItem
let mainFoodPrice
let beverageItem
let beveragePrice
let dessertItem
let dessertPrice
let user
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
let sOrder
let trans

function selectedMainCourse(greenFood){
   let greenBorderFood = document.querySelector(".selectedItem");

    if (greenBorderFood !== null){
        greenBorderFood.classList.remove("selectedItem");
    }

    greenFood.classList.add("selectedItem");

    
    mainFoodPrice = document.querySelector(".foodOptions .selectedItem .price").innerHTML; 
    fPrice = parseFloat(mainFoodPrice.replace(',', '.'));
    mainItem = "greenFood"

     selectedButton();
}

function selectedBeverage(greenBeverage){
    let greenBorderBeverage = document.querySelector(".beverageOptions .selectedItem");
    let greenCheck = document.querySelector(".beverageOptions ion-icon");
    if(greenBorderBeverage !== null && greenCheck !== null){
        greenBorderBeverage.classList.remove("selectedItem");
        greenCheck.classList.remove("checkGreen");

    }
    greenBeverage.classList.add("selectedItem");
    greenCheck.classList.add("checkGreen");
    beveragePrice = document.querySelector(".beverageOptions .selectedItem .price").innerHTML;
    bPrice =parseFloat(beveragePrice. replace(',', '.'));
    beverageItem = "greenBeverage"
    
    selectedButton();
}

function selectedDessert(greenDessert){
    let greenBorderDessert = document.querySelector(".dessertOptions .selectedItem");
    let greenCheck = document.querySelector(" .dessertOptions ion-icon");
    if(greenBorderDessert !== null && greenCheck !== null){
        greenBorderDessert.classList.remove("selectedItem");
        greenCheck.classList.remove("checkGreen");

    }
    greenDessert.classList.add("selectedItem");
    greenCheck.classList.add("checkGreen");
    dessertPrice = document.querySelector(".dessertOptions .selectedItem .price").innerHTML;
    dPrice =parseFloat(dessertPrice. replace(',', '.'));
    dessertItem = "greenDessert"
    
    selectedButton();
}

function selectedButton(){
    let greenButton = document.querySelector(".orderButton");
    if(mainItem !== undefined && dessertItem !== undefined && beverageItem !== undefined){
        greenButton.classList.add("greenBackground");
        greenButton.innerHTML ='Fechar pedido';
    }
}

function sendOrder(){
    user = prompt("Qual teu nome?");
    address = prompt("Qual teu endereço?");
    total = dPrice+ fPrice +bPrice;
    t = total.toFixed(2);
    tt = t.toString();
    ttt = tt.replace("." , ",");
    foodName = document.querySelector(".foodOptions .selectedItem h3").innerHTML;
    beverageName =document.querySelector(".beverageOptions .selectedItem h3").innerHTML;
    dessertName = document.querySelector(".dessertOptions .selectedItem h3").innerHTML;
    

    trans = document.querySelectorAll(".transparency");
    trans.classList.add("transparencyLayer");
    
    
    sOrder = document.querySelector(".confirmOrder");
    sOrder.classList.add('confirmOrderInline');
    sOrder.innerHTML=`<h6>Confirme seu Pedido</h6>
    <div class="orders">
        <div><div>${foodName}</div>${mainFoodPrice}</div>
        <div> ${beverageName}<div>${beveragePrice}</div></div>
        <div>${dessertName}<div>${dessertPrice}</div></div>
        <div>Total<div>${ttt}</div></div>
    </div>
    <div class="verify"><button onclick="sendMessage()">Tudo certo, pode pedir!</button></div>
    <div class="cancel" onclick = "cancel()">Cancelar</div>`
}

function sendMessage(){
    const uri= `Ola, gostaria de fazer o pedido:\n
    - Prato: ${foodName}\n
    - Bebida: ${beverageName}\n 
    - Sobremesa: ${dessertName}\n
      Total: R$ ${ttt}\n\n
      Nome: ${user}\n
      Endereço: Rua ${address}\n`
      
      const uriEncoded= encodeURIComponent(uri);
      window.open(`https://wa.me/5541999999999?text=${uriEncoded}`);
}




