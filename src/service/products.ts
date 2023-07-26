import path from "path";
import { promises as fs } from "fs";

export interface Product {
  id: string;
  name: string;
  price: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const dir = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(dir, "utf-8");
  return JSON.parse(data);
};

export const getProduct = async (
  name: string
): Promise<Product | undefined> => {
  const products = await getProducts();
  const product = products.find((product) => product.name === name);
  if (!product) {
    return undefined;
  }
  return product;
};
