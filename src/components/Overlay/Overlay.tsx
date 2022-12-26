import React from "react"
import "./Overlay.scss"

export interface IOverlayProps {
    elementMap?: Map<string, JSX.Element>
}

export const Overlay = (props: IOverlayProps) => {
    return <div id="browndashComponents-overlay" className="overlay-container">

    </div>
}