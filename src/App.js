import Eisenhover from './components/Eisenhover'
import NewTodo from './components/NewTodo'
import Stats from './components/Stats'
import TodoList from './components/TodoList'

function App() {
  return (
    <main>
      <div className='flex'>
        <NewTodo />
        <Stats />
      </div>
      <Eisenhover />
      <TodoList />
    </main>
  )
}

export default App
