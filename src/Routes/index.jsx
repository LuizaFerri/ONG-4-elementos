import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home/index';
import QuemSomos from '../screens/QuemSomos/index';
import ProjetosRealizados from '../screens/projetosRealizados/index'
import ProjetosAtuais from '../screens/projetosAtuais/index'
import Doacao from '../screens/Doacao/index'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route component={ Home } path="/" exact />
            <Route component={ QuemSomos } path="/quemsomos" />
            <Route component={ ProjetosRealizados } path="/projetosrealizados" />
            <Route component={ ProjetosAtuais } path="/projetosatuais" />
            <Route component={ Doacao } path="/doacao" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;