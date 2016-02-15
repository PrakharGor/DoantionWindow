var app = angular.module('calApp', []);
app.controller('calCtrl', function($scope) {
    $scope.init = function() {
        $scope.maxDonation = 5000;
        $scope.donationReceived = 1300;
        $scope.donorCount = 43;
        $scope.newDonation = 50;
        this.setRemainingDonation();
        this.setDonationRecPercent();
    };

    $scope.setRemainingDonation = function() {
        $scope.donationRemaining = $scope.maxDonation - $scope.donationReceived;                                
    };
    $scope.setDonationRecPercent = function() {
        $scope.donationRecPercnt = $scope.donationReceived * 100 / $scope.maxDonation;
    };
    //set the day cards after year is entered
    $scope.addDonation = function() {
        if (this.newDonation > 0
                && $scope.donationRecPercnt < 100)
        {
            this.donationReceived += this.newDonation;
            this.setRemainingDonation();
            this.setDonationRecPercent(); 
            this.donorCount++;
            this.newDonation = 0;
        }
    };
    $scope.showAlert = function(alertMsg){
        alert(alertMsg);
    };
});