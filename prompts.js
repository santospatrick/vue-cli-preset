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
                disabled: true,
                name: 'Admin (em breve)',
                value: 'admin'
            }
        ],
        default: 'base'
    }
]