const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.get('/api',(req,res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(3000, () => {
    console.log('Servidor en el puerto 3000')
})
