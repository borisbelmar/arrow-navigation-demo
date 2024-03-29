import "./styles.css"
import { initArrowNavigation } from "@arrow-navigation/core"

const arrowNavigationApi = initArrowNavigation({
  initialFocusElement: 'group-1-button-0'
})

const app = document.createElement('main')
app.setAttribute('id', 'app')
app.classList.add('flex', 'flex-row', 'w-screen', 'h-screen', 'bg-gray-800', 'relative', 'items-center', 'overflow-hidden')
document.body.appendChild(app)

const group0Container = document.createElement('container')
app.appendChild(group0Container)
group0Container.setAttribute('id', 'group-0')
group0Container.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'h-full', 'p-4', 'bg-gray-600', 'gap-4')
arrowNavigationApi.registerGroup(group0Container.id)

Array.from(Array(6).keys()).forEach(index => {
  const button = document.createElement('button')
  group0Container.appendChild(button)
  button.setAttribute('id', `group-0-button-${index}`)
  button.classList.add('bg-blue-500', 'text-white', 'w-16', 'h-16', 'rounded', 'focus:outline-none', 'flex', 'focus:bg-yellow-500', 'justify-center', 'items-center', 'text-2xl', 'font-bold', 'disabled:opacity-50')
  button.innerText = index
  arrowNavigationApi.registerElement(button.id, 'group-0')
})

// Other Groups container

const rightSideContainer = document.createElement('container')
app.appendChild(rightSideContainer)
rightSideContainer.classList.add('space-y-6', 'ml-6')

const generateRightGroup = (groupIdx, qty, disabled) => {
  const groupId = `group-${groupIdx}`
  const groupContainer = document.createElement('container')
  rightSideContainer.appendChild(groupContainer)
  groupContainer.setAttribute('id', groupId)
  arrowNavigationApi.registerGroup(groupContainer.id)
  groupContainer.classList.add('flex', 'flex-row', 'justify-start', 'items-center', 'p-4', 'bg-gray-500', 'gap-4')

  Array.from(Array(qty).keys()).forEach(elementIndex => {
    const button = document.createElement('button')
    if (disabled) {
      button.setAttribute('disabled', true)
    }
    groupContainer.appendChild(button)
    button.setAttribute('id', `group-${groupIdx}-button-${elementIndex}`)
    button.classList.add('bg-blue-500', 'text-white', 'w-32', 'h-16', 'rounded', 'focus:outline-none', 'flex', 'focus:bg-yellow-500', 'justify-center', 'items-center', 'text-2xl', 'font-bold', 'disabled:opacity-50')
    button.innerText = elementIndex
    arrowNavigationApi.registerElement(button.id, groupId)
  })
}

generateRightGroup(1, 5)
generateRightGroup(2, 3)
generateRightGroup(3, 4)
generateRightGroup(4, 2, true)
generateRightGroup(5, 1)
generateRightGroup(6, 5)

document.getElementById('group-0-button-3').setAttribute('disabled', true)
document.getElementById('group-1-button-2').setAttribute('disabled', true)
document.getElementById('group-3-button-0').setAttribute('disabled', true)
