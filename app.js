var musicApp = angular.module('musicApp', []);

musicApp.controller('dom', ['$scope', function($scope){	
	MusicMaker.setGain(0.5);
	Notes.setNoteStream();
	$scope.modeChange = [
		{value : "major" , name : "major"},
		{value : "minor", name : "minor"},
		{value : "mHormonic", name : "harmonic minor"},
		{value : "doubleHormonic", name : "double harmonic minor"},
		{value : "mixolydian", name : "mixolydian"},
		{value : "locrian", name : "locrian"},
		{value : "phrygian", name : "phrygian"},
		{value : "lydian", name : "lydian"},
		{value : "dorian", name : "dorian"}
	];
	$scope.keyChange = [
		{value : 0, name : "C"},
		{value : 1, name : "C#"},
		{value : 2, name : "D"},
		{value : 3, name : "D#"},
		{value : 4, name : "E"},
		{value : 5, name : "F"},
		{value : 6, name : "F#"},
		{value : 7, name : "G"},
		{value : 8, name : "G#"},
		{value : 9, name : "A"},
		{value : 10, name : "A#"},
		{value : 11, name : "B"}
	];
	var harmony = new Harmony();
	$scope.mode =["major"];
	harmony.setScale(Notes, Notes[$scope.mode[0]], 0);
	$scope.waveForm = ["sine", "square", "sawtooth", "triangle"];
	$scope.scaleIndex = [];
	$scope.I = [];
	$scope.II = [];
	$scope.III = [];
	$scope.IV = [];
	$scope.V = [];
	$scope.VI = [];
	$scope.VII = [];
	for(var i = 0; i < harmony.scale.length; i++) {
		$scope.scaleIndex[i] = i;
	}
	//not all are the same length, resulting in default tones. That is why length - 2, to eliminate them
	for(var i = 0; i < harmony.I.length-2; i++) {
		$scope.I[i] = i;
		$scope.II[i] = i;
		$scope.III[i] = i;
		$scope.IV[i] = i;
		$scope.V[i] = i;
		$scope.VI[i] = i;
		$scope.VII[i] = i;
	}
	$scope.playScaleNote = function(note) {
		MusicMaker.oscHandler(harmony.scale[note]);
	}
	$scope.playINotes = function(note) {
		MusicMaker.oscHandler(harmony.I[note]);
	}
	$scope.playIINotes = function(note) {
		MusicMaker.oscHandler(harmony.II[note]);
	}
	$scope.playIIINotes = function(note) {
		MusicMaker.oscHandler(harmony.III[note]);
	}
	$scope.playIVNotes = function(note) {
		MusicMaker.oscHandler(harmony.IV[note]);
	}
	$scope.playVNotes = function(note) {
		MusicMaker.oscHandler(harmony.V[note]);
	}
	$scope.playVINotes = function(note) {
		MusicMaker.oscHandler(harmony.VI[note]);
	}
	$scope.playVIINotes = function(note) {
		MusicMaker.oscHandler(harmony.VII[note]);
	}
	$scope.setVolume = function() {
		var value = $('#volume').val();
		MusicMaker.setGain(value);
	}
	$scope.newMode = function() {
		var value = $('#mode').val();
		harmony.setScale(Notes, Notes[value], 4);
	}
	$scope.setKey = function() {
		var keyValue = $('#key').val();
		var modeValue = $('#mode').val();
		harmony.setScale(Notes, Notes[modeValue], keyValue);
	}
}]);