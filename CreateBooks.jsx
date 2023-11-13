import React, {useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateBooks() {
  const [nameBook, setNameBook] = useState('')
  const [edition, setEdition] = useState('')
  const [author, setAuthor] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

      axios.post('http://localhost:8081/create', { nameBook, edition, author })
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Book</h2>
          <div className="mb-2">
            <label htmlfor="">Name book</label>
            <input
              type="text"
              placeholder="Name book"
              className="form-control"
              onChange={(e) => setNameBook(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="">Autor</label>
            <input
              type="text"
              placeholder="Autor"
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Edition house</label>
            <input
              type="text"
              placeholder="Edition_house"
              className="form-control"
              onChange={(e) => setEdition(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBooks
