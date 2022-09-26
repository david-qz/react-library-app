import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>

      <Switch>
        <Route path="/books/:id">
          <BookDetail />
        </Route>
        <Route path="/books">
          <BookList />
        </Route>
        <Route path="*">
          <Redirect to="/books" />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
