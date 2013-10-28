var eejs = require('ep_etherpad-lite/node/eejs')
  , express = require('ep_etherpad-lite/node_modules/express')

exports.expressServer = function(hook, args, cb) {
  args.app.get('/metrics', function(req, res) {
    res.send(eejs.require("ep_ether-o-meter/templates/metrics.html"))
  })
  
  args.app.use('/metrics/static', express.static(__dirname + '/static'))
}