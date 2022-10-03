#!/usr/bin/env node
import {
    questions
} from './commodities/constant';
import {
    iQestions,
    QuestionKeys
} from './interfaces/IQuestions';

import {
    latestData,
    getAreas,
    getCommodityArea,
    getCommodities,
    getByCommodity,
    getByRangePrice
} from './commodities/commodities-cli';

const questionLists: iQestions = questions;

import inquirer, {}  from 'inquirer';


const main = async () => {
    const fnSelect = await inquirer.prompt(questionLists.features);
    if (fnSelect.functions === questionLists.features[0].choices[0]) {
        const data = await latestData()
        console.info(data)
        return;
    } else if (fnSelect.functions === questionLists.features[0].choices[1]) {
        const searchBySelect = await inquirer.prompt(questionLists.searchBy);
        if (searchBySelect.searchby === questionLists.searchBy[0].choices[1]) {
            const data:QuestionKeys[] = await getAreas();
            const areaSelect = await inquirer.prompt(data);
            const cArea = await getCommodityArea(areaSelect.areas); 
            console.info(cArea);
        } else if (searchBySelect.searchby === questionLists.searchBy[0].choices[0]) {
            const data:QuestionKeys[] = await getCommodities();
            const areaSelect = await inquirer.prompt(data);
            const listByCommodity = await getByCommodity(areaSelect.commodity);
            console.info(listByCommodity);
        }

    } else if (fnSelect.functions === questionLists.features[0].choices[2]) {
        const searchByRange = await inquirer.prompt(questionLists.searchByRange);
        const data = await getByRangePrice(searchByRange.rangeFrom, searchByRange.rangeTo)
        console.info(data);
    }
}

main();