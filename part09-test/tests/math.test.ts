import { expect, test } from "bun:test";
import { add, multiply } from "math";
test("menambahkan dua angka", () => {
  const result = add(2, 3);
  expect(result).toBe(5); // 2 + 3 = 5
});

// Pengujian fungsi multiply
test("mengalikan dua angka", () => {
  const result = multiply(4, 5);
  expect(result).toBe(20); // 4 * 5 = 20
});

// Contoh Assertion
test("testing assertions", () => {
  expect(2 + 2).toBe(4);
  expect("bun").toBeTruthy();
  expect(null).toBeFalsy();

  const obj = { name: "Bun" };
  expect(obj).toEqual({ name: "Bun" });

  expect(() => {
    throw new Error("Something went wrong");
  }).toThrow();
});

// Testing Async Code
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello Bun!"), 1000);
  });
}

test("pengujian async/await", async () => {
  const data = await fetchData();
  expect(data).toBe("Hello Bun!");
});

// Testing dengan Parameterized Tests
const testCases = [
  { a: 1, b: 2, expected: 3 },
  { a: -1, b: 1, expected: 0 },
  { a: 0, b: 0, expected: 0 },
];

for (const { a, b, expected } of testCases) {
  test(`menambahkan ${a} + ${b} = ${expected}`, () => {
    expect(add(a, b)).toBe(expected);
  });
}
