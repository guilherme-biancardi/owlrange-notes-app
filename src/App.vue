<template>
  <RouterView name="app"></RouterView>
</template>

<script setup>

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

:root {
  --white: #ffffff;
  --white-light: #f5f5f5;
  --text: #474747;
  --blue: #0007ae;
  --blue-medium: #292fdc;
  --shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

input, button{
  border: none;
  outline: none;
}

body {
  background-color: var(--white-light);
  color: var(--text);
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background: var(--blue-medium);
  border-radius: 12px;
}
</style>
