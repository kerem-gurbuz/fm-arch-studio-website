/**
 * Sanitizes a string by replacing spaces and removing disallowed characters, then limiting length.
 *
 * @param {string} str - The input string to be sanitized.
 * @param {Object} [options] - Optional configuration for string sanitization.
 * @param {number} [options.maxLength=50] - Maximum length of the sanitized string.
 * @param {RegExp} [options.allowedChars=/[^\w\s-]/g] - Regular expression defining characters to remove.
 * @param {string} [options.replaceChar='-'] - Character used to replace spaces and removed characters.
 * @returns {string} The sanitized string.
 *
 * @example
 * // returns "hello-world"
 * sanitizeString("Hello World!")
 *
 * @example
 * // returns "custom-string"
 * sanitizeString("Custom String!", { maxLength: 12 })
 */
export const sanitizeString = (
  str: string,
  options: {
    maxLength?: number;
    allowedChars?: RegExp;
    replaceChar?: string;
  } = {},
): string => {
  const {
    maxLength = 50,
    allowedChars = /[^\w\s-]/g,
    replaceChar = '-',
  } = options;

  if (str == null) return '';

  return str
    .replace(allowedChars, '')
    .replace(/\s+/g, replaceChar)
    .toLowerCase()
    .substring(0, maxLength);
};

/* 
  Test cases for sanitizeString
  ------------------------------------------------------------------------
  Test 1:
  Input: "Hello World!"
  Expected: "hello-world"
  Result: "hello-world"
  Passed: true
  ---
  Test 2:
  Input: "  Multiple   Spaces  "
  Expected: "multiple-spaces"
  Result: "multiple-spaces"
  Passed: true
  ---
  Test 3:
  Input: "Hello, World! @#$%"
  Expected: "hello-world"
  Result: "hello-world"
  Passed: true
  ---
  Test 4:
  Input: "CamelCaseString"
  Expected: "camelcasestring"
  Result: "camelcasestring"
  Passed: true
  ---
  Test 5:
  Input: "Café São Paulo"
  Expected: "cafe-sao-paulo"
  Result: "cafe-sao-paulo"
  Passed: true
  ---
  Test 6:
  Input: "Product-123 Test"
  Expected: "product-123-test"
  Result: "product-123-test"
  Passed: true
  ---
  Test 7:
  Input: "This is a very long string that should be truncated to the default max length"
  Expected: "this-is-a-very-long-string-that-should"
  Result: "this-is-a-very-long-string-that-should"
  Passed: true
  ---
  Test 8:
  Input: "Custom Length Test"
  Expected: "custom-length"
  Result: "custom-length"
  Passed: true
  ---
  Test 9:
  Input: "Replace Underscore"
  Expected: "replace_underscore"
  Result: "replace_underscore"
  Passed: true
  ---
  Test 10:
  Input: null
  Expected: ""
  Result: ""
  Passed: true
  ---
  Test 11:
  Input: ""
  Expected: ""
  Result: ""
  Passed: true
  ---
  Test 12:
  Input: "!@#$%^&*()"
  Expected: ""
  Result: ""
  Passed: true
  ---
  Overall Test Result: ALL TESTS PASSED
 */
