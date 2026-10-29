import type { Task } from "../utils/types"
import TaskItem from "./TaskItem"

interface TaskListProps {
    tasks: Task[]
    toggleTask: (id: string) => void
    removeTask: (id: string) => void
}

export default function TaskList({ tasks, toggleTask, removeTask }: TaskListProps) {

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    removeTask={removeTask}
                />
            ))}
        </ul>
    )
}