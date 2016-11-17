var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
  , myriad = require('jade').compileFile(__dirname + '/source/templates/index.jade')
  , news_sources = require('jade').compileFile(__dirname + '/source/templates/news_source.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
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

app.get('/news_source', function(req, res, next) {
  try {
    var html = news_source( {title: 'Myriad'})
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
