import {ResponseCodeType} from '@constants/response'
/**
 * 返回对象
 * code
 * data
 * message
 */
export default interface ResponseModel<T> {
  code: ResponseCodeType
  data: T
  message: string
}

