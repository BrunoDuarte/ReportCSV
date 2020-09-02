import { config } from "process"

interface Sprint {
    Sprint: number
    Capacity: number
}

class processReport {

    public create(sprintCapacity: Sprint[], epicSize: string[]) {

        sprintCapacity.map((key, value) => {
            console.log(`${key.Sprint} -> ${key.Capacity}`)
        })

    }

}

export default processReport
