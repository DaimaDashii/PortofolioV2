<template>
  <div class="bg-primary">
    <h1 class="text-emerald-700 text-4xl font-bold ml-5 mt-24">
      Hello saya indra
    </h1>
    <section class="hero text-2xl ml-7">
      <h1 class="hero-title">
        <span class="typed-text">{{ displayText }}</span
        ><span class="cursor">|</span>
      </h1>
    </section>
    <p class="text-lg underline text-emerald-800 font-serif ml-5 mt-2 mr-32">
      making code is easy, but what makes it hard is how to do it right
    </p>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      texts: ["Front End Developer", "UI/UX Designer"],
      displayText: "",
      typingSpeed: 100,
      erasingSpeed: 50,
      pauseDuration: 2500,
      currentIndex: 0,
      textIndex: 0,
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.texts[this.textIndex].length) {
        this.displayText += this.texts[this.textIndex].charAt(
          this.currentIndex
        );
        this.currentIndex++;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        setTimeout(this.eraseText, this.pauseDuration);
      }
    },
    eraseText() {
      if (this.displayText.length > 0) {
        this.displayText = this.displayText.slice(0, -1);
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.currentIndex = 0;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        setTimeout(this.typeText, this.typingSpeed);
      }
    },
  },
};
</script>

<style scoped>
.typed-text {
  color: rgb(4 120 87);
  font-weight: 700;
}

.cursor {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
