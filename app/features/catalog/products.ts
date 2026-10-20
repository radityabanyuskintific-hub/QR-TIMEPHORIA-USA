import { shadeLabel, skuMaster } from "../../sku-master.ts";
import type { Product } from "./types";

const productDetails: Omit<Product, "shades">[] = [
  {
    name: "STELLAR DUST LIP STAIN",
    shortName: "STELLAR DUST LIP STAIN",
    category: "lips",
    finish: "TINTED TO GO",
    price: "IDR 00.000",
    size: "5 g",
    image: "/product-pages/thumbnail-card/thumbnail-card-stellar.jpg",
    description: "Emulsión labial híbrida con cobertura intensa desde la primera pasada, color duradero que no se transfiere e hidratación cómoda.",
    claims: ["Brillo intenso", "Hasta 12 horas", "No se transfiere"],
    swatchSlides: [
      "/swatches/swatches-lips/swatches-stellar/swatches-stellar-1.jpg",
      "/swatches/swatches-lips/swatches-stellar/swatches-stellar-2.jpg",
      "/swatches/swatches-lips/swatches-stellar/swatches-stellar-3.jpg",
      "/swatches/swatches-lips/swatches-stellar/swatches-stellar-4.jpg",
    ],
  },
];

export const products: Product[] = productDetails.map((product) => ({
  ...product,
  shades: skuMaster[product.name].map(shadeLabel),
}));
