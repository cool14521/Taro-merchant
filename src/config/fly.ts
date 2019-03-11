// import Fly from "flyio";
import Taro from "@tarojs/taro";
import { ResponseError, ResponseNeedLogin } from "@/constants/response";
import {FlyModal} from 'flyio'

// const BASE_URL = process.env.BASE_URL;
// const TOKEN_KEY = process.env.TOKEN_KEY;
const BASE_URL = 'http://192.168.3.103:58080';
const TOKEN_KEY = 'Cookie';
let Fly :FlyModal
// if(process.env.TARO_ENV === 'h5') {
//   Fly = require("flyio/dist/npm/fly")
// }else {
//   Fly = require('flyio/dist/npm/wx')
// }
Fly = require('flyio/dist/npm/wx')

// 全局设置
// Fly.config.timeout = 10000;
// Fly.config.baseURL = BASE_URL;

const tokenFly = new Fly
// ({
//   timeout: 10000,
//   baseURL: BASE_URL
// });
const fly = new Fly
// ({
//   timeout: 10000,
//   baseURL: BASE_URL
// });


tokenFly.config.timeout = 10000
tokenFly.config.baseURL = BASE_URL

fly.config.timeout = 10000
fly.config.baseURL = BASE_URL

fly.interceptors.request.use(async request => {
  try{
    Taro.setStorageSync(TOKEN_KEY, 'UM_distinctid=16904b9b34c3de-0c24cd165259c2-2d604637-4a640-16904b9b350734; SESSION=fca7aae4-8df6-4a07-8b8b-c7e5d0de2b63; CNZZDATA1271314006=609547892-1550558314-http%253A%252F%252Flocalhost%253A8089%252F%7C1552264771; user_openid_key=o3bHtvwI6jwQKu2y-LadPLyFJsjA')
    // request.headers[TOKEN_KEY] = Taro.getStorageSync(TOKEN_KEY)
    const result = await Taro.getStorage({key: TOKEN_KEY})
    request.headers[TOKEN_KEY] = result.data
  }catch(e) {
    console.log(e.errMsg || e.toString())
  }
  return Promise.resolve(request)
});

fly.interceptors.response.use(
  response => {
    if (response.data.code === ResponseError) {
      Taro.showToast({
        title: response.data.message,
        icon: "none",
        duration: 2000
      });
    } else if (response.data.code === ResponseNeedLogin) {
    }
    return response;
  },
  error => {
    if (error.message.indexOf("timeout") !== -1) {
      Taro.showToast({
        title: "请求超时",
        icon: "none",
        duration: 2000
      });
    } else if (error) {
      let str = "网络不给力哦，请检查网络状态";
      switch (error.status) {
        case 404:
          str = "访问地址不存在";
          break;
        case 500:
          str = "访问地址出现异常";
          break;
        case 502:
        case 504:
          str = "服务器不在服务区";
          break;
        default:
          break;
      }
      Taro.showToast({
        title: str,
        icon: "none",
        duration: 2000
      });
    } else {
      Taro.showToast({
        title: "出现网络错误,请重试",
        icon: "none",
        duration: 2000
      });
    }
    return Promise.resolve(error);
  }
);

export default fly;
