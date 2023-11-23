// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store"

let usersInfo
let existing
if (typeof window !== "undefined") {
  existing = localStorage.getItem("users")
  console.log("This is stored in the localhost: ", JSON.parse(existing))
}

if (existing) usersInfo = writable(JSON.parse(existing))
else usersInfo = writable({})

export { usersInfo }
