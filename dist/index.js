"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("./commodities/constant");
const commodities_cli_1 = require("./commodities/commodities-cli");
const questionLists = constant_1.questions;
const inquirer_1 = __importDefault(require("inquirer"));
const main = async () => {
    const fnSelect = await inquirer_1.default.prompt(questionLists.features);
    if (fnSelect.functions === questionLists.features[0].choices[0]) {
        const data = await (0, commodities_cli_1.latestData)();
        console.info(data);
        return;
    }
    else if (fnSelect.functions === questionLists.features[0].choices[1]) {
        const searchBySelect = await inquirer_1.default.prompt(questionLists.searchBy);
        if (searchBySelect.searchby === questionLists.searchBy[0].choices[1]) {
            const data = await (0, commodities_cli_1.getAreas)();
            const areaSelect = await inquirer_1.default.prompt(data);
            const cArea = await (0, commodities_cli_1.getCommodityArea)(areaSelect.areas);
            console.info(cArea);
        }
        else if (searchBySelect.searchby === questionLists.searchBy[0].choices[0]) {
            const data = await (0, commodities_cli_1.getCommodities)();
            const areaSelect = await inquirer_1.default.prompt(data);
            const listByCommodity = await (0, commodities_cli_1.getByCommodity)(areaSelect.commodity);
            console.info(listByCommodity);
        }
    }
    else if (fnSelect.functions === questionLists.features[0].choices[2]) {
        const searchByRange = await inquirer_1.default.prompt(questionLists.searchByRange);
        const data = await (0, commodities_cli_1.getByRangePrice)(searchByRange.rangeFrom, searchByRange.rangeTo);
        console.info(data);
    }
};
main();
