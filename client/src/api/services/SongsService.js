import api from '../api/api';

const SongsService = {
  async getSongsByArtistId(artistId) {
    try {
      const response = await api.get(`songs/artists/${artistId}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
};

export default SongsService;
