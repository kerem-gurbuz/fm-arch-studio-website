/**
 * Transforms an ISO date string into a human-readable format "Month Year".
 *
 * @param {string} isoString - The ISO date string to transform (e.g., "2019-09-01T00:00:00.000Z").
 * @returns {string} - The transformed date in the format "Month Year" (e.g., "September 2019").
 * @throws {Error} - If the input is not a valid date string.
 *
 * @example
 * transformIsoToDate("2019-09-01T00:00:00.000Z"); // Returns "September 2019"
 * transformIsoToDate("2021-03-01T00:00:00.000Z"); // Returns "March 2021"
 */
export function transformIsoToDate(isoString: string): string {
  // Validate input
  if (!isoString) {
    throw new Error('Input date string cannot be empty');
  }

  // Create date with more robust parsing
  const date = new Date(Date.parse(isoString));

  // Check if date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  // Use toLocaleDateString for more robust and localized formatting
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}
