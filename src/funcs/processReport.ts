import { config } from "process"

interface Sprint {
    Sprint: number
    Capacity: number
}

class processReport {

    public create(sprintCapacity: Sprint[], epicSize: string[]) {

        // const indexSprint = sprintCapacity.findIndex(function(todo, index) {
        //     return todo
        // })

        sprintCapacity.map((key, value) => {
            console.log(`${key.Sprint} -> ${key.Capacity}`)
        })

        

        // console.log(sprintCapacity)
        // console.log(indexSprint)
        // const sprintJson = sprintCapacity.map(el => el)

        // console.log(sprintCapacity[0])

        // console.log(Object.keys(sprintCapacity))
    }

}

export default processReport