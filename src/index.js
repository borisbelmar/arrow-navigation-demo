import './styles.css'
import { initArrowNavigation } from '@borisbelmar/arrow-navigation'

const arrowNavigationApi = initArrowNavigation()

const body = document.querySelector('body')
body.classList.add('bg-gray-800', 'h-screen', 'flex', 'flex-col', 'justify-center', 'items-center')

const createButton = text => {
  const button = document.createElement('button')
  button.classList.add(
    'bg-teal-500',
    'hover:bg-teal-700',
    'text-white',
    'font-bold',
    'p-4',
    'rounded',
    'focus:outline-none',
    'focus:shadow-outline',
    'focus:ring-2',
    'focus:ring-orange-600'
  )
  button.textContent = text
  arrowNavigationApi.registerElement(button)
  return button
}

const createGrid = (...classList) => {
  const gridContainer = document.createElement('div')
  gridContainer.classList.add('grid', 'grid-cols-3', 'gap-4', 'w-1/2', ...classList)

  Array.from({ length: 9 }, (_, i) => {
    const button = createButton(i + 1)
    gridContainer.appendChild(button)
    return button
  })

  return gridContainer
}

Array.from({ length: 3 }, _ => {
  const grid = createGrid('mb-8')
  body.appendChild(grid)
})

const absoluteButton = createButton('Absolute')
absoluteButton.classList.add('absolute', 'bottom-4', 'right-4', 'm-8', 'bg-orange-500', 'focus:ring-green-500')

body.appendChild(absoluteButton)

const absoluteButton2 = createButton('Absolute')
absoluteButton2.classList.add('absolute', 'top-4', 'left-2', 'm-8', 'bg-purple-500', 'focus:ring-red-500')

body.appendChild(absoluteButton2)

