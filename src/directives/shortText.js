export default function (element, binding) {
  const text = binding.value.text
  const maxChars = binding.value?.chars ? binding.chars - 3 : 30
  element.innerText = text.length >= 30 ? text.slice(0, maxChars) + '...' : text
}
