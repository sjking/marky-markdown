var imageRule = require('../rules/inline_rules/image')

module.exports = function (md, options) {
  // Override the markdown-it image rule to allow spaces in src attribute:
  //  e.g., ![Gitter](https://badges.gitter.im/Join Chat.svg)
  //
  // Unfortunately, there was no way to hook into the parsing of the src
  // attribute, or "link destination", for image elements.

  var ruler = md.inline.ruler
  // Note: location of original rule below
  //  i.e., `var originalRule = ruler.__rules__[ruler.__find__('image')].fn`

  ruler.at('image', function (state, startLine, endLine, silent) {
    return imageRule.apply(this, arguments)
  })
}
