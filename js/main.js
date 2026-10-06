// Section dots + case study modals. No dependencies.
(function () {
  var container = document.querySelector('.sections')
  var sections = Array.prototype.slice.call(document.querySelectorAll('.section'))
  var nav = document.querySelector('.dots')

  // Build one dot per section and highlight the one in view.
  var dots = sections.map(function (section, i) {
    var dot = document.createElement('a')
    dot.href = '#'
    dot.setAttribute('aria-label', 'Go to section ' + (i + 1))
    dot.addEventListener('click', function (e) {
      e.preventDefault()
      section.scrollIntoView()
    })
    nav.appendChild(dot)
    return dot
  })

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var i = sections.indexOf(entry.target)
          dots.forEach(function (dot, j) {
            dot.classList.toggle('active', i === j)
          })
        }
      })
    },
    { root: container, threshold: 0.6 }
  )
  sections.forEach(function (section) {
    observer.observe(section)
  })

  // Case studies open from "#<id>" links, so they can be linked to directly.
  function closeCase() {
    document.querySelectorAll('.showcase--active').forEach(function (el) {
      el.classList.remove('showcase--active')
    })
    document.querySelectorAll('.animate-circle').forEach(function (el) {
      el.classList.remove('animate-circle')
    })
  }

  function openCase(id) {
    var showcase = id && document.getElementById(id)
    var section = id && document.querySelector('.section[data-case="' + id + '"]')
    if (!showcase || !section) return
    section.scrollIntoView({ behavior: 'instant' })
    section.classList.add('animate-circle')
    showcase.scrollTop = 0
    showcase.classList.add('showcase--active')
    showcase.querySelector('.showcase__close').focus({ preventScroll: true })
  }

  function syncWithHash() {
    closeCase()
    openCase(location.hash.slice(1))
  }

  function clearHash() {
    history.pushState('', document.title, location.pathname + location.search)
    syncWithHash()
  }

  document.querySelectorAll('.showcase__close').forEach(function (button) {
    button.addEventListener('click', clearHash)
  })
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.querySelector('.showcase--active')) clearHash()
  })
  window.addEventListener('hashchange', syncWithHash)
  syncWithHash()
})()
