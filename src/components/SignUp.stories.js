import React from 'react'
import { storiesOf } from '@storybook/react'
//import SignUp from './SignUp'
import SignForm from './SignForm'

//storiesOf('SignUp', module).add('default', () => <SignUp />)

storiesOf('UserSignUp', module).add('default', () => <SignForm form ={'Sign Up'} />)
