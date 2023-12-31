//create an object labeled customer and add the following key:value pairs:

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false 
};

console.log(customer)

//Modify the following properties in the customer object using bracket notation: 

customer["email"] =  "Jak3Smith1992@email.com";
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
console.log(customer)

//Delete the following properties in the customer object using the delete keyword.

// delete customer["zipCode"];
// delete customer["favoriteStore"];

delete customer.zipCode;
delete customer.favoriteStore;

console.log(customer)


// Add the following key:values to the customer object using dot notation:

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(customer)



//In an array, print the keys in your survey

const keys = Object.keys(customer)
console.log(keys)



