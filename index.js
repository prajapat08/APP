 (function () {
  angular
    .module('myApp', ['ui.bootstrap', 'ngStorage'])

    .controller('main', ['$scope', '$http', '$localStorage',
      function ($scope, $http) {


        $scope.showrecord = false;
          $scope.showrecord1 = false;
          $scope.viewby = '10';                            
          $scope.location = "DELHI";  
        $scope.getBank = function (location) {
          $scope.showrecord = false;
          $scope.showrecord1 = true;
          $scope.data = '';
          $scope.showdetails = false;
          $scope.arrayresult = [];
          
          
          $http.get('https://vast-shore-74260.herokuapp.com/banks?city=' + location, { cache: true })
          .then(function (response) {
            $scope.data = response.data;
            $scope.showrecord = true;
            $scope.showrecord1 = false;
            
            $scope.totalItems = $scope.data.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 4;
            $scope.setPage = function (pageNo) {
              $scope.currentPage = pageNo;
            };
            
            $scope.pageChanged = function () {
              console.log('Page changed to: ' + $scope.currentPage);
            };
            
            $scope.setItemsPerPage = function (num) {
              $scope.itemsPerPage = num;
              $scope.currentPage = 1;
            }
            
            
            
          });
        }
        
        
        $scope.getBank("DELHI");
        
        
      }
    ]);
  }());  
