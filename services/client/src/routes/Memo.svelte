<script lang="ts">
	import Button from '../lib/Button.svelte';
</script>

<main>
 <header>
	<div>
		<h1>Memo</h1>
	</div>
 </header>
 <section class="table">
	<div>
		<table>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Content</th>
				<th>Amount</th>
				<th>Date</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ราดหน้าป้าเป็ด</td>
				<td>ค้างค่าหมูทอดกระเทียมไข่ดาว 2 จาน</td>
				<td>80 บาท</td>
				<td>20/06/2022</td> 
			</tr>
		</table>
	</div>
 </section>
 <section class="add">
	<Button content="เพิ่ม" /> 
 </section>
</main>

<style>
	main {
		font-family: 'Prompt'; 
		text-align: center;
	}
</style>