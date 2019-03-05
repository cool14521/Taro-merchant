declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";


declare module "@/components/ec-canvas/echarts";

declare namespace JSX {
  interface IntrinsicElements {
    'ec-canvas': any
  }
}
