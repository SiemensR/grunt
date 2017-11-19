module.exports = function (grunt) {

    // Волшебная строчка. Она творит магию.
    require('load-grunt-tasks')(grunt);

    var serveStatic = require('serve-static');

    grunt.initConfig({
        // Эта таска отслеживает изменения в файлах проекта
        // и запускает другие таски при необходимости.
        watch:{
  			options:{livereload:true},
  			files:['public/**','server/**'],
  			tasks:[]
  		},
    		express:{
    			all:{
    				options:{
    					port:3000,
    					hostname:'localhost',
    					bases:['./'],
    					livereload:true
    				}
    			}
    		}

    });

    // Регестрируем таску, которую можно вызвать с консоли.
    // По сути, под одним названием мы запускаем другие в указанном порядке.
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('default',['express','watch']);
};
