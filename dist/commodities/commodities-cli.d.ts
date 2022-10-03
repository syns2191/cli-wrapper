import { QuestionKeys } from '../interfaces/IQuestions';
export declare const latestData: () => Promise<any>;
export declare const getAreas: () => Promise<QuestionKeys[]>;
export declare const getCommodityArea: (area: string) => Promise<any>;
export declare const getCommodities: () => Promise<QuestionKeys[]>;
export declare const getByCommodity: (commodity: string) => Promise<any>;
export declare const getByRangePrice: (from: number, to: number) => Promise<any>;
