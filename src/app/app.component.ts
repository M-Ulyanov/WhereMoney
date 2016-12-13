/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: WhereMoney
 * Date:  04.11.2016
 * Time: 11:02
 */


'use strict';


import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DbService } from '../services/db.service';

import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LocalStorage } from "../libs/LocalStorage";


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})


export class App {


    rootPage: any;


    /**
     *
     * @param platform
     * @param dbService
     */
    constructor(private platform: Platform, private dbService: DbService) {
        platform.ready().then(() => {
            this.initApp();
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }


    /**
     *
     */
    private initApp(): void {
        this.rootPage = this.isFirstLaunch() ? TutorialPage : TabsPage;
        this.dbService.initDataBase();
    }


    /**
     *
     * @returns {boolean}
     */
    private isFirstLaunch(): boolean {
        let isLaunch = LocalStorage.get('launchApp');
        if(!isLaunch) {
            LocalStorage.set('launchApp', true);
            return true;
        }
        return false;
    }

}
