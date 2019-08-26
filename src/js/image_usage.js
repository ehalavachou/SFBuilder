function ImageLoader(imageDataArray, manager, callback){
	let self = this;
	self.length = imageDataArray.length;
	self.current = 0;
	function loadImage (imageProps) {
		let img = new window.Image();
		$(img).on('load', function () {
		    manager.addAsset({
                image: img,
                x: imageProps.x,
                y: imageProps.y,
                width: imageProps.width,
                height: imageProps.height,
                type: imageProps.type
            });
			if(self.current < self.length - 1){
				self.current++;
				loadImage(imageDataArray[self.current]);
			}else{
				if(callback != null) {
					callback();
				}
			}

		});
		img.src = imageProps.src;
	}
	
	this.load = function ()	{
		loadImage(imageDataArray[self.current]);
	}
}


let imageData = [
	{
	    type: "miner",
		src: '../src/assets/factory/machines/128px-Miner_MK1.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
        type: "smelter",
		src: '../src/assets/factory/machines/128px-Smelter.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
        type: "constructor",
		src: '../src/assets/factory/machines/128px-Constructor.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
        type: "assembler",
		src: '../src/assets/factory/machines/128px-Assembler.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
        type: "manufacturer",
		src: '../src/assets/factory/machines/128px-Manufacturer.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "iron-ore",
		src: '../src/assets/factory/machines/128px-Iron_Ore.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "iron-ingot",
		src: '../src/assets/factory/machines/128px-Iron_Ingot.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "cooper-ore",
		src: '../src/assets/factory/machines/128px-Copper_Ore.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "cooper-ingot",
		src: '../src/assets/factory/machines/128px-Copper_Ingot.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "iron-plate",
		src: '../src/assets/factory/machines/128px-Iron_Plate.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "iron-rod",
		src: '../src/assets/factory/machines/128px-Iron_Rod.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "wire",
		src: '../src/assets/factory/machines/128px-Wire.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "cable",
		src: '../src/assets/factory/machines/128px-Cable.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "limestone",
		src: '../src/assets/factory/machines/128px-Limestone.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "concrete",
		src: '../src/assets/factory/machines/128px-Concrete.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	},
	{
		type: "screw",
		src: '../src/assets/factory/machines/128px-Screw.png',
		x: 0,
		y: 0,
		width: 128,
		height: 128
	}
];
