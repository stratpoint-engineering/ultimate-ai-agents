'use client'
import { useEffect } from 'react'

export default function Browser() {
  useEffect(() => { window.location.replace('/browser.html') }, [])
  return null
}
