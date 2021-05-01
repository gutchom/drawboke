import firebase from "firebase/app";
// TODO: あとでどこかにまとめる
const firebaseConfig = {
    apiKey: "AIzaSyAkgTEHqsih0lmwu1hx0IYrJH8RakhYXwA",
    authDomain: "drawboke.firebaseapp.com",
    databaseURL: "https://drawboke-default-rtdb.firebaseio.com",
    projectId: "drawboke",
    storageBucket: "drawboke.appspot.com",
    messagingSenderId: "1008146064966",
    appId: "1:1008146064966:web:9e496005f27b3392d70c47",
    measurementId: "G-RJ2NWBQ1V5"
};
firebase.initializeApp(firebaseConfig);

import React from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
/*
  TODO: あとでUserPageとLoginPageを同じファイルにする
  TODO: できるなら各デフェクトリのindex.tsxにコンポーネントを集めたい
*/
import { LoginPage } from "./auth/index";
import { UserPage, UserToolbar} from "./auth/toolbar";
import { DrawingPage } from "./draw/index";

export default function RootScreen() {
    return (
        <Router>
            <div>
                   <UserToolbar />
            </div>
            <Switch>
                <Route exact path="/"> <LoginPage /> </Route>
                <Route exact path="/draw"><DrawingPage /> </Route>
                <Route path="/user/:user_id" children={ <UserPage /> } />
            </Switch>
        </Router>
    );
}

ReactDom.render(
    <RootScreen />,
    document.getElementById('root')
)