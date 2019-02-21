/**
 * 返回值
 * 0 失败
 * 1 成功
 * 403 需登录
 * 2 特殊逻辑
 * 3 特殊逻辑
 * 可根据需要继续添加
 */
export type ResponseCodeType = '0' | '1' | '403' | '2' | '3'

// 返回成功
export const ResponseSuccess = '1'
// 返回失败
export const ResponseError = '0'
// 需要登录
export const ResponseNeedLogin = '403'

export default ResponseSuccess
