export const getLSItem = key => {
  if (typeof window === 'undefined') {
    return
  }

  return localStorage.getItem(key)
}
