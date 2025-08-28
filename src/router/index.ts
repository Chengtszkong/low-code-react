import type { RouteObject } from 'react-router-dom'
import MainLayout from '@/views/layout/MainLayout'
import Home from '@/views/Home'
import TemplateDetail from '@/views/TemplateDetail'
import Editor from '@/views/Editor'

const router: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      { path: '', Component: Home },
      { path: 'teamplate/:id', id: 'templateDetail', Component: TemplateDetail },
    ],
  },

  { path: '/editor', id: 'editor', Component: Editor },
]

export default router
