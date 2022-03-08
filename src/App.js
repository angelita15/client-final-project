import './App.css';
import Footer from './components/Footer/Footer'
import Navigation from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
