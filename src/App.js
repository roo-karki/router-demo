import{Routes, Route} from 'react-router-dom'
import './App.css';
import { About } from './components/About';
import { Admin } from './components/Admin';
import { AuthProvider } from './components/auth';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import { Product } from './components/Product';
import { Profile } from './components/Profile';
import { RequireAuth } from './components/RequireAuth';
import { Users } from './components/Users';
import { UsersDetails } from './components/UsersDetails';

function App() {
  return (
    <AuthProvider>
  
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='order-summary' element={<OrderSummary/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
        <Route path='products' element={<Product/>}>
          <Route index element={<FeaturedProducts/>} />
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>

        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UsersDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path='login' element={<Login/>}/>

        </Routes>
    
    </AuthProvider>
  );
}

export default App;
