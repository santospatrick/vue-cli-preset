module.exports = (api, { preset = 'base' }) => {
    api.render(`./template/${preset}`);
}