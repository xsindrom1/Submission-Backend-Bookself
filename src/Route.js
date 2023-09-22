const {
  addBooks,
  getAllBook,
  getBookById,
  editBookById,
  deleteBookById,
} = require('./Handler');

const routes = [
  // route kriteria 3
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  // route kriteria 4
  {
    method: 'GET',
    path: '/books',
    handler: getAllBook,
  },
  // route kriteria 5
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById,
  },
  // route kriteria 6
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
  },
  // route kriteria 7
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
