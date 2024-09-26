import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);
    const handleAddBookmark = (blog) => {
        if (bookmarks.indexOf(blog) === -1) {
            const newBookmarks = [...bookmarks, blog];
            setBookmarks(newBookmarks);
        }
    };

    const handleReadingTime = (id, time) => {
        setReadingTime(readingTime + time);
        const remainingBookmarks = bookmarks.filter(
            (bookmark) => bookmark.id !== id
        );
        setBookmarks(remainingBookmarks);
    };

    return (
        <>
            <Header></Header>
            <div className="md:flex max-w-6xl mx-auto mt-5 mb-10">
                <Blogs
                    handleReadingTime={handleReadingTime}
                    handleAddBookmark={handleAddBookmark}
                ></Blogs>
                <Bookmarks
                    readingTime={readingTime}
                    bookmarks={bookmarks}
                ></Bookmarks>
            </div>
        </>
    );
}

export default App;
