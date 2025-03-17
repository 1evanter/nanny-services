import { ref, get } from 'firebase/database';
import { database } from '../firebase/config';
import { Nanny } from '@/types/nannies.types';

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


const params: Record<string, (a: Nanny, b: Nanny) => number> = {
  'A to Z': (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  'Z to A': (a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
  'Less than 10$': (a, b) => a.price_per_hour - b.price_per_hour,
  'Greater than 10$': (a, b) => b.price_per_hour - a.price_per_hour,
  Popular: (a, b) => b.rating - a.rating,
  'Not popular': (a, b) => a.rating - b.rating,
  'Show all': () => 0,
};

export const getFilteredNannies = (
  nannies: Nanny[],
  filter: string,
): Nanny[] => {
  const filteredNannies  = nannies.toSorted(
    params[filter] || params['Show all']
  );

  return filteredNannies;
};