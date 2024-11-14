// How Zone.js notifies angular for async requests

// Async - SetTimeout,SetInterval,Async Pipe,API Calls,Click Event


// Standard console log

 console.log(123);

//Monkey patched console log
const originalConsoleLog = console.log;

console.log = (...args) =>{
   originalConsoleLog(...args); // invokes the original copy

   // Adding Logic
   // Notify Angular to detect changes
   console.warn('Notify Angular to Render!');
   //notifyAngularToDetectChanges()
};

console.log(3456);
