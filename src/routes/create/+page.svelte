<script>
  import { usersInfo } from "$lib/stores.js"

  let user = {
    username: "",
    email: "",
    website: "",
  }

  function updateUsers() {
    //Using store
    usersInfo.update((oldUsers) => {
      oldUsers.push(user)
      localStorage.setItem("users", JSON.stringify(oldUsers))
      return oldUsers
    })
    console.log("User pushed and localStorage successfully updated.", user)
  }

  //3 ways to share around data between components, stores, event dispatchers and context api.
</script>

<main>
  <div class="container">
    <form on:submit|preventDefault={updateUsers}>
      <div class="row">
        <label for="username"><h5>Username</h5></label>
        <input
          type="text"
          required
          name="username"
          bind:value={user.username}
        />
      </div>
      <div class="row">
        <label for="email"><h5>Email</h5></label>
        <input type="email" required name="email" bind:value={user.email} />
      </div>
      <div class="row">
        <label for="website"><h5>Website</h5></label>
        <input
          type="text"
          required
          name="website"
          bind:value={user.website}
          pattern="\w+\.[A-Za-z]{'{'}2,4{'}'}"
        />
      </div>
      <br />
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-success" type="submit"> Create user</button>
      </div>
    </form>
    <!-- <p>{data.texts}</p> -->
    <!-- <p>{data.details}</p> -->
  </div>
</main>
