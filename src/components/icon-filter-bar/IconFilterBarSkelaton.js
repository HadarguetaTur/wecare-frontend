import Skeleton from 'react-loading-skeleton';
import './IconFilterBar';

const IconBarSkeleton = () => {
  return (
    <div className="filterBar" data-testid="filter-bar-skeleton">
      <Skeleton baseColor="#EFF1F6" width={170} />
    </div>
  );
};
export default IconBarSkeleton;
