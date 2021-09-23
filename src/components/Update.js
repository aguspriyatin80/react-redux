import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addHello, remove, update } from '../redux/userSlice'

export default function Update() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleUpdate = (e) => {
        e.preventDefault()
        // dispatch(update({ name, email }))
        dispatch(addHello({ name, email }))
    }
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(remove())

    }
    return (
        <form>
            <h2>Update User</h2>
            <hr />
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="username" placeholder={user.name} />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder={user.email} />
            </div>
            <button onClick={handleUpdate} className="btn btn-primary">Update</button> {` `}
            <button onClick={handleDelete} className="btn btn-primary">Delete</button>
        </form>
    )
}
