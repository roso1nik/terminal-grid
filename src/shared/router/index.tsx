import { Layout } from '@/components'
import { createBrowserRouter } from 'react-router-dom'
import { HOMEPAGE } from './routes'
import { TerminalPage } from '@/pages/terminal/terminal'

export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: HOMEPAGE,
                element: <TerminalPage />,
            },
        ],
    },
])
