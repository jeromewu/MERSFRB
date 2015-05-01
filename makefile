all: compile

run:
	node app.js

compile:
	browserify . > public/js/bundle.js

watch:
	watchify -o public/js/bundle.js -v -d .
