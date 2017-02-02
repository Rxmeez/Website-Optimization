# Steps taken for Website Optimization

## index.html
1. Reduced image file size (Compression & Resizing)
2. Inline CSS & Minify By Using Grunt
3. CSS & Media Query
4. Async Javascript & Minify By Using Grunt
5. Minify HTML File

## views/pizza.html
1. Reduced Image File Size (Compression & Resizing)
2. Inline CSS & Javascript Minify by using Grunt
5. Minify HTML File

## views/js/main.js
1. Javascript Clear Unnecessary JS Operation (Loops)
* Using getElementById instead of querySelector
* Moved changeSliderLabel outsize of resizePizzas function
* Identify values that where constant in loop and cached outside.
2. Replaced the fixed number of pizzas by looking at height of the screen and fix appropriate number of pizzas in.

## Getting started
### Setting up a python server, ngrok & Grunt

Check out the repository
To inspect the site on your phone, you can run a local server

```
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
```

Open a browser and visit localhost:8080
Download and install ngrok to the top-level of your project directory to make your local server accessible remotely.

```
$> cd /path/to/your-project-folder
$> ./ngrok http 8080
```

Copy the public URL ngrok gives you (https) and run PageSpeed Insights!
Run package.json file

```
$ npm install
```

Install Grunt

```
$ npm install grunt --save-dev
$ npm install -g grunt-cli
```

Run Gruntfile to minify, uglify and optimize images

```
$ grunt
```
