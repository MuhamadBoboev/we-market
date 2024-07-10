'use client'
import { NotFoundPage } from '@shared/ui/NotFoundPage'
import { useEffect } from 'react'

function NotFound() {
  useEffect(() => {
    if (window.document) {
      window.document.title = 'Страница не найдена | We Market'
    }
  }, [])

  return <NotFoundPage/>
}

export default NotFound