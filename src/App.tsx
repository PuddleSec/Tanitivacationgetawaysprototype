import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Shopping } from './components/Shopping';
import { Dining } from './components/Dining';
import { Entertainment } from './components/Entertainment';
import { BookYourVisit } from './components/BookYourVisit';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/book" element={<BookYourVisit />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
