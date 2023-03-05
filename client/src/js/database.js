import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  // Created a connection with the DB
  const todosDb = await openDB('jate', 1);
  // Created a new transaction with data and specified data privileges
  const tx = todosDb.transaction('jate', 'readwrite');
  // Opened the desireed object store
  const store = tx.objectStore('jate');
  // Used .put() to create and update data that is stored in the DB
  const request = store.put({ value: content });
  const result = await request;
  // Get the request confirmation
  console.log('🚀 - data saved to the database', result);
};

export const getDb = async () => {
  const contactDb = await openDB('jate', 1);
  const tx = contactDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Use the .get(1) method to get the data in the database.
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
