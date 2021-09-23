import React from 'react'
import { useSelector } from 'react-redux'

export default function RightSidebar() {
    const name = useSelector(state => state.user.name)
    return (
        <aside>
            {name}
        </aside>
    )
}
