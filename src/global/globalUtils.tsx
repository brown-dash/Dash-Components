import { Colors, Size } from './globalEnums'
const Color = require('color')

export interface ILocation {
  top: number
  left: number
  width: number
  height: number
  override?: 'left' | 'bottom' | 'top' | 'right'
}

export const getFormLabelSize = (
  size: Size | undefined,
) => {
  switch (size) {
    case Size.XSMALL:
      return '7px'
    case Size.SMALL:
      return '10px'
    case Size.MEDIUM:
      return '13px'
    case Size.LARGE:
      return '14px'
    default:
      return '10px'
  }
}

export const getFontSize = (
  size: Size | undefined,
  icon?: boolean
) => {
  switch (size) {
    case Size.XSMALL:
      if (icon) return '11px'
      return '9px'
    case Size.SMALL:
      if (icon) return '15px'
      return '11px'
    case Size.MEDIUM:
      if (icon) return '17px'
      return '14px'
    case Size.LARGE:
      if (icon) return '22px'
      return '17px'
    default:
      if (icon) return '15px'
      return '12px'
  }
}

export const getHeight = (
  height: number | undefined,
  size: Size | undefined
) => {
  if (height) return height
  switch (size) {
    case Size.XSMALL:
      return 20
    case Size.SMALL:
      return 30
    case Size.MEDIUM:
      return 40
    case Size.LARGE:
      return 50
    default:
      return 30
  }
}

export const colorConvert = (color: any) => {
  try {
    return color ? Color(color.toLowerCase()) : Color('transparent')
  } catch (e) {
    console.log('COLOR error:', e)
    return Color('red')
  }
}

export const isDark = (color: any): boolean => {
  if (color === undefined) return false
  if (color === 'transparent') return false
  if (color.startsWith?.('linear')) return false
  const nonAlphaColor = color.startsWith('#')
    ? (color as string).substring(0, 7)
    : color.startsWith('rgba')
    ? color.replace(/,.[^,]*\)/, ')').replace('rgba', 'rgb')
    : color
  const col = colorConvert(nonAlphaColor).rgb()
  const colsum = col.red() + col.green() + col.blue()
  if (colsum / col.alpha() > 400 || col.alpha() < 0.25) return false
  else return true
}
