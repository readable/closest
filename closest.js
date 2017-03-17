/* global Node Element */

Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector

Element.prototype.closest = Element.prototype.closest || function (selector) {
  var suspect = this

  while (suspect && suspect.nodeType === Node.ELEMENT_NODE) {
    if (suspect.matches(selector)) { return suspect }
    suspect = suspect.parentNode
  }

  return null
}
