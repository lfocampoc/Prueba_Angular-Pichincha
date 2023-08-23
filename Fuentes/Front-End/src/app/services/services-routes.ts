import { Config } from '@config/index';

const { baseUrl } = Config.api;

const ServicesRoutes = {
  getProducts: {
    url: baseUrl + '/bp/products',
  },
  putProducts: {
    url: baseUrl + '/bp/products',
  },
  postProducts: {
    url: baseUrl + '/bp/products',
  },
  deleteProducts: {
    url: baseUrl + '/bp/products?id=:id',
  },
  checkProducts: {
    url: baseUrl + '/bp/products/verification?id=:id',
  },
}

const buildRoute = (path: any, params: any) => {
  const route = Object.assign({}, path);

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      route.url = route.url.replace(new RegExp(':' + key, 'g'), encodeURIComponent(params[key]) );
    }
  }

  return route;
};

export { buildRoute, ServicesRoutes };

