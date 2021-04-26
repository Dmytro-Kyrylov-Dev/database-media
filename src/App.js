import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      {renderRoutes()}
    </Router>
  );
}

export default App;
