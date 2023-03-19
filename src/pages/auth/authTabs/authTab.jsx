import { useEffect, useState } from 'react';
import { Login, Register } from '../index';
import './authTab.scss';
import backgroundImage from '../../../assets/images/background.png';
import { useNavigate } from 'react-router-dom';
import { Utils } from '../../../services/utils.service';
import PageLoader from '../../../components/page-loader/PageLoader';
import useLocalStorage from '../../../hooks/useLocalStorage';

const AuthTabs = () => {
  const [type, setType] = useState('Sign In');
  const keepLoggedIn = useLocalStorage('keepLoggedIn', 'get');
  const [environment, setEnvironment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const env = Utils.appEnvironment();
    setEnvironment(env);
    if (keepLoggedIn) navigate('/app/social/streams');
  }, [keepLoggedIn, navigate]);

  return (
    <>
      {keepLoggedIn ? (
        <PageLoader />
      ) : (
        <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="environment">{environment}</div>
          <div className="container-wrapper-auth">
            <div className="tabs">
              <div className="tabs-auth">
                <ul className="tab-group">
                  <li className={`tab ${type === 'Sign In' ? 'active' : ''}`} onClick={() => setType('Sign In')}>
                    <button className="login">Sign In</button>
                  </li>
                  <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                    <button className="signup">Sign Up</button>
                  </li>
                </ul>
                {type === 'Sign In' && (
                  <div className="tab-item">
                    <Login />
                  </div>
                )}
                {type === 'Sign Up' && (
                  <div className="tab-item">
                    <Register />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthTabs;
