<script lang="ts">
	import axios from 'axios';
	import {onMount} from 'svelte';
	import Button from '../lib/Button.svelte';
	import {IListData} from '../interface/ListData.interface.ts';

	// Get API Data.
	let lists: IListData[] = []; 
	onMount(async() => {
		const response = await axios.get('http://localhost:9000/lists')
		lists = await response.data;
	});

	// Add
	let isAdd: boolean = false;

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
				<th>Description</th> 
				<th>Amount</th>
				<th>Date</th>
			</tr>
			{#each lists as list, index}
			<tr>
				<td>{index + 1}</td>
				<td>{list.title}</td>
				<td>{list.description}</td>
				<td>{list.amount} ฿</td> 
				<td>{list.date}</td> 
			</tr>
			{/each}
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

	table {
		margin-right: auto;
		margin-left: auto;
		font-size: 25px;
		margin-bottom: 10px; 
 	}

	td {
		margin-right: 10%;
		margin-left: 10%; 
	}
</style>