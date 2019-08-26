function ImageObject(name, imageData) {
    let self = this;

    self.name = name;
    self.imageData = Object.assign({}, imageData);

    self.getObjBox = function() {
        return {
          x: self.imageData.x,
          y: self.imageData.y,
          width: self.imageData.width,
          height: self.imageData.height
        };
    };

    self.draw = function (ctx) {
        ctx.drawImage(self.imageData.image, self.imageData.x, self.imageData.y, self.imageData.width, self.imageData.height);
    };
}
