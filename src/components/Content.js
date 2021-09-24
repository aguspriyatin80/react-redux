import React from 'react'
import { useSelector } from 'react-redux'
import Update from './Update'
import UserList from './UserList'

export default function Content() {
    const name = useSelector(state => state.user.userInfo.name)
    return (
        <article>
            <h3>My name is, {name}</h3>
            <Update />
            {/* <UserList /> */}
        </article>
    )
}
