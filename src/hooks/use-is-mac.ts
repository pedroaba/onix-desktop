import { useSyncExternalStore } from 'react'

function subscribe() {
  return () => {}
}

function getPlatform() {
  return /Macintosh|Mac OS/.test(navigator.userAgent)
}

export function useIsMac() {
  return useSyncExternalStore(subscribe, getPlatform, () => false)
}
