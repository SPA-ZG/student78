<template>
    <div class="not-found-container">
      <img src="https://media1.tenor.com/m/I5bEazlQrBAAAAAC/what-kid.gif" alt="404 Not Found" class="not-found-image" />
      <h1 class="not-found-title">404 - Not Found</h1>
      <p class="not-found-message">Sorry, the page you are looking for does not exist.</p>
      <router-link to="/" class="not-found-link">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    // Component options
  };
  </script>
  
  <style scoped>
  .not-found-container {
    text-align: center;
    padding: 20px;
  }
  
  .not-found-image {
    width: 200px;
    margin-bottom: 20px;
  }
  
  .not-found-title {
    font-size: 2em;
    color: #333;
  }
  
  .not-found-message {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 20px;
  }
  
  .not-found-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .not-found-link:hover {
    background-color: #45a049;
  }
  </style>
  