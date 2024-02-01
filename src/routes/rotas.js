const express = require("express");
const { imprimirHeloWorld } = require("../controllers/helloworld");

const rotas = express();

rotas.get("/", imprimirHeloWorld);

module.exports = rotas;
