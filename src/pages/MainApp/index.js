import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    Home,
    About,
    Product,
    Testimoni,
    Contact,
    Detail,
    Login,
    Cart,
    Profile,
    TopUp,
    Transfer,
    Withdraw,
    RegisterDownline,
    Downline,
    InfoBank,
    HistoryPoint,
    HistoryOrder,
    Agen,
    Checkout,
    Register,
    GoogleMaps,
    Test,
    AgenList,
    Konversi,
    Products,
    Package,
    DetailPackage,
    Testing,
    Agens,
    Sponsor,
    Tree
} from '../../pages';
import HistoryOrderDetail from '../../component/HistoryOrderDetail';

const MainApp = () =>{
    return(
        <Router>
            <Switch>
                {/* <Route path='/products/:id'>
                    <Products/>
                </Route> */}
                <Route path="/Tree">
                    <Tree/>
                </Route>
                <Route path="/Sponsor">
                    <Sponsor/>
                </Route>
                <Route path="/Agens">
                    <Agens/>
                </Route>
                <Route path="/Testing">
                    <Testing/>
                </Route>
                <Route path="/package">
                    <Package/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Route path='/Konversi'>
                    <Konversi/>
                </Route>
                <Route path='/AgenList'>
                    <AgenList/>
                </Route>
                <Route path='/Test'>
                     <Test/>
                </Route>
                <Route path='/GoogleMaps'>
                    <GoogleMaps/>
                </Route>
                <Route path='/Register'>
                    <Register/>
                </Route>
                <Route path='/checkout/:id'>
                    <Checkout/>
                </Route>
                <Route path="/Agen">
                    <Agen/>
                </Route>
                <Route path="/HistoryOrderDetail">
                    <HistoryOrderDetail/>
                </Route>
                <Route path="/HistoryOrder">
                    <HistoryOrder/>
                </Route>
                <Route path="/HistoryPoint">
                    <HistoryPoint/>
                </Route>
                <Route path="/InfoBank">
                    <InfoBank/>
                </Route>
                <Route path="/Downline">
                    <Downline/>
                </Route>
                <Route path="/RegisterDownline">
                    <RegisterDownline/>
                </Route>
                <Route path="/Withdraw">
                    <Withdraw/>
                </Route>
                <Route path="/Transfer">
                    <Transfer/>
                </Route>
                <Route path="/TopUp">
                    <TopUp/>
                </Route>
                <Route path="/Profile">
                    <Profile/>
                </Route>
                <Route path="/Cart">
                    <Cart/>    
                </Route>
                <Route path="/Login">
                    <Login/>    
                </Route>
                <Route path="/Detail/:id">
                    <Detail/>    
                </Route>
                <Route path="/DetailPackage/:id">
                    <DetailPackage/>    
                </Route>
                <Route path="/Contact">
                    <Contact/>    
                </Route>
                <Route path="/Testimoni">
                    <Testimoni/>    
                </Route>
                <Route path="/Product">
                    <Product/>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}
export default MainApp