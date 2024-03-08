<template>
  <!-- <img src="..\..\public\header_sample.png" class="img" @click="goToPage('/')" alt="header"> -->
  <!-- <div class="Container"> -->
  <header
    class="v-toolbar v-toolbar--flat v-toolbar--density-default v-theme--light v-locale--is-ltr v-app-bar"
    style="
      background-color: rgba(255, 255, 255);
      top: 0px;
      z-index: 1004;
      transform: translateY(0%);
      position: fixed;
      left: 0px;
      width: calc(100% + 0px);
    "
  >
    <div class="v-toolbar__content" style="height: 64px">
      <div class="v-container v-locale--is-ltr mx-auto d-flex align-center justify-center">
        <div>
          <img src="..\..\public\favicon.ico" style="width: 32px; height: 32px" alt="대체 텍스트" />
        </div>

        <button
          type="button"
          @click="goToPage('/')"
          class="v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text"
        >
          <span class="v-btn__content" data-no-activator=""
            ><strong>The Cheapest Youtube Recipe </strong>
          </span>
        </button>
        <!-- <button
          type="button"
          class="v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text"
        >
          <span class="v-btn__content" data-no-activator="">Messages</span>
        </button> -->
        <button
          type="button"
          class="v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text"
        >
          <span class="v-btn__content" data-no-activator="">Profile</span>
        </button>
        <button
          type="button"
          class="v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text"
        >
          <span class="v-btn__content" data-no-activator="">About</span>
        </button>

        <div class="v-spacer"></div>
        <div class="v-responsive" style="max-width: 160px">
          <div class="v-responsive__sizer"></div>
          <div class="v-responsive__content">
            <div
              class="v-input v-input--horizontal v-input--center-affix v-input--density-compact v-locale--is-ltr v-text-field"
            >
              <div class="v-input__control">
                <div
                  class="v-field v-field--center-affix v-field--flat v-field--single-line v-field--variant-solo-filled v-theme--light rounded-lg v-locale--is-ltr"
                >
                  <div class="v-field__overlay"></div>
                  <div class="v-field__loader">
                    <div
                      class="v-progress-linear v-theme--light v-locale--is-ltr"
                      role="progressbar"
                      aria-hidden="true"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="
                        top: 0px;
                        height: 0px;
                        --v-progress-linear-height: 2px;
                        left: 50%;
                        transform: translateX(-50%);
                      "
                    >
                      <div class="v-progress-linear__background" style="width: 100%"></div>
                      <div class="v-progress-linear__indeterminate">
                        <div class="v-progress-linear__indeterminate long"></div>
                        <div class="v-progress-linear__indeterminate short"></div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="v-field__field" data-no-activator=""> -->
                  <!-- <label class="v-label v-field-label" for="input-5">Search</label>
                                    <input size="1" type="text" id="input-5" aria-describedby="input-5-messages" class="v-field__input"> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      message: 'header'
      //   imageSrc: require('.\.\public\header_sample_png')
    }
  },
  methods: {
    goToPage(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
/* .Container {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
} */
.img {
  display: block; /* 이미지를 블록 요소로 표시하여 좌우 여백 없이 표시되도록 함 */
  margin: 0 auto; /* 상단에 자동으로 정렬되며 좌우 여백 없이 가운데 정렬됨 */
  width: 100%; /* 부모 요소의 너비에 맞게 이미지 크기 조정 */
  height: auto; /* 가로 세로 비율 유지 */
}
/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Header styles */
header {
  background-color: rgba(255, 255, 255, 0); /* Header background color with transparency */
  box-shadow: 0px 2px 4px rgba(132, 121, 121, 0.1); /* Header shadow */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.v-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px; /* Header height */
}
.v-avatar {
  display: inline-block;
  border-radius: 50%; /* 이 값은 요소의 너비와 높이의 절반으로 설정합니다. */
  overflow: hidden; /* 요소 내의 내용이 넘치는 경우를 대비하여 오버플로우를 숨깁니다. */
}

.bg-grey-darken-1 {
  /* 회색의 어두운 정도를 지정합니다. */
  background-color: #424242; /* 필요에 따라 원하는 회색 값을 지정하세요. */
}

.me-4 {
  /* 오른쪽(margin-right) 여백을 4px로 지정합니다. */
  margin-right: 4px; /* 필요에 따라 원하는 여백 값을 지정하세요. */
  margin-left: 10px;
}

/* 요소의 크기를 지정합니다. */
.v-avatar {
  width: 32px;
  height: 32px;
}

.v-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 20px; /* Space between buttons */
}

.v-btn__content {
  color: #333; /* Button text color */
}

/* Search input styles */
.v-field {
  position: relative;
}

.v-field__input {
  width: 200px; /* Adjust input width as needed */
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid #ccc; /* Input border color */
  outline: none;
}

.v-field-label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: #999; /* Label color */
  pointer-events: none;
  transition: 0.2s ease-out;
}

.v-field__input:focus + .v-field-label,
.v-field__input:not(:placeholder-shown) + .v-field-label {
  top: 8px;
  font-size: 12px;
  color: #666; /* Label color when input is focused or not empty */
}

/* Loader styles */
.v-field__loader {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

/* Progress bar styles */
.v-progress-linear {
  width: 100px; /* Adjust loader width as needed */
  height: 2px; /* Loader height */
}

.v-progress-linear__background {
  background-color: #ccc; /* Progress bar background color */
}

.v-progress-linear__indeterminate {
  background-color: #007bff; /* Progress bar color */
}

.long {
  animation: longIndeterminate 2s infinite;
}

.short {
  animation: shortIndeterminate 2s infinite;
}

@keyframes longIndeterminate {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(200%);
  }
}

@keyframes shortIndeterminate {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(150%);
  }
}
</style>