"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByRangePrice = exports.getByCommodity = exports.getCommodities = exports.getCommodityArea = exports.getAreas = exports.latestData = void 0;
const fish_lib_1 = __importDefault(require("fish-lib"));
const url = 'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4';
const convert = 'https://api.apilayer.com/exchangerates_data/';
const appKey = 'bmKar4ZjgkDV15pcjYFcm5WRlp6ELIv1';
const wrapper = new fish_lib_1.default(url, 30000, false, appKey, convert);
const latestData = async () => {
    const data = await wrapper.commodity.getAll({ limit: 10, offset: 0, }, false);
    return data;
};
exports.latestData = latestData;
const getAreas = async () => {
    const data = await wrapper.area.getAll({});
    const ls = data.filter((dt) => dt.city).map((dt) => dt.city);
    const options = [
        {
            type: 'list',
            name: 'areas',
            message: 'Please chosee area',
            choices: ls
        }
    ];
    return options;
};
exports.getAreas = getAreas;
const getCommodityArea = async (area) => {
    return wrapper.commodity.getByArea({ limit: 1000, offset: 0, area }, false);
};
exports.getCommodityArea = getCommodityArea;
const getCommodities = async () => {
    const data = await wrapper.commodity.getAll({}, false);
    const ls = [...new Set(data.filter((dt) => dt.komoditas).map((item) => item.komoditas))];
    const options = [
        {
            type: 'list',
            name: 'commodity',
            message: 'Please chosee area',
            choices: ls
        }
    ];
    return options;
};
exports.getCommodities = getCommodities;
const getByCommodity = async (commodity) => {
    return wrapper.commodity.getAll({ search: { komoditas: commodity } }, false);
};
exports.getByCommodity = getByCommodity;
const getByRangePrice = (from, to) => {
    return wrapper.commodity.getAllByRange({
        rangePrice: {
            min: from,
            max: to
        },
        limit: 1000,
        offset: 0
    }, false);
};
exports.getByRangePrice = getByRangePrice;
