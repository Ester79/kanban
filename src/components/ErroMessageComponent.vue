<template>
    <div>
        <button class="btn" @click="openOverlay">Open overlay test</button>
        <div id="overlay" @click="closeOverlay">
            <div id="text">Close Message</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return 'hola';
  },
  methods: {
    openOverlay() {
      document.getElementById('overlay').style.display = 'block';
    },
    closeOverlay() {
      document.getElementById('overlay').style.display = 'none';
    },
  },
};

</script>

<style>
#overlay {
    display: none;
    background-color: grey;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    opacity: 0.6;
}
#text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  cursor: pointer;
}

.btn{
    padding: 0.4rem;
    color: white;
    font-family: Gelion, Helvetica, "Helvetica Neue", Arial;
    line-height: 1.5;
    font-size: 15px;
    background: #F2735B;
    border-radius: 5px;
    border-color: #F2735B;
}
.btn:hover {
    opacity: 0.7;
    transition: 0.5s;
}
</style>
