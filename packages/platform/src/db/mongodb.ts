
import * as feathersService from 'feathers-mongodb'
import { MongoClient } from 'mongodb'
import { createDebug } from '@traxitt/common'
const debug = createDebug()

export async function initDb(app) {
    const connection = app.get('mongodb')

    debug('initializing mongodb with connection %o', connection)
    const client = await MongoClient.connect(connection, { useNewUrlParser: true })

    app.createService = createService
    app.mongoDb = client.db()
    
    setupCollections(app)
}

function setupCollections(app) {
    debug('Setup collections called with')
}

function createService(collectionName: string, options= {}) {
    const app = this
    debug(`creating service for collection ${collectionName}`)

    return feathersService({
        ...options,
        Model: app.mongoDb.collection(collectionName),
    })
}