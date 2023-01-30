import CommentArea from '../comment-area/CommentArea';
import ReactionsAndCommentsDisplay from '../reactions/reaction-and-comments-disply/ReactionsAndCommentsDisplay';
import PropTypes from 'prop-types';

const PostCommentSection = ({ post }) => {
  return (
    <div data-testid="comment-section">
      <ReactionsAndCommentsDisplay post={post} />
      <CommentArea post={post} />
    </div>
  );
};

PostCommentSection.propTypes = {
  post: PropTypes.object
};

export default PostCommentSection;
