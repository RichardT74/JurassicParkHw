const Park = function
	(name, ticketPrice) {
		this.name = name;
		this.ticketPrice = ticketPrice;
		this.dinosaurArray = [];
	}


	Park.prototype.addDinosaur = function (dinosaur) {
	  this.dinosaurArray.push(dinosaur);
	};


	Park.prototype.removeDinosaur = function (dinosaur) {
	  this.dinosaurArray.pop(dinosaur);
	};
	
	module.exports = Park;
