export type Retailer = "watsons" | "guardian";

export type SkuVariant = {
  sku: string;
  shadeCode: string;
  shadeName: string;
  retailers: Retailer[];
};

const variant = (sku: string, shadeCode: string, shadeName: string, guardian = true): SkuVariant => ({
  sku,
  shadeCode,
  shadeName,
  retailers: guardian ? ["watsons", "guardian"] : ["watsons"],
});

// Stellar variants retained from the Malaysia SKU master used by the full catalog.
export const skuMaster: Record<string, SkuVariant[]> = {
  "STELLAR DUST LIP STAIN": [
    variant("TCC102404", "#004", "Mauvion", false),
    variant("TCC102402", "#002", "Gemini", false),
    variant("TCC102401", "#001", "Nova", false),
    variant("TCC102011", "11", "Futura"),
    variant("TCC102009", "09", "Enigma", false),
    variant("TCC102007", "07", "Quanta"),
    variant("TCC102006", "06", "Nerose"),
    variant("TCC102003", "03", "Luxia"),
    variant("TCC102001", "01", "Calyptra"),
  ],
};

export function shadeLabel({ shadeCode, shadeName }: SkuVariant) {
  return [shadeCode, shadeName].filter(Boolean).join(" ");
}
