import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
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
      price: 120,
      imageUrl: 'assets/images/pc-game/the_witcher.jpg'
    },
    {
      id: 2,
      name: 'Cyberpunk 2077',
      description: 'Um jogo de RPG ambientado em um mundo futurista cheio de escolhas e aventuras.',
      price: 200,
      imageUrl: 'assets/images/pc-game/cyberpunk-2077.jpg'
    },
    {
      id: 3,
      name: 'Dark Souls III',
      description: 'Um jogo de RPG de ação desafiador, conhecido pela sua dificuldade e gameplay intenso.',
      price: 150,
      imageUrl: 'assets/images/pc-game/Dark_Souls_3_capa.png'
    },
    {
      id: 4,
      name: 'Red Dead Redemption 2',
      description: 'Um jogo de mundo aberto ambientado no velho oeste com uma narrativa profunda.',
      price: 180,
      imageUrl: 'assets/images/pc-game/red-dead-redemption-2.jpg'
    },
    {
      id: 5,
      name: 'DOOM Eternal',
      description: 'Um jogo de tiro em primeira pessoa frenético e cheio de ação.',
      price: 130,
      imageUrl: 'assets/images/pc-game/dom-eternal.jpg'
    },
    {
      id: 6,
      name: 'Assassin’s Creed Valhalla',
      description: 'Explore o mundo dos Vikings em um RPG de mundo aberto épico.',
      price: 170,
      imageUrl: 'assets/images/pc-game/assassins-valhalla.jpg'
    },
    {
      id: 7,
      name: 'Grand Theft Auto V',
      description: 'Explore Los Santos em um dos maiores jogos de mundo aberto já criados.',
      price: 100,
      imageUrl: 'assets/images/pc-game/gta5.jpg'
    },
    {
      id: 8,
      name: 'Horizon Zero Dawn',
      description: 'Aventure-se em um mundo pós-apocalíptico cheio de máquinas selvagens.',
      price: 140,
      imageUrl: 'assets/images/pc-game/horizon-zero-dawn.jpg'
    },
    {
      id: 9,
      name: 'Sekiro: Shadows Die Twice',
      description: 'Um jogo de ação desafiador com combate intenso em um Japão feudal fictício.',
      price: 160,
      imageUrl: 'assets/images/pc-game/sekiro-shadows-die-twice.jpg'
    },
    {
      id: 10,
      name: 'Elden Ring',
      description: 'Uma nova experiência de RPG de ação dos criadores de Dark Souls.',
      price: 220,
      imageUrl: 'assets/images/pc-game/Elden_Ring_capa.jpg'
    },
    {
      id: 11,
      name: 'Resident Evil Village',
      description: 'Um jogo de terror e sobrevivência que leva você a um vilarejo sombrio.',
      price: 150,
      imageUrl: 'assets/images/pc-game/resident_evil_village_pc_cover.jpg'
    },
    {
      id: 12,
      name: 'Halo Infinite',
      description: 'Entre em combate com o Master Chief na mais nova aventura da série Halo.',
      price: 200,
      imageUrl: 'assets/images/pc-game/halo-infinity.jpg'
    },
    {
      id: 13,
      name: 'Minecraft',
      description: 'Construa e explore mundos infinitos neste popular jogo de construção.',
      price: 100,
      imageUrl: 'assets/images/pc-game/minecraft.jpg'
    },
    {
      id: 14,
      name: 'Call of Duty: Modern Warfare',
      description: 'Ação em primeira pessoa intensa em combates realistas.',
      price: 180,
      imageUrl: 'assets/images/pc-game/cod_modern_warfare_2.jpg'
    },
    {
      id: 15,
      name: 'Overwatch',
      description: 'Um jogo de tiro em equipe com personagens e habilidades únicos.',
      price: 90,
      imageUrl: 'assets/images/pc-game/Overwatch.jpg'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}