import axios from 'axios';

export const getVotes = async () => {
    try {
        const {data: {votes}} = await axios.get(`/api/classes/today`);

        console.log(`GET: Here's the list of todos`, votes);

        return votes;
    } catch (e) {
        console.error(e);
    }
};


export const getChoices = async () => {
    return [
        {id: 1, src: "filters/filter1.jpeg"},
        {id: 2, src: "filters/filter2.png"},
        {id: 3, src: "filters/filter3.jpeg"}
    ]
}

export const studentMe = async () => {
    const {student} = await axios.get("/api/students/me")
    return student
}

export const vote = async (choice) => {
    const {data: {votes}} = await axios.post("/api/students/vote", {choice})
    return votes
}




