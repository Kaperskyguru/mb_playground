<template>
  <div
    class="fixed left-0 top-0 bg-white h-full w-full z-50 loader flex justify-center items-center"
  >
    <span class="text-primary-100">{</span
    ><span class="text-primary-100">}</span>
  </div>
</template>

<script>
export default {};
</script>

<style >
/*  */

.loader {
  color: #000;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 30vh;
  opacity: 100;
  background: white;
  text-align: center;
}

.loader span {
  display: inline-block;
  animation: pulse 0.4s alternate infinite ease-in-out;
}

.loader span:nth-child(odd) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>