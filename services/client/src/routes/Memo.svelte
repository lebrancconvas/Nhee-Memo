<script lang="ts">
	import axios from 'axios';
	import {onMount} from 'svelte';
	import Button from '../lib/Button.svelte';

	interface IListData {
		id: number;
		title: string;
		description: string;
		amount: number;
		date: string;
	}

	// Get API Data.
	// let data, response;
	// let lists: IListData[] = [];
	let lists = []; 
	onMount(async() => {
		const response = await axios.get('http://localhost:9000/lists')
		lists = response.data;
		// data.map(x => {
		// 	lists.push(x);
		// });
	});

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
			{#each lists as list}
			<tr>
				<td>{list.id}</td>
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