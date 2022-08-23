import { faker } from '@faker-js/faker';

var database = { products: [] };

for (let ii=0; ii < 30; ii++) {
  let _quantity = faker.random.numeric()
  database.products.push({
    id: ii,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    imageUrl: 'https://picsum.photos/400?random=' + ii,
    quantity: _quantity,
    inventoryStatus: _quantity === 0? "SIN STOCK" : (_quantity >3 ? "EN STOCK" : "BAJO STOCK")
  });
}

console.log(JSON.stringify(database));
