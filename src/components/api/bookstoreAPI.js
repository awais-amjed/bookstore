class BookstoreAPI {
  static baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7Yk0oIip10822KACVnk2/books/';

  static getAllBooks = async () => fetch(this.baseURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (response) => {
    if (response.ok) {
      try {
        return await response.json();
      } catch (e) {
        return {};
      }
    }
    return null;
  });

  static addBook = async ({
    id, bookName, authorName, category,
  }) => fetch(this.baseURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title: bookName,
      author: authorName,
      category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (response) => response.ok);

  static removeBook = async ({ id }) => fetch(`${this.baseURL}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (response) => response.ok);
}

export default BookstoreAPI;
