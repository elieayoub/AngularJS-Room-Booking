var app = angular.module("SearchListApp", []);

//Our custom filter to search inside the books array
app.filter('searchFilter', function(){
	return function(arr, searchValue){
		//check if searchValue has value
		if(!searchValue){
			return arr;
		}

		var result = [];

		//Get lower case of the search value to compare with lower case of books items
		searchValue = searchValue.toLowerCase();

		//loop in the books items and compare with value searched for
		angular.forEach(arr, function(item){
			if(item.title.toLowerCase().indexOf(searchValue) !== -1 ||
				item.author.toLowerCase().indexOf(searchValue) !== -1){
				//return the found value
				result.push(item);
			}
		});

		return result;
	};

});

//Our controller
function SearchListController($scope){

	//List of books staticaly defined used in this example
	$scope.books = [
		{
			title: 'Anna Karenina',
			author: 'Leo Tolstoy',
		},
		{
			title: 'Madame Bovary',
			author: 'Gustave Flaubert',
		},
		{
			title: 'War and Peace',
			author: 'Leo Tolstoy',
		},
		{
			title: 'The Great Gatsby',
			author: 'F. Scott Fitzgerald',
		},
		{
			title: 'Lolita',
			author: 'Vladimir Nabokov',
		},
		{
			title: 'Middlemarch',
			author: 'George Eliot',
		},
		{
			title: 'The Adventures of Huckleberry Finn',
			author: 'Mark Twain',
		},
		{
			title: 'The Stories of Anton Chekhov',
			author: 'Anton Chekhov',
		},
		{
			title: 'In Search of Lost Time',
			author: 'Marcel Proust',
		},
		{
			title: 'Hamlet',
			author: 'William Shakespeare',
		}
	];

	//function to add new book item in our books array
	$scope.addBookItem = function () {
		//check if New Book and Book Author fields has values
		if (!$scope.newBookTitle | $scope.newBookAuthor)
			return;

		//Add Book/Author to books array
        $scope.books.push({ title: $scope.newBookTitle, author: $scope.newBookAuthor });
    }    
}
