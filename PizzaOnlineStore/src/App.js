import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import PizzasMainWrapper from './components/PizzasMainWrapper/PizzasMainWrapper';
import CartMainWrapper from './components/CartMainWrapper/CartMainWrapper';
import InfoMainWrapper from './components/InfoMainWrapper/InfroMainWrapper';
import InfoVacancy from './components/InfoVacancy/InfoVacancy';
import InfoOftenQuestions from './components/InfoOftenQuestions/InfoOftenQuestions';
import InfoPromotions from './components/InfoPromotions/InfoPromotions';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PizzasMainWrapper />}></Route>
              <Route path='cart' element={<CartMainWrapper/>}></Route>
              <Route path='info' element={<InfoMainWrapper/>}>
                <Route index element={<InfoOftenQuestions />}></Route>
                <Route path='vacancy' element={<InfoVacancy />}></Route>
                <Route path='promotions' element={<InfoPromotions />}></Route>
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
