export const Card = {
  theme: {
    maxWidth: '100%',
    m: 16,
    p: 16,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#F3F3F5', // add to colors after implement theme
    overflow: 'hidden',
    _text: {
      color: '$dark_0',
    },
  },
  componentConfig: { descendantStyle: ['_text'] },
};
