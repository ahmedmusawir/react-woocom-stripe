import axios from 'axios';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// WOOCOM API SETUP
// TESTING
// const WooCommerce = new WooCommerceRestApi({
//   url: 'http://159.223.59.32:8000', // DIDN'T WORK
//   consumerKey: 'ck_a07f6d1f9f84596853c6a3ab6d644a7a81f04886', // Your consumer key
//   consumerSecret: 'cs_45c609c1860344e108c8e5fb049e2ef0b7b2964f', // Your consumer secret
//   version: 'wc/v3', // WooCommerce WP REST API version
// });

// REMOTE DIGITAL OCEAN DOCKER WP
const WooCommerce = new WooCommerceRestApi({
  url: 'http://blockbuster.dns.army:8000/', // Your store URL
  consumerKey: process.env.REACT_APP_DOCKER_CONSUMER_KEY, // Your consumer key
  consumerSecret: process.env.REACT_APP_DOCKER_CONSUMER_SECRET, // Your consumer secret
  version: 'wc/v3', // WooCommerce WP REST API version
});

// LOCAL WP
// const WooCommerce = new WooCommerceRestApi({
//   url: 'http://localhost:10004/', // Your store URL
//   consumerKey: process.env.REACT_APP_CONSUMER_KEY, // Your consumer key
//   consumerSecret: process.env.REACT_APP_CONSUMER_SECRET, // Your consumer secret
//   version: 'wc/v3', // WooCommerce WP REST API version
// });

// Custom interceptor to remove woocommerce custom User-Agent (not allowed in Chrome/Safari)
axios.interceptors.request.use(function (config) {
  const { headers = {} } = config || {};
  if (headers['User-Agent']) delete config.headers['User-Agent'];

  return config;
});

export const getData = async (url) => {
  try {
    const woocomData = await WooCommerce.get(url, {
      per_page: 20, // 20 products per page
    });

    // console.log(woocomData)
    return woocomData;
  } catch (error) {
    console.log(error);
  }
};

export const setOrder = async (url, data) => {
  try {
    const woocomOrder = await WooCommerce.post(url, data);
    console.log('Order Response:', woocomOrder);

    // return woocomOrder;
  } catch (error) {
    console.log('Error Posting Order:', error);
  }
};
