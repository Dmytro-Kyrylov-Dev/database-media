import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import ListMovie from "./pages/listMovie";
import ListTvShow from "./pages/listTvShow";

export default function renderRoutes() {
    return (
        <Switch>
            <Route exact path="/" render={() => <Main />} />
            <Route path="/movies" render={(params) => <ListMovie params={params}/>} />
            <Route path="/tv-shows" render={(params) => <ListTvShow params={params}/>} />
        </Switch>
    )
}