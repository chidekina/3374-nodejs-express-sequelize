const express = require('express');
const people = require('./peopleRoute.js');
const categories = require('./categoriesRoute');
const courses = require('./')

module.exports = (app) => {
  app.use(express.json(), 
    people, 
    categories,
    courses
);
};
