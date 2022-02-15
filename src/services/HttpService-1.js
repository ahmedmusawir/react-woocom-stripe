import React, { useState } from 'react';
import axios from 'axios';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// WOOCOM API SETUP
const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:10004/', // Your store URL
  consumerKey: 'ck_004f2ebf17300b34c764b5e041d75e3d17d91655', // Your consumer key
  consumerSecret: 'cs_7d668bcdae9cf03a3a17861adc57bf2d0095664c', // Your consumer secret
  version: 'wc/v3', // WooCommerce WP REST API version
});

// Custom interceptor to remove woocommerce custom User-Agent (not allowed in Chrome/Safari)
axios.interceptors.request.use(function (config) {
  const { headers = {} } = config || {};
  if (headers['User-Agent']) delete config.headers['User-Agent'];

  return config;
});

const getProducts = () => {
  // FEATURED & NOT FEATURED (true/false)
  // WooCommerce.get('products?featured=true', {
  // BY CATEGORY (412 is featured)
  // WooCommerce.get('products?category=412,409', {
  // BY EXCLUDING CAT - HAD TO ADD FILTER FUNCTION ... CHECK functions.php
  // WooCommerce.get('products?category_exclude=412', {
  // BY EXCLUDING TAG - HAD TO ADD FILTER FUNCTION ... CHECK functions.php
  // WooCommerce.get('products?tag_exclude=413', {
  // BASIC PRODUCT
  WooCommerce.get('products?category=412,409', {
    // per_page: 5, // 20 products per page
  })
    .then((response) => {
      console.log(response.data);
      // setProducts(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

export const getData = async () => {
  try {
    const woocomData = await WooCommerce.get('products?category=412,409', {
      per_page: 5, // 20 products per page
    });

    // console.log(woocomData)
    return woocomData;
  } catch (error) {
    console.log(error);
  }
};
