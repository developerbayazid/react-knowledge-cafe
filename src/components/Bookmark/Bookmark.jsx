import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white p-2 my-4 rounded-xl">
            <h5 className="text-sm font-bold">{title}</h5>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
