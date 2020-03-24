import axios from 'axios';

export const getVotes = async (class_id) => {
  try {
    const {data} = await axios.get(`/api/classes/${class_id}/today`);

    console.log(`GET: Here's the list of todos`, data);

    return data;
  } catch (e) {
    console.error(e);
  }
};