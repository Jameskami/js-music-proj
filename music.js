var MusicMaker = {
	ctx : new (window.AudioContext || window.webkitAudioContext)(),
	osc : [],
	oscMaker : function(hertz) {
	  var index = this.osc.length;
	  this.osc[index] = this.ctx.createOscillator();
	  this.osc[index].frequency.value = hertz;
	  this.osc[index].connect(this.ctx.destination);
	  this.osc[index].start();
	  return index;
	},
	oscHandler : function(hertz) {
	  var index = this.oscMaker(hertz);
	  setTimeout(function(){MusicMaker.oscCanceller(index);},1000)
	},
	oscCanceller : function(index) {
	  this.osc[index].disconnect();
	}
}
















