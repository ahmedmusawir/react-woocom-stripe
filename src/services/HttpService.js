import axios from 'axios';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// WOOCOM API SETUP
const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:10004/', // Your store URL
  consumerKey: process.env.REACT_APP_CONSUMER_KEY, // Your consumer key
  consumerSecret: process.env.REACT_APP_CONSUMER_SECRET, // Your consumer secret
  version: 'wc/v3', // WooCommerce WP REST API version
});

// Custom interceptor to remove woocommerce custom User-Agent (not allowed in Chrome/Safari)
axios.interceptors.request.use(function (config) {
  const { headers = {} } = config || {};
  if (headers['User-Agent']) delete config.headers['User-Agent'];

  return config;
});

export const getData = async () => {
  try {
    const woocomData = await WooCommerce.get('products', {
      per_page: 5, // 20 products per page
    });

    // console.log(woocomData)
    return woocomData;
  } catch (error) {
    console.log(error);
  }
};
