/**
 * Format date consistently for server and client rendering
 * This prevents hydration mismatches
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  // Use a consistent format that works the same on server and client
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${month}/${day}/${year}`;
}

/**
 * Format date for display with month name
 */
export function formatDateLong(dateString: string): string {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
