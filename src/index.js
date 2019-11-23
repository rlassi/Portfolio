import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import HangmanApp from './components/HangmanApp';
import NotesApp from './components/NotesApp';
import NotesAppEdit from './components/NotesAppEdit';
import TodoApp from './components/TodoApp';
import NotFound from './components/NotFound';
import IndecisionApp from './components/IndecisionApp';
import Resume from './components/Resume';

import '../src/styles/index.scss';

import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/hangman-app" component={HangmanApp} />
                <Route path="/notes-app/app" component={NotesApp} />
                <Route path="/notes-app/edit" component={NotesAppEdit} />
                <Route path="/todo-app" component={TodoApp} />
                <Route path="/indecision-app" component={IndecisionApp} />
                <Route path="/resume" component={Resume} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
