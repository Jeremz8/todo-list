import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import TodoList from './pages/AllTodo';

function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/todolist" exact>
          <TodoList />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
