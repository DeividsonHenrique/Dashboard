import { LogoDiv, ToggleSidebarBtn } from './style.js';

function Logo() {
    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar')
    }

  return (
    <LogoDiv className='d-flex align-items-center justify-content-between'>
      <a href="/" className='d-flex align-items-center'>
        <span className='d-none d-lg-block'>AdminDashboard</span>
      </a>

      <ToggleSidebarBtn className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSidebar}></ToggleSidebarBtn>
    </LogoDiv>
  )
}

export default Logo
