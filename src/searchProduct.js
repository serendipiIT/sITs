import { levenshtein } from './levenshtein'

// Kör med globala variabler
let searchTerm

/**
 * @param {Array} itemList
 * @param {String} searchTerm
 * @returns {Object} Returns two keys, dym: list of searchTerms that are close and sorted itemList by search.
 */
export function search(itemList, str) {
  searchTerm = str.toLowerCase()
  // https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
  const newArr = JSON.parse(JSON.stringify(itemList))
  newArr.sort(sortCategoriesByDistance)

  let suggestedSearchTerms = filterCategorySuggestions(newArr)
  // filterCategorySuggestions(newArr)

  const relevantsortedByDistance = newArr
    .map((product) => {
      const titleArr = product.title.toLowerCase().split(' ')
      titleArr.sort(sortByWord)
      const distanceToWord = levenshtein(searchTerm, titleArr[0])
      if (distanceToWord < product.distance) {
        product.distance = distanceToWord
      } else if (product.title.startsWith(searchTerm)) {
        product.distance = 0
      }
      return product
    })
    .sort(sortByDistance)

  let relevant = filterRelevant(relevantsortedByDistance)
  return {
    itemList: relevant,
    suggestions: suggestedSearchTerms || '',
  }
}

function sortCategoriesByDistance(productA, productB) {
  const distanceA = levenshtein(searchTerm, productA.category2.toLowerCase())
  const distanceB = levenshtein(searchTerm, productB.category2.toLowerCase())
  productA.distance = distanceA
  productB.distance = distanceB
  if (distanceA > distanceB) return 1
  if (distanceA < distanceB) return -1
  return 0
}

function sortByDistance(a, b) {
  if (a.distance > b.distance) return 1
  if (a.distance < b.distance) return -1
  return 0
}

function sortByWord(a, b) {
  const levenshteinA = levenshtein(searchTerm, a)
  const levenshteinB = levenshtein(searchTerm, b)
  if (levenshteinA > levenshteinB) return 1
  if (levenshteinA < levenshteinB) return -1
  return 0
}

function isDistanceBelowFour(obj) {
  return obj.distance < 4
}

function isDistanceBelowTwo(obj) {
  return obj.distance < 2
}

function isMatch(obj) {
  return obj?.distance === 0
}

function filterCategorySuggestions(arr) {
  const categoryStartsWithMatch = arr.find((product) =>
    product.category2.toLowerCase().startsWith(searchTerm),
  )

  const filteredArray = arr
    .filter((item) => isDistanceBelowFour(item))
    .filter((item) => !isMatch(item))

  categoryStartsWithMatch && filteredArray.push(categoryStartsWithMatch)

  return [...new Set(filteredArray.map((item) => item.category2))]
}

function filterRelevant(arr) {
  return arr.filter((item) => isDistanceBelowTwo(item))
}
