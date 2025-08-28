import { Dropdown } from 'antd'
import { Link } from 'react-router-dom'

const handleButtonClick = () => {}
const handleMenuClick = () => {}

const items = [{ label: '登出', key: 'logout' }]

const menuProps = {
  items,
  onClick: handleMenuClick,
}

function UserProfile() {
  return (
    <>
      <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
        <Link to="editor">名字</Link>
      </Dropdown.Button>
    </>
  )
}

export default UserProfile
