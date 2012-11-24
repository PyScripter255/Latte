#Latte
##Node.js routing skin
##Install
With npm:
```javascript
npm install git://github.com/PyScripter255/Latte.git
```
##Usage
Very simple

1. Require Latte:

```javascript
var latte = require('latte')
```
2. Create an app:

```javascript
var app = latte.app()
```
3. Define request handlers:

```javascript
app.route(url, function(req, res){
...
})
```
4. Start the server:

```javascript
app.start(port)
```