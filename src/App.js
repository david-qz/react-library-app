import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
