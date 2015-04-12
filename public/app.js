var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function($scope){
	$scope.flashCard = {
	    question: 'What is Angular?',
	    answers: [
	        { text: 'A front-end framework for great power!', correct: true },
	        { text: 'Something lame, who cares, whatever.', correct	: false },
	        { text: 'Some kind of fish, right?', correct: false }
	    ]
	};

	$scope.answerQuestion = function(response) {
		if (response.correct){
			$scope.answeredCorrectly = true;
		} else {
			$scope.answeredCorrectly = false;
		}

		$scope.answered = true;
	};

	$scope.answered = false;	
	$scope.answeredCorrectly = false;

});