<script>
  import { goto } from "$app/navigation"
  import { usersInfo } from "$lib/stores.js"
  import { getUsersFunction } from "$lib/getUsersInfo.js"
  import { onDestroy } from "svelte"
  import { get } from "svelte/store"

  function goToCreate() {
    goto("/create")
    //using window.location.href = window.location.origin + '/create' will refresh the page. Either use this or use <a href=...>
  }
  function goToView() {
    goto("/view")
  }
  function refresh() {
    location.reload()
  }
  getUsersFunction()

  console.log("Fetched users and set.")
</script>

<h1 class="heading">Welcome to Users app</h1>
<hr />
<div
  class="container my-5 gap-3 d-flex flex-column justify-content-center align-items-center"
>
  <button class="btn btn-warning" on:click={goToCreate}>
    Go to create user</button
  >
  <button class="btn btn-danger" on:click={goToView}>Go to view users</button>
  <button class="btn btn-primary" on:click={refresh}>Refresh</button>
</div>
<hr />
<br />

<slot />

<style>
  .heading {
    text-align: center;
  }
</style>
