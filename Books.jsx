import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Books() {
  const [book, setBook] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err))
  }, [])
    const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8081/delete/'+id)
      window.location.reload()
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name Books</th>
              <th>Author</th>
              <th>Collection</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {book.map((data, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{data.ID}</td>
                    <td>{data.nameBook}</td>
                    <td>{data.edition}</td>
                    <td>{data.author}</td>
                    <td>
                      <Link to={`update/${data.ID}`} className="btn btn-primary">Update</Link>
                      <button className="btn btn-danger ms-2" onClick={e => handleDelete(data.id)}>Delete</button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Books
