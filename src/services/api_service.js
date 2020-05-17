import axios from 'axios';

export const getStudents = async () => {
    try {
        const {data: {students}} = await axios.get(`/api/classes/me`);

        console.log(`GET: Here's the list of todos`, students);

        return students;
    } catch (e) {
        console.error(e);
    }
};

export const apiLogin = async({username, password}) => {
    const {data} = await axios.post("/api/login", {username, password})
}

export const teacherGetClass = async (classSlug) =>{
    const {data: {students, klass}} = await axios.get(`/api/teachers/classes/${classSlug}`);
    return {students, klass}
}

export const teacherMe = async () => {
    const {data: {teacher, klasses}} = await axios.get(`/api/teachers/me`);
    return {teacher, klasses}
}


export const getChoices = async () => {
    const happyMojis = [
        "🤩", "😘", "😍", "😊", "🥰", "😎", "🥳", "😝", "🤣", "🤗", "🤓"
    ];
    const scaredMojis = ["😈", "😳", "😯", "😱", "👾"]
    const sadMojis = [];
    const suprisedMojis = ["😲"];
    const optiMoji = ["🌻", "😺"];
    const boredMoji = ["🙇‍️", "🤷", "👩‍🍳", "👸"];
    const angryMoji = ["😡", "🤬", "👺", "😾"];
    return [
        ...mapMojis(happyMojis, "#eec16c", 0),
        ...mapMojis(sadMojis, "#306d93", 1),
        ...mapMojis(suprisedMojis, "#eec16c", 2),
        ...mapMojis(scaredMojis, "#7d38e5", 3),
        ...mapMojis(optiMoji, "#ffffff", 4),
        ...mapMojis(boredMoji, "#9b9b9b", 5),
        ...mapMojis(angryMoji, "#e76c6c", 6),
    ]
}

const mapMojis = (mojis, color, idxRange) => {
    return mojis.map((moji, idx) => ({id: idxRange*100+idx, color, moji}))
}

export const studentMe = async () => {
    const {data: {student}} = await axios.get("/api/students/me")
    return student
}

export const vote = async (choice) => {
    const {data: {students}} = await axios.post("/api/students/vote", {choice})
    return students
}


export const uploadImage = async(image) => {
    const formData = new FormData();
    formData.append("image", image);
    const {data} = await axios.post('/api/teachers/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    return data
};

export const apiAddStudent = async(klassSlug, newStudent) => {
    const {data: {student}} = await axios.post(`/api/teachers/classes/${klassSlug}/students`, {student: newStudent});
    return student
}

export const apiDeleteStudent = async(student) => {
    await axios.delete(`/api/teachers/students/${student.id}`)
}


export const apiCreateKlass = async(klass) => {
    const {data: {klass: klassResp}} = await axios.post("/api/classes/", {klass})
    return klassResp
}


export const apiGetAnalytics = async(klass, fromDate, toDate) => {
    const from_ts = `${fromDate.getFullYear()}/${("0" + (fromDate.getMonth() + 1)).slice(-2)}/${("0" + (fromDate.getDate())).slice(-2)}`
    const to_ts = `${toDate.getFullYear()}/${("0" + (toDate.getMonth() + 1)).slice(-2)}/${("0" + (toDate.getDate())).slice(-2)}`

    const {data} = await axios.get(`/api/classes/${klass}/analytics`, {params: {from_ts, to_ts}});
    return data
}





