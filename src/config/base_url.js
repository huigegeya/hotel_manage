//开发模式 接口
let model = {
  //开发环境
  dev: "",
  //测试环境
  test: "",
  //正式环境
  pro: "",
};

//定义请求根路径 根据开发阶段返回对应接口地址
export const BASE_URL = model.dev;
