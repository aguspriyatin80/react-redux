import React from 'react'
import Content from './Content'
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

export default function Main() {
    return (
        <div id="main">
            <Content />
            <LeftSidebar />
            <RightSidebar />
        </div>
    )
}
