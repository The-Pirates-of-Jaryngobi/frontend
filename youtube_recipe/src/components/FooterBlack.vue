<template>
  <footer class="footer-container">
    <div class="footer-column">
      <div>
        <p><strong>Grepp, Data Engineering DevCourse</strong></p>
        <p>Whysion <span class="job-info">PM, ETL, Frontend</span></p>
        <p>Dr.meteor <span class="job-info">Tech Leading, ML</span></p>
        <p>MinhoeKim <span class="job-info">ETL, Frontend</span></p>
        <p>RomkDB <span class="job-info">Infra, Backend</span></p>
        <p>Jaeho-99 <span class="job-info">ETL, ELT, Backend</span></p>
      </div>
      <div>
        <p><strong>Data Sources</strong></p>
        <p>Youtube API</p>
        <p>Coupang</p>
        <p>식품의약품안전처</p>
        <p>소스산업화센터</p>
        <p>Lampcook</p>
      </div>
    </div>
    <div class="footer-column">
      <div class="copyright-container">
        <p>© 2024 The Pirates of Jaryngobi</p>
        <a href="https://github.com/orgs/The-Pirates-of-Jaryngobi/repositories">
          <img src="../assets/white-github.svg" target="blank" alt="GitHub Repository" style="width: 32px; height: 32px;" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #403f4c;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  color: #ffffff;
  line-height: 2.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  gap: 4em
}

.footer-column {
  display: flex;
  flex-direction: row;
  gap: 80px;
  max-width: 1000px;
  width: 100%;
}

.footer-column p {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.footer-column strong {
  margin-bottom: 5px;
}

.job-info {
  font-weight: 300;
  color: #ddd;
}

.copyright-container {
  display: flex;
  padding-top: 4em;
  border-Top: 1px solid #aaa5;
  max-width: 1000px;
  width: 100%;
  justify-content: space-between;
}

@media (max-width:600px) {
  .footer-column {
    flex-direction: column;
    gap: 40px;
  }
  .footer-container {
    padding: 50px;
  }
}
</style>
