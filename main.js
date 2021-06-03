function products(product){

    let fruit=[]
    let vegetables=[]
    if (product=="mango"){
        fruit.push(product)
        return fruit;
     
    }else{
        vegetables.push(product)
        return vegetables;
    }
    
    }
   console.log(products("mango"))


class Food{
    constructor(){
        this.fruits=[];
        this.vegetables=[]
    }
    addFruit(product1){
    if (product1=="mango"){
    return this.fruits.push(product1)
}
    
}
    addVegetable(product2){
        if (product2=="potato"){
            return this.vegetables.push(product2)
        }
    }
}
let fruit=new Food();
let vegetable=new Food();
vegetable.addVegetable("potato")
fruit.addFruit("mango")
console.log(fruit.fruits)
console.log(vegetable.vegetables)
          







    
    
    

