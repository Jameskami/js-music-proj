var musicApp = angular.module('musicApp', []);

musicApp.controller('dom', ['$scope', function($scope){
	Notes.setNoteStream();
	var harmony = new Harmony();
	harmony.setScale(Notes, Notes.major, 4);
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
	for(var i = 0; i < harmony.I.length; i++) {
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
}]);













