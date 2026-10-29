import { tasks as initialTasks } from "./utils/data"
import { useState } from "react"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks] = useState(initialTasks)

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600">Gestor de Tarefas</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask}/>
    </>
  )
}

export default App
