import { useRef, useCallback } from 'react'
import contains from 'dom-helpers/contains'

export default function useOutsideClickListener (enabled, callback) {
  const cleanupRef = useRef()

  // Note: useCallback() is better than useRef() for this because it will be notified if the element is recreated by
  // React without unmounting its component (e.g. this happens when an element is rendered into a portal when it was
  // previously rendered somewhere else).
  return useCallback((el) => {
    if (cleanupRef.current) {
      cleanupRef.current()
      cleanupRef.current = null
    }

    if (el && enabled) {
      const onBodyClick = (e) => {
        if (!contains(el, e.target)) {
          callback()
        }
      }
      document.body.addEventListener('click', onBodyClick)
      cleanupRef.current = () => {
        document.body.removeEventListener('click', onBodyClick)
      }
    }
  }, [enabled, callback])
}
