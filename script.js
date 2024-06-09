const checkBtn = document.getElementById("check-btn")
const inputTextEl = document.getElementById("text-input")
const resultDivEl = document.getElementById("result")

checkBtn.addEventListener("click", () => {
  if (inputTextEl.value === "") {
    alert("Please input a value")
    return
  }

  const inputText = inputTextEl.value
  const formattedInputText = formatText(inputText)
  const reversedInputText = formattedInputText.split("").reverse().join("")

  if (formattedInputText === reversedInputText) {
    resultDivEl.textContent = `${inputText} is a palindrome`
  } else {
    resultDivEl.textContent = `${inputText} is not a palindrome`
  }
})

function formatText(text) {
  let formattedText
  const regex = /[^a-z0-9]/g

  formattedText = text.toLowerCase()
  formattedText = formattedText.replace(regex, "")

  return formattedText
}