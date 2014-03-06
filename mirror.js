Caman.Plugin.register("mirror",function(vertical){
    var canvas, ctx, id;
    
    copyAttributes = function(from, to, opts) {
        var attr, _i, _len, _ref, _ref1, _results;
        if (opts == null) {
          opts = {};
        }
        _ref = from.attributes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          attr = _ref[_i];
          if ((opts.except != null) && (_ref1 = attr.nodeName, __indexOf.call(opts.except, _ref1) >= 0)) {
            continue;
          }
          _results.push(to.setAttribute(attr.nodeName, attr.nodeValue));
        }
        return _results;
      };
      
     
    // Support NodeJS by checking for exports object
    if (typeof exports !== "undefined" && exports !== null) {
      canvas = new Canvas(this.dimensions.width, this.dimensions.height);
    } else {
      canvas = document.createElement('canvas');
      copyAttributes(this.canvas, canvas);
      canvas.width = this.dimensions.width;
      canvas.height = this.dimensions.height;
    }                
    ctx = canvas.getContext('2d');
    
    if(vertical==true){
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1)
    }else{
        ctx.translate(canvas.width,0);
        ctx.scale(-1, 1)
    }
    
    ctx.drawImage(this.canvas, 0, 0);
    return this.replaceCanvas(canvas);
});

Caman.Filter.register("mirror", function() {
  this.processPlugin("mirror", arguments);
});
