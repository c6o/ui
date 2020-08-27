// Router utility functions
import { Router } from '@vaadin/router'

export function navigate(path = '', e = null, param = 'value') {
    if (e) {
        e.preventDefault()
        if (e.target.value)
            Router.go(`/${path}?${param}=${e.target.value}`)
        else if (e.target.dataset.value)
            Router.go(`/${path}?${param}=${e.target.dataset.value}`)
    } else
        Router.go(`/${path}`)
}