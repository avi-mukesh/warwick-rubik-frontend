import { execImages } from "./Images"

class Exec {
    constructor(name, description, role, img) {
        this.name = name
        this.description = description
        this.role = role
        this.img = img
    }
}

const james = new Exec("James", "james description", "President", execImages[0])
const avi = new Exec("Avi", "avi description", "Secretary", execImages[1])
const ridwan = new Exec("Ridwan", "rid description", "Treasurer", execImages[2])

export const execMembers = [james, avi, ridwan]
