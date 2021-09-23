import React from 'react'
import { useSelector } from 'react-redux'
import Update from './Update'

export default function Content() {
    const name = useSelector(state => state.user.name)
    return (
        <article>
            <h3>My name is, {name}</h3>
            <Update />
        </article>
    )
}
