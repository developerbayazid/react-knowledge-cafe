import PropTypes from 'prop-types';
import { CiBookmark } from 'react-icons/ci';

const Blog = ({ blog, handleAddBookmark, handleReadingTime }) => {
    const {
        id,
        title,
        cover,
        author,
        author_img,
        posted_date,
        reading_time,
        hashtags,
    } = blog;
    return (
        <div className="mb-20">
            <img
                className="w-full mb-5"
                src={cover}
                alt={`A cover picture of the title ${title}`}
            />
            <div className="flex justify-between mb-5">
                <div className="flex justify-between">
                    <img className="w-16" src={author_img} alt={author} />
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddBookmark(blog)}
                        className="ml-2"
                    >
                        <CiBookmark></CiBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-5">
                {hashtags.map((hash, idx) => (
                    <span key={idx}>
                        <a href="">#{hash} </a>
                    </span>
                ))}
            </p>
            <button
                onClick={() => handleReadingTime(id, reading_time)}
                className="border-2 hover:border-red-200 hover:text-red-300 px-6 py-2 rounded-md mt-6"
            >
                Mark as read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
};
export default Blog;
