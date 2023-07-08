// const Koa = require('koa')
// const router = require('koa-router')()
import Koa from 'koa'
import Router from 'koa-router'
import fetch from 'node-fetch'
const app = new Koa()
const router = new Router()

router.post('/api/data', async (ctx, next) => {
  const res = await fetch(
    'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true',
    // {
    //   headers: {
    //     accept: '*/*',
    //     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    //     'sec-ch-ua':
    //       '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    //     'sec-ch-ua-mobile': '?0',
    //     'sec-ch-ua-platform': '"macOS"',
    //     'sec-fetch-dest': 'empty',
    //     'sec-fetch-mode': 'cors',
    //     'sec-fetch-site': 'same-origin',
    //     'x-ab-param': '',
    //     'x-ab-pb': 'CgY7AicH+AwSAwAAAA==',
    //     'x-api-version': '3.0.76',
    //     'x-requested-with': 'fetch',
    //     'x-zse-93': '101_3_3.0',
    //     'x-zse-96':
    //       '2.0_AqY4YhvGsvz4=RMAzWQ+4Wx5Ve2rA9piSROKmwUSj+BSeMCkbqOJRqPQHWPipXVk',
    //     'x-zst-81':
    //       '3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZKXY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTFTVYtGNLgCYCHug_ivHf3qcLrHO1gbe1EvpG6BwOCu29qGC8ogU0fUX1IDSTV7t9qU90QMOKHbX0qrxCoXNLA9Cf3hpCJDCYBGSGXwtpYBo9lqX0NwOqQUSfEqOKkcHCCcrLyvNpsg2_ZqN1Thrf1DgOgBw9KXgY2refo4SMyCg_hvO0Vg_zq9wB6LY9RCNfeUU119gp_CFCl9CLoHVYOUtfuJN1BLYGSrSCrCXYxDLqqwgM2hg8BwYseL3Y8gtOygNC2DVmkMXMZrSfr7Sq2bXVUgxYwUCywJSCWBXs',
    //   },
    //   referrer: 'https://www.zhihu.com/hot',
    //   referrerPolicy: 'no-referrer-when-downgrade',
    //   body: null,
    //   method: 'GET',
    //   mode: 'cors',
    //   credentials: 'include',
    //   rejectUnauthorized: false
    // }
  )
  console.log('+++++++++++++++++++++++++++++++++++++++++')
  console.log('res: ', res)
  const data = await res.json()
  ctx.response.body = {
    status: true,
    data,
    msg: '获取数据成功',
  }
})
app.use(router.routes())
app.listen(3000)
