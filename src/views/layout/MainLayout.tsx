import { Outlet } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import { Layout } from 'antd'
import type React from 'react'

const { Header, Content, Footer } = Layout

const headerStyle: React.CSSProperties = {}

const contentStyle: React.CSSProperties = {
  minHeight: 'calc(100% - 128px)',
  padding: '24px',
}

const layoutStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: '#fff',
}

function MainLayout() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <HeaderLayout />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer> ©️ Chengtszkong 版权所有 </Footer>
    </Layout>
  )
}

export default MainLayout
