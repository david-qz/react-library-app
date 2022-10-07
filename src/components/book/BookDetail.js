import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
  const params = useParams();
  const { book, loading, error } = useBookDetail(params);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return <>
    <Link to="/books">« Back to Catalog</Link>
    <hr />
    <Book book={book} showDetail />;
  </>;
}

export default BookDetail;
