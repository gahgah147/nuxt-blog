export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh',
    messages: {
        en: {
            hello: 'Hello!',
            language: 'Language'
        },
        zh: {
            hello: '你好!',
            language: '語言'
        }
    }
}))