const Carros = require('../application/Carros_service');
const Utils = require('../utils/utils');

const route = '/Carros';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Carros.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Carros.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Carros.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Carros.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listUser`, async (req, res) => {
        const response = await Carros.listByEmail(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};