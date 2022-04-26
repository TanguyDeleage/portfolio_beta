function scrollHeader() {
  const link = document.querySelectorAll('nav_links')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) link.classList.add('.here'); else link.classList.remove('.here')
}
window.addEventListener('scroll', scrollHeader)
