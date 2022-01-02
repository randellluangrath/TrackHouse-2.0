import api from '../Api';

const ArtistsService = {
  async findArtists(searchRequest) {
    try {
      const response = await api.post('artists/search', searchRequest);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
};

export default ArtistsService;
