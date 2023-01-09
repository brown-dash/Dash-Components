import { PointerEventHandler } from "react"
import { Type } from "../components"
import { Size } from "./globalEnums"

export interface IGlobalProps {
  // Size
  size?: Size
  height?: number

  // Type
  type?: Type

  // Status
  inactive?: boolean

  // Content
  tooltip?: string

  // Label
  label?: string

  // Global pointer events
  onPointerDown?: PointerEventHandler | undefined;
  onPointerDownCapture?: PointerEventHandler | undefined;
  onPointerMove?: PointerEventHandler | undefined;
  onPointerMoveCapture?: PointerEventHandler | undefined;
  onPointerUp?: PointerEventHandler | undefined;
  onPointerUpCapture?: PointerEventHandler | undefined;
  onPointerCancel?: PointerEventHandler | undefined;
  onPointerCancelCapture?: PointerEventHandler | undefined;
  onPointerEnter?: PointerEventHandler | undefined;
  onPointerEnterCapture?: PointerEventHandler | undefined;
  onPointerLeave?: PointerEventHandler | undefined;
  onPointerLeaveCapture?: PointerEventHandler | undefined;
  onPointerOver?: PointerEventHandler | undefined;
  onPointerOverCapture?: PointerEventHandler | undefined;
  onPointerOut?: PointerEventHandler | undefined;
  onPointerOutCapture?: PointerEventHandler | undefined;
  onGotPointerCapture?: PointerEventHandler | undefined;
  onGotPointerCaptureCapture?: PointerEventHandler | undefined;
  onLostPointerCapture?: PointerEventHandler | undefined;
  onLostPointerCaptureCapture?: PointerEventHandler | undefined;
}