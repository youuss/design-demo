import * as components from './components'

export * from './components'

const install = (app) => {
    Object.keys(components).forEach(key => {
        const component = components[key]
        if(component.install) {
            app.use(component)
        }
    })

    return app
}

export default {
    install
}