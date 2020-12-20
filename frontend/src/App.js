import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProfileScreen from './screen/ProfileScreen';
import ShippingScreen from './screen/ShippingScreen'
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
          <Route path='/payment' component={PaymentScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
          <Route path='/placeorder' component={PlaceOrderScreen}/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/' component={HomeScreen} exact/> 
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
