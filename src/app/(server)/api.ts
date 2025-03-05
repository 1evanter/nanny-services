import { ref, get } from 'firebase/database';
import { database } from '../firebase/config';

export const getNannies = async () => {
  const nanniesRef = ref(database, '/');
  const snapshot = await get(nanniesRef);

  if (!snapshot.exists()) {
    console.log('No data available');
    return [];
  }

  const nannies = snapshot.val();
  return nannies;
};