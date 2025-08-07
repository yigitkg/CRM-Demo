import { useState, useCallback } from 'react'

export const useToggle = (initialState = false): [boolean, () => void, (value?: boolean) => void] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggle = useCallback(() => setState(state => !state), [])
  
  const setToggle = useCallback((value?: boolean) => {
    setState(value !== undefined ? value : state => !state)
  }, [])

  return [state, toggle, setToggle]
}