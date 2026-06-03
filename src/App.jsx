
import './App.css'
import Users from './components/users'
const userPromise = fetch( 'http://localhost:3000/users' )
  .then( response => response.json() )


function App ()
{

  return (
    <>
      <h1>User Management </h1>
      <Users userPromise={ userPromise } />
    </>
  )
}

export default App
