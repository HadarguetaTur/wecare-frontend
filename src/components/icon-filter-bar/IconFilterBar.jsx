import { useEffect, useState } from 'react';
import { filterBarIcons } from '../../utils/static.data';
import './iconFilterBar.scss';

const IconFilterBar = () => {
  const [filterbar, setFilterBar] = useState([]);

  useEffect(() => {
    setFilterBar(filterBarIcons);
  }, []);

  return (
    <div className="filterBar">
      <ul className="list-unstyled">
        {filterbar.map((data) => (
          <li key={data.index}>
            <a href="#" className="icon-wrapper">
              <div className="icon">
                <img src={data.src} alt="" />
              </div>
              <span>{`${data.name}`}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconFilterBar;
