var express = require('express')
  , logger = require('morgan')
  , app = express()
  , myriad = require('jade').compileFile(__dirname + '/source/templates/index.jade')
  , news_sources = require('jade').compileFile(__dirname + '/source/templates/news_sources.jade')
  , settings = require('jade').compileFile(__dirname + '/source/templates/managesources.jade')
  , signin = require('jade').compileFile(__dirname + '/source/templates/signin.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
        var html = signin( {title: 'Myriad - Sign In'})
        res.send(html)
    } catch (e) {
        next(e)
    }
})

app.get('/myriad/', function(req, res, next) {
  try {
    var html = myriad( {title: 'Myriad'})
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/settings', function(req, res, next) {
  try {
    var html = settings( {title: 'Myriad - Settings'})
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/signin', function(req, res, next) {
    try {
        var html = signin( {title: 'Myriad - Sign In'})
        res.send(html)
    } catch (e) {
        next(e)
    }
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 5000))
})
