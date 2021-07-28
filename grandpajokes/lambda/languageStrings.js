/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SKILL_NAME: 'Grandpa\'s Jokes',
            GET_JOKE_MESSAGE: 'Here\'s your joke: ',
            HELP_MESSAGE: 'You can say tell me a joke, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Grandpa\'s Jokes skill can\'t help you with that.  It can tell you one of Grandpa\'s jokes if you say tell me a joke. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            STOP_MESSAGE: 'Goodbye!',
        }
    }
}