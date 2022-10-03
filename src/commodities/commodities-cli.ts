import Wrapper from 'fish-lib';
import {
    QuestionKeys
} from '../interfaces/IQuestions';
const url = 'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4';
const convert = 'https://api.apilayer.com/exchangerates_data/';
const appKey = 'bmKar4ZjgkDV15pcjYFcm5WRlp6ELIv1';

const wrapper = new Wrapper(url, 30000, false, appKey, convert);

export const latestData = async () => {
    const data = await wrapper.commodity.getAll({limit: 10, offset: 0,}, false);
    return data;
}

export const getAreas = async (): Promise<QuestionKeys[]> => {
    const data = await wrapper.area.getAll({});
    const ls:string[] =  data.filter((dt:any) => dt.city).map((dt: any) => dt.city);
    const options:QuestionKeys[] = [
        {
            type: 'list',
            name: 'areas',
            message: 'Please chosee area',
            choices: ls
        }
    ];
    return options;
}

export const getCommodityArea = async (area: string) => {
    return wrapper.commodity.getByArea({limit: 1000, offset: 0, area}, false);
}

export const getCommodities = async (): Promise<QuestionKeys[]> => {
    const data:any = await wrapper.commodity.getAll({}, false);
    const ls:string[] | any = [...new Set(data.filter((dt:any) => dt.komoditas).map((item:any) => item.komoditas))];
    const options:QuestionKeys[] = [
        {
            type: 'list',
            name: 'commodity',
            message: 'Please chosee area',
            choices: ls
        }
    ];
    return options
}

export const getByCommodity = async (commodity:string) => {
    return wrapper.commodity.getAll({search: {komoditas: commodity}}, false);
}

export const getByRangePrice = (from: number, to: number) => {
    return wrapper.commodity.getAllByRange({
        rangePrice: {
            min: from,
            max: to
        },
        limit: 1000,
        offset: 0
    }, false)
}