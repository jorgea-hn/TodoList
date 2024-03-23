import TaskCard from "./TaskCard"


async function loadTask(){
    const res = await fetch(`${process.env.BACKEND_URL}/api/tasks/`)
    const tasks = await res.json()
    return tasks
}

async function ListTask() {
    const tasks = await loadTask()

    return (
        <div className="bg-slate-700 p-4 w-full">
            <h1>Lista de Tareas</h1>
            {tasks.map(task =>{
                return (
                <TaskCard task={task} key={task.id}/>
                )
            })}
        </div>

    )
}
export default ListTask