document.write('hello world')

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


