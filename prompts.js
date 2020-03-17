module.exports = [
    {
        type: 'list',
        name: 'preset',
        message: 'Qual template você deseja usar?',
        choices: [
            {
                name: 'Admin (Recomendado)',
                value: 'admin'
            },
            {
                name: 'Básico',
                disabled: true,
                value: 'base'
            }
        ],
        default: 'base'
    }
]