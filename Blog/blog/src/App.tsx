import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Authservice from './Appwrite/auth';
import { logout, login } from './store/authslice';
import { Header, Footer } from './components/index'; // Capital "Footer"
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    Authservice.GetCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout()); 
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-700">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="bg-gray-700 text-white h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}

export default App;
