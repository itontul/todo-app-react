import Eisenhover from './components/Eisenhover'
import NewTodo from './components/NewTodo'
import Stats from './components/Stats'
import TodoList from './components/TodoList'
import { Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import KanbanBoard from './components/Kanban/KanbanBoard'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.body}>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className={styles.header}>
                <NewTodo />
                <Stats />
              </div>
              <Eisenhover />
              <TodoList />
            </>
          }
        />
        <Route path='todo/:id' element={<KanbanBoard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </main>
  )
}

export default App
