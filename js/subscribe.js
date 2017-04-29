input = document.querySelector "input"
form = document.querySelector "form"
indicator = document.querySelector ".indicator"
loader = document.querySelector ".loader"
content = input.value

form.addEventListener "submit", (e) ->
  e.preventDefault()
  indicator.setAttribute "data-content", "Saving..."
  loader.classList.add "full"
  setTimeout (
    ->
      indicator.setAttribute "data-content", "You've been subscribed!"
      loader.classList.add "done"
      input.classList.add "full"
      input.value ""
  ), 3000

input.addEventListener "input", ->
  indicator.setAttribute "data-content", "Now hit enter!"

balapaCop "Subscribe Form Interaction", "#999"
