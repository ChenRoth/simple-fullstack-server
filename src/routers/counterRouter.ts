import {Router} from 'express';

export const counterApi = Router();

let counter = 0;

interface GetCounterResponse {
    counter: number;
}

counterApi.get<any, GetCounterResponse>('/', (req, res) => {
    res.send({counter});
});

interface PutCounterRequest {
    value: any;
}

interface PutCounterResponse {
    success: boolean;
}

counterApi.put</* params type */ any, /* response body */ PutCounterResponse, /* request body */ PutCounterRequest>('/', (req, res) => {
    const {value} = req.body;
    if (isNaN(value)) {
        res.status(400).send({success: false});
        return;
    }
    counter = Number(value);
    res.send({success: true});
});
