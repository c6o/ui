// Router utility functions
import { Router } from '@vaadin/router'

export function navigate(e, path = '') {
    e.preventDefault()
    if (e.target.value)
        Router.go(`/${path}?event=${e.target.value}`)
    else
        Router.go(`/${path}`)
}

export function redirect(path = '') {
    Router.go(`/${path}`)
}