module.exports = (api, { preset = 'base' }) => {
    api.render(`./template/${preset}`);

    api.postProcessFiles(files => {
        console.log('files:', files)
        Object.keys(files).forEach(name => {
            if (/^src\/views[/$]/.test(name)) {
                delete files[name]
            }
            if (/^src\/router[/$]/.test(name)) {
                delete files[name]
            }
        })
    });
}