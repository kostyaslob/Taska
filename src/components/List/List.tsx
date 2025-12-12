interface Book {
    id: string;
    name: string;
}

const books: Book[] = [
  { id: "1", name: "React" },
  { id: "2", name: "Node" },
  { id: "3", name: "Nest" },
];

export default function List() {
    return (
      <>
            <h1>Books of the week</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
      </>
    );
}