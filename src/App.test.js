import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/notes')
import App from './App'

describe('<App />', () => {
  test('renders all notes it gets from backend', async () => {
    let component

    component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('.note')
    )

    const notes = component.container.querySelectorAll('.note')
    expect(notes.length).toBe(3)

    expect(component.container).toHaveTextContent(
      'HTML is easy'
    )
    expect(component.container).toHaveTextContent(
      'Browser can execute only javascript'
    )
    expect(component.container).toHaveTextContent(
      'The most important methods of HTTP are GET and POST'
    )
  })
})