var MusicMaker = {
	ctx : new (window.AudioContext || window.webkitAudioContext)(),
	osc : [],
	gainNode : {},
	oscMaker : function(hertz) {
	  var index = this.osc.length;
	  this.osc[index] = this.ctx.createOscillator();
	  this.osc[index].connect(gainNode);
	  gainNode.connect(this.ctx.destination);
	  this.osc[index].frequency.value = hertz;
	  //this.osc[index].connect(this.ctx.destination);
	  this.osc[index].start();
	  return index;
	},
	setGain : function(val) {
		gainNode = this.ctx.createGain();
		gainNode.gain.value = val;
	},
	oscHandler : function(hertz) {
	  var index = this.oscMaker(hertz);
	  setTimeout(function(){MusicMaker.oscCanceller(index);},1000)
	},
	oscCanceller : function(index) {
	  this.osc[index].disconnect();
	}
}
var Notes = {
    //Musical scales
    // maj I, min III
    major : [1,0,1,0,1,1,0,1,0,1,0,1],
    // maj VI, min I
    minor : [1,0,1,1,0,1,0,1,1,0,1,0],
    mHormonic : [1,0,1,1,0,1,0,1,1,0,0,1],
    doubleHormonic : [1,1,0,0,1,1,0,1,1,0,0,1],
    //maj V, minor VII
    mixolydian : [1,0,1,0,1,1,0,1,0,1,1,0],
    //maj VII, min II
    locrian : [1,1,0,1,0,1,1,0,1,0,1,0],
    //maj III, min V
    phrygian : [1,1,0,1,0,1,0,1,1,0,1,0],
    // maj IV, min VI
    lydian : [1,0,1,0,1,0,1,1,0,1,0,1],
    // maj II, min IV
    dorian : [1,0,1,1,0,1,0,1,0,1,1,0],
    
    //Chromatic musical tones
    noteStream :  [],
    notesByOctave :  [],
    
    setNoteStream : function() {
        var temp = [];
        var a = Math.pow(2.0,1.0/12.0);
        for( var i = 0; i < 85; i++ ) 
        {
           temp[i] = 440.0 * Math.pow(a,i-45);
        } 
        this.noteStream = temp;
    },
    setNotesByOctave : function(){}
}

var Harmony = function(){
    //Chords
    this.I = [];
    this.II = [];
    this.III = [];
    this.IV = [];
    this.V = [];
    this.VI = [];
    this.VII = [];
    // the scale 
    this.scale = [];
    
    this.setScale = function(notes, scalePattern, root) {
        var temp = [];
        var count = 0;
        for(var i = root, j = 0; i < notes.noteStream.length; i++, j++) {
            if(scalePattern[j % 12] == 1) {
                temp[count++] = notes.noteStream[i];
            }
        }
        this.scale = temp;
        this.setChords(this.scale);
    }
    this.setChords = function(mode) {
        var temp1 = [];
        var temp2 = [];
        var temp3 = [];
        var temp4 = [];
        var temp5 = [];
        var temp6 = [];
        var temp7 = [];
        var one = 0;
        var two = 0;
        var three = 0;
        var four = 0;
        var five = 0;
        var six = 0;
        var seven = 0;
        for(var i = 24-12; i < mode.length-12; i++) {
            //I see no switch statement in docs for chucK
            if(i%7 == 0)
            {
                temp1[one] = mode[i];
                one++;
                if(four >= 2)
                {
                    temp4[four] = mode[i];
                    four++;
                }
                if(six >= 1)
                {
                    temp6[six] = mode[i];
                    six++;
                }
            }
            if(i%7 == 1)
            {
                temp2[two] = mode[i];
                two++;
                if(five >= 2)
                {
                    temp5[five] = mode[i];
                    five++;
                }
                if(seven >= 1)
                {
                    temp7[seven] = mode[i];
                    seven++;
                }
            }
            if(i%7 == 2)
            {
                temp3[three] = mode[i];
                three++;
                if(six >= 2)
                {
                    temp6[six] = mode[i];
                    six++;
                }
                if(one >= 1)
                {
                    temp1[one] = mode[i];
                    one++;
                }
            }
            if(i%7 == 3)
            {
                temp4[four] = mode[i];
                four++;
                if(seven >= 2)
                {
                    temp7[seven] = mode[i];
                    seven++;
                }
                if(two >= 1)
                {
                    temp2[two] = mode[i];
                    two++;
                }
            }
            if(i%7 == 4)
            {
                temp5[five] = mode[i];
                five++;
                if(one >= 2)
                {
                    temp1[one] = mode[i];
                    one++;
                }
                if(three >= 1)
                {
                    temp3[three] = mode[i];
                    three++;
                }
            }
            if(i%7 == 5)
            {
                temp6[six] = mode[i];
                six++;
                if(two >= 2)
                {
                    temp2[two] = mode[i];
                    two++;
                }
                if(four >= 1)
                {
                    temp4[four] = mode[i];
                    four++;
                }
            }
            if(i%7 == 6)
            {
                temp7[seven] = mode[i];
                seven++;
                if(three >= 2)
                {
                    temp3[three] = mode[i];
                    three++;
                }
                if(five >= 1)
                {
                    temp5[five] = mode[i];
                    five++;
                }
            }
        }
         this.I = temp1; 
         this.II = temp2; 
         this.III = temp3; 
         this.IV = temp4; 
         this.V = temp5; 
         this.VI = temp6; 
         this.VII = temp7; 
    }
}

