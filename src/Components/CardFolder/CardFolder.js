import React from 'react'
import "./CardFolder.css"
import { icons } from '../SVG/svgData'

function CardFolder() {
  return (
    <div className='card-folder'>
      <div className='logo'>
      {icons.logo}
      </div>
      <div className='folder-box'>
        {icons.folder}
        {icons.upload}
        {icons.sky}
      </div>
    </div>
  )
}

export default CardFolder
