import { TodoistApi } from "@doist/todoist-api-typescript/dist/index.js"

const api = new TodoistApi("")

let filterItems = async (items) => {
    for (const {id, projectId} of items) {
        if (projectId === '2231089934') {
            await api.closeTask(id)
        }
    }
}

export const handler = async(event) => {
    try {
       let items  = await api.getTasks()
       await filterItems(items)
    } catch(e) {
        console.log(e)
    }
};