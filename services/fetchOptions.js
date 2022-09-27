const { VITE_SERVER_ADDRESS, VITE_SERVER_PORT } = import.meta.env
const url = `http://${VITE_SERVER_ADDRESS}:${VITE_SERVER_PORT}/`
const currentUser = JSON.parse(localStorage.getItem("currentUser"))
console.log("CUSER", currentUser)

const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Accept": "application/json",
}

export { url, headers, currentUser }