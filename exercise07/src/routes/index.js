import express from 'express'

function setupRoutes(app) {
  app.use('/', (req, res) => res.send("Hello!"))
}

export default setupRoutes
