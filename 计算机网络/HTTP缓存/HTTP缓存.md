### HTTP缓存

#### http1.0

- expires

#### http1.1

- max-age(优先级大于expires)
- 协商缓存
  * Etag(文件内容hash)
  * Last-Modified(最后修改时间)

- 缓存过期发起资源请求(有变化返回200，无变化返回304)
  * If-None-Match(带上Etag的请求头)
  * If-Modified-Since(带上last-modified修改时间)

- 明确资源不会改变(Cache-control: immutable)


### 代理服务器缓存

```
cache-control: public, max-age=600, s-maxage: 31536000
// private只能在浏览器缓存，public可以在代理服务器缓存，浏览器缓存10分钟，代理服务器缓存1年
```

```
cache-control: max-stale=600
// 过期10分钟以内还是可用，超过就不行了
```

```
Cache-control: stale-while-revalidate=600
// 和浏览器协商还没结束的时候，就先用着过期的缓存
```

```
Cache-control: stale-if-error=600
// 协商失败了的话，也先用着过期的缓存
```

```
Cache-Control: max-age=31536000, must-revalidate
// 缓存失效了的话，必须等验证结束，中间不能用过期的缓存
```

```
Cache-control: no-store
// 禁止缓存，没有过期时间和之后的协商缓存
```

```
Cache-control: no-cache
// 允许缓存，每次都需要协商
```

**Cache-control: no-cache与Cache-control: must-revalidate却别**
  - no-cache: 相当于禁掉了强缓存，每次都要协商缓存
  - must-revalidate只有在强缓存过期后，禁掉了用过期缓存的过程，强调必须协商


### 总结

  - 缓存能加快页面加载，减轻服务器压力