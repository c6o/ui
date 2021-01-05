import { C6oButton } from './c6o-button'

export default {
    title: 'Buttons/Button',
    argTypes: {
        onClick: { action: 'onClick' },
    },
}

const Template = (args) => C6oButton(args)

export const Primary = Template.bind({})
Primary.args = {
    theme: 'primary',
    label: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    theme: 'tertiary',
    label: 'Tertiary',
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Small',
}