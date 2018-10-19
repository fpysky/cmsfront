import request from '@/utils/request'

export function websiteInformation() {
  return request({
    url: 'api/index/websiteInformation',
    method: 'get',
  })
}