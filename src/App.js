import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {
  state = {
    books: []
  }
  componentWillMount() {
    axios.get('http://localhost:3000/books').then((response) => {
      this.setState({
        books: response.data
      })
    });
  }
  render() {
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.rating}</td>
          <td>
            <button class="btn btn-success" size="sm">Edit</button>
            <button class="btn btn-danger" size="sm">Delete</button>
          </td>
        </tr>
      )
    });
    return (
      <div className="App">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books}
            {/* <tr>
              <td>1</td>
              <td>Book title</td>
              <td>2.5</td>
              <td>
                <button class="btn btn-success" size="sm">Edit</button>
                <button class="btn btn-danger" size="sm">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </Table>
        <h1>My name is Cynthia muriithi</h1>
        <h2>And I love chicken</h2>
      </div>
    );
  }
}

export default App;
