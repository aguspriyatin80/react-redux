import React from 'react'
import { listUser } from '../redux/apiCalls'
export default function UserList() {
    return (
        <div>
            {listUser}
        </div>
    )
}

