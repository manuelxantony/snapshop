import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

import { HotSellingProduct, Product } from "./definitions";
//import { formatCurrency } from "./utils";

export async function fetchHotSellingProducts() {
  noStore(); // to prevent response from being cached
  try {
    console.log("Fetching hot selling products data...");
    const data = await sql<HotSellingProduct>`SELECT * FROM hotsellingproducts`;
    return data.rows;
  } catch (error) {
    console.log(
      "Error while fetching hot selling products from database: ",
      error
    );
    throw new Error("Failed to fetch hot selling products from database");
  }
}

export async function fetchProducts() {
  noStore(); // to prevent response from being cached
  try {
    console.log("Fetching products data...");
    const data = await sql<Product>`SELECT * FROM products`;
    return data.rows;
  } catch (error) {
    console.log("Error while fetching products from database: ", error);
    throw new Error("Failed to fetch products from database");
  }
}

export async function fetchProductViaSlug(slug: string) {
  noStore(); // to prevent response from being cached
  try {
    console.log(`Fetching product data with slug: ${slug} ...`);
    const data = await sql<Product>`SELECT * FROM products WHERE slug=${slug}`;
    return data.rows;
  } catch (error) {
    console.log(
      `Error while fetching product with slug ${slug} from database: `,
      error
    );
    throw new Error(`Failed to fetch product with slug ${slug} from database`);
  }
}
