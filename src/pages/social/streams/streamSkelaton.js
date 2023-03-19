import './Streams.scss';
import SuggestionsSkeletons from '../../../components/suggestions/SeggestionsSkeleton';
import PostFormSkeleton from '../../../components/post/post-form/postFormSkelaton';
import PostSkeleton from '../../../components/post/post/PostSkelaton';
import IconBarSkeleton from '../../../components/icon-filter-bar/IconFilterBarSkelaton';

const StreamsSkeleton = () => {
  return (
    <div className="streams" data-testid="streams">
      <div className="streams-content">
        <IconBarSkeleton />
        <div className="streams-post">
          <PostFormSkeleton />
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index}>
              <PostSkeleton />
            </div>
          ))}
        </div>
        <div className="streams-suggestions">
          <SuggestionsSkeletons />
        </div>
      </div>
    </div>
  );
};

export default StreamsSkeleton;
