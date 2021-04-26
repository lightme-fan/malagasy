import React from 'react'
import Svg, { Path } from 'react-native-svg'

const NightModeButton = () => {
    return (
        <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19.31 14.62L22.62 11.31L19.31 8V3.31H14.62L11.31 0L8 3.31H3.31V8L0 11.31L3.31 14.62V19.31H8L11.31 22.62L14.62 19.31H19.31V14.62ZM11.31 17.31V5.31C14.62 5.31 17.31 8 17.31 11.31C17.31 14.62 14.62 17.31 11.31 17.31Z" fill="white"/>
        </Svg>
    )
}

export default NightModeButton