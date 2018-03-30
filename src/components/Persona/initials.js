const COLOR_SWATCHES_LOOKUP = [
  'lightGreen',
  'lightBlue',
  'lightPink',
  'green',
  'darkGreen',
  'pink',
  'magenta',
  'purple',
  'black',
  'teal',
  'blue',
  'darkBlue',
  'orange',
  'darkRed',
]

const COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length

function getInitialsColorFromName (displayName) {
  let color = 'blue'
  if (!displayName) {
    return color
  }

  let hashCode = 0
  for (let iLen = displayName.length - 1; iLen >= 0; iLen--) {
    const ch = displayName.charCodeAt(iLen)
    const shift = iLen % 8
    // tslint:disable-next-line:no-bitwise
    hashCode ^= (ch << shift) + (ch >> (8 - shift))
  }

  color = COLOR_SWATCHES_LOOKUP[hashCode % COLOR_SWATCHES_NUM_ENTRIES]

  return color
}

function personaInitialsColorToHexCode (personaInitialsColor) {
  switch (personaInitialsColor) {
    case 'lightBlue': return '#6BA5E7'
    case 'blue': return '#2D89EF'
    case 'darkBlue': return '#2B5797'
    case 'teal': return '#00ABA9'
    case 'lightGreen': return '#99B433'
    case 'green': return '#00A300'
    case 'darkGreen': return '#1E7145'
    case 'lightPink': return '#E773BD'
    case 'pink': return '#FF0097'
    case 'magenta': return ' #7E3878'
    case 'purple': return '#603CBA'
    case 'black': return '#1D1D1D'
    case 'orange': return '#DA532C'
    case 'red': return '#EE1111'
    case 'darkRed': return '#B91D47'
    case 'transparent': return 'transparent'
  }
}

export function initialsColorPropToColorCode (props) {
  const { primaryText } = props
  let { initialsColor } = props
  let initialsColorCode
  if (typeof initialsColor === 'string') {
    initialsColorCode = initialsColor
  } else {
    initialsColor = initialsColor !== undefined ? initialsColor : getInitialsColorFromName(primaryText)
    initialsColorCode = personaInitialsColorToHexCode(initialsColor)
  }

  return initialsColorCode
}
