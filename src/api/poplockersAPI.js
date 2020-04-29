import axios from "axios"

const LOCAL = "http://localhost:5000/"
const REMOTE = "https://pop-lockers.andrew-horn-portfolio.life/"

export default axios.create({
  baseURL: REMOTE,
})
