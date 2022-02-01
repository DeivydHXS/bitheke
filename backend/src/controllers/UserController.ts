import { Request, Response } from "express";

const users = [
    { name: 'Deivyd', email: 'deivyd@email.com'},
    { name: 'Marina', email: 'marina@email.com'},
    { name: 'João', email: 'joao@email.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
}