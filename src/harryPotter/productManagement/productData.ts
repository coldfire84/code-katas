import { Book } from './Book';

// Create Test Data, use static product Id (uuidv4)
export const randomBook = new Book(
  { title: 'The B.F.G' },
  [{ currency: 'GBP', amount: 8 }],
  '21d95ce2-1d0a-446a-8bcd-ed051817a2e6'
);
export const harryPotter1 = new Book(
  { title: 'Harry Potter and the Philosopher`s Stone' },
  [{ currency: 'GBP', amount: 8 }],
  'f021d9df-5aca-43ac-bb97-f5453ce80052'
);
export const harryPotter2 = new Book(
  { title: 'Harry Potter and the Chamber of Secrets' },
  [{ currency: 'GBP', amount: 8 }],
  'ac367aa4-0e03-4e96-a881-9b6e259f6fed2'
);
export const harryPotter3 = new Book(
  { title: 'Harry Potter and the Prisoner of Azkaban' },
  [{ currency: 'GBP', amount: 8 }],
  'f71ccbbe-4877-4965-8116-2ab8f6da628d'
);
export const harryPotter4 = new Book(
  { title: 'Harry Potter and the Goblet of Fire' },
  [{ currency: 'GBP', amount: 8 }],
  'e366c273-add1-4e6e-864a-694297adddd9'
);
export const harryPotter5 = new Book(
  { title: 'Harry Potter and the Order of the Phoenix' },
  [{ currency: 'GBP', amount: 8 }],
  '4fa95fc3-8f98-401e-a7a6-b3f79a5cb13e'
);
export const harryPotter6 = new Book(
  { title: 'Harry Potter and the Half-Blood Prince' },
  [{ currency: 'GBP', amount: 8 }],
  '92f1bcd7-0841-4f8b-948a-a28d7b60a91c'
);
export const harryPotter7 = new Book(
  { title: 'Harry Potter and the Deathly Hallows' },
  [{ currency: 'GBP', amount: 8 }],
  '19519c39-c74f-4d4d-b2ff-f33aff9e1efa'
);

export const books = [
  harryPotter1,
  harryPotter2,
  harryPotter3,
  harryPotter4,
  harryPotter5,
  harryPotter6,
  harryPotter7,
];
