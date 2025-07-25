import { useState } from 'react';

const Bookshelf = () => {
    const [newBook, setNewBook] = useState({ title: "", author: "" })

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const handleInputChange = (event) => {

        const { name, value } = event.target
        console.log(name, value)
        setNewBook({ ...newBook, [name]: value })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newBook.title === "" || newBook.author === "") return
        setBooks([...books, newBook])
        setNewBook({ title: "", author: "" })
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleInputChange} value={newBook.title} type="text" id="title" name="title" />
                    <label htmlFor="author">Author</label>
                    <input onChange={handleInputChange} value={newBook.author} type="text" id="author" name="author" />
                    <button>Add Book</button>
                </form>
            </div>

            <div className="bookCardsDiv">
                {books.map((book) => (
                    <div className="bookCard" key={book.title}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Bookshelf