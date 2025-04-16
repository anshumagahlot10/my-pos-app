import clsx from "clsx";

/**
 * Utility function to simplify conditional Tailwind class names.
 * @param inputs - class names to conditionally merge
 */
export function cn(...inputs: any[]) {
  return clsx(inputs);
}
