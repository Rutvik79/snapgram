import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString?: string): string {
  // If dateString is undefined or null, set it to an empty string
  dateString = dateString || '';

  // Parse the date string into a Date object
  const date: Date = new Date(dateString);
  
  // Get the current date
  const currentDate: Date = new Date();
  
  // Calculate the difference in milliseconds
  const difference: number = currentDate.getTime() - date.getTime();
  
  // Convert milliseconds to seconds, minutes, hours, days
  const seconds: number = Math.floor(difference / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  
  if (days > 0) {
      return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (hours > 0) {
      return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (minutes > 0) {
      return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else {
      return seconds <= 1 ? 'just now' : `${seconds} seconds ago`;
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);