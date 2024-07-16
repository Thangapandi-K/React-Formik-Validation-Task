import axios from 'axios';
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'






const Dashboard = () => {

    // getting api data using loader
    const booksData = useLoaderData();

    const books = booksData.books

    const [allBooks, setAllBooks] = useState(books);

    const [editingBookId, setEditingBookId] = useState(null);
    const [title, setTitle] = useState('');
    const [isbnNum, setIsbnNum] = useState('');
    const [pubDate, setPubDate] = useState('');
    const [authName, setAuthName] = useState('');
    const [dob, setDob] = useState('');
    const [bio, setBio] = useState('');

    


    // to delete selected data 
    const handleDelete = async(id) => {

        const confirmDel = confirm('Are you sure to delete the book ?')
        
        confirmDel
        // delete the data in API using axios
        && await axios.delete(`https://668a5df82c68eaf3211c9bc7.mockapi.io/books/${id}`)
        //local update after deleting data
        && setAllBooks((prevData) => prevData.filter((book) => book.id !== id))
        // alert for sucessfull deletion or cancellation of delete request
        confirmDel ? alert('Book Deleted Succesfully') : alert('Book Not Deleted')
        
    }


    const editBook = (book) => {

        setEditingBookId(book.id);
        setTitle(book.title);
        setIsbnNum(book.isbnNum);
        setPubDate(book.pubDate);
        setAuthName(book.authName);
        setDob(book.dob);
        setBio(book.bio);


    }

    const submitEditedBook = (e) => {

        if(editingBookId) {

            handleEdit(editingBookId, {
              title: title,
              isbnNum: isbnNum,
              pubDate: pubDate,
              authName: authName,
              dob: dob,
              bio: bio  
            })
            setEditingBookId(null);
        }
    }

    const handleEdit = async(id, updatedData) => {

        // to edit existing data in API using axios
        axios.put(`https://668a5df82c68eaf3211c9bc7.mockapi.io/books/${id}`, updatedData)
        // local update after data edit
        .then((response) => 

            { const updatedBook = response.data; 
                
                setAllBooks((prevData) => prevData.map((book) => (book.id === id ? updatedBook : book)))})
   

    }

    

  return (
    <div className='container'>
        <div className='row mt-3 border table-responsive'>
            <table className='table table-striped table-hover text-center'>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Book Title</th>
                        <th>ISBN Number</th>
                        <th>Published Date</th>
                        <th>Author</th>
                        <th>Date Of Birth</th>
                        <th>Biography</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBooks.map((book, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{editingBookId === book.id ? (<input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>) : (book.title)}</td>
                                <td>{editingBookId === book.id ? (<input type="number" value={isbnNum} onChange={(e) => setIsbnNum(e.target.value)}/>) : (book.isbnNum)}</td>
                                <td>{editingBookId === book.id ? (<input type="date" value={pubDate} onChange={(e) => setPubDate(e.target.value)}/>) : (book.pubDate)}</td>
                                <td>{editingBookId === book.id ? (<input type="text" value={authName} onChange={(e) => setAuthName(e.target.value)}/>) : (book.authName)}</td>
                                <td>{editingBookId === book.id ? (<input type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>) : (book.dob)}</td>
                                <td>{editingBookId === book.id ? (<input type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>) : (book.bio)}</td>
                                <td>
                                { editingBookId === book.id ? (<button className='btn btn-success m-1' onClick={() => submitEditedBook(book)}>Update</button>) : (<><button className='btn btn-warning m-1' onClick={() => editBook(book)}>Edit</button>
                                <button className='btn btn-danger m-1' onClick={() => handleDelete(book.id)}>Delete</button></>)}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard