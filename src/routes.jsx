import {Route, IndexRoute} from 'react-router';

import {App} from 'App.jsx';
import {CounterPage} from 'Counter/CounterPage.jsx';
import {AboutPage} from 'About/AboutPage.jsx';

export default (
    <Route path = "/" component = {App}>
        {/*第一個為預設*/}
        <IndexRoute component = {CounterPage} />
        <Route path ="counter" component =  {CounterPage} />
        <Route path ="about/:name"  component = {AboutPage} />
    </Route>
);

 