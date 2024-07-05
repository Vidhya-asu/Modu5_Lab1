//Vidhyalakshmi PE
//Student ID: 1216804810 
//Date: 7/5/2024

//This is a simple middleware function

function myMiddleware(req, res, next) {
    console.log('Middleware executed');
    next(); // Proceed to the next middleware
  }

  module.exports = myMiddleware;
