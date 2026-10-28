import { tasks as initialTasks } from "./utils/data"
import { useState } from "react"

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
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox" className="cursor-pointer"
              checked={task.isCompleted}
              onChange={() => toggleTask(task.id)}
            />
            {task.title} - {task.isCompleted ? "Completo" : "Pendente"} | <button type="button" className="cursor-pointer" onClick={() => removeTask(task.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
