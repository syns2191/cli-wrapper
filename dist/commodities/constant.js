"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
exports.questions = {
    features: [
        {
            type: 'list',
            name: 'functions',
            message: 'Please select function do you want',
            choices: ['10 Latest Data', 'Search data by', 'Search data by range price'],
        },
    ],
    searchBy: [
        {
            type: 'list',
            name: 'searchby',
            message: 'Please select do you want search data by',
            choices: ['commodities', 'area'],
        },
    ],
    searchByRange: [
        {
            type: 'list',
            name: 'searchByRange',
            message: 'Please select do you want search data by range',
            choices: ['price'],
        },
        {
            type: 'number',
            name: 'rangeFrom',
            message: 'Range price from ?',
        },
        {
            type: 'number',
            name: 'rangeTo',
            message: 'Range price to ?',
        }
    ]
};
