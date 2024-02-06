const { db } = require("@vercel/postgres");

const {
  hotSellingProducts,
  products,
} = require("../app/lib/placeholder-data.js");

async function seedHotSellingProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create hotselling product table if not exists
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS hotsellingproducts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NUll,
        price INT NOT NULL,
        description TEXT NOT NULL,
        image_url VARCHAR(255) NOT NULL

    );`;

    console.log("Created hotsellingproducts table.");

    const insertHotSellingProducts = await Promise.all(
      hotSellingProducts.map((hotSellingProduct) => {
        return client.sql`
        INSERT INTO hotsellingproducts (id, name, price , description, image_url)
        VALUES (${hotSellingProduct.id}, ${hotSellingProduct.name}, ${hotSellingProduct.price}, ${hotSellingProduct.description}, ${hotSellingProduct.image_url})
        ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(
      `Seeded ${insertHotSellingProducts.length} hot selling products.`
    );

    return { createTable, hotSellingProducts: insertHotSellingProducts };
  } catch (error) {
    console.log("Error seeding hot selling items", error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create products table if not exists
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NUll,
        price INT NOT NULL,
        description TEXT NOT NULL,
        image_url VARCHAR(255) NOT NULL

    );`;

    console.log("Created products table.");

    const insertProducts = await Promise.all(
      products.map((product) => {
        return client.sql`
        INSERT INTO products (id, name, price , description, image_url)
        VALUES (${product.id}, ${product.name}, ${product.price}, ${product.description}, ${product.image_url})
        ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded all ${insertProducts.length} products.`);
    return { createTable, products: insertProducts };
  } catch (error) {
    console.log("Error seeding all products", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // call seed methods
  await seedHotSellingProducts(client);
  await seedProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error("An error occured while attempting to seed the databse:", err);
});
