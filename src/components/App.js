
import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

////////------------react routes-----------------
  const router = createBrowserRouter([
    {
      path :'/',
      element : <div>Root element</div>
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
