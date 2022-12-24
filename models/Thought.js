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
            default: Date.now,
            get: formatDate,
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
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

  // When data is pulled, convert created date to readable string
function formatDate(date) {
    return date.toLocaleString();
  }; 

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);


module.exports = Thought;