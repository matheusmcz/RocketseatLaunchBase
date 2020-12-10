const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg",
        name: '<a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        role: "Conquiste novas habilidades e seja reconhecido",
        description: "Uma jornada de aprendizado continuo, desafios e recompensas que vão te levar para o próximo nível."
    }


    return res.render("about", { about: about })
})

server.get("/portfolio", function (req, res) {

    return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function (video) {
        return video.id == id
    })

    if (!video) {
        return res.status(404).render("notfound")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function () {

    console.log("server is running")
})