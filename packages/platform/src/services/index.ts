import { initDb } from '../db'

import { createDebug } from '@traxitt/common'
const debug = createDebug()

export async function init(app) {
    await initDb(app)
}

export function services() {
    const app = this
    debug('APP', app)
}