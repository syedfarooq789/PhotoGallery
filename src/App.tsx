import './App.css';
import Gallery from './pages/Gallery';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import DetailView from './pages/DetailView';

function App() {
  return (
    <div>
      <h1 className='App'>Photo Gallery</h1>
      <Container><RoutingComponent /></Container>
    </div>
  );
}

function RoutingComponent() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/gallery/:pageNumber' element={<Gallery />} />
          <Route path='/details' element={<DetailView />} />
          <Route
            path='/'
            element={<Navigate to='/gallery/1' />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
