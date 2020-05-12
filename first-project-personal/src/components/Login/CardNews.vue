<template>
  <div id="layout-carousel-login">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
      >
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="https://picsum.photos/1024/480/?image=58"

          />
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto ratione, impedit ex debitis sequi aspernatur aliquam. Sed animi nihil nostrum quasi, officia soluta culpa quo quos cum et fugit?
          </p>
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teste: '1000',
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scooped>
#layout-carousel-login {
  width: 60%;
  height: 100%;

}
</style>