import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './components/Index';
import CustomerLayout from './components/customer/Layout';
function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/"  component={Index} />
        <Route path="/customer" component={CustomerLayout} />
      </Switch>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
