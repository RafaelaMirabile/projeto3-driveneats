let mainItem
let mainFoodPrice
let beverageItem
let beveragePrice
let dessertItem
let dessertPrice

function selectedMainCourse(greenFood){
   let greenBorderFood = document.querySelector(".foodOptions .selectedItem" );
    if (greenBorderFood !== null){
        greenBorderFood.classList.remove('selectedItem');
    }
    greenFood.classList.add("selectedItem");
     mainItem = "greenFood";
     const mainFoodPrice = document.querySelector(".foodOptions .selectedItem .price").innerHTML;
     console.log(greenFood)
     console.log(mainFoodPrice)
}

function selectedBeverage(greenBeverage){
    let greenBorderBeverage = document.querySelector(".beverageOptions .selectedItem")
    if(greenBorderBeverage !== null){
        greenBorderBeverage.classList.remove("selectedItem")
    }
    greenBeverage.classList.add("selectedItem");
    beveragePrice = document.querySelector(".beverageOptions .selectedItem .price").innerHTML;
    beverageItem = "greenBeverage"
    console.log(greenBeverage)
    console.log(beveragePrice)
}

function selectedDessert(greenDessert){
    let greenBorderDessert = document.querySelector(".dessertOptions .selectedItem")
    if(greenBorderDessert !== null){
        greenBorderDessert.classList.remove("selectedItem")
    }
    greenDessert.classList.add("selectedItem");
    dessertPrice = document.querySelector(".dessertOptions .selectedItem .price").innerHTML;
    dessertItem = "greenDessert"
    console.log(greenDessert)
    console.log(dessertPrice)
}



