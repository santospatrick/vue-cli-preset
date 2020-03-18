const fs = require('fs');

module.exports = (api, { preset = 'base' }) => {
    api.render(`./template/${preset}`);

    api.postProcessFiles(files => {
        Object.keys(files).forEach(name => {
            if (/^src\/views[/$]/.test(name)) {
                delete files[name]
            }
            if (/^src\/router[/$]/.test(name)) {
                delete files[name]
            }
            if (/^src\/store[/$]/.test(name) && preset === 'admin') {
                delete files[name]
            }

            const appTemplateDirectory = `${__dirname}/template/${preset}/src/App.vue`;

            if (!fs.existsSync(appTemplateDirectory)) return;

            const appTemplate = fs.readFileSync(appTemplateDirectory, 'utf8');

            files['src/App.vue'] = appTemplate;
        })
    });

    api.extendPackage({
        dependencies: {
            axios: "^0.19.2"
        },
        devDependencies: {
            "json-server": "^0.16.1"
        },
        scripts: {
            "mock": "json-server --watch mock.json --delay 1000"
        }
    })
}