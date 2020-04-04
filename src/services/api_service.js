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

export const teacherGetClass = async (classSlug) =>{
    const {data: {students, klass}} = await axios.get(`/api/teachers/classes/${classSlug}`);
    return {students, klass}
}

export const teacherMe = async () => {
    const {data: {teacher, klasses}} = await axios.get(`/api/teachers/me`);
    return {teacher, klasses}
}


export const getChoices = async () => {
    const choices = ["404", "die", "happy", "king", "sick"]
    return choices.map((choiceStr, idx) => ({
        id: idx,
        src: `/filters/${choiceStr}.png`,
        btn: `/filters/${choiceStr}btn.png`
    }))
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




