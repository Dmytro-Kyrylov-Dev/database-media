import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import ListMovie from './pages/listMovie';
import ListTvShow from './pages/listTvShow';
import MovieDetails from './pages/movieDetails';
import TvShowDetails from './pages/tvShowDetails';

export default function renderRoutes() {

    return (
        <Switch>
            <Route exact path="/" render={() => <Main />} />
            <Route exact path="/movies" render={(params) => <ListMovie params={params}/>} />
            <Route exact path="/tv-shows" render={(params) => <ListTvShow params={params}/>} />
            <Route path="/movies/:id" render={(params) => <MovieDetails params={params}/>} />
            <Route path="/tv-shows/:id" render={(params) => <TvShowDetails params={params}/>} />
        </Switch>
    )
}