export const useMobileMenu = () => {
  const isOpen = useState('mobileMenuOpen', () => false)

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const closeMenu = () => {
    isOpen.value = false
  }

  const openMenu = () => {
    isOpen.value = true
  }

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  }
}
