const { schema, model } = require('mongoose');

const thoughtSchema = new schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280

        },

        createdAt: {
            type: Date,
            required: true,
            unique: true,
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [
            {
                type: Schema.types.objectId,
                ref: 'Thought'
            }
        ],

        friends: [
            {
                type: Schema.types.objectId,
                ref: 'User'
            }
        ]
    }
);

const Thought = model('thought', userSchema);

module.exports = Thought;