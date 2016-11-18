/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: WhereMoney
 * Date:  05.11.2016
 * Time: 23:56
 */


import { Component, Input } from '@angular/core';


@Component({
    selector: 'category-icon-component',
    templateUrl: 'category-icon.component.html'
})


export class CategoryIcon {


    @Input() name: string;


    constructor() { }



}