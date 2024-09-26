import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 p-6 bg-gray-300 text-center">
            <div className="bg-white p-2 my-4 rounded-xl">
                <h5 className="text-xl text-purple-500 font-bold">
                    Spent time on read: {readingTime} min
                </h5>
            </div>
            <h2 className="text-2xl font-bold">
                Bookmarked Blogs: {bookmarks.length}
            </h2>
            {bookmarks.map((bookmark, idx) => (
                <Bookmark key={idx} bookmark={bookmark}></Bookmark>
            ))}
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
};
export default Bookmarks;
