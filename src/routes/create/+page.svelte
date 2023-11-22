<main>
  <div class="container">
    <form method="POST">
      <div class="row">
        <label for="username"><h5>Username</h5></label>
        <input type="text" required name="username" />
      </div>
      <div class="row">
        <label for="email"><h5>Email</h5></label>
        <input type="email" required name="email" />
      </div>
      <div class="row">
        <label for="website"><h5>Website</h5></label>
        <input
          type="text"
          required
          name="website"
          pattern="\w+\.[A-Za-z]{'{'}2,4{'}'}"
        />
      </div>
      <br />
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-success" type="submit"> Create user</button>
      </div>
    </form>
  </div>
</main>
