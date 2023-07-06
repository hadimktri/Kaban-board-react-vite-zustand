/* eslint-disable react/prop-types */
import  { useState } from 'react'
import './column.css'
import { Task } from './Task'
import { useStore } from '../store'
import classNames from 'classnames'

export default function Column({ state }) {
    const [popInput, setPopInput] = useState(false)
    const [title, setTitle] = useState('')
    const [overColumn, setOverColumn] = useState(false)
    const tasks = (useStore((store) => store.tasks)).filter(task => task.state === state)
    const addTask = useStore((store) => store.addTask)
    const dragged = useStore(store => store.dragged)
    const dropTask = useStore(store => store.dropTask)

    return (
        <div className={classNames('column', { overColumn: overColumn })}
            onDragOver={e => { e.preventDefault(); setOverColumn(true) }}
            onDragLeave={e => { e.preventDefault(); setOverColumn(false) }}
            onDrop={() => { dropTask(dragged, state); setOverColumn(false) }}
        >
            <div className='topCol' >
                <p className='state'  >{state}</p>
                <p onClick={() => { setPopInput(state) }} className='add'><i className="bi bi-plus-lg"></i></p>
            </div>

            {tasks.map(task => <Task task={task} key={task.title} />)}

            {popInput && <div className='modal'>
                <div className='input'>
                    <button onClick={() => { addTask(title, state); setTitle(''); setPopInput(false) }}><i className="bi bi-plus"></i></button>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <button className='close' onClick={() => setPopInput(false)}><i className="bi bi-x-lg"></i></button>
            </div>}

        </div>
    )
}
