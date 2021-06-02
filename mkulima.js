class Mkulima{
    constructor (farm,grocery_vendors,product,order){
        this.farm=[]
        this.grocery_vendors=[]
        this.products=[]
        this.order=[]

    }
    addFarm(farmId,farmName,farmerName,phone_number,address,){
        let shamba={
            farmId:farmId,
            farmName:farmName,
            farmerName:farmerName,
            phone_number:phone_number,
            address:address,
        }
        this.farm.push(shamba)
        return this.farm
       }

removeFarm(farmId){
    let newFarm=this.farm.find(newFarm=>newFarm.farmId==farmId)
    return delete this.farm[newFarm]
} 
UpdateFarm(farmId,farmName,farmerName,phone_number,address){
    let bFarm=this.farm.find(bFarm=>bFarm.farmId==farmId)
     bFarm={
        farmId:farmId,
        farmName:farmName,
        farmerName:farmerName,
        phone_number:phone_number,
        address:address,

     }
     return bFarm
}
getFarm(farmId){
    let afarm=this.farm.find(afarm=>afarm.farmId==farmId)
    return afarm
}
addProduct(productId,name,price){
    var x={
        productId:productId,
        name:name,
        price:price
    }
    this.products.push(x)
    return this.products
}

removeproductId(productId){
    let remove=this.products.find(remove=>remove.productId==productId)
    return delete this.products[remove]

}
updateProduct(productId,name,price){
    let update=this.products.find(update =>update.productId==productId)
    update={
        productId:productId,
        name:name,
        price:price
    }
    return update
}
getProduct(productId){
let newProduct=this.products.find(newProduct=>newProduct.productId==productId) 
return newProduct
}
printProduct(){
    for (let items of this.products){
        console.log(items.name+" "+ items.price)
    }
}
calculateOrderCost(productId,quantity){
    let cost=this.products.find(cost=>cost.productId==productId)
    return cost.price*quantity
}


}
let mkulima=new Mkulima([],[],[]);
console.log(mkulima.addFarm("5567","Misiri","Olga","0789564321","Soroti"));
console.log(mkulima.addFarm("6677","Gori","Esther","0786543456","katakwii"));
console.log(mkulima.addFarm("8899","Wunga","Angella","0753117145","Lira"));

console.log(mkulima.removeFarm(8899));

console.log(mkulima.UpdateFarm("0011","Amisiri","Faith","0772642770","Gulu"));

console.log(mkulima.getFarm(6677));

console.log(mkulima.addProduct(567,"oranges",200));
console.log(mkulima.addProduct(456,"milk",3000));
console.log(mkulima.addProduct(345,"lemon",100));

console.log(mkulima.removeproductId(456));

console.log(mkulima.updateProduct(345,"lemon",200));

console.log(mkulima.getProduct());
(mkulima.printProduct())


console.log(mkulima.calculateOrderCost(345,2))

