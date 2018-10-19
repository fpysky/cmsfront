import request from '@/utils/request'

export function fetchHotArticles(query) {
  return request({
    url: 'api/index/hotArticles',
    method: 'get',
    params: query
  })
}

export function fetchNewArticles(query) {
  return request({
    url: 'api/index/newArticles',
    method: 'get',
    params: query
  })
}

export function getArticle(query) {
  return request({
    url: 'api/index/getArticle',
    method: 'get',
    params: query
  })
}