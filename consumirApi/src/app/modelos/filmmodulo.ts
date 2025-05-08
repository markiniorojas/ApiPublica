// Solo para GetAll (respuesta de /films)
export interface FilmListItem {
    uid: string;
    title: string;
    url: string;
  }
  
  // Para GetById (respuesta de /films/{id})
  export interface FilmDetail {
    uid: string;
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
  }