const users = [{
        "name": "Hector",
        "address": "Mexico"
    },
    {
        "name": "Juan",
        "address": "Peru"
    },
    {
        "name": "Ignacio",
        "address": "Argentina"
    },
    {
        "name": "Samer",
        "address": "Egypt"
    },
    {
        "name": "John",
        "address": "USA"
    },
    {
        "name": "Mary",
        "address": "USA"
    },
    {
        "name": "Maria",
        "address": "Argentina"
    }
];

module.exports = {
    searchAll: (req, res) => {
        try {
            res.json(users)
        } catch (error) {
            res.json({ error })
        }
    },
    searchByName: (req, res) => {
        try {
            res.json(users.find(user => user.name.toLowerCase().includes(req.params.name.toLowerCase())))
        } catch (error) {
            res.json({ error })
        }
    }
}