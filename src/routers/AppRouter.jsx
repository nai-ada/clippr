import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MovieInfoPage from '../pages/MovieInfoPage';
import FavouritesPage from '../pages/FavouritesPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movie/:id" element={<MovieInfoPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<p>Error: Page Not Found</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
