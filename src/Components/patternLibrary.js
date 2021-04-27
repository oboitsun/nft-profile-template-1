export const choosePattern = (where, color, rotate = 45) => {
  const patterns = {
    flat: {
      opacity: 1,
      background: 'transparent',
    },

    dotted: {
      opacity: 0.4,
      backgroundImage: `radial-gradient(${color} 1px, transparent 1px), radial-gradient(${color} 1px, transparent 1px)`,
      backgroundSize: '5px 5px',
      backgroundPosition: '0 0,2.5px 2.5px',
    },
    lined: {
      opacity: 0.3,
      background: `repeating-linear-gradient( ${rotate}deg, ${color} , ${color} 2px, transparent 2px, transparent 10px)`,
    },
    gradient: {
      ackgroundRepeat: 'repeat',
      backgroundSize: '100% 100%',
      opacity: 0.5,
      backgroundImage: `linear-gradient(180deg, ${color} 0%, rgba(8,19,35,0) 100%)`,
    },
  }
  return { ...patterns[where] }
}
