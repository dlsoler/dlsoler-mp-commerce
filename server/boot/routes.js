'use strict'; // eslint-disable-line func-call-spacing

const express = require('express');
const path = require('path');

module.exports = function(app) {
  // To serve static files
  app.use('/', express.static(path.join(__dirname, '../../client')));
};
