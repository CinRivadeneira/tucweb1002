import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from '../Pages/Inicio/Inicio';
import Quienessomos from '../Pages/QuienesSomos/QuienesSomos';
import Contacto from "../Pages/Contacto/Contacto";
import Usuarios from "../Pages/Usuarios/Usuarios";



const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/quienessomos" component={Quienessomos} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/usuarios" component={Usuarios} />
      </Switch>
    </Router>
  )
}

export default AppRouter;