export default [
  [
    {
      left: 'S',
      right: [['a', 'B', 'D', 'h']]
    },
    {
      left: 'B',
      right: [['c', 'C']]
    },
    {
      left: 'C',
      right: [['b', 'C'], ['ε']]
    },
    {
      left: 'D',
      right: [['E', 'F']]
    },
    {
      left: 'E',
      right: [['g'], ['ε']]
    },
    {
      left: 'F',
      right: [['f'], ['ε']]
    }
  ],
  [
    {
      left: 'S',
      right: [['A']]
    },
    {
      left: 'A',
      right: [['a', 'B', 'A′']]
    },
    {
      left: 'A′',
      right: [['d', 'A′'], ['ε']]
    },
    {
      left: 'B',
      right: [['b']]
    },
    {
      left: 'C',
      right: [['g']]
    }
  ],
  [
    {
      left: 'L',
      right: [['S', 'L′']]
    },
    {
      left: 'L′',
      right: [['S', 'L′'], ['ε']]
    },
    {
      left: 'S',
      right: [['(', 'L', ')'], ['a']]
    }
  ],
  [
    {
      left: 'S',
      right: [
        ['A', 'a', 'A', 'b'],
        ['B', 'b', 'B', 'a']
      ]
    },
    {
      left: 'A',
      right: [['ε']]
    },
    {
      left: 'B',
      right: [['ε']]
    }
  ],
  [
    {
      left: 'E',
      right: [['T', 'E′']]
    },
    {
      left: 'E′',
      right: [['+', 'T', 'E′'], ['∈']]
    },
    {
      left: 'T',
      right: [['F', 'T′']]
    },
    {
      left: 'T′',
      right: [['*', 'F', 'T′'], ['∈']]
    },
    {
      left: 'F',
      right: [['(', 'E', ')'], ['id']]
    }
  ]
]
