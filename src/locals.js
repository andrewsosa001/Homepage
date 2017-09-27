// locals.js
var locals = {};

locals.css = "./css";
locals.img = "./assets/img";

locals.github = "http://github.com/";
locals.me = "andrewsosa";

locals.involvement = require('./json/involvement');
locals.design = require('./json/design');

locals.footer = {
    blog: "http://medium.com/@andrewsosa001",
    contact: "mailto:andrew@andrewsosa.com",
    github: locals.github + locals.me,
    resume: "https://drive.google.com/open?id=0B035Fv5BTkCtTnM3WldfUHVhODg"
}


module.exports = locals;
