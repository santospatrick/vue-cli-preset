module.exports = [
    {
        type: 'list',
        name: 'preset',
        message: 'Qual template você deseja usar?',
        choices: [
            {
                name: 'Básico (recomendado)',
                value: 'base'
            },
            {
                name: 'Admin',
                value: 'admin'
            }
        ],
        default: 'base'
    }
]