import type { RouteObject } from 'react-router-dom'
import MainLayout from '@/views/layout/MainLayout'
import Home from '@/views/Home'
import TemplateDetail from '@/views/TemplateDetail'
import Editor from '@/views/Editor'

const router: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'teamplate/:id', id: 'templateDetail', element: <TemplateDetail /> },
    ],
  },
  { path: '/editor', id: 'editor', element: <Editor /> },
]

export default router
