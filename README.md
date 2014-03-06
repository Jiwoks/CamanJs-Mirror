Camanjs Mirror plugin
========

Plugin for [http://camanjs.com/](http://camanjs.com/) to render mirror effect.

Include the js file and call it like other Caman plugins

```
Caman("#canvas-id", "path/to/image.jpg", function () {
  // manipulate image here set vertical to true will do a vertical mirroring otherwise it will be horizontal
  var vertical = false;
  this.mirror(5).render(vertical);
});
```
