/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: WhereMoney
 * Date:  13.11.2016
 * Time: 11:31
 */


'use strict';


export const structure = {
    dbName: 'whereMoneyDb',
    tables: [
        {
            name: 'transactions',
            structure: 'id INTEGER PRIMARY KEY, category_id INTEGER, description TEXT, sum INTEGER, created BIGINT'
        },
        {
            name: 'categories',
            structure: 'id INTEGER PRIMARY KEY, type INTEGER, name TEXT, slug TEXT'
        },
        {
            name: 'templates',
            structure: 'id INTEGER PRIMARY KEY, category_id INTEGER, description TEXT, sum INTEGER, created BIGINT'
        },
        {
            name: 'settings',
            structure: 'id INTEGER PRIMARY KEY, key TEXT, value TEXT'
        },
        {
            name: 'balance',
            structure: 'id INTEGER PRIMARY KEY, value BIGINT'
        },
        {
            name: 'budget',
            structure: 'id INTEGER PRIMARY KEY, year INT, week INT, start_week BIGINT, value BIGINT'
        },
    ]
};