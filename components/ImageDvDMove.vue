<template>
  <section>
    <section class="fill">
      <div id="dvd">
        <img src="~assets/images/basti/bastiJustRightOK.png" />
      </div>
    </section>
    <slot />
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

const colors = [
  '#ff0000',
  '#ff4000',
  '#ff8000',
  '#ffbf00',
  '#ffff00',
  '#bfff00',
  '#80ff00',
  '#40ff00',
  '#00ff00',
  '#00ff40',
  '#00ff80',
  '#00ffbf',
  '#00ffff',
  '#00bfff',
  '#0080ff',
  '#0040ff',
  '#0000ff',
  '#4000ff',
  '#8000ff',
  '#bf00ff',
  '#ff00ff',
  '#ff00bf',
  '#ff0080',
  '#ff0040',
  '#ff0000',
];
// dvd code
function initDvd() {
  const box = document.getElementById('dvd')!;
  let currentColor = Math.floor(Math.random() * 25 + 1);
  const win = box.parentElement!;
  const ww = win.clientWidth;
  const wh = win.clientHeight;
  let translateX = Math.floor(Math.random() * ww + 1);
  let translateY = Math.floor(Math.random() * wh + 1);
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;
  const boxTop = box.offsetTop;
  const boxLeft = box.offsetLeft;
  let xMin = 0;
  let yMin = 0;
  let xMax = ww - boxWidth;
  let yMax = wh - boxHeight;
  let direction = 'se';
  const speed = 2;
  let timeout:Timeout|null = null;

  function getVendor() {
    const ua = navigator.userAgent.toLowerCase();
    const match = /opera/.exec(ua)
      || /msie/.exec(ua)
      || /firefox/.exec(ua)
      || /(chrome|safari)/.exec(ua)
      || /trident/.exec(ua);
    const vendors = {
      opera: '-o-',
      chrome: '-webkit-',
      safari: '-webkit-',
      firefox: '-moz-',
      trident: '-ms-',
      msie: '-ms-',
    };

    return match && vendors[match[0]];
  }
  function setStyle(element, properties) {
    const prefix = getVendor();
    let property;
    let css = '';
    for (property in properties) {
      css += `${property}: ${properties[property]};`;
      css += `${prefix + property}: ${properties[property]};`;
    }
    element.style.cssText += css;
  }

  // reset constraints on resize
  window.addEventListener(
    'resize',
    (argument) => {
      clearTimeout(timeout);
      timeout = setTimeout(update, 100);
    },
    false,
  );

  function switchColor() {
    let color = Math.floor(Math.random() * 25 + 1);

    while (color === currentColor) {
      color = Math.floor(Math.random() * 25 + 1);
    }

    setStyle(box, {
      color: colors[color],
    });

    currentColor = color;
  }
  // reset constraints
  function update() {
    xMin = -boxLeft;
    yMin = -boxTop;
    xMax = win.innerWidth - boxLeft - boxWidth;
    yMax = win.innerHeight - boxTop - boxHeight;
  }
  function setLimits() {
    if (translateY <= yMin) {
      if (direction === 'nw') {
        direction = 'sw';
      } else if (direction === 'ne') {
        direction = 'se';
      }
      switchColor();
    }
    if (translateY >= yMax) {
      if (direction === 'se') {
        direction = 'ne';
      } else if (direction === 'sw') {
        direction = 'nw';
      }
      switchColor();
    }
    if (translateX <= xMin) {
      if (direction === 'nw') {
        direction = 'ne';
      } else if (direction === 'sw') {
        direction = 'se';
      }
      switchColor();
    }
    if (translateX >= xMax) {
      if (direction === 'ne') {
        direction = 'nw';
      } else if (direction === 'se') {
        direction = 'sw';
      }
      switchColor();
    }
  }
  function setDirection() {
    switch (direction) {
    case 'ne':
      translateX += speed;
      translateY -= speed;
      break;
    case 'nw':
      translateX -= speed;
      translateY -= speed;
      break;
    case 'se':
      translateX += speed;
      translateY += speed;
      break;
    case 'sw':
      translateX -= speed;
      translateY += speed;
      break;
    default:
      break;
    }
    setLimits();
  }
  function move() {
    setDirection();
    setStyle(box, {
      transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
    });
  }
  function init() {
    requestAnimationFrame(init);
    move();
    // setInterval(function() {
    //   move();
    // }, 16.66);
  }
  init();
}

@Component({})
export default class ImageDvDMove extends Vue {
  mounted() {
    if (process.browser) {
      initDvd();
    }
  }
}
</script>

<style lang="scss" scoped>
.fill {
  position: absolute;
  height: 100%;
  width: 100%;
  /* background: #45484d;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #45484d 0%,
    #000000 100%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #45484d 0%,
    #000000 100%
  );
  background: radial-gradient(ellipse at center, #45484d 0%, #000000 100%); */
  overflow: hidden;
}
/* body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  //filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000', GradientType=1);
} */

#dvd {
  position: absolute;
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  color: #fff;
  > img {
    width: 200px;
    height: 200px;
  }
}
</style>
