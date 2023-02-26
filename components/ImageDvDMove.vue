<template>
  <div>
    <div class="fill">
      <div v-show="isActive" id="dvd" class="dvd" data-testid="dvd-easteregg">
        <nuxt-img :src="images[imgIndex]" preset="avatar" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, PropSync } from 'nuxt-property-decorator';
import Vue from 'vue';
import { profiles } from '~/scripts/profiles';
import { getProfilePictureFromProfile } from '~/scripts/helpers/profilepicture';

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
  let css = '';
  const propertiesArray = Object.entries(properties);
  propertiesArray.forEach(([key, val]) => {
    css += `${key}: ${val};`;
    css += `${prefix + key}: ${val};`;
  });
  // eslint-disable-next-line no-param-reassign
  element.style.cssText += css;
}

const xMin = 0;
const yMin = 0;

const animationSpeed = 3;

const images: Array<string> = [];

profiles.forEach((profile) => {
  const image = getProfilePictureFromProfile(profile);
  if (image) {
    images.push(image);
  }
});

@Component({})
export default class ImageDvDMove extends Vue {
  imgIndex = 0;

  mounted() {
    if (process.browser) {
      this.initDvd();
    }
  }

  @PropSync('active', { default: true })
  isActive!: boolean;

  switchImage() {
    let index = Math.floor(Math.random() * images.length);

    while (index === this.imgIndex) {
      index = Math.floor(Math.random() * images.length);
    }

    this.imgIndex = index;
  }

  get images() {
    return images;
  }

  box: HTMLElement | null = null;

  win: HTMLElement | null = null;

  ww: number | null = null;

  wh: number | null = null;

  translateX = 0;

  translateY = 0;

  boxWidth = 0;

  boxHeight = 0;

  xMax = 0;

  yMax = 0;

  direction = 'ne';

  lastFrameTime: number | null = null;

  timeout: any = null;

  update() {
    const win = this.win!;
    this.ww = win.clientWidth;
    this.wh = win.clientHeight;
    this.translateX = Math.floor(Math.random() * this.ww + 1);
    this.translateY = Math.floor(Math.random() * this.wh + 1);
    const box = this.box!;
    this.boxWidth = box.offsetWidth;
    this.boxHeight = box.offsetHeight;
    this.xMax = this.ww - this.boxWidth;
    this.yMax = this.wh - this.boxHeight;
  }

  move() {
    const lastTime = this.lastFrameTime;
    const timeNow = new Date().getTime();
    this.lastFrameTime = timeNow;
    const timeToMove = (lastTime ? timeNow - lastTime : 0) / 10;
    const movement = animationSpeed * timeToMove;
    switch (this.direction) {
    case 'ne':
      this.translateX += movement;
      this.translateY -= movement;
      break;
    case 'nw':
      this.translateX -= movement;
      this.translateY -= movement;
      break;
    case 'se':
      this.translateX += movement;
      this.translateY += movement;
      break;
    case 'sw':
      this.translateX -= movement;
      this.translateY += movement;
      break;
    default:
      break;
    }
    if (this.translateY <= yMin) {
      if (this.direction === 'nw') {
        this.direction = 'sw';
      } else if (this.direction === 'ne') {
        this.direction = 'se';
      }
      this.switchImage();
      this.translateY = yMin;
    }
    if (this.translateY >= this.yMax) {
      if (this.direction === 'se') {
        this.direction = 'ne';
      } else if (this.direction === 'sw') {
        this.direction = 'nw';
      }
      this.switchImage();
      this.translateY = this.yMax;
    }
    if (this.translateX <= xMin) {
      if (this.direction === 'nw') {
        this.direction = 'ne';
      } else if (this.direction === 'sw') {
        this.direction = 'se';
      }
      this.switchImage();
      this.translateX = xMin;
    }
    if (this.translateX >= this.xMax) {
      if (this.direction === 'ne') {
        this.direction = 'nw';
      } else if (this.direction === 'se') {
        this.direction = 'sw';
      }
      this.switchImage();
      this.translateX = this.xMax;
    }
    setStyle(this.box, {
      transform: `translate3d(${this.translateX}px, ${this.translateY}px, 0)`,
    });
  }

  runAnimation() {
    requestAnimationFrame(this.runAnimation);
    if (this.isActive) {
      this.move();
    }
  }

  initDvd() {
    // reset constraints
    this.box = document.getElementById('dvd')!;
    this.win = this.box.parentElement!;
    this.update();
    // reset constraints on resize
    window.addEventListener(
      'resize',
      () => {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(this.update, 100);
      },
      false,
    );

    this.runAnimation();
  }
}
</script>

<style lang="scss" scoped>
.fill {
  //z-index: -1;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.invisible {
  display: none;
}

.dvd {
  // z-index: 1;
  position: absolute;
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 128px;
  height: 128px;
  > img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 850px) {
  .dvd {
    width: 125px;
    height: 125px;
  }
}
@media screen and (max-width: 500px) {
  .dvd {
    width: 100px;
    height: 100px;
  }
}
</style>
