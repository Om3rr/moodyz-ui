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


export const apiGetAnalytics = async(klass, from_ts, to_ts) => {
    const {data} = await axios.get(`/api/classes/${klass}/analytics`, {params: {from_ts, to_ts}});
    return data
}
//    example response
//    [
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/igehqh8wu3wf4leqikky.png",
//       "gender": "female",
//       "id": 20,
//       "name": "Sian Byrne",
//       "picture": "igehqh8wu3wf4leqikky.png",
//       "url": "http://localhost:3000/login?pw=gTFNayctttIuZUqoXTTyYtrAAaWkXKMd"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 10,
//           "pub_date": "Tue, 31 Mar 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 1,
//           "pub_date": "Wed, 01 Apr 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 2,
//           "pub_date": "Thu, 02 Apr 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 2,
//           "pub_date": "Fri, 03 Apr 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 10,
//           "pub_date": "Sat, 04 Apr 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 6,
//           "pub_date": "Sun, 05 Apr 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 6,
//           "pub_date": "Mon, 06 Apr 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 1,
//           "pub_date": "Tue, 07 Apr 2020 21:00:32 GMT",
//           "student": 20
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/loqpgsraopuxaax6kvhu.png",
//       "gender": "female",
//       "id": 21,
//       "name": "Sian Byrne",
//       "picture": "loqpgsraopuxaax6kvhu.png",
//       "url": "http://localhost:3000/login?pw=XIcnafpPTnkcysOrRXfzzrymjXsaHTle"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 1,
//           "pub_date": "Tue, 31 Mar 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 8,
//           "pub_date": "Wed, 01 Apr 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 2,
//           "pub_date": "Thu, 02 Apr 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 8,
//           "pub_date": "Fri, 03 Apr 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 6,
//           "pub_date": "Sat, 04 Apr 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 4,
//           "pub_date": "Sun, 05 Apr 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 7,
//           "pub_date": "Mon, 06 Apr 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 8,
//           "pub_date": "Tue, 07 Apr 2020 21:00:38 GMT",
//           "student": 21
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/igehqh8wu3wf4leqikky.png",
//       "gender": "male",
//       "id": 22,
//       "name": "Rhiannon Storey",
//       "picture": "igehqh8wu3wf4leqikky.png",
//       "url": "http://localhost:3000/login?pw=TwHfrnhXIvSiPuwZdypBehAAzjSwBpKX"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 6,
//           "pub_date": "Tue, 31 Mar 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 5,
//           "pub_date": "Wed, 01 Apr 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 8,
//           "pub_date": "Thu, 02 Apr 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 2,
//           "pub_date": "Fri, 03 Apr 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 3,
//           "pub_date": "Sat, 04 Apr 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 7,
//           "pub_date": "Sun, 05 Apr 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 3,
//           "pub_date": "Mon, 06 Apr 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 7,
//           "pub_date": "Tue, 07 Apr 2020 21:00:44 GMT",
//           "student": 22
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/igehqh8wu3wf4leqikky.png",
//       "gender": "male",
//       "id": 23,
//       "name": "Zayne Lamb",
//       "picture": "igehqh8wu3wf4leqikky.png",
//       "url": "http://localhost:3000/login?pw=GmWNJyPDNsEgbgNNbmOkvHtYDoEqRCaq"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 7,
//           "pub_date": "Tue, 31 Mar 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 4,
//           "pub_date": "Wed, 01 Apr 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 10,
//           "pub_date": "Thu, 02 Apr 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 10,
//           "pub_date": "Fri, 03 Apr 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 9,
//           "pub_date": "Sat, 04 Apr 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 3,
//           "pub_date": "Sun, 05 Apr 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 7,
//           "pub_date": "Mon, 06 Apr 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 6,
//           "pub_date": "Tue, 07 Apr 2020 21:00:50 GMT",
//           "student": 23
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/znztmyjqlmvqqknbaced.png",
//       "gender": "male",
//       "id": 24,
//       "name": "Teegan Mitchell",
//       "picture": "znztmyjqlmvqqknbaced.png",
//       "url": "http://localhost:3000/login?pw=FeQDCceTstMFSYhbkyJgtxhGdlgXDVyi"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 10,
//           "pub_date": "Tue, 31 Mar 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 6,
//           "pub_date": "Wed, 01 Apr 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 7,
//           "pub_date": "Thu, 02 Apr 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 4,
//           "pub_date": "Fri, 03 Apr 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 3,
//           "pub_date": "Sat, 04 Apr 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 1,
//           "pub_date": "Sun, 05 Apr 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 1,
//           "pub_date": "Mon, 06 Apr 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 3,
//           "pub_date": "Tue, 07 Apr 2020 21:00:58 GMT",
//           "student": 24
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/jsktubd7pfaa1lf9g2ho.png",
//       "gender": "female",
//       "id": 25,
//       "name": "Chanel Coles",
//       "picture": "jsktubd7pfaa1lf9g2ho.png",
//       "url": "http://localhost:3000/login?pw=ltjzANzJkmlmLyxfVZeqFSWWiHHWJJxf"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 3,
//           "pub_date": "Tue, 31 Mar 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 1,
//           "pub_date": "Wed, 01 Apr 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 9,
//           "pub_date": "Thu, 02 Apr 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 6,
//           "pub_date": "Fri, 03 Apr 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 7,
//           "pub_date": "Sat, 04 Apr 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 3,
//           "pub_date": "Sun, 05 Apr 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 9,
//           "pub_date": "Mon, 06 Apr 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 2,
//           "pub_date": "Tue, 07 Apr 2020 21:01:01 GMT",
//           "student": 25
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/tldkubag7qnp6gipgfja.png",
//       "gender": "female",
//       "id": 26,
//       "name": "Eben Thomas",
//       "picture": "tldkubag7qnp6gipgfja.png",
//       "url": "http://localhost:3000/login?pw=JFHnkOEAVesRGijhTJafiGnYQsewzUCp"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 5,
//           "pub_date": "Tue, 31 Mar 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 4,
//           "pub_date": "Wed, 01 Apr 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 1,
//           "pub_date": "Thu, 02 Apr 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 4,
//           "pub_date": "Fri, 03 Apr 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 9,
//           "pub_date": "Sat, 04 Apr 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 2,
//           "pub_date": "Sun, 05 Apr 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 7,
//           "pub_date": "Mon, 06 Apr 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 8,
//           "pub_date": "Tue, 07 Apr 2020 21:01:04 GMT",
//           "student": 26
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/igehqh8wu3wf4leqikky.png",
//       "gender": "male",
//       "id": 27,
//       "name": "Teegan Mitchell",
//       "picture": "igehqh8wu3wf4leqikky.png",
//       "url": "http://localhost:3000/login?pw=KhuoZgswNaPGOuWDUiGoWsIBIzizazhW"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 5,
//           "pub_date": "Tue, 31 Mar 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 6,
//           "pub_date": "Wed, 01 Apr 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 9,
//           "pub_date": "Thu, 02 Apr 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 10,
//           "pub_date": "Fri, 03 Apr 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 10,
//           "pub_date": "Sat, 04 Apr 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 2,
//           "pub_date": "Sun, 05 Apr 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 3,
//           "pub_date": "Mon, 06 Apr 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 6,
//           "pub_date": "Tue, 07 Apr 2020 21:01:09 GMT",
//           "student": 27
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/r8uzgjwa66rfyug1ljf0.png",
//       "gender": "female",
//       "id": 28,
//       "name": "Teegan Mitchell",
//       "picture": "r8uzgjwa66rfyug1ljf0.png",
//       "url": "http://localhost:3000/login?pw=sjXixqJTjGZzQjiZNojZDwxltqIElttK"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 8,
//           "pub_date": "Tue, 31 Mar 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 1,
//           "pub_date": "Wed, 01 Apr 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 6,
//           "pub_date": "Thu, 02 Apr 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 1,
//           "pub_date": "Fri, 03 Apr 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 2,
//           "pub_date": "Sat, 04 Apr 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 1,
//           "pub_date": "Sun, 05 Apr 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 7,
//           "pub_date": "Mon, 06 Apr 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 2,
//           "pub_date": "Tue, 07 Apr 2020 21:01:14 GMT",
//           "student": 28
//         }
//       ]
//     }
//   },
//   {
//     "student": {
//       "face_url": "http://res.cloudinary.com/djurf99ym/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,h_120,w_120/tldkubag7qnp6gipgfja.png",
//       "gender": "male",
//       "id": 29,
//       "name": "Liana Nelson",
//       "picture": "tldkubag7qnp6gipgfja.png",
//       "url": "http://localhost:3000/login?pw=faCptaMgZqsmUcDaXaeqaCpvsEacjgUg"
//     },
//     "votes": {
//       "2020-03-31": [
//         {
//           "choice": 1,
//           "pub_date": "Tue, 31 Mar 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ],
//       "2020-04-01": [
//         {
//           "choice": 9,
//           "pub_date": "Wed, 01 Apr 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ],
//       "2020-04-02": [
//         {
//           "choice": 6,
//           "pub_date": "Thu, 02 Apr 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ],
//       "2020-04-03": [
//         {
//           "choice": 7,
//           "pub_date": "Fri, 03 Apr 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ],
//       "2020-04-04": [
//         {
//           "choice": 10,
//           "pub_date": "Sat, 04 Apr 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ],
//       "2020-04-05": [
//         {
//           "choice": 7,
//           "pub_date": "Sun, 05 Apr 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ],
//       "2020-04-06": [
//         {
//           "choice": 5,
//           "pub_date": "Mon, 06 Apr 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ],
//       "2020-04-07": [
//         {
//           "choice": 2,
//           "pub_date": "Tue, 07 Apr 2020 21:01:20 GMT",
//           "student": 29
//         }
//       ]
//     }
//   }
// ]




