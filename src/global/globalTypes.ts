import { Size } from "./globalEnums"

export interface IGlobalProps {
  // Size
  size?: Size
  height?: number

  // Status
  inactive?: boolean

  // Content
  tooltip?: string

  // Label
  label?: string
}