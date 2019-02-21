import { Fly, FlyError, FlyRequestConfig } from "flyio";

declare module "flyio" {
  interface FlyResponseInterceptor<V> {
    use(
      onSucceed?: (response: V) => any,
      onError?: (err: FlyError) => any
    ): void;
  }

  interface Fly {
    new (config?: FlyRequestConfig): Fly;
  }

  interface FlyModal extends Fly{

  }
}
