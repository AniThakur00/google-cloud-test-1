const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.yaml'
const endpointsFiles = ['./index.js']

swaggerAutogen(outputFile, endpointsFiles)