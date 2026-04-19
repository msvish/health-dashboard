import axios from "axios";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const fetchPatientData = async () => {
  // We use btoa() to encrypt the credentials as requested by the instructions
  const username = "coalition";
  const password = "skills-test";
  const credentials = btoa(`${username}:${password}`);

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Coalition API:", error);
    throw error;
  }
};
