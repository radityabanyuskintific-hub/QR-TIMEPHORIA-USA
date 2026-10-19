export type LipTryOnShade = {
  code: string;
  name: string;
  hex: string;
  sku?: string;
};

// Display approximations retained from the existing try-on; the shade list supplies no color values.
export const lipTryOnShades: Record<string, LipTryOnShade[]> = {
  "STELLAR DUST LIP STAIN": [
    { code: "#004", name: "Mauvion", hex: "#B25466" },
    { code: "#002", name: "Gemini", hex: "#D65D64" },
    { code: "#001", name: "Nova", hex: "#B9415A" },
    { code: "11", name: "Futura", hex: "#B84D55" },
    { code: "09", name: "Enigma", hex: "#751C25" },
    { code: "07", name: "Quanta", hex: "#B64D3E" },
    { code: "06", name: "Nerose", hex: "#9F4058" },
    { code: "03", name: "Luxia", hex: "#D85886" },
    { code: "01", name: "Calyptra", hex: "#B85D61" },
  ],
};
