interface iQestions {
    features: QuestionKeys[];
    searchBy: QuestionKeys[]
    searchByRange: QuestionKeys[]
}

interface QuestionKeys {
    type: string;
    name: string;
    message: string;
    choices: string[]
}

interface QuestionInput {
    type: string;
    name: string;
    message: string;
}

export {
    iQestions,
    QuestionKeys,
    QuestionInput
}