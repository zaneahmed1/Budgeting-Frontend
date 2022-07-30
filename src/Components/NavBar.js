import { Link } from "react-router-dom";
import "./NavBar.css"
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  return (
    <nav>
      <ul>
      <li className="navLink">
      <h1>
        <Link to="/transactions">Budget App</Link>
      </h1>
      </li>
      <li className="navLink">
      <Button variant="light">
        <Link to="/transactions/new">New Transaction</Link>
      </Button>
      </li>
      </ul>
    </nav>
  );
}