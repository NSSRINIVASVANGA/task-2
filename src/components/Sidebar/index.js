import './index.css'

const Sidebar = () => {
    return(
        <ul className = "sidebar-con">
            <li className='sidebar-item'> Dashboard </li>
            <li className='sidebar-item'> Social </li>
            <li className='sidebar-item selected'> Analytics </li>
            <li className='sidebar-item'> Quick Stats </li>
        </ul>
    )
}

export default Sidebar