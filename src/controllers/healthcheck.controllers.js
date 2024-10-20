const healthCheck = (request, response) => {
  return response.json({
    message: "Welcome to nodejs and expressjs application"
  })
}

export { healthCheck }