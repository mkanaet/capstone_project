import {
  Route,
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />

          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
