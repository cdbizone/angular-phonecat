'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// Register `phoneDetail` component, along with its associated controller and template
var angular = require("angular");
var PhoneDetailController = (function () {
    function PhoneDetailController(phone) {
        var _this = this;
        this.phone = phone;
        this.phone.query()
            .subscribe(function (phones) {
            _this.setImage(phone);
        }, this.phones = phones);
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.$inject = ['phone'];
    return PhoneDetailController;
}());
exports.PhoneDetailController = PhoneDetailController;
angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
        function PhoneDetailController($routeParams, Phone) {
            var self = this;
            self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                self.setImage(phone.images[0]);
            });
            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
//# sourceMappingURL=phone-detail.component.js.map