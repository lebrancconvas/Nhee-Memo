<script lang="ts">
	import axios, { AxiosResponse } from 'axios';
	import {onMount} from 'svelte';
	import Button from '../lib/Button.svelte';
	// import type {IListData} from '../interface/ListData.interface.ts';

	// Get API Data.
	let lists = []; 
	onMount(async() => {
		const response: AxiosResponse = await axios.get('http://localhost:9000/lists')
		lists = await response.data;
	});

	// Test Lists. 
	let testlists = [];
	let title = "";
	let desc = "";
	let amount: 0;
	let date = "";
	let testlist = {};

	// Add
	let isAdd: boolean = false;

	const add = (): void => {
		isAdd = true;
	}

	const closeAdd = (): void => {
		isAdd = false;
	}

	const showData = () => {
		testlist['Title'] = title;
		testlist['Description'] = desc;
		testlist['Amount'] = amount;
		testlist['Date'] = date;
		testlists.push(testlist);
		console.log(testlists);
		clearData();
	}

	const clearData = () => {
		title = "";
		desc = "";
		amount = 0;
		date = "";
	}

</script>

<main>

 <header>
	<div>
		<h1>Liability List</h1> 
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
	<div on:click={add}>
		<Button content="เพิ่ม" /> 
	</div>
 </section>

 {#if isAdd}
 <modal>
	<section class="addFormModal">
			<div on:click={closeAdd} class="closeModal">ปิด</div>
			<h3>กรุณากรอกข้อมูลยอดค่าชำระของคุณ</h3>  
			<div class="addForm">
				<form on:submit|preventDefault={showData}>
					Title <br><input type="text" bind:value={title} required><br>
					Description <br><input type="text" bind:value={desc}><br>
					Amount <br><input type="number" bind:value={amount} required><br>
					Date <br><input type="date" bind:value={date}><br>
					<button type="submit">Add to List</button>
				</form>
			</div>
	</section>
 </modal>
 {/if} 

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

	.addFormModal {
		z-index: 9999;
		position: relative;
		background: white;
		filter: drop-shadow(5px 5px 5px #555);
		padding: 1em;
		border: 2px solid #000;
		border-radius: 10px;
		width: 350px;
		margin-left: auto;
		margin-right: auto;
	}

	.closeModal {
		width: 10px;
		background-color: #FFB24EFF;
	}

	/* .backdrop {
		position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50);
	} */
</style>