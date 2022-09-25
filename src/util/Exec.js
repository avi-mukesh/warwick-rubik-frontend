import { execImages } from "./Images"

class Exec {
    constructor(name, description, role, img, email) {
        this.name = name
        this.description = description
        this.role = role
        this.img = img
        this.email = email
    }
}

const james = new Exec(
    "James",
    "james description",
    "President",
    execImages[0],
    "james.a.goodwin@warwick.ac.uk"
)
const avi = new Exec(
    "Avi",
    "avi description",
    "Secretary",
    execImages[1],
    "avi.mukesh@warwick.ac.uk"
)
const ridwan = new Exec(
    "Ridwan",
    "rid description",
    "Treasurer",
    execImages[2],
    "ridwan.hamid@warwick.ac.uk"
)

export const execMembers = [avi, james, ridwan]
