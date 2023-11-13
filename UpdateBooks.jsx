import React, { useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function UpdateBooks() {

  const [nameBook, setNameBook] = useState('');
  const [edition, setEdition] = useState('');
  const [author, setAuthor] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.put('http://localhost:8081/update/'+id, {nameBook,edition,author})
    .then(res => {
      console.log(res);
      navigate('/');
      })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update Book</h2>
          <div className="mb-2">
            <label htmlfor="">Name book</label>
            <input type="text" placeholder="Name book" className="form-control" onChange={e => setNameBook(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlfor="">Autor</label>
            <input type="text" placeholder="Autor" className="form-control" onChange={e => setAuthor(e.target.value)} />
          </div>
          <div className="mb-2">
            <label >Edition house</label>
            <input type="text" placeholder="Edition house" className="form-control" onChange={e => setEdition(e.target.value)} />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateBooks;