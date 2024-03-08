<template>
  <footer class="framer-1fyn2u8" data-border="true" data-framer-name="Footer" name="Footer">
    <div class="framer-id3sin" data-framer-name="Horizontal" name="Horizontal">
      <div class="framer-jp2ol8" data-framer-name="Vertical" name="Vertical">
        <div
          class="framer-ucofe6"
          style="
            outline: none;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            flex-shrink: 0;
            transform: none;
          "
          data-framer-component-type="RichTextContainer"
        ></div>
      </div>
    </div>
    <div class="framer-1t68kop" data-framer-name="Vertical" name="Vertical">
      <div>
        <div style="float: left; width: 40%">
          <p
            style="
              --font-selector: R0Y7U2NoaWJzdGVkIEdyb3Rlc2stNzAw;
              --framer-font-family: 'Schibsted Grotesk', 'Schibsted Grotesk Placeholder', sans-serif;
              --framer-font-weight: 700;
              --framer-letter-spacing: -0.025em;
              --framer-line-height: 1.5em;
              --framer-text-alignment: left;
              --framer-text-color: rgb(255, 255, 255);
            "
            class="framer-text"
          >
            <strong>Grepp, Data Engineering DevCourse</strong>
          </p>
          <p>&nbsp;</p>
          <p class="framer-text p-tag"><strong>Whysion</strong> - PM, ETL, Front-end</p>
          <p class="framer-text p-tag"><strong>Dr.meteor</strong> - Tech Leading, ML</p>
          <p class="framer-text p-tag"><strong>MinhoeKim</strong> - ETL, Front-end</p>
          <p class="framer-text p-tag"><strong>RomkDB</strong> - Infra, Backend</p>
          <p class="framer-text p-tag"><strong>Jaehoe-99</strong> - PM, ETL, Front-end</p>
        </div>
        <div style="float: left; width: 50%">
          <p
            style="
              --font-selector: R0Y7U2NoaWJzdGVkIEdyb3Rlc2stNzAw;
              --framer-font-family: 'Schibsted Grotesk', 'Schibsted Grotesk Placeholder', sans-serif;
              --framer-font-weight: 700;
              --framer-letter-spacing: -0.025em;
              --framer-line-height: 1.5em;
              --framer-text-alignment: left;
              --framer-text-color: rgb(255, 255, 255);
            "
            class="framer-text"
          >
            <strong>Data sources</strong>
          </p>
          <p>&nbsp;</p>
          <p class="framer-text p-tag">Youtube API</p>
          <p class="framer-text p-tag">Coupang</p>
          <p class="framer-text p-tag">식품의약품안전처</p>
          <p class="framer-text p-tag">소스산업화센터</p>
          <p class="framer-text p-tag">Lampcook</p>
        </div>
      </div>
    </div>
    <div class="framer-1c93xxu" data-border="true" data-framer-name="Copyright" name="Copyright">
      <div
        class="framer-vafgph"
        style="
          outline: none;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          flex-shrink: 0;
          transform: none;
        "
        data-framer-component-type="RichTextContainer"
      >
        <p
          style="
            --font-selector: R0Y7U2NoaWJzdGVkIEdyb3Rlc2stcmVndWxhcg==;
            --framer-font-family: 'Schibsted Grotesk', 'Schibsted Grotesk Placeholder', sans-serif;
            --framer-line-height: 1.5em;
            --framer-text-alignment: center;
            --framer-text-color: rgb(255, 255, 255);
          "
          class="framer-text"
        >
          © 2024 The Pirates of Jaryngobi
        </p>
        <button
          onclick="https://github.com/orgs/The-Pirates-of-Jaryngobi/repositories"
          style="text-align: right"
          type="button"
        >
          <div>
            <a href="https://github.com/orgs/The-Pirates-of-Jaryngobi/repositories">
              <img
                src="..\..\public\favicon.ico"
                style="width: 32px; height: 32px"
                alt="대체 텍스트"
              />
            </a>
          </div>
        </button>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>
<style scoped>
footer {
  /* position: fixed; */
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #333; /* 배경색 */
  color: #fff; /* 텍스트 색상 */
  padding: 20px; /* 안쪽 여백 */
}
/* 수평 그룹 */
.framer-id3sin {
  display: flex; /* 가로로 나열 */
  justify-content: space-between; /* 각 아이템 사이의 공간을 균등하게 분배 */
}

/* 세로 그룹 */
.framer-jp2ol8,
.framer-1t68kop {
  display: flex; /* 세로로 나열 */
  flex-direction: column; /* 아이템들을 세로 방향으로 배열 */
}

/* 텍스트 스타일 */
.framer-text {
  font-family: 'Schibsted Grotesk', sans-serif; /* 폰트 */
  font-weight: 400; /* 폰트 두께 */
  letter-spacing: -0.025em; /* 글자 간격 */
  line-height: 1.5em; /* 줄 간격 */
  text-align: left; /* 텍스트 정렬 */
  margin-left: 50px;
}

/* 저작권 정보 */
.framer-1c93xxu {
  border-top: 1px solid #fff; /* 윗 테두리 */
  margin-top: 20px; /* 위쪽 여백 */
  padding-top: 20px; /* 위쪽 안쪽 여백 */
  text-align: cenleftter; /* 텍스트 정렬 */
}

.p-tag {
  --font-selector: R0Y7U2NoaWJzdGVkIEdyb3Rlc2stNzAw;
  --framer-font-family: 'Schibsted Grotesk', 'Schibsted Grotesk Placeholder', sans-serif;
  --framer-font-weight: 700;
  --framer-letter-spacing: -0.025em;
  --framer-line-height: 50em;
  --framer-text-alignment: left;
  --framer-text-color: rgb(255, 255, 255);
}
.button-container {
  text-align: right;
}
p {
  line-height: 1.5em; /* Adjust the value as needed */
}
</style>