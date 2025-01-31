import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

export const Terminal = () => {
    const layouts = {
        lg: [
            { i: '1', x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 25 },
            { i: '2', x: 2, y: 0, w: 2, h: 2, minW: 1, maxW: 25 },
            { i: '3', x: 4, y: 0, w: 2, h: 2, minW: 1, maxW: 25 },
        ],
    }

    const breakpoints = { lg: 1200, md: 996, sm: 768 }
    const cols = { lg: 12, md: 6, sm: 4 }

    return (
        <ResponsiveGridLayout
            className="!min-h-screen !w-full"
            layouts={layouts}
            rowHeight={50}
            margin={[5, 5]}
            breakpoints={breakpoints}
            cols={cols}
            isDraggable={true}
            isResizable={true}
            compactType={null}
            preventCollision={false}
            useCSSTransforms={true}
            resizeHandles={['s', 'e', 'se', 'sw', 'w', 'nw', 'n', 'ne']}
        >
            <div key="1" className="bg-cyan-100">
                1
            </div>
            <div key="2" className="bg-cyan-100">
                2
            </div>
            <div key="3" className="bg-cyan-100">
                3
            </div>
        </ResponsiveGridLayout>
    )
}
