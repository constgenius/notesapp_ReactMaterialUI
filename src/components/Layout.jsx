import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        {/* app bar */}
        <div>App Bar</div>

        {/* Side Bar */}
        <div>Side bar</div>

        <div>
            {children}
        </div>
    
    </div>
  )
}

export default Layout