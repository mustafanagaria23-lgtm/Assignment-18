let products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      varations: [
        {id: 1, color: "black", price: 50000, quantity: 5},
        {id: 2, color: "red", price: 50000, quantity: 1},
        {id: 3, color: "silver", price: 55000, quantity: 8},
      ],
      reviews: [
        { id: 1, user: "Ahmad", rating: 4.0, status: true },
        { id: 2, user: "Zubair", rating: 4.5, status: false },
        { id: 3, user: "Ali", rating: 5.0, status: true }
      ]
    },
    {
      id: 102,
      title: "Mobile",
      varations: [
        {id: 1, color: "black", price: 50000, quantity: 5},
        {id: 2, color: "red", price: 50000, quantity: 2},
        {id: 3, color: "silver", price: 55000, quantity: 8},
      ],
      reviews: [
        { id: 1, user: "Ahmad", rating: 4.0, status: true },
        { id: 2, user: "Zubair", rating: 4.5, status: false },
        { id: 3, user: "Ali", rating: 5.0, status: true }
      ]
    }
  ];  
  

// ------------------------------------------------
// 🟢 Part 1: Single Product Exercises
// ------------------------------------------------

  console.log(products[0].title);
  console.log(products[1].title);

// ------------------------------------------------

  let Product = products[0]
  let TotalQuantity = 0;
  for (let i = 0; i < Product.varations.length; i++) {
    TotalQuantity += Product.varations[i].quantity
  }
  console.log(`Total Quantity: ${TotalQuantity}`);

// ------------------------------------------------

let Product1 = products[1]
let sum = 0;
for (let i = 0; i < Product1.reviews.length; i++) {
    sum += Product1.reviews[i].rating
}
let avg = sum / Product1.reviews.length
console.log(`average (${avg}) = Total rating (${sum}) / Total Reviews (${product.reviews.length})`);

// ------------------------------------------------

count = 0;
for (let j = 0; j < products.length; j++) {
    product = products[j]

    for (let i = 0; i < product.reviews.length; i++) {
        if (product.reviews[i].status) {
        count = count + 1
        }
    }
}
console.log(count);

// ------------------------------------------------

let product = products[0]
let MaxPrice = product.varations[0].price;
for (let i = 0; i < product.varations.length; i++) {
    if ( product.varations[i].price > MaxPrice)
    {MaxPrice = product.varations[i].price}
    }
    console.log(MaxPrice);
    

// ------------------------------------------------
// 🔵 Part 2: Multiple Product Exercises
// ------------------------------------------------

TotalQuantity = 0;
for (let j = 0; j < products.length; j++) {
    let product = products[j];
    Sum = 0;
  for (let i = 0; i < product.varations.length; i++) {
    Sum += product.varations[i].quantity
  }
  TotalQuantity += Sum
}
console.log(TotalQuantity);

// ------------------------------------------------

let SumRating = 0;
for (let j = 0; j < products.length; j++) {
  product = products[j];
  for ( let i = 0; i < product.reviews.length; i++) {
    SumRating += product.reviews[i].rating
  }
  let avg = SumRating / product.reviews.length
  console.log(`product ${product.id} = ${avg} (${product.reviews.length})`);
}

// ------------------------------------------------

let HighestQuantity = 0;
let HighestQuantityProduct = {};


for (let j = 0; j < products.length; j++){
  let product = products[j];
  let sum = 0;
  for (let i = 0; i < product.varations.length; i++) {
    sum += product.varations[i].quantity
  }
  if (sum > HighestQuantity) {
    HighestQuantity = sum;
    HighestQuantityProduct = product;
    }
    console.log(`Highest Stock Product ${product.id} = ${product.title} (${HighestQuantity})`);
  }
  console.log(HighestQuantityProduct);

// ------------------------------------------------
