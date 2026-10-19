import assert from "node:assert/strict";
import test from "node:test";
import { products } from "../catalog/products.ts";
import { skuMaster } from "../../sku-master.ts";
import { tryOnPresets } from "./try-on-presets.ts";

const expected = {
  "STELLAR DUST LIP STAIN": [
    ["TCC102404", "#004", "Mauvion"],
    ["TCC102402", "#002", "Gemini"],
    ["TCC102401", "#001", "Nova"],
    ["TCC102011", "11", "Futura"],
    ["TCC102009", "09", "Enigma"],
    ["TCC102007", "07", "Quanta"],
    ["TCC102006", "06", "Nerose"],
    ["TCC102003", "03", "Luxia"],
    ["TCC102001", "01", "Calyptra"],
  ],
};

test("catalog and try-on contain only Stellar", () => {
  assert.deepEqual(products.map(({ name }) => name), Object.keys(expected));
  assert.deepEqual(Object.keys(skuMaster), Object.keys(expected));
  assert.deepEqual(Object.keys(tryOnPresets), Object.keys(expected));
  assert.equal(tryOnPresets["STELLAR DUST LIP STAIN"].region, "lips");
});

test("catalog and try-on shades match the nine Malaysia Stellar SKU variants", () => {
  for (const [productName, rows] of Object.entries(expected)) {
    assert.deepEqual(skuMaster[productName].map(({ sku, shadeCode, shadeName }) => [sku, shadeCode, shadeName]), rows);
    const preset = tryOnPresets[productName];
    assert.deepEqual(preset.shades.map(({ sku, code, name }) => [sku, code, name]), rows);
    assert.ok(preset.shades.every((shade) => /^#[0-9A-F]{6}$/i.test(shade.hex)), productName);
    assert.deepEqual(products.find(({ name }) => name === productName)?.shades, rows.map(([, code, name]) => `${code} ${name}`));
  }
  const variants = Object.values(skuMaster).flat();
  assert.equal(variants.length, 9);
  assert.equal(new Set(variants.map(({ sku }) => sku)).size, 9);
});
