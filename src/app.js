import './service-worker-registration'
import { app } from 'hyperapp'
import { router } from "@hyperapp/router"
import actions from './actions'
import state from './state'
import { view } from './view'

app({ state: state
    , actions: actions
    , view: view
    , mixins: [ router() ]
    })
