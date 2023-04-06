document.addEventListener("click", (element) => {
  if (!element.srcElement.innerHTML.includes("body")) {
    console.log(element.srcElement.innerHTML)
    element.srcElement.remove()
  }
})
