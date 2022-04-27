import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import { FeedBackProvider } from './context/FeedBackContext';
function App() {

  return (
    <FeedBackProvider>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={
            <>
            <div className='container'>
            <FeedBackForm />
            <FeedBackStats />
            <FeedBackList />
            </div>
            <AboutIconLink />
            </>
        }></Route>
        <Route path='/about' element={<AboutPage />} />

      </Routes>

    </Router>
    </FeedBackProvider>
  );
}

export default App;
