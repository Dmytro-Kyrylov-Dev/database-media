import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="body">
        {renderRoutes()}  
      </div>
      
    </Router>
  );
}

export default App;
