//? source https://akhilaariyachandra.com/snippets/using-clsx-or-classnames-with-tailwind-merge
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args) {
  return twMerge(clsx(args));
}
