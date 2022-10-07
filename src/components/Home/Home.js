import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return <section>
    <h2>{"Welcome to David's Library of Computer Science"}</h2>
    <p className="home">Check out the amazing selection of books in our <Link to="/books">catalog</Link>.</p>
  </section>;
}
