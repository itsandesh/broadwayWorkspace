class Product{
    name;
    brand;
    price;
    discount;

    constructor(_name,_brand,_price,_discount){
        this.name= _name;
        this.brand= _brand;
        this.price=_price;
        this.discount=_discount;
    }
    
   after_dis =()=>{
    this.after_discount= this.price - this.price*this.discount/100
    }
}



const prod_obj = new Product("iPhone","apple",200000,10)

prod_obj.after_dis()

console.log(prod_obj);