
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./udixio-theme.cjs.production.min.js')
} else {
  module.exports = require('./udixio-theme.cjs.development.js')
}
