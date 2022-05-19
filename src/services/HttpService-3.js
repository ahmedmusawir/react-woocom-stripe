import axios from 'axios';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// REMOTE DIGITAL OCEAN DOCKER WP
// const WooCommerce = new WooCommerceRestApi({
//   url: 'http://blockbuster.dns.army:8000/', // Your store URL
//   consumerKey: process.env.REACT_APP_DOCKER_CONSUMER_KEY, // Your consumer key
//   consumerSecret: process.env.REACT_APP_DOCKER_CONSUMER_SECRET, // Your consumer secret
//   version: 'wc/v3', // WooCommerce WP REST API version
// });

// LOCAL WP
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
