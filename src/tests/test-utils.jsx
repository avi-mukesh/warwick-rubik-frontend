import React from 'react'
import {render} from '@testing-library/react'
import ThemeProvider from '../contexts/ThemeContext'
import Provider from 'react-redux'
import { store } from '../app/store'

const AllTheProviders = ({children}) => {
    return (
        <Provider>
            <ThemeProvider store={store}>
                {children}
            </ThemeProvider>
        </Provider>
    )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}