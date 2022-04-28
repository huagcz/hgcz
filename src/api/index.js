//统一管理项目全部接口的文件
//获取真实服务器的接口的数据利用当前axios
import request from './request';

//商品分类的数据接口(三级联动)  axios发请求返回结果是Promise对象
export const reqCategoryList = ()=>request({
  url:'/product/getBaseCategoryList',
  method:'get'
});



