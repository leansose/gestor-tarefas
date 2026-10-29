import type { Task } from "../utils/types"


interface TaskItemProps {
    task: Task
    toggleTask: (id: string) => void
    removeTask: (id: string) => void
}


export default function TaskItem({ task, toggleTask, removeTask }: TaskItemProps) {

    return (
        <li>
            <input
                type="checkbox" className="cursor-pointer"
                checked={task.isCompleted}
                onChange={() => toggleTask(task.id)}
            />
            {task.title} - {task.isCompleted ? "Completo" : "Pendente"} | <button type="button" className="cursor-pointer" onClick={() => removeTask(task.id)}>
                delete
            </button>
        </li>
    )
}