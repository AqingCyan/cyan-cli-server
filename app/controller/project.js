'use strict';

const { Controller } = require('egg');
const mongo = require('../utils/mongo');

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    ctx.body = await mongo().query('project');
  }
}

module.exports = ProjectController;
