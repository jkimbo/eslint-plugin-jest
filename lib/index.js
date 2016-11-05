/**
 * @fileoverview Eslint plugin for Jest
 * @author Jonathan Kim
 */
'use strict';

var path = require('path');

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(path.join(__dirname, 'rules'));
