const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/database');
const response = require('./util/response');
const Catalogue = require('./models/catalogue');
const CatalogueAttr = require('./models/catalogue-attr');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('Server is running!');
});

app.get('/catalogue', (req, res) => {
  Catalogue.findAll().then((catalogues) => res.json(catalogues));
});

app.put('/catalogue/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { qty, brandCode } = req.body;

    if (!id) {
      response.badRequest(res, 'Invalid ID!');
      return;
    }

    const catalogue = await Catalogue.findByPk(id);
    if (!catalogue) {
      response.notFound(res, `Can't find catalogue with ID: ` + id);
      return;
    }
    const success = await catalogue.update({
      qty: qty,
      brandCode: brandCode,
    });

    if (success) response.success(res, success);
    else response.serverError(res, undefined, 'Something went wrong while updating!');
  } catch (ex) {
    response.serverError(res, ex);
  }
});

app.post('/catalogue', async (req, res) => {
  try {
    const { ssn, brandCode, qty } = req.body;
    const success = await Catalogue.create({
      ssn: ssn,
      brandCode: brandCode,
      qty: qty,
    });

    if (success) response.success(res, success);
    else response.serverError(res, undefined, 'Something went wrong while creating!');
  } catch (ex) {
    response.serverError(res, ex);
  }
});

app.get('/catalogue-attr', async (req, res) => {
  try {
    const ssn = req.query.ssn;
    const result = await CatalogueAttr.findAll({
      where: {
        ssn: ssn,
      },
    });

    res.json(result);
  } catch (err) {
    response.serverError(res, err);
  }
});

app.put('/catalogue-attr/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, value } = req.body;

    if (!id) {
      response.badRequest(res, 'Invalid ID!');
      return;
    }

    const catalogueAttr = await CatalogueAttr.findByPk(id);
    if (!catalogueAttr) {
      response.notFound(res, `Can't find catalogue attribute with ID: ` + id);
      return;
    }
    const success = await catalogueAttr.update({
      name: name,
      value: value,
    });

    if (success) response.success(res, success);
    else response.serverError(res, undefined, 'Something went wrong while updating!');
  } catch (ex) {
    response.serverError(res, ex);
  }
});

app.post('/catalogue-attr', async (req, res) => {
  try {
    const { ssn, name, value } = req.body;
    const success = await CatalogueAttr.create({
      ssn,
      name,
      value,
    });

    if (success) response.success(res, success);
    else response.serverError(res, undefined, 'Something went wrong while creating!');
  } catch (ex) {
    response.serverError(res, ex);
  }
});

const PORT = process.env.PORT || 3000;

const initApp = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

initApp();
