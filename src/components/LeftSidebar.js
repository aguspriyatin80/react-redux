import React from 'react'
import { useSelector } from 'react-redux'

export default function LeftSidebar() {
    const name = useSelector(state => state.user.userInfo.name)
    return (
        <nav>
            {name}
        </nav>
    )
}
