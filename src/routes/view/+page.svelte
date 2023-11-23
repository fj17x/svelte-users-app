<script>
  import { usersInfo } from "$lib/stores.js"
  import { getUsersFunction } from "$lib/getUsersInfo.js"
  import { onDestroy, onMount } from "svelte"

  $: users = []
</script>

<main>
  {#each $usersInfo as user}
    <div class="container">
      <div class="card">
        <div class="class-body">
          <h5 class="card-title">{user.username}</h5>
          <p class="card-text">{user.email}</p>
          <p class="card-text">{user.website}</p>
        </div>
      </div>
    </div>
  {/each}
</main>
