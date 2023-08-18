import './App.css'
import CounterView from './features/counter/CounterView'
import PostsView from './features/posts/PostsView'

function App() {

  return (
    <>
      <h1>Welcome to Redux-Toolkit</h1>
      <h2>Counter App</h2>
      <CounterView></CounterView>
      <PostsView></PostsView>
    </>
  )
}

export default App
