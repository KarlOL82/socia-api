const { schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280

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