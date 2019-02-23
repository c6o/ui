import 'source-map-support/register'

import * as path from 'path'
process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'production'
process.env['NODE_CONFIG_DIR'] = process.env['NODE_CONFIG_DIR'] || path.join(__dirname, '../config/')

import * as feathers from '@feathersjs/feathers'
import * as cors from 'cors'
import * as express from '@feathersjs/express'
import * as socketio from '@feathersjs/socketio'
import * as configuration from '@feathersjs/configuration'
import { init, services } from './services'
import { createDebug } from '@traxitt/common'

const debug = createDebug()
const app = express(feathers())

app
    .configure(configuration())
    .use(cors())

init(app)
    .then(() => {
        // Port can come from environment or configuration
        const port = process.env.PORT || app.get('port')

        if (process.env.NODE_ENV == 'production')
            app.use('/', express.static(__dirname + app.get('public')))

        app
            .use(express.json())
            .use(express.urlencoded({ extended: true }))
            .configure(express.rest())
            .configure(socketio({ transports: ['websocket'] }))
            .configure(services)
            .use(express.notFound())
            .use(express.errorHandler())
            .listen(port)
            .on('listening', () => debug(`started ${process.env.NODE_ENV} on ${port}`) )
    })
    .catch(debug.error)