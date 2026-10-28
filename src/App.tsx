import { tasks as initialTasks} from "./utils/data"
import { useState } from "react"

function App() {
  
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600">Gestor de Tarefas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            Tarefa: {task.title} - Estado: {task.isCompleted ? "Completo" : "Pendente"}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
