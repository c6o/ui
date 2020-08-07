// Router utility functions
import { Router } from '@vaadin/router'

export function navigate(e, path = '', param = 'value') {
    e.preventDefault()
    if (e.target.value)
        Router.go(`/${path}?${param}=${e.target.value}`)
    else if (e.target.dataset.value)
        Router.go(`/${path}?${param}=${e.target.dataset.value}`)
    else
        Router.go(`/${path}`)
}

export function redirect(path = '') {
    Router.go(`/${path}`)
}