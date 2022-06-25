<script lang="ts"> 
  import Logo from '../assets/logo/nhee-memo.png';
  import Counter from '../lib/Counter.svelte';
</script>

<main>
  <header>
    <div class="heading">
      <img src={Logo} alt="Nhee-Memo Logo" class="logo-img">  
    </div>
    <div class="catchphrase">
      <h3>ให้คุณไม่ต้องภวงค์ว่ายังลืมจ่ายค่าชำระที่ยังคั่งค้างอะไรบ้าง ด้วย Nhee Memo</h3> 
    </div>
  </header>
  <section class="body">
    <div>
      <a href="https://example.com"> 
        <Counter />
      </a>
    </div>
  </section>
</main>

<style>
  main {
    text-align: center;
    font-family: 'Prompt';
    font-size: 20px;
  }

  .logo-img {
    width: 350px;
    height: 350px;
  }
</style>