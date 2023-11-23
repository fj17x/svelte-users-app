import { goto } from "$app/navigation"
import { onMount } from "svelte"
import { usersInfo } from "$lib/stores.js"
import { get } from "svelte/store"

export async function getUsersFunction() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("users")) {
      usersInfo.set(JSON.parse(localStorage.getItem("users")))
      console.log("Fetched from localhost:", get(usersInfo))
    } else {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await response.json()
      usersInfo.set(users)
      console.log("Fetched from API:", get(usersInfo))
    }
  }
}
