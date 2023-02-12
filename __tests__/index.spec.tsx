import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)

    expect(screen.getByText('homepage.title')).toBeInTheDocument()
  })
})
