import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  genre: string;        // Gênero do jogo
  developer: string;    // Desenvolvedor
  releaseYear: number;  // Ano de lançamento
  rating: number;       // Avaliação do jogo
  trailerUrl?: string;   // URL do trailer do jogo
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'The Witcher 3: Wild Hunt',
      description: 'Um jogo de RPG de mundo aberto com uma história envolvente e vasto mundo para explorar.',
      price: 139,
      imageUrl: 'assets/images/pc-game/the_witcher.jpg',
      genre: 'RPG, Ação',
      developer: 'CD Projekt Red',
      releaseYear: 2015,
      rating: 4.9,
      trailerUrl: 'https://www.youtube.com/watch?v=W3VY5zVdDmc' // Trailer do jogo
    },
    {
      id: 2,
      name: 'Cyberpunk 2077',
      description: 'Um jogo de RPG ambientado em um mundo futurista cheio de escolhas e aventuras.',
      price: 200,
      imageUrl: 'assets/images/pc-game/cyberpunk-2077.jpg',
      genre: 'RPG, Ação',
      developer: 'CD Projekt Red',
      releaseYear: 2020,
      rating: 4.1,
      trailerUrl: 'https://www.youtube.com/watch?v=8Xb-VOKz5yM' // Trailer do jogo
    },
    {
      id: 3,
      name: 'Dark Souls III',
      description: 'Um jogo de RPG de ação desafiador, conhecido pela sua dificuldade e gameplay intenso.',
      price: 189,
      imageUrl: 'assets/images/pc-game/Dark_Souls_3_capa.png',
      genre: 'RPG, Ação',
      developer: 'FromSoftware',
      releaseYear: 2016,
      rating: 4.8,
      trailerUrl: 'https://www.youtube.com/embed/_zDZYrIUgKE'
    },
    {
      id: 4,
      name: 'Red Dead Redemption 2',
      description: 'Um jogo de mundo aberto ambientado no velho oeste com uma narrativa profunda.',
      price: 279,
      imageUrl: 'assets/images/pc-game/red-dead-redemption-2.jpg',
      genre: 'Aventura, Ação',
      developer: 'Rockstar Games',
      releaseYear: 2018,
      rating: 5.0,
      trailerUrl: 'https://www.youtube.com/watch?v=eaWvMlPEdj8' // Trailer do jogo
    },
    {
      id: 5,
      name: 'DOOM Eternal',
      description: 'Um jogo de tiro em primeira pessoa frenético e cheio de ação.',
      price: 130,
      imageUrl: 'assets/images/pc-game/dom-eternal.jpg',
      genre: 'FPS, Ação',
      developer: 'id Software',
      releaseYear: 2020,
      rating: 4.7,
      trailerUrl: 'https://www.youtube.com/watch?v=2dPNWdzXeYo' // Trailer do jogo
    },
    {
      id: 6,
      name: 'Assassin’s Creed Valhalla',
      description: 'Explore o mundo dos Vikings em um RPG de mundo aberto épico.',
      price: 239,
      imageUrl: 'assets/images/pc-game/assassins-valhalla.jpg',
      genre: 'RPG, Ação',
      developer: 'Ubisoft',
      releaseYear: 2020,
      rating: 4.6,
      trailerUrl: 'https://www.youtube.com/watch?v=G37FFtMvv58' // Trailer do jogo
    },
    {
      id: 7,
      name: 'Grand Theft Auto V',
      description: 'Explore Los Santos em um dos maiores jogos de mundo aberto já criados.',
      price: 329,
      imageUrl: 'assets/images/pc-game/gta5.jpg',
      genre: 'Ação, Aventura',
      developer: 'Rockstar North',
      releaseYear: 2013,
      rating: 4.9,
      trailerUrl: 'https://www.youtube.com/watch?v=QkkoHAzjnUs' // Trailer do jogo
    },
    {
      id: 8,
      name: 'Horizon Zero Dawn',
      description: 'Aventure-se em um mundo pós-apocalíptico cheio de máquinas selvagens.',
      price: 140,
      imageUrl: 'assets/images/pc-game/horizon-zero-dawn.jpg',
      genre: 'Ação, Aventura',
      developer: 'Guerrilla Games',
      releaseYear: 2017,
      rating: 4.8,
      trailerUrl: 'https://www.youtube.com/watch?v=uqT8fvYDhYQ' // Trailer do jogo
    },
    {
      id: 9,
      name: 'Sekiro: Shadows Die Twice',
      description: 'Um jogo de ação desafiador com combate intenso em um Japão feudal fictício.',
      price: 162,
      imageUrl: 'assets/images/pc-game/sekiro-shadows-die-twice.jpg',
      genre: 'Ação, Aventura',
      developer: 'FromSoftware',
      releaseYear: 2019,
      rating: 4.9,
      trailerUrl: 'https://www.youtube.com/watch?v=JwzxvCv2bK0' // Trailer do jogo
    },
    {
      id: 10,
      name: 'Elden Ring',
      description: 'Uma nova experiência de RPG de ação dos criadores de Dark Souls.',
      price: 219,
      imageUrl: 'assets/images/pc-game/Elden_Ring_capa.jpg',
      genre: 'RPG, Ação',
      developer: 'FromSoftware',
      releaseYear: 2022,
      rating: 5.0,
      trailerUrl: 'https://www.youtube.com/watch?v=2xuD_HmcY5w' // Trailer do jogo
    },
    {
      id: 11,
      name: 'Resident Evil Village',
      description: 'Um jogo de terror e sobrevivência que leva você a um vilarejo sombrio.',
      price: 149,
      imageUrl: 'assets/images/pc-game/resident_evil_village_pc_cover.jpg',
      genre: 'Terror, Ação',
      developer: 'Capcom',
      releaseYear: 2021,
      rating: 4.8,
      trailerUrl: 'https://www.youtube.com/watch?v=fyH6bgzP5e0' // Trailer do jogo
    },
    {
      id: 12,
      name: 'Halo Infinite',
      description: 'Entre em combate com o Master Chief na mais nova aventura da série Halo.',
      price: 210,
      imageUrl: 'assets/images/pc-game/halo-infinity.jpg',
      genre: 'FPS, Ação',
      developer: '343 Industries',
      releaseYear: 2021,
      rating: 4.6,
      trailerUrl: 'https://www.youtube.com/watch?v=4Jr6AOP5_0A' // Trailer do jogo
    },
    {
      id: 13,
      name: 'Minecraft',
      description: 'Construa e explore mundos infinitos neste popular jogo de construção.',
      price: 99,
      imageUrl: 'assets/images/pc-game/minecraft.jpg',
      genre: 'Sandbox, Aventura',
      developer: 'Mojang Studios',
      releaseYear: 2011,
      rating: 4.9,
      trailerUrl: 'https://www.youtube.com/watch?v=MmB9b5njVbA' // Trailer do jogo
    },
    {
      id: 14,
      name: 'Call of Duty: Modern Warfare',
      description: 'Ação em primeira pessoa intensa em combates realistas.',
      price: 184,
      imageUrl: 'assets/images/pc-game/cod_modern_warfare_2.jpg',
      genre: 'FPS, Ação',
      developer: 'Infinity Ward',
      releaseYear: 2019,
      rating: 4.7,
      trailerUrl: 'https://www.youtube.com/watch?v=3cdThcGoRpg' // Trailer do jogo
    },
    {
      id: 15,
      name: 'Overwatch',
      description: 'Um jogo de tiro em equipe com personagens e habilidades únicos.',
      price: 99,
      imageUrl: 'assets/images/pc-game/Overwatch.jpg',
      genre: 'FPS, Ação',
      developer: 'Blizzard Entertainment',
      releaseYear: 2016,
      rating: 4.7,
      trailerUrl: 'https://www.youtube.com/watch?v=Fql80j2q60g' // Trailer do jogo
    },
    {
      id: 16,
      name: 'The Sims 4',
      description: 'Simule a vida como nunca antes no popular jogo de simulação!',
      price: 129,
      imageUrl: 'assets/images/pc-game/The_Sims_4.webp',
      genre: 'Simulação',
      developer: 'Maxis',
      releaseYear: 2014,
      rating: 4.5,
      trailerUrl: 'https://www.youtube.com/watch?v=1yNkT5BrfIA' // Trailer do jogo
    }
  ];
  

  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
  getFeaturedProducts(): Product[] {
    // Ordena os produtos pelo preço em ordem crescente e retorna os 5 primeiros
    return this.products.sort((a, b) => a.price - b.price).slice(0, 5);
  }
}
