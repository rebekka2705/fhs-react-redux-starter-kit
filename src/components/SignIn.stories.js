import React from 'react'
import { storiesOf } from '@storybook/react'
import SignForm from './SignForm'

storiesOf('UserSignIn', module).add('default', () => <SignForm form = {'Sign In'} />)
