import { ClientLogger } from "components/ClientLogger";
import {
  DeleteAllProductsFromDatabaseButton,
  FetchAndSaveProductsButton,
  GetAllProductFromDatabaseButton,
} from "components/ProductsButton";
import { getAllProductData } from "wooCommeceAPIs/getAllProductData";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col gap-3 mt-3 p-10 items-center">
        <h2>Products</h2>
        <FetchAndSaveProductsButton />
        <GetAllProductFromDatabaseButton />
        <DeleteAllProductsFromDatabaseButton />
      </div>
    </>
  );
}
