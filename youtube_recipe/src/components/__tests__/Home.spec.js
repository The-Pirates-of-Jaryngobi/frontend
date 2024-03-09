import { describe, it, expect } from 'vitest'

/*
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
*/

import { mount } from '@vue/test-utils'
import Home from '../../views/Home.vue'

describe('Home', () => {
    it('renders properly', () => {
        const wrapper = mount(Home, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain('Hello Vitest')
    })
})

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('displays message', () => {
    const wrapper = mount({
        template: '<v-layout><hello-world></hello-world></v-layout>'
    }, {
        props: {},
        global: {
        components: {
            Home,
        },
        plugins: [vuetify],
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Components')
})