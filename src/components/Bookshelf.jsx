import { useState } from 'react';

function Bookshelf() {

    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    const handleChange = (e) => {
        setNewBook({...newBook, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setBooks(prev => [...prev, newBook])
        setNewBook({title: '', author: ''})
    }

    return (    
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id='title' 
                        name='title'
                        onChange={handleChange}
                        value={newBook.title}/>

                    <label htmlFor="author">Author:</label>
                    <input 
                        type="text" 
                        id='author' 
                        name='author'
                        onChange={handleChange}
                        value={newBook.author}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, i)=>(
                    <div key={i} className='bookCard'>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Bookshelf