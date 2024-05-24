import axios from 'axios';

export default async function handler(req, res) {
  const { name } = req.query;

  try {
    const response = await axios.get(`https://api.nationalize.io?name=${name}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country data' });
  }
}
