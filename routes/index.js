const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// Load User model
const User = require('../models/User');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
//register page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));
//login page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
//add page
router.get('/add', forwardAuthenticated, (req, res) => res.render('employee/employeeAdd'));
//contact page

router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user,
    
  })
);

module.exports = router;
