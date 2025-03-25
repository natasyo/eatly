import { imageUrl } from '@/config';
import axios from 'axios';

export async function checkImageUrl(url: string) {
  try {
    const result = await axios.head(url);
    return true;
  } catch {
    console.log('error');
    return false;
  }
}
