import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddBookmark, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div className="md:w-2/3 px-4">
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleReadingTime={handleReadingTime}
                ></Blog>
            ))}
        </div>
    );
};
Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
};
export default Blogs;
