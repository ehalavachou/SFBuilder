function Drawer(canvas) {

    let self = this;
    self.frame = canvas.getFrame();
    self.ctx = canvas.getContext('2d');
    self.frameObjects = [];

    this.clearAndDraw = function (object) {
        self.ctx.clearRect(0, 0, canvas.width, canvas.height);
        object.draw(self.ctx);
    };

    this.drawObj = function (object) {
        object.draw(self.ctx);
    };

    this.refreshFrame = function () {
        self.ctx.clearRect(0, 0, self.frame.width(), self.frame.height());
        self.frameObjects.forEach(frameObject => {self.drawObj(frameObject)});
    };

    this.addObject = function (object) {
        $(self.ctx.canvas).on('mousedown.' + object.name, object.isIntersect);
        self.frameObjects.push(object);
    };

    this.removeObject = function (object) {
        $(self.ctx.canvas).off('mousedown.' + object.name, object.isIntersect);
        remove(object);
    };

    function remove(object) {
        let index = self.frameObjects.indexOf(object);
        if (index > -1) {
            self.frameObjects.splice(index, 1);
        }
    }

}


function BackgroundDrawer(canvas, imageData) {
    Drawer.apply(this, arguments);

    let self = this;

    self.drawBg = function() {
        let gridVal = $(ids.settings).data("grid-size");
        let xSnapPointNumber = Math.floor(self.ctx.canvas.width / gridVal);
        let ySnapPointNumber = Math.floor(self.ctx.canvas.height / gridVal);
        for(let i = 0; i < xSnapPointNumber; i++) {
            for(let j = 0; j < ySnapPointNumber; j++) {
                self.ctx.beginPath();
                self.ctx.arc(i * gridVal, j * gridVal, 1, 0, Math.PI * 2, true);
                self.ctx.closePath();
                self.ctx.fillStyle = this.color;
                self.ctx.fill();
            }
        }
    }
}

function Frame(id, width, height, styles) {
    let frame = document.getElementById(id);
    this.width = frame.width = width;
    this.height = frame.height = height;
    $(frame).addClass(styles.join(" "));
    console.log("frame initialized");

    this.getContext = function (contextType) {
        return frame.getContext(contextType);
    };

    this.getFrame = function () {
        return $(frame);
    }
}
