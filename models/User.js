const { schema, model } = require('mongoose');

const userSchema = new schema(
    {
        username: {
            type: String,
            required: true,

        },

        email: {
            type: String,
            required: true,
        }
    }
)