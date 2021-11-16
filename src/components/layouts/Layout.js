import React from 'react'
import './Layout.css'
import Auxx from '../../hoc/Auxx'
const layout = (props) => (
    <Auxx>
    <div>Toolbar, sideBar, Backdrop</div>
    <main className='Content'> 
        {props.children}
    </main>
    </Auxx>
)
export default layout