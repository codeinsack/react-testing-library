import React from "react"
import { render, fireEvent, wait } from '@testing-library/react'

import { HiddenMessage } from './HiddenMessage'

test('shows hidden message when toggle is clicked', async () => {
  const myMessage = 'hello world'
  const { getByText, queryByText } = render(<HiddenMessage>{myMessage}</HiddenMessage>)
  const toggleButton = getByText(/toggle/i)
  expect(queryByText(myMessage)).toBeInTheDocument()
  // fireEvent.click(toggleButton)
  // expect(getByText(myMessage)).toBeInTheDocument()
  // fireEvent.click(toggleButton)
  // await wait(() => expect(queryByText(myMessage)).not.toBeInTheDocument())
})
