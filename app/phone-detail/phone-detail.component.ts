'use strict';

// Register `phoneDetail` component, along with its associated controller and template

import * as angular from "angular";
import {Phone, PhoneData} from "../../src/app/services/phone.service";

export class PhoneDetailController {
    static $inject = [ 'phone'];

    mainImageUrl: string;
    phone: PhoneData[];

    constructor(private phone: Phone) {
        this.phone.query()
            .subscribe(phones => {
                this.setImage(phone)
            }this.phones = phones);
    }

    setImage (imageUrl) {
        this.mainImageUrl = imageUrl;
    }

}


angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
        function PhoneDetailController($routeParams, Phone) {
            var self = this;
            self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                self.setImage(phone.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});





