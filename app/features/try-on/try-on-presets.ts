import { lipTryOnShades, type LipTryOnShade } from "../../lip-try-on-shades.ts";
import { skuMaster } from "../../sku-master.ts";

export type TryOnRegion =
  | "brows" | "concealer" | "contour" | "eyeliner" | "eyelashes"
  | "eyeshadow" | "foundation" | "lips" | "blush";

export type TryOnPreset = {
  coverage?: number;
  finish?: "glow" | "matte" | "natural" | "satin";
  region: TryOnRegion;
  shades: LipTryOnShade[];
  shimmer?: boolean;
};

const presets: Record<string, TryOnPreset> = {
  "STELLAR DUST LIP STAIN": {
    region: "lips",
    shades: lipTryOnShades["STELLAR DUST LIP STAIN"],
  },
};

export const tryOnPresets: Record<string, TryOnPreset> = {};

for (const [productName, variants] of Object.entries(skuMaster)) {
  const preset = presets[productName];
  if (!preset) throw new Error(`Missing try-on preset for ${productName}`);
  tryOnPresets[productName] = {
    ...preset,
    shades: variants.map((variant) => {
      const color = preset.shades.find((item) => item.code === variant.shadeCode);
      if (!color) throw new Error(`Missing try-on color for SKU ${variant.sku}`);
      return { ...color, name: variant.shadeName, sku: variant.sku };
    }),
  };
}
