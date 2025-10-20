// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("MoM")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar1")).toThrow();
    expect(() => isPalindrome("mom!")).toThrow();
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow();
    expect(() => isPalindrome(null)).toThrow();
  });
});
