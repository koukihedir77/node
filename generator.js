var generator = require('generate-password');
var password = generator.generate({

    length : 10,
    numbers: false,
    uppercase : true, 
    lowercase : false
});
console.log(password);
