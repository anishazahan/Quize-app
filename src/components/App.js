

import {createBrowserRouter,RouterProvider} from 'react-router-dom'

////////------------import component-----------------

import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/Helper';


////////------------react routes-----------------
  const router = createBrowserRouter([
    {
      path :'/',
      element : <Main></Main>
    },
    {
      path :'/quiz',
      element : <CheckUserExist><Quiz></Quiz></CheckUserExist>  
    },
    {
      path :'/result',
      element :  <CheckUserExist><Result></Result></CheckUserExist>
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
