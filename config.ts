export const apiUrl =
  typeof window !== 'undefined' ? `${window.location.origin}/api` : process.env.NEXT_PUBLIC_API_URL;

export const imageUrl = `/img/upload`;
