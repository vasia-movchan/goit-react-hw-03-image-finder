import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY_API = '28048019-183967a3cd32f0dfa8a2bcd0a';

const optionsQuery = {
  params: {
    key: `${KEY_API}`,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    page: 1,
    per_page: 12,
  },
};

export async function GetDataFromAPI(searchQuery, page) {
  optionsQuery.params.q = searchQuery;
  optionsQuery.params.page = page;
  const response = await axios.get('', optionsQuery);
  return response.data;
}
