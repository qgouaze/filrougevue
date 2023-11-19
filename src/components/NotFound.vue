<template>
      <div class="404 textContent">
      <h1>404</h1>
      <p>Nothing to see here! No toys, no catnip, just some nice, empty space. Wanna stay here a while and take a nap? 
        Or maybe you'd rather  <span @click="$router.back()">go back</span>?</p>
    </div>
  </template>
  
  <style scoped>
  span{
    text-decoration: underline;

  }
  span:hover{
    color:black;
  }
  </style>
  