document.write('hello world')

import pinyin from 'pinyin'

console.log(
  pinyin('重庆', {
    segment: true,
    // heteronym: true,
    // group: true
  })
)

import Mock from 'better-mock'

/* Mock.mock('/api/data', {
    'list|1-10': [
      {
        'id|+1': 1
      }
    ]
}) */
fetch('/api/data', {
  body: JSON.stringify({ id: 10 }),
  method: 'POST',
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err))
