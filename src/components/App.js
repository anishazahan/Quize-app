
import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

////////------------import component-----------------

import Main from './Main';

////////------------react routes-----------------
  const router = createBrowserRouter([
    {
      path :'/',
      element : <Main></Main>
    },
    {
      path :'/quiz',
      element : <div>quize element</div>
    },
    {
      path :'/result',
      element : <div>result element</div>
    }
  ])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
