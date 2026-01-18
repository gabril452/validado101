import type { Category } from "@/types"

export const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    content: "Adorei os cadernos! Qualidade excelente e chegou super rápido. Com certeza vou comprar mais!",
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    content: "Comprei o kit escolar para meu filho e ele amou! Os produtos são de ótima qualidade e o preço é justo.",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    rating: 5,
    content: "A mochila tie dye é linda! Minha filha ficou encantada. Recomendo muito a loja!",
  },
  {
    id: 4,
    name: "Carlos Pereira",
    rating: 4,
    content:
      "Produtos muito bons, entrega dentro do prazo. Só não dou 5 estrelas porque a embalagem poderia ser melhor.",
  },
  {
    id: 5,
    name: "Fernanda Costa",
    rating: 5,
    content: "Melhor loja de material escolar! Sempre encontro tudo que preciso com preços ótimos.",
  },
  {
    id: 6,
    name: "Pedro Rodrigues",
    rating: 5,
    content: "O kit de canetinhas é incrível! 262 cores e todas funcionam perfeitamente. Super satisfeito!",
  },
]

export const categories: Category[] = [
  {
    name: "Cadernos",
    slug: "cadernos",
    image: "/colorful-notebooks-school.jpg",
    productCount: 45,
  },
  {
    name: "Estojos",
    slug: "estojos",
    image: "/pencil-case-school.jpg",
    productCount: 32,
  },
  {
    name: "Lápis e Canetas",
    slug: "lapis-canetas",
    image: "/pencils-pens-school-supplies.jpg",
    productCount: 78,
  },
  {
    name: "Mochilas",
    slug: "mochilas",
    image: "/school-backpack-colorful.jpg",
    productCount: 24,
  },
  {
    name: "Kits Escolares",
    slug: "kits-escolares",
    image: "/school-supplies-kit-bundle.jpg",
    productCount: 15,
  },
  {
    name: "Borrachas",
    slug: "borrachas",
    image: "/erasers.jpg",
    productCount: 15,
  },
  {
    name: "Apontadores",
    slug: "apontadores",
    image: "/pencil-sharpeners.jpg",
    productCount: 15,
  },
  {
    name: "Lapiseiras",
    slug: "lapiseiras",
    image: "/mechanical-pencils.jpg",
    productCount: 15,
  },
]

export const products = [
  {
    id: "9",
    name: "Caderno De Discos Inteligente",
    slug: "caderno-discos-inteligente",
    price: 39.9,
    image: "https://i.postimg.cc/6qRY9dh5/br-11134207-7r98o-lwr2xhlo79a73e.webp",
    images: ["https://i.postimg.cc/jqNXn4zd/br-11134207-7r98o-lwr2xhlp25qq97-resize-w450-nl.webp"],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description: `Caderno com sistema de discos com folhas reposicionáveis
Capa dura feita em papelão e estampada com proteção
O caderno acompanha uma folha explicativa para ajudá-lo a usar melhor todos os recursos do caderno

Conteúdo do caderno:
• Disco de 24 mm
• 60 pautadas (linhas) de 90g de gramatura
• 1 folha de dados
• 1 folha explicativa
• 1 folha de calendário
• 1 elástico de fechamento
• Caderno Pequeno A5 acompanha 8 discos`,
    specifications: [
      { label: "Tipo de Folhas", value: "Reposicionáveis com sistema de discos" },
      { label: "Quantidade de Folhas", value: "60 folhas pautadas" },
      { label: "Gramatura", value: "90g/m²" },
      { label: "Disco", value: "24mm" },
      { label: "Capa", value: "Capa dura em papelão estampado" },
      { label: "Extras", value: "Folha de dados, calendário, elástico de fechamento" },
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Rosa", image: "https://i.postimg.cc/4dcztXhs/br-11134207-7r98o-lvynbhz8caz629-resize-w450-nl.webp" },
      {
        name: "Rosa Chiclete",
        image: "https://i.postimg.cc/wByJ89Vn/br-11134207-7r98o-lvb0rl8dc65j14-resize-w450-nl.webp",
      },
      { name: "Vermelho", image: "https://i.postimg.cc/QxYHXRHx/br-11134207-7r98o-lveqnbl3tu8h86-resize-w450-nl.webp" },
      {
        name: "Azul Bebê",
        image: "https://i.postimg.cc/7hsYZ2YD/br-11134207-7r98o-lvynbhz8caz629-resize-w450-nl.webp",
      },
      {
        name: "Azul com Rosa",
        image: "https://i.postimg.cc/brJpWw0g/br-11134207-7r98o-lx16xhqlf8ovd8-resize-w450-nl.webp",
      },
    ],
    sizeVariants: [
      { name: "P", dimensions: "14 x 20 cm" },
      { name: "M", dimensions: "17 x 23 cm" },
      { name: "G", dimensions: "20 x 27,5 cm" },
    ],
  },
  {
    id: "10",
    name: "Caderno Inteligente Personalizado",
    slug: "caderno-inteligente-personalizado",
    price: 59.9,
    image: "https://i.postimg.cc/j2VBQqgy/br-11134207-7r98o-m0ul0h34izkwdd.webp",
    images: [
      "https://i.postimg.cc/j2VBQqgy/br-11134207-7r98o-m0ul0h34izkwdd.webp",
      "https://i.postimg.cc/529TmR3q/br-11134207-7r98o-m0ul0h34n7a8e0.webp",
      "https://i.postimg.cc/1XZYVCXv/br-11134207-7r98o-m0ul0h34stk0e6.webp",
      "https://i.postimg.cc/0yNXSJkw/br-11134207-7r98o-m0ul0h34q0f443.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description: `Capa dura com impressão digital de alta definição.
Elástico para fechamento da capa do caderno.
Bolsa plástica para guardar documentos e anotações.
Página com instruções de como utilizar seu caderno.
Cartela de adesivos divertidos.
Encadernado com 8, 9 ou 11 discos M de 23mm em polímero de nylon e/ou policarbonato coloridos, fabricados no Brasil.
4 ou 6 divisores laminados (frente e verso) em papel 250g.
Quantidade de folhas: 80 folhas, sendo 60 folhas pautadas decoradas e 20 folhas em branco.
Quantidade de páginas: 160 páginas.
Páginas internas em papel sulfite (offset) 90g branco.`,
    specifications: [
      { label: "Quantidade de Folhas", value: "80 folhas (60 pautadas + 20 em branco)" },
      { label: "Quantidade de Páginas", value: "160 páginas" },
      { label: "Gramatura", value: "90g/m² (papel sulfite offset)" },
      { label: "Discos", value: "8, 9 ou 11 discos de 23mm" },
      { label: "Divisores", value: "4 ou 6 divisores laminados (250g)" },
      { label: "Extras", value: "Bolsa plástica, adesivos, elástico de fechamento" },
    ],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Vermelho", image: "https://i.postimg.cc/C5mHMmqV/br-11134207-7r98o-m0ul0h35jicg35-resize-w450-nl.webp" },
      {
        name: "Preto com Azul",
        image: "https://i.postimg.cc/HLXw8pyX/br-11134207-7r98o-m0ul0h35chi852-resize-w450-nl.webp",
      },
      { name: "Turquesa", image: "https://i.postimg.cc/mrfMs05C/br-11134207-7r98o-m0ul0h35i3s029-resize-w450-nl.webp" },
      {
        name: "Rosa com Roxo",
        image: "https://i.postimg.cc/bYCtJG5c/br-11134207-7r98o-m0ul0h34vmow8c-resize-w450-nl.webp",
      },
      {
        name: "Preto e Cinza",
        image: "https://i.postimg.cc/2jK1Ysqk/br-11134207-7r98o-m0ul0h35fan47a-resize-w450-nl.webp",
      },
      {
        name: "Preto e Amarelo",
        image: "https://i.postimg.cc/j5jj0cty/br-11134207-7r98o-m0ul0h359odc31-resize-w450-nl.webp",
      },
    ],
    sizeVariants: [
      { name: "P", dimensions: "14 x 20 cm" },
      { name: "M", dimensions: "17 x 23 cm" },
      { name: "G", dimensions: "20 x 27,5 cm" },
    ],
  },
  {
    id: "11",
    name: "Kit 262 Canetinhas Touch para Pintura e Marcação",
    slug: "kit-262-canetinhas-touch",
    price: 49.9,
    image: "https://i.postimg.cc/ry0111cP/sg-11134201-7rdvn-mbpl77qjk09a5f.webp",
    images: [
      "https://i.postimg.cc/ry0111cP/sg-11134201-7rdvn-mbpl77qjk09a5f.webp",
      "https://i.postimg.cc/NfvHRZdR/sg-11134201-7rdvn-mbpl77qjk09a5f.webp",
      "https://i.postimg.cc/52xQRLdd/sg-11134201-7rdyt-mbpl70d0dxrt78.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "EscolaShop",
    description: `Canetas Marcadores Artísticos 262 Cores Vibrantes com Pontas Duplas & Estojo Premium Para Artistas, Estudantes e Criativos!

Desperte sua criatividade com este super kit de 262 cores únicas! Seja você um artista profissional, estudante de design ou apenas apaixonado por arte, essas canetas foram feitas para transformar suas ideias em verdadeiras obras-primas.

Tampas Codificadas por Cores + Estojo de Transporte Premium
Encontre a cor certa em segundos! Cada caneta possui tampa codificada por cor, facilitando a identificação rápida. Acompanha um estojo elegante e resistente, perfeito para manter tudo organizado e protegido – seja no estúdio, na escola ou em viagens criativas.`,
    specifications: [
      { label: "Quantidade de Cores", value: "262 cores únicas" },
      { label: "Tipo de Ponta", value: "Pontas duplas" },
      { label: "Estojo", value: "Estojo premium de transporte incluso" },
      { label: "Identificação", value: "Tampas codificadas por cor" },
      { label: "Indicação", value: "Artistas, estudantes e criativos" },
    ],
    rating: 4.7,
    reviews: 312,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
  },
  {
    id: "12",
    name: "Mochila Escolar Infantil Masculina e Feminina Dinossauro",
    slug: "mochila-infantil-dinossauro",
    price: 39.9,
    image: "https://i.postimg.cc/XJwVW1dK/br-11134207-7r98o-ltpm8ck8k9bde3.webp",
    images: [
      "https://i.postimg.cc/XJwVW1dK/br-11134207-7r98o-ltpm8ck8k9bde3.webp",
      "https://i.postimg.cc/hP4SFrjw/br-11134207-7r98o-ltpm8ck8k9iwo1.webp",
      "https://i.postimg.cc/vZkMVwvh/br-11134207-7r98o-ltpm8ck8k9iwba.webp",
      "https://i.postimg.cc/xCyShJV6/br-11134207-7r98o-ltpm8ck8k9vj41.webp",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "EscolaShop",
    description: `Procurando por uma mochila infantil que seja prática, confortável e cheia de estilo?
Conheça nossa mochila perfeita para o seu pequeno aventureiro!

Nossas mochilas foram cuidadosamente projetadas para oferecer o máximo de conforto e segurança para as crianças. O tecido respirável permite que o ar circule, evitando o desconforto causado pelo suor excessivo. Além disso, as estampas vibrantes dos personagens favoritos dos pequenos tornam essa mochila irresistível!

Adquira agora mesmo nossa mochila infantil com tecido respirável e personagens encantadores e proporcione ao seu filho uma experiência única nas suas aventuras!

Mochila perfeita e muito adequada para o corpo das crianças, acomodam os materiais das crianças facilmente, podem guardar: livros, cadernos, roupas, lancheiras e assim por diante.`,
    specifications: [
      { label: "Material", value: "Tecido respirável" },
      { label: "Design", value: "Estampa de dinossauro" },
      { label: "Indicação", value: "Crianças (masculino e feminino)" },
      { label: "Capacidade", value: "Livros, cadernos, roupas, lancheiras" },
      { label: "Conforto", value: "Tecido respirável anti-suor" },
    ],
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Azul Claro", image: "https://i.postimg.cc/ZKn1FD0h/br-11134207-7r98o-ltpmd2utbhux90.webp" },
      { name: "Laranja", image: "https://i.postimg.cc/Bv9k3Sp3/br-11134207-7r98o-ltpmd2utcwfdc9.webp" },
      { name: "Rosa", image: "https://i.postimg.cc/6q31cyWG/br-11134207-7r98o-ltpmd8hx2akfff.webp" },
      { name: "Azul Marinho", image: "https://i.postimg.cc/597r0qgr/br-11134207-7r98o-ltpmd8hx3p4v6d.webp" },
    ],
  },
  {
    id: "13",
    name: "Mochila Escolar Feminina Tie Dye",
    slug: "mochila-escolar-feminina-tie-dye",
    price: 49.9,
    image: "https://i.postimg.cc/25kJyHs7/sg-11134201-822ze-mi0lb49sgbup5b.webp",
    images: [
      "https://i.postimg.cc/25kJyHs7/sg-11134201-822ze-mi0lb49sgbup5b.webp",
      "https://i.postimg.cc/Twh4qKYj/sg-11134201-822yq-mi0lb5znl53aeb.webp",
      "https://i.postimg.cc/brtVW4nP/sg-11134201-822yn-mi0lb7sinapu6a.webp",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "EscolaShop",
    description: `A nossa mochila com design em tie dye são para meninas que adoram estar na moda, podendo ser usada no seu dia a dia, para ir a escola, passeios no parque e passar a tarde na casa dos amigos... Feita de material nylon macio e leve, sendo perfeita para levar mais que o essencial.

A mochila possui uma abertura de 180° onde possui diversos compartimentos tirando a necessidade de utilizar estojo. Contém espaço para canetinhas coloridas, agendas, lápis de cor, marca texto, entre outros... Deixando sua bolsa escolar mais moderna e prática.

Sendo bem espaçosa, ela é composta por 6 compartimentos com zíper externos, 6 bolsos internos, 1 alça de mão, 2 bolsos laterais para porta garrafa, cinto peitoral, espaço para notebook e contém um encosto acolchoado para proporcionar mais conforto a coluna da sua filha.`,
    specifications: [
      { label: "Material Principal", value: "Oxford / Nylon" },
      { label: "Tipo de Fechamento", value: "Zíper" },
      { label: "Padrão", value: "Tie Dye / Arco-íris" },
      { label: "Peso", value: "0,4 kg" },
      { label: "Tamanho G", value: "46 x 30 x 19 cm" },
      { label: "Tamanho P", value: "41 x 29 x 16 cm" },
      { label: "Compartimentos", value: "6 externos + 6 internos + espaço notebook" },
      { label: "Extras", value: "Cinto peitoral, porta garrafa, encosto acolchoado" },
    ],
    rating: 4.9,
    reviews: 267,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Azul", image: "https://i.postimg.cc/4drB6w0G/sg-11134201-822y1-mi0lblegutc31f.webp" },
      { name: "Roxo", image: "https://i.postimg.cc/FFLPr5fd/sg-11134201-822ya-mi0lbn6xfr457b.webp" },
      { name: "Rosa", image: "https://i.postimg.cc/T1VqrxmN/sg-11134201-822zn-mi0lboyf0r2bcd-resize-w450-nl.webp" },
    ],
  },
  {
    id: "14",
    name: "Kit Escolar Infantil 26 Itens Material Escolar Patrulha Canina Lápis+Borracha+Apontador+Carimbo+Giz De Cera+Tinta Guache",
    slug: "kit-escolar-patrulha-canina-26-itens",
    price: 39.9,
    image: "https://i.postimg.cc/Hkc02bbf/br-11134207-81z1k-mi68f36x4w01d1.webp",
    images: [
      "https://i.postimg.cc/Hkc02bbf/br-11134207-81z1k-mi68f36x4w01d1.webp",
      "https://i.postimg.cc/YSQ6ckDc/br-11134207-81z1k-mi68f36x6akhab.webp",
      "https://i.postimg.cc/Y0DgNS0C/br-11134207-81z1k-mh3grhipb5z84b.webp",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Tris",
    description: `KIT 26 itens personalizados:
2 Lápis temáticos
1 Borracha personalizada
1 Apontador combinando
4 Carimbos super divertidos
12 Giz de Cera
6 Tinta Guache

Por que você vai amar:
Todos os itens são licenciados e exclusivos da Patrulha Canina
Qualidade Tris – a melhor marca de papelaria do mercado
Kit presentável, pronto para encantar e surpreender
Perfeito para a volta às aulas, lembrancinhas ou presente
Ideal para meninos e meninas que amam o universo da Patrulha Canina!
Cheio de cores, diversão e personagens que inspiram coragem e amizade

Garanta já o seu Kit Escolar Patrulha Canina e volte às aulas com os heróis mais fofos da TV!`,
    specifications: [
      { label: "Quantidade de Itens", value: "26 peças" },
      { label: "Lápis Temáticos", value: "2 unidades" },
      { label: "Borracha", value: "1 unidade personalizada" },
      { label: "Apontador", value: "1 unidade" },
      { label: "Carimbos", value: "4 unidades" },
      { label: "Giz de Cera", value: "12 cores" },
      { label: "Tinta Guache", value: "6 cores" },
      { label: "Licença", value: "Patrulha Canina" },
    ],
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
  },
  {
    id: "15",
    name: "Kit Estojo Desenho 146 Pcs Profissional Colorido Realista",
    slug: "kit-estojo-desenho-146-pecas-profissional",
    price: 79.9,
    image: "https://i.postimg.cc/7LB2r61F/br-11134207-7r98r-lmizuy91702ze1.webp",
    images: [
      "https://i.postimg.cc/7LB2r61F/br-11134207-7r98r-lmizuy91702ze1.webp",
      "https://i.postimg.cc/c1vQZQbc/br-11134207-7r98r-lmizuy918enf7a.webp",
      "https://i.postimg.cc/QxLW3v5C/br-11134207-7r98q-lmizuy91cmcr5e.webp",
      "https://i.postimg.cc/52bYHvn7/br-11134207-7r98o-lmizuy91b7sb1f.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "EscolaShop",
    description: `Kit Lápis De Desenho Profissional 146 Peças No Brasil Arte Colorido

Estojo profissional técnico de alta qualidade para projetos, retratos, croquis e desenhos profissionais em geral, são 146 peças indispensáveis para qualquer desenhista, seja profissional ou amador.

Descrição dos itens:
12 Lápis grafite sendo 1 de cada graduação a seguir 2H/3H/4H/5H/HB/B/2B/3B/4B/5B/6B/8B.
120 Lápis coloridos base óleo, atóxico, sendo os 120 de cores diferentes
3 Lápis de carvão sendo 1 macio 1 médio 1 duro
3 Esfuminhos
1 Extensor de lápis duplo
1 Borracha
1 Lixa
1 Estilete
1 Marcador Preto
1 Lápis 6B para marcação de linhas escuras
1 Estojo que acomoda todas as 145 peças exatamente como nas fotos.`,
    specifications: [
      { label: "Total de Peças", value: "146 peças" },
      { label: "Lápis Grafite", value: "12 graduações (2H a 8B)" },
      { label: "Lápis Coloridos", value: "120 cores (base óleo)" },
      { label: "Lápis de Carvão", value: "3 unidades (macio, médio, duro)" },
      { label: "Esfuminhos", value: "3 unidades" },
      { label: "Acessórios", value: "Extensor, borracha, lixa, estilete, marcador" },
      { label: "Estojo", value: "Incluso" },
      { label: "Indicação", value: "Profissional e amador" },
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
  },
  {
    id: "16",
    name: "Estojo 3D Infantil Com Desenho De Unicórnio",
    slug: "estojo-3d-infantil-unicornio",
    price: 19.9,
    image: "https://i.postimg.cc/K8MqY6p0/br-11134207-7r98o-lv1y6nxrb73d0b.webp",
    images: [
      "https://i.postimg.cc/K8MqY6p0/br-11134207-7r98o-lv1y6nxrb73d0b.webp",
      "https://i.postimg.cc/k4fwZqD9/br-11134207-7r98o-lv1y6nxrclntc8.webp",
      "https://i.postimg.cc/rFSgX1DS/br-11134207-7r98o-lv1y6nxrl12heb.webp",
    ],
    category: "Estojos",
    categorySlug: "estojos",
    brand: "EscolaShop",
    description: `Estojo Lápis Kawaii 3D Unicórnio Tamanho Grande Bolsa de Papelaria Escolar Bolsa

Descrição do Produto
Tamanho: 21.16.5 cm
Material: EVA
Peso líquido: 0,2 kg
Método de embalagem: saco opp único
Pacote incluir: 1 x Estojo`,
    specifications: [
      { label: "Tamanho", value: "21 x 16,5 cm" },
      { label: "Material", value: "EVA" },
      { label: "Peso", value: "0,2 kg" },
      { label: "Embalagem", value: "Saco OPP" },
      { label: "Conteúdo", value: "1 Estojo" },
      { label: "Design", value: "3D Unicórnio Kawaii" },
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Rosa", image: "https://i.postimg.cc/sfWbxZBT/br-11134207-7r98o-lv1y6nxrnu7d71-resize-w450-nl.webp" },
    ],
  },
  {
    id: "17",
    name: "Kit com 50 Lápis de Escrever",
    slug: "kit-50-lapis-escrever-leo-leo",
    price: 19.9,
    image: "https://i.postimg.cc/PqR3Sd7b/br-11134207-7qukw-lf051t5ub28v48.webp",
    images: [
      "https://i.postimg.cc/PqR3Sd7b/br-11134207-7qukw-lf051t5ub28v48.webp",
      "https://i.postimg.cc/pV8GBbJx/br-11134207-7qukw-lf051t5u893z66.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Leo&Leo",
    description: `Quantidade: 50 Unidades
Marca: Leo&Leo
Lápis Preto HB.
N°2
Sextavado
Grafite HB.
Dimensões aproximadas: Altura: 185mm. Diâmetro: 7mm`,
    specifications: [
      { label: "Quantidade", value: "50 unidades" },
      { label: "Marca", value: "Leo&Leo" },
      { label: "Tipo", value: "Lápis Preto HB" },
      { label: "Número", value: "N°2" },
      { label: "Formato", value: "Sextavado" },
      { label: "Grafite", value: "HB" },
      { label: "Altura", value: "185mm" },
      { label: "Diâmetro", value: "7mm" },
    ],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
  },
  {
    id: "18",
    name: "Caderno Personalizado do Neymar",
    slug: "caderno-personalizado-neymar",
    price: 19.9,
    image: "https://i.postimg.cc/FRxf9KQf/br-11134207-81z1k-mhku7p4ews1t02.webp",
    images: [
      "https://i.postimg.cc/FRxf9KQf/br-11134207-81z1k-mhku7p4ews1t02.webp",
      "https://i.postimg.cc/4ySxd72Y/br-11134207-81z1k-mhku7p4ezl6pfb.webp",
      "https://i.postimg.cc/65FQxZGM/br-11134207-81z1k-mhku7p4f2eblad.webp",
      "https://i.postimg.cc/j58sgnbP/br-11134207-81z1k-mhku7p4f3sw17b.webp",
      "https://i.postimg.cc/GhTcKpS9/br-11134207-81z1k-mhku7p4f57ghf3.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description: `Caderno capa Dura plastificada.
Caderno capa dura personalizado que combina estilo e funcionalidade com cores vibrantes e padrões criativos. Inclui folhas pautadas de alta qualidade para uma escrita suave e organizada, ideais para estudos, anotações ou planejamento.

Torne seus momentos de estudos, anotações ou trabalho ainda mais mágicos e especiais com nosso cadernos! Olha essa ótima opção de caderno para começar a deixar tudo organizado

São cadernos , com capa dura, tamanho 200mm x 275mm e espiral, que facilita o manuseio.

CARACTERÍSTICAS:
Formato Universitário
A4
275mm x 200mm
Capa Dura
Espiral`,
    specifications: [
      { label: "Formato", value: "Universitário A4" },
      { label: "Dimensões", value: "275mm x 200mm" },
      { label: "Capa", value: "Dura plastificada" },
      { label: "Encadernação", value: "Espiral" },
      { label: "Folhas", value: "Pautadas de alta qualidade" },
      { label: "Tema", value: "Neymar" },
    ],
    rating: 4.8,
    reviews: 178,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Modelo 1", image: "https://i.postimg.cc/FRxf9KQf/br-11134207-81z1k-mhku7p4ews1t02.webp" },
      { name: "Modelo 2", image: "https://i.postimg.cc/4ySxd72Y/br-11134207-81z1k-mhku7p4ezl6pfb.webp" },
      { name: "Modelo 3", image: "https://i.postimg.cc/65FQxZGM/br-11134207-81z1k-mhku7p4f2eblad.webp" },
      { name: "Modelo 4", image: "https://i.postimg.cc/j58sgnbP/br-11134207-81z1k-mhku7p4f3sw17b.webp" },
      { name: "Modelo 5", image: "https://i.postimg.cc/L5T0BjFn/br-11134207-81z1k-mhku7p4f57ghf3.webp" },
    ],
  },
  {
    id: "19",
    name: "Caderno Personalizado do Flamengo",
    slug: "caderno-personalizado-flamengo",
    price: 19.9,
    image: "https://i.postimg.cc/nLWxqbYw/br-11134207-81z1k-mh1xywgwwi6830.webp",
    images: [
      "https://i.postimg.cc/nLWxqbYw/br-11134207-81z1k-mh1xywgwwi6830.webp",
      "https://i.postimg.cc/pXRwhLMN/br-11134207-81z1k-mh1xybtqi48w5f.webp",
      "https://i.postimg.cc/y8N2jpNr/br-11134207-81z1k-mh1xywgwv3ls7d.webp",
      "https://i.postimg.cc/VNrpQSng/br-11134207-81z1k-mh1xywgwtp1cd9.webp",
      "https://i.postimg.cc/L5T0BjFn/br-11134207-81z1k-mh1xywgx24g092.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description: `Caderno capa Dura plastificada.
Caderno capa dura personalizado que combina estilo e funcionalidade com cores vibrantes e padrões criativos. Inclui folhas pautadas de alta qualidade para uma escrita suave e organizada, ideais para estudos, anotações ou planejamento.

Torne seus momentos de estudos, anotações ou trabalho ainda mais mágicos e especiais com nosso cadernos! Olha essa ótima opção de caderno para começar a deixar tudo organizado

São cadernos , com capa dura, tamanho 200mm x 275mm e espiral, que facilita o manuseio.

CARACTERÍSTICAS:
Formato Universitário
A4
210mmX297mm
Capa Dura
Espiral`,
    specifications: [
      { label: "Formato", value: "Universitário A4" },
      { label: "Dimensões", value: "210mm x 297mm" },
      { label: "Capa", value: "Dura plastificada" },
      { label: "Encadernação", value: "Espiral" },
      { label: "Folhas", value: "Pautadas de alta qualidade" },
      { label: "Tema", value: "Flamengo" },
    ],
    rating: 4.9,
    reviews: 267,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Modelo 1", image: "https://i.postimg.cc/nLWxqbYw/br-11134207-81z1k-mh1xywgwwi6830.webp" },
      { name: "Modelo 2", image: "https://i.postimg.cc/pXRwhLMN/br-11134207-81z1k-mh1xybtqi48w5f.webp" },
      { name: "Modelo 3", image: "https://i.postimg.cc/y8N2jpNr/br-11134207-81z1k-mh1xywgwv3ls7d.webp" },
      { name: "Modelo 4", image: "https://i.postimg.cc/VNrpQSng/br-11134207-81z1k-mh1xywgwtp1cd9.webp" },
      { name: "Modelo 5", image: "https://i.postimg.cc/L5T0BjFn/br-11134207-81z1k-mh1xywgx24g092.webp" },
    ],
  },
  {
    id: "20",
    name: "Caderno Personalizado Stranger Things",
    slug: "caderno-personalizado-stranger-things",
    price: 19.9,
    image: "https://i.postimg.cc/tTfgRnMG/br-11134207-81z1k-mi376g49oagx19.webp",
    images: [
      "https://i.postimg.cc/tTfgRnMG/br-11134207-81z1k-mi376g49oagx19.webp",
      "https://i.postimg.cc/SxpGdDfB/br-11134207-81z1k-mi34uruvtnnn83.webp",
      "https://i.postimg.cc/VkBWVn7F/br-11134207-81z1k-mi376g4cg0sifa.webp",
      "https://i.postimg.cc/C1dC5twN/br-11134207-81z1k-mi375n9sdzba8e.webp",
      "https://i.postimg.cc/PJwmzwpK/br-11134207-81z1k-mi376g4cem8252.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description: `Caderno capa Dura plastificada.
Caderno capa dura personalizado que combina estilo e funcionalidade com cores vibrantes e padrões criativos. Inclui folhas pautadas de alta qualidade para uma escrita suave e organizada, ideais para estudos, anotações ou planejamento.

Torne seus momentos de estudos, anotações ou trabalho ainda mais mágicos e especiais com nosso cadernos! Olha essa ótima opção de caderno para começar a deixar tudo organizado

São cadernos , com capa dura, tamanho 200mm x 275mm e espiral, que facilita o manuseio.

CARACTERÍSTICAS:
Formato Universitário
A4
275mm x 200mm
Capa Dura
Espiral`,
    specifications: [
      { label: "Formato", value: "Universitário A4" },
      { label: "Dimensões", value: "275mm x 200mm" },
      { label: "Capa", value: "Dura plastificada" },
      { label: "Encadernação", value: "Espiral" },
      { label: "Folhas", value: "Pautadas de alta qualidade" },
      { label: "Tema", value: "Stranger Things" },
    ],
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Modelo 1", image: "https://i.postimg.cc/tTfgRnMG/br-11134207-81z1k-mi376g49oagx19.webp" },
      { name: "Modelo 2", image: "https://i.postimg.cc/SxpGdDfB/br-11134207-81z1k-mi34uruvtnnn83.webp" },
      { name: "Modelo 3", image: "https://i.postimg.cc/VkBWVn7F/br-11134207-81z1k-mi376g4cg0sifa.webp" },
      { name: "Modelo 4", image: "https://i.postimg.cc/C1dC5twN/br-11134207-81z1k-mi375n9sdzba8e.webp" },
      { name: "Modelo 5", image: "https://i.postimg.cc/PJwmzwpK/br-11134207-81z1k-mi376g4cem8252.webp" },
    ],
  },
  {
    id: "21",
    name: "Estojo Escolar Com Divisória Resistente à Água",
    slug: "estojo-escolar-divisoria-resistente-agua",
    price: 22.9,
    image: "https://i.postimg.cc/ydSJwz1z/br-11134207-7r98o-m8md6ikitvqp3b.webp",
    images: [
      "https://i.postimg.cc/ydSJwz1z/br-11134207-7r98o-m8md6ikitvqp3b.webp",
      "https://i.postimg.cc/zXkLm71M/br-11134207-7r98o-m8md6ikish6990.webp",
    ],
    category: "Estojos",
    categorySlug: "estojos",
    brand: "EscolaShop",
    description: `Estojo Com Divisoria Escolar Juvenil Resistente Agua Volta as Aulas Estojo

Estojo versátil que aliado a sua criatividade pode ser utilizado como necessaire (para produtos de higiene pessoal, maquiagens, produtos de unha, etc.), estojo entre outras finalidades, comporta até 24 lápis ou canetas nos elásticos.

Estojo com duas divisórias com elástico (para lápis, canetas, pincel, entre outros) e com amplo espaço para todo seu material (tesoura, apontador, cola, entre outros).

CAPACIDADE PARA 24 LÁPIS, 03 partes separadas
Material: 100% Poliéster
Composição: Poliéster 55% Algodão 45%
Largura 15.7 cm
Comprimento 22 cm
Profundidade 7 cm`,
    specifications: [
      { label: "Capacidade", value: "24 lápis/canetas" },
      { label: "Divisórias", value: "3 partes separadas" },
      { label: "Material", value: "100% Poliéster" },
      { label: "Composição", value: "Poliéster 55% Algodão 45%" },
      { label: "Largura", value: "15.7 cm" },
      { label: "Comprimento", value: "22 cm" },
      { label: "Profundidade", value: "7 cm" },
      { label: "Resistência", value: "Resistente à água" },
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Preto", image: "https://i.postimg.cc/fTMLvd9Q/br-11134207-7r98o-m857bhacftap0b.webp" },
      { name: "Rosa Bebê", image: "https://i.postimg.cc/d0Zt0mz3/br-11134207-81z1k-min10ojqjnk256.webp" },
      { name: "Verde Claro", image: "https://i.postimg.cc/fyDwB4kq/br-11134207-81z1k-min10ojql24iae.webp" },
      { name: "Rosa", image: "https://i.postimg.cc/X72VczWJ/br-11134207-7r98o-m857bhach7v5ca.webp" },
    ],
  },
  {
    id: "22",
    name: "Mochila Masculina Escolar",
    slug: "mochila-masculina-escolar-nylon",
    price: 39.9,
    image: "https://i.postimg.cc/DyG9mpzt/br-11134207-7r98o-lylce7rtq1ut96.webp",
    images: [
      "https://i.postimg.cc/DyG9mpzt/br-11134207-7r98o-lylce7rtq1ut96.webp",
      "https://i.postimg.cc/T2LSHNnp/br-11134207-7r98o-lylce7rtonad0a.webp",
      "https://i.postimg.cc/QtR63scX/br-11134207-7r98o-lylchp65tsth8b.webp",
      "https://i.postimg.cc/MpW9x9fB/br-11134207-7r98o-lylchp65v7dxe7.webp",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "EscolaShop",
    description: `TABELA DE MEDIDAS
32 CM DE LARGURA
45 CM DE ALTURA
12 CM DE PROFUNDIDADE

INFORMAÇÕES TÉCNICAS
MATERIAL: NYLON
COR: CINZA E AMARELO
CARACTERÍSTICAS: TRÊS COMPARTIMENTOS COM ZÍPER`,
    specifications: [
      { label: "Largura", value: "32 cm" },
      { label: "Altura", value: "45 cm" },
      { label: "Profundidade", value: "12 cm" },
      { label: "Material", value: "Nylon" },
      { label: "Cor", value: "Cinza e Amarelo" },
      { label: "Compartimentos", value: "3 com zíper" },
    ],
    rating: 4.6,
    reviews: 134,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Modelo 1", image: "https://i.postimg.cc/DyG9mpzt/br-11134207-7r98o-lylce7rtq1ut96.webp" },
      { name: "Modelo 2", image: "https://i.postimg.cc/T2LSHNnp/br-11134207-7r98o-lylce7rtonad0a.webp" },
      { name: "Modelo 3", image: "https://i.postimg.cc/QtR63scX/br-11134207-7r98o-lylchp65tsth8b.webp" },
      { name: "Modelo 4", image: "https://i.postimg.cc/MpW9x9fB/br-11134207-7r98o-lylchp65v7dxe7.webp" },
    ],
  },
  {
    id: "24",
    name: "Kit Tesoura Escolar Infantil 13cm Ponta Arredondada 3 Cores",
    slug: "kit-tesoura-escolar-infantil-13cm-3-cores",
    price: 19.9,
    image: "https://i.postimg.cc/x18ZGZmx/image.png",
    images: ["https://i.postimg.cc/x18ZGZmx/image.png", "https://i.postimg.cc/5tFkTFnm/image.png"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description: `Kit com 3 Tesouras Escolares Infantis.
Ponta arredondada para maior segurança.
Cores vibrantes (Verde, Vermelho, Azul).`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Metal, Plástico" },
      { label: "Tipo de estilo", value: "Escolar, Funcional" },
      { label: "Dimensões", value: "13 cm" },
      { label: "Quantidade", value: "3 tesouras" },
      { label: "Cores", value: "Verde, Vermelho, Azul" },
    ],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Kit com 3 Cores", image: "https://i.postimg.cc/x18ZGZmx/image.png" }],
  },
  {
    id: "25",
    name: "Material Escolar Kit Completo Ensino Fundamental Facul Médio",
    slug: "material-escolar-kit-completo-ensino-fundamental",
    price: 59.9,
    image: "https://i.postimg.cc/FHkZHX3H/image.png",
    images: [
      "https://i.postimg.cc/FHkZHX3H/image.png",
      "https://i.postimg.cc/26GdKkR6/image.png",
      "https://i.postimg.cc/R0zcC6v7/image.png",
      "https://i.postimg.cc/qqttx4kV/image.png",
      "https://i.postimg.cc/sgPMcnRh/image.png",
      "https://i.postimg.cc/zfXTRmRr/image.png",
      "https://i.postimg.cc/Kz1LJnN6/image.png",
      "https://i.postimg.cc/zXZWFHRM/image.png",
      "https://i.postimg.cc/7Y3zsP30/image.png",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description: `Super Kit Material Escolar Completo.
Qualidade, praticidade e economia.
Inclui Super Mochila (45cm), Caderno Temático (10 matérias), Estojo/Penal, Caneta Corretiva, Lapiseira, Apontador, etc.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Diversos" },
      { label: "Tipo de estilo", value: "Escolar, Universitário, Completo" },
      { label: "Conteúdo", value: "Mochila, Caderno, Estojo, Caneta Corretiva, Lapiseira, Apontador, etc." },
      { label: "Tamanho Mochila", value: "45cm" },
      { label: "Caderno", value: "10 matérias" },
    ],
    rating: 4.9,
    reviews: 267,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Azul Masculino", image: "https://i.postimg.cc/FHkZHX3H/image.png" },
      { name: "Preto Feminino", image: "https://i.postimg.cc/26GdKkR6/image.png" },
      { name: "Rosa Feminino", image: "https://i.postimg.cc/R0zcC6v7/image.png" },
    ],
  },
  {
    id: "26",
    name: "Kit Material Escolar Completo 2 Caderno Sonic Games Tilibra",
    slug: "kit-material-escolar-completo-2-caderno-sonic-games",
    price: 49.9,
    image: "https://i.postimg.cc/MK6ZwWkM/image.png",
    images: [
      "https://i.postimg.cc/MK6ZwWkM/image.png",
      "https://i.postimg.cc/yNZsjxRp/image.png",
      "https://i.postimg.cc/fTqshmj1/image.png",
      "https://i.postimg.cc/zfKYWMZY/image.png",
      "https://i.postimg.cc/d0KxMVX6/image.png",
      "https://i.postimg.cc/kXGrwD3N/image.png",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Tilibra",
    description: `Kit Material Escolar Completo com 2 Cadernos Sonic Games Tilibra.
Cadernos Capa Dura 1 Matéria 80 Folhas, estampas oficiais do Sonic.
Inclui Lápis de Cor CIS Sextavado ECO – 12 Cores.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Diversos" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Sonic)" },
      { label: "Conteúdo", value: "2 Cadernos, Lápis de Cor, etc." },
      { label: "Cadernos", value: "Capa Dura 1 Matéria 80 Folhas" },
      { label: "Lápis de Cor", value: "CIS Sextavado ECO - 12 Cores" },
    ],
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Kit 1", image: "https://i.postimg.cc/MK6ZwWkM/image.png" },
      { name: "Kit 2", image: "https://i.postimg.cc/yNZsjxRp/image.png" },
    ],
  },
  {
    id: "27",
    name: "Kit Escolar Lapis De Cor 12 Cores Fundo Mar Blister Leo&leo",
    slug: "kit-escolar-lapis-de-cor-12-cores-fundo-mar",
    price: 19.9,
    image: "https://i.postimg.cc/qRvQ0hGc/image.png",
    images: ["https://i.postimg.cc/qRvQ0hGc/image.png", "https://i.postimg.cc/x8WPKsVh/image.png"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Leo&Leo",
    description: `Kit Escolar Infantil Fundo do Mar Leo&Leo com 7 Itens.
Lápis de cor com cores vibrantes para estimular a criatividade.
Conjunto completo para atividades escolares e artísticas.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Diversos" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Fundo do Mar)" },
      {
        label: "Conteúdo",
        value: "12 lápis de cor, 2 lápis grafite HB nº2, 1 borracha temática, 1 apontador, 1 cola em bastão, 1 tesoura",
      },
      { label: "Lápis de Cor", value: "12 cores" },
      { label: "Total de Itens", value: "7 peças" },
    ],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Kit Fundo do Mar", image: "https://i.postimg.cc/qRvQ0hGc/image.png" }],
  },
  {
    id: "28",
    name: "Kit Estojo Lápis Desenho Arte 51 Pcs Profissional",
    slug: "kit-estojo-lapis-desenho-arte-51-pcs-profissional",
    price: 49.9,
    image: "https://i.postimg.cc/LX5kGdH0/image.png",
    images: [
      "https://i.postimg.cc/LX5kGdH0/image.png",
      "https://i.postimg.cc/vB4qfx65/image.png",
      "https://i.postimg.cc/59FKtvJM/image.png",
      "https://i.postimg.cc/4N686gnS/image.png",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "EscolaShop",
    description: `Estojo C/ Lápis Colorido Ideal Desenho Pintura Arte 51 Peças.
Estojo rígido com zíper na cor preta.
Alta qualidade para projetos, retratos, croquis e desenhos profissionais.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Estojo rígido, Lápis" },
      { label: "Tipo de estilo", value: "Artístico, Profissional" },
      { label: "Conteúdo", value: "01 Estojo, 01 Borracha, 01 Extensor de lápis, 49 lápis coloridos" },
      { label: "Total de Peças", value: "51 peças" },
      { label: "Cor do Estojo", value: "Preto" },
    ],
    rating: 4.8,
    reviews: 201,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Kit Único", image: "https://i.postimg.cc/LX5kGdH0/image.png" }],
  },
  {
    id: "30",
    name: "Kit Mochila Escolar Infantil Youtuber Gato Galactico",
    slug: "kit-mochila-escolar-infantil-youtuber-gato-galactico",
    price: 79.9,
    image: "https://i.postimg.cc/RFvC0937/image.png",
    images: [
      "https://i.postimg.cc/RFvC0937/image.png",
      "https://i.postimg.cc/90MWGpYG/image.png",
      "https://i.postimg.cc/rynyqBqj/image.png",
      "https://i.postimg.cc/tCsqJBTR/image.png",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "EscolaShop",
    description: `Nova coleção de Mochila de Rodinhas Gato Galactico.
Confeccionada em PVC com efeito brilhoso e puxadores personalizados.
Amplo compartimento principal, puxador retrátil e duas rodinhas.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "PVC" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Youtuber)" },
      { label: "Características", value: "Rodinhas, puxadores personalizados" },
      { label: "Acabamento", value: "Efeito brilhoso" },
      { label: "Extras", value: "Puxador retrátil, 2 rodinhas" },
    ],
    rating: 4.9,
    reviews: 178,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Estampa Gato Galactico", image: "https://i.postimg.cc/RFvC0937/image.png" }],
  },
  {
    id: "31",
    name: "Kit 24 Canetas Coloridas Fine Line Ponta Fina 0.4 mm",
    slug: "kit-24-canetas-fine-line-ponta-fina",
    price: 19.9,
    image: "https://i.postimg.cc/cL8rw4wb/br-11134207-81z1k-meeuihg3r4si23.webp",
    images: [
      "https://i.postimg.cc/cL8rw4wb/br-11134207-81z1k-meeuihg3r4si23.webp",
      "https://i.postimg.cc/BQj6fQYP/br-11134207-81z1k-mfjr13a2ky6cf1.webp",
      "https://i.postimg.cc/3Rr8SK08/br-11134207-81z1k-mfin52vwgdfo9c.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Glizi",
    description:
      "A Glizi Fineliner é o clássico que virou referência em criatividade. Com traço ultrafino, tinta pigmentada e design icônico, são as canetas coloridas preferidas de artistas, estudantes e amantes de papelaria. Mais leve, vibrante e com o DNA criativo da Glizi, ela é a original da nova geração.\n\n🧩 DESTAQUES\n✅ Traço fino 0.4 mm – ideal para escrita precisa e desenhos detalhados.\n✅ Cores intensas e consistentes – pigmentação premium Glizi.\n✅ Ponta de alta durabilidade – não desgasta nem vaza.\n✅ Design hexagonal ergonômico – conforto e firmeza para longas horas de uso.\n✅ Tinta de secagem rápida – escrita limpa, sem manchas.\n✅ Corpo laranja icônico Glizi – identidade visual exclusiva e reconhecível.\n✅ Disponível em 24 cores escolha o kit ideal para seu estilo criativo.\n\n🎨 IDEAL PARA\n✏️ Lettering e escrita criativa\n🎨 Desenhos artísticos e ilustrações técnicas\n📓 Bullet journal, planners e anotações organizadas\n📚 Estudo e uso profissional\n💌 Cartões personalizados e projetos de arte",
    specifications: [
      { label: "Quantidade", value: "24 unidades" },
      { label: "Ponta", value: "0.4 mm" },
      { label: "Tipo", value: "Fine Line" },
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    isBestSeller: false,
    isOnSale: true,
    colorVariants: [
      { name: "24 Unidades", image: "https://i.postimg.cc/cL8rw4wb/br-11134207-81z1k-meeuihg3r4si23.webp" },
    ],
  },
  {
    id: "32",
    name: "Borracha TK-Plast FC Max Tom Pastel 2 Unidades Faber-Castell",
    slug: "borracha-tk-plast-pastel-faber-castell",
    price: 10.0,
    image: "https://i.postimg.cc/tTpfTqxy/sg-11134201-7rep4-m8ly9hpi3bfr95.webp",
    images: [
      "https://i.postimg.cc/tTpfTqxy/sg-11134201-7rep4-m8ly9hpi3bfr95.webp",
      "https://i.postimg.cc/htm31z84/sg-11134201-7reqo-m8ly9ibf78uvd8.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Faber-Castell",
    description:
      "Borracha com formulação de alta qualidade, livre de PVC: excelente desempenho ao apagar.\nCapa protetora: evita sujeira.\nCores de capa pastel.\nCores Sortidas, será enviado de acordo com disponibilidade do estoque.",
    specifications: [
      { label: "Quantidade", value: "2 unidades" },
      { label: "Material", value: "Livre de PVC" },
      { label: "Cores", value: "Pastel Sortidas" },
      { label: "Marca", value: "Faber-Castell" },
    ],
    rating: 4.6,
    reviews: 98,
    inStock: true,
    isBestSeller: false,
    isOnSale: true,
    colorVariants: [{ name: "Pastel", image: "https://i.postimg.cc/tTpfTqxy/sg-11134201-7rep4-m8ly9hpi3bfr95.webp" }],
  },
  {
    id: "33",
    name: "Kit Escolar Infantil Mochila com Rodinhas em 3D",
    slug: "kit-escolar-infantil-mochila-rodinhas-3d",
    price: 79.9,
    image: "https://i.postimg.cc/85xZvTFL/br-11134207-81z1k-meadjcg5pgchb8.webp",
    images: [
      "https://i.postimg.cc/85xZvTFL/br-11134207-81z1k-meadjcg5pgchb8.webp",
      "https://i.postimg.cc/k54sh2Kr/br-11134207-81z1k-meadjcg5quwx8c.webp",
      "https://i.postimg.cc/zvmkBpMJ/br-11134207-81z1k-mi7c0of3co3lf4.webp",
      "https://i.postimg.cc/v89zjFg7/br-11134207-81z1k-mi7hgz7ydzpi07.webp",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description:
      "🎒 Kit Mochila Infantil Escolar Volta às Aulas – Tamanho P\n\n⚠️ Atenção:\nNão vendemos lancheira, estojo ou mochila de carrinho separadamente.\nO kit completo (mochila + lancheira + estojo) está disponível somente na versão mochila de carrinho.\n\nMochila com Carrinho (Tamanho P – ideal para 2 a 4 anos / altura entre 1m e 1,20m):\nAltura: 35 cm\nLargura: 27 cm\nProfundidade: 14 cm\nAltura total com carrinho estendido: 67 cm\nMaterial carrinho: PVC\nRodas: Gel\n\nCompartimentos:\n✔ 1 bolso principal com divisória interna\n✔ 1 bolso frontal\n✔ 2 bolsos laterais para garrafa\nFrente em relevo 3D\nAlças reguláveis – pode ser usada nas costas ou no carrinho\n\n🍱 Lancheira Térmica Modelo Quadrado\nAltura: 24 cm\nLargura: 24 cm\nProfundidade: 8 cm\n\n✏️ Estojo Escolar:\nAltura: 10 cm\nLargura: 22 cm\nProfundidade: 4,5 cm\n\n✅ O kit acompanha:\n1x Mochila com Carrinho\n1x Lancheira Térmica\n1x Estojo Escolar\n\n📚 Recomendado para:\n👶 Crianças de 2 a 4 anos\n📏 Altura entre 1,00m e 1,20m",
    specifications: [
      { label: "Tamanho", value: "P (2 a 4 anos)" },
      { label: "Mochila", value: "35x27x14 cm" },
      { label: "Lancheira", value: "24x24x8 cm" },
      { label: "Estojo", value: "10x22x4,5 cm" },
      { label: "Rodas", value: "Gel" },
    ],
    rating: 4.9,
    reviews: 287,
    inStock: true,
    isBestSeller: false,
    isOnSale: true,
    colorVariants: [
      { name: "Modelo 1", image: "https://i.postimg.cc/85xZvTFL/br-11134207-81z1k-meadjcg5pgchb8.webp" },
      { name: "Modelo 2", image: "https://i.postimg.cc/k54sh2Kr/br-11134207-81z1k-meadjcg5quwx8c.webp" },
      { name: "Modelo 3", image: "https://i.postimg.cc/zvmkBpMJ/br-11134207-81z1k-mi7c0of3co3lf4.webp" },
      { name: "Modelo 4", image: "https://i.postimg.cc/v89zjFg7/br-11134207-81z1k-mi7hgz7ydzpi07.webp" },
    ],
  },
  {
    id: "34",
    name: "Kit Escolar Mochila com Rodinhas do Minecraft",
    slug: "kit-escolar-mochila-rodinhas-minecraft",
    price: 79.9,
    image: "https://i.postimg.cc/2Sq3cm3N/br-11134207-81ztc-miq12csgnjsyd9.webp",
    images: [
      "https://i.postimg.cc/2Sq3cm3N/br-11134207-81ztc-miq12csgnjsyd9.webp",
      "https://i.postimg.cc/50mtY2K6/sg-11134201-7qvg2-lju50cegldleda.webp",
      "https://i.postimg.cc/NfnjrVDz/br-11134207-81ztc-miq12csgm58i64.webp",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Minecraft",
    description:
      "Mochila escolar Infantil\nMochila de rodinhas tamanho G\n\nDimensões:\nMochila de rodinhas: 44cm x 30cm x 17cm (Alt. x Larg. x Prof.)\nAltura no carrinho: 53cm, e 87cm com a alça aberta totalmente.\nMochila de Costa: 44cmx30cmx17cm.\n\nMaterial Mochila:\nNylon\nPoliéster\nCarrinho Alumínio e PVC\nRodinhas em silicone\n\nMochila indicada para crianças dos 4 aos 10 anos!",
    specifications: [
      { label: "Tamanho", value: "G (4 a 10 anos)" },
      { label: "Dimensões", value: "44x30x17 cm" },
      { label: "Altura Carrinho", value: "53-87 cm" },
      { label: "Material", value: "Nylon/Poliéster" },
      { label: "Rodas", value: "Silicone" },
    ],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    isBestSeller: false,
    isOnSale: true,
    colorVariants: [
      { name: "Minecraft", image: "https://i.postimg.cc/2Sq3cm3N/br-11134207-81ztc-miq12csgnjsyd9.webp" },
    ],
  },
  {
    id: "35",
    name: "Caderno Universitário Abacute Abacate Rosa 10 matérias Capa Dura Espiral 160 folhas Tilibra",
    slug: "caderno-universitario-abacute-abacate-rosa-tilibra",
    price: 19.9,
    image:
      "https://i.postimg.cc/bvj3KyQS/caderno-espiral-capa-dura-universitario-10-materias-abacute-160-folhas-quatro-abacates-fundo-rosa-im.webp",
    images: [
      "https://i.postimg.cc/bvj3KyQS/caderno-espiral-capa-dura-universitario-10-materias-abacute-160-folhas-quatro-abacates-fundo-rosa-im.webp",
      "https://i.postimg.cc/DZpQynbt/caderno-espiral-capa-dura-universitario-10-materias-abacute-160-folhas-6-abacates-fundo-lilas-xadrez.webp",
      "https://i.postimg.cc/R0XKX4G9/caderno-espiral-capa-dura-universitario-10-materias-abacute-160-folhas-6-abacates-fundo-lilas-xadrez.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Tilibra",
    description:
      "Capa dura que garante durabilidade\nEspiral para fácil manuseio\n160 folhas para anotações sem fim\nTamanho: 20 cm x 27,5 cm\nDesign: Inspirado no abacate, perfeito para quem ama um toque divertido!\nMatérias: 10\nFolhas: 160\nBolsa: de papel decorada\nFolha de adesivos\nFolhas: pautadas decoradas\nÍndice/separador de matérias: papel decorado",
    specifications: [
      { label: "Matérias", value: "10" },
      { label: "Folhas", value: "160" },
      { label: "Tamanho", value: "20 cm x 27,5 cm" },
      { label: "Capa", value: "Dura" },
      { label: "Encadernação", value: "Espiral" },
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Rosa",
        image:
          "https://i.postimg.cc/bvj3KyQS/caderno-espiral-capa-dura-universitario-10-materias-abacute-160-folhas-quatro-abacates-fundo-rosa-im.webp",
      },
    ],
  },
  {
    id: "36",
    name: "Lápis Fofo Topper Lanchinhos 6 unidades",
    slug: "lapis-fofo-topper-lanchinhos-6-unidades",
    price: 12.0,
    image:
      "https://i.postimg.cc/QdWjfbb8/lapis-fofo-decorado-cis-fantasia-lanchinhos-001-71bb151892b6b1d85717660218145990-1024-1024.webp",
    images: [
      "https://i.postimg.cc/QdWjfbb8/lapis-fofo-decorado-cis-fantasia-lanchinhos-001-71bb151892b6b1d85717660218145990-1024-1024.webp",
      "https://i.postimg.cc/mDdxLzjW/lapis-fofo-decorado-cis-fantasia-lanchinhos-008-f066b0bad60112421d17660218142313-1024-1024.webp",
      "https://i.postimg.cc/KYFCtrsv/lapis-fofo-decorado-cis-fantasia-lanchinhos-007-d772b0358332a01a6817660218145600-1024-1024.webp",
      "https://i.postimg.cc/WpKK5PfM/lapis-fofo-decorado-cis-fantasia-lanchinhos-005-95b5e0c55125b35af517660218143622-1024-1024.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Cis Fantasia",
    description:
      "Se você é apaixonado por papelaria diferente e cheia de personalidade, vai amar o Lápis Fofo Topper Lanchinhos da Cis Fantasia! Com formatos super divertidos de comidinhas, esses lápis são perfeitos para quem gosta de colecionar ou montar kits de presente originais e criativos.\n\nPor que escolher o Lápis Fofo Topper Lanchinhos?\n6 opções incríveis de toppers: pizza, pipoca, morango, abacaxi, abacate e maçã.\nGrafite HB: perfeito para escrever e desenhar com qualidade e conforto.\nCor do grafite: preto tradicional que facilita a leitura e o uso.",
    specifications: [
      { label: "Quantidade", value: "6 unidades" },
      { label: "Grafite", value: "HB" },
      { label: "Cor do grafite", value: "Preto" },
      { label: "Toppers", value: "Pizza, pipoca, morango, abacaxi, abacate, maçã" },
    ],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Lanchinhos",
        image:
          "https://i.postimg.cc/QdWjfbb8/lapis-fofo-decorado-cis-fantasia-lanchinhos-001-71bb151892b6b1d85717660218145990-1024-1024.webp",
      },
    ],
  },
  {
    id: "37",
    name: "Caderneta Capyclub Páginas Decoradas Capivara Suquinho 10,5 x 14,8 cm 96 folhas Tilibra",
    slug: "caderneta-capyclub-capivara-suquinho-tilibra",
    price: 19.9,
    image:
      "https://i.postimg.cc/TY6szcfD/caderneta-costurada-petit-capyclub-96-folhas-394874-e1-7a014bb5372e6e611017575334840109-1024-1024.webp",
    images: [
      "https://i.postimg.cc/TY6szcfD/caderneta-costurada-petit-capyclub-96-folhas-394874-e1-7a014bb5372e6e611017575334840109-1024-1024.webp",
      "https://i.postimg.cc/1XcvmLsV/captura-de-tela-2025-09-10-as-16-55-45-7bbdcd2751f99a78b717575341760482-1024-1024.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Tilibra",
    description:
      "Quer transformar suas anotações em momentos cheios de fofura? A Caderneta Capyclub Capivara é a escolha perfeita para quem ama papelaria diferente e cheia de personalidade!\n\nCom uma capa dura acolchoada e acabamento metalizado que destaca qualquer material, essa caderneta vem em cores sortidas para combinar com seu humor e gostos. Seu miolo conta com 96 folhas pautadas decoradas, com gramatura de 63 g/m², garantindo uma escrita suave e um visual encantador.\n\nAlém disso, o produto é certificado pelo FSC, mostrando que você também se preocupa com o meio ambiente. Com tamanho compacto de 10,5 x 14,8 cm, é fácil de levar para onde quiser ideal para anotar ideias, listas ou até colecionar seus pensamentos mais especiais.\n\nCaracterísticas principais:\nCapa dura com espuma e detalhe metalizado\nFolhas pautadas decoradas, 96 folhas\nFormato compacto: 10,5 x 14,8 cm\nMaterial certificado FSC\nCores sortidas para você escolher",
    specifications: [
      { label: "Folhas", value: "96" },
      { label: "Tamanho", value: "10,5 x 14,8 cm" },
      { label: "Gramatura", value: "63 g/m²" },
      { label: "Capa", value: "Dura acolchoada com metalizado" },
      { label: "Certificação", value: "FSC" },
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Capivara",
        image:
          "https://i.postimg.cc/TY6szcfD/caderneta-costurada-petit-capyclub-96-folhas-394874-e1-7a014bb5372e6e611017575334840109-1024-1024.webp",
      },
    ],
  },
  {
    id: "38",
    name: "Planner 2026 West Village Preto Poá Capa Dura com Elástico Espiral 17,7 x 24 cm 80 Folhas Tilibra",
    slug: "planner-2026-west-village-preto-poa-tilibra",
    price: 19.9,
    image:
      "https://i.postimg.cc/65F86Tbr/planner-espiral-177-x-24-cm-west-village-2026-179809-e3-d4cf60bddcf890bbca17576212635420-1024-1024.webp",
    images: [
      "https://i.postimg.cc/65F86Tbr/planner-espiral-177-x-24-cm-west-village-2026-179809-e3-d4cf60bddcf890bbca17576212635420-1024-1024.webp",
      "https://i.postimg.cc/G352zHCy/planner-espiral-177-x-24-cm-west-village-2026-179809-2-bb6328330f9b15f9e517576212639045-1024-1024.webp",
      "https://i.postimg.cc/fRxRwC0G/planner-espiral-177-x-24-cm-west-village-2026-179809-1-5e4a7399bdee28819a17576212633353-1024-1024.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Tilibra",
    description:
      "Que tal dar um upgrade na sua organização com um toque cheio de charme? O Planner 2026 West Village da Tilibra é aquele companheiro que vai transformar sua rotina em algo muito mais prático e agradável!\n\nCom capa dura e detalhes metalizados que brilham na medida certa, ele não passa despercebido. Seu tamanho de 17,7 x 24 cm é perfeito para levar para onde quiser, enquanto o fechamento com elástico garante que nada fique fora do lugar.\n\nAlém de 80 folhas com visões anual, mensal e semanal, esse planner vem recheado: controle financeiro, listas, metas, objetivos e ainda uma página especial para planejar seu futuro. Tem também folhas para anotações e uma folha de adesivos para personalizar do seu jeito!\n\nCaracterísticas principais:\nFormato: 17,7 x 24 cm\nCapa dura com acabamento metalizado\nFechamento com elástico\nEspiral colorido\n80 folhas com visões anual, mensal e semanal\nControle financeiro, listas, metas e planejamento do futuro\nFolhas para anotações e adesivos inclusos\nBolsa de papel decorada\nProduto certificado FSC",
    specifications: [
      { label: "Tamanho", value: "17,7 x 24 cm" },
      { label: "Folhas", value: "80" },
      { label: "Capa", value: "Dura com metalizado" },
      { label: "Fechamento", value: "Elástico" },
      { label: "Encadernação", value: "Espiral colorido" },
      { label: "Certificação", value: "FSC" },
    ],
    rating: 4.8,
    reviews: 203,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Preto Poá",
        image:
          "https://i.postimg.cc/65F86Tbr/planner-espiral-177-x-24-cm-west-village-2026-179809-e3-d4cf60bddcf890bbca17576212635420-1024-1024.webp",
      },
    ],
  },
  {
    id: "39",
    name: "Estojo Box Transparente Rosa com Corações e PomPom Emotions",
    slug: "estojo-box-transparente-rosa-coracoes-emotions",
    price: 25.9,
    image:
      "https://i.postimg.cc/x8RBxkkg/estojo-box-emotions-coracoes-transparente-com-divisoria-001-a16db2ffd63d3675c617346365509322-1024-10.webp",
    images: [
      "https://i.postimg.cc/x8RBxkkg/estojo-box-emotions-coracoes-transparente-com-divisoria-001-a16db2ffd63d3675c617346365509322-1024-10.webp",
      "https://i.postimg.cc/T3SF4vwv/estojo-box-emotions-coracoes-transparente-com-divisoria-002-6689dd1f107c9560d017346365509625-1024-10.webp",
    ],
    category: "Estojos",
    categorySlug: "estojos",
    brand: "Emotions",
    description:
      "Você está pronta para adicionar um toque de delicadeza à sua rotina? O Estojo Box Transparente Rosa com Corações - Emotions é a escolha perfeita para quem adora organização com estilo!\n\nCom medidas de 15 cm x 21 cm x 30 cm, este estojo é super espaçoso e possui uma divisória interna que permite manter seus itens organizados e facilmente acessíveis. Seu design encantador, com corações, traz um ar de fofura que vai fazer você se apaixonar!\n\nDestaques do Produto:\nMaterial: Transparente com detalhes em rosa\nDimensões: 15 cm x 21 cm x 30 cm\nDivisória interna: Para melhor organização",
    specifications: [
      { label: "Dimensões", value: "15 cm x 21 cm x 30 cm" },
      { label: "Material", value: "Transparente" },
      { label: "Cor", value: "Rosa com corações" },
      { label: "Divisória", value: "Interna" },
    ],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Rosa",
        image:
          "https://i.postimg.cc/x8RBxkkg/estojo-box-emotions-coracoes-transparente-com-divisoria-001-a16db2ffd63d3675c617346365509322-1024-10.webp",
      },
    ],
  },
  {
    id: "40",
    name: "Caderno Brochura Capa Dura Colegial Princesas 160 Folhas",
    slug: "caderno-brochura-capa-dura-colegial-princesas-160-folhas",
    price: 19.9,
    image:
      "https://i.postimg.cc/WzrM2kG7/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e1-9bb85fc426e3cc330d17663484447816.webp",
    images: [
      "https://i.postimg.cc/WzrM2kG7/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e1-9bb85fc426e3cc330d17663484447816.webp",
      "https://i.postimg.cc/T18DH3z2/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e4-888bb28bca9eb3bef417663484448674.webp",
      "https://i.postimg.cc/BnZ1zyV7/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e3-99ffe8dfa5c961351717663484448875.webp",
      "https://i.postimg.cc/d1C7dKhq/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e2-ae4fc7f7114de8c8c117663484448947.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Disney",
    description:
      "O Caderno Brochura Capa Dura Colegial Princesas 160 Folhas é o companheiro ideal para você anotar tudo o que desejar. O produto, com tamanho 177mmx240mm, tem estrutura com lombada quadrada, capa dura com detalhes metalizados e parte interna decorada e 160 folhas pautadas, com oito tipos de desenhos diferentes, em quatro cores. As páginas coloridas deste caderno garantem um destaque a mais para tudo o que escrever!\n\nDetalhes:\nCapa: dura\nCapa acabamento: com detalhe metalizado\nCor: Sortidas\nMaterial: Papel\nMiolo: superdecorado\nModelo: Costurado\nParte interna da capa decorada\nProduto certificado: FSC\nGramatura: 63 g/m²\nNúmero de folhas: 160 folhas",
    specifications: [
      { label: "Tamanho", value: "177mm x 240mm" },
      { label: "Folhas", value: "160" },
      { label: "Gramatura", value: "63 g/m²" },
      { label: "Capa", value: "Dura com metalizado" },
      { label: "Modelo", value: "Costurado" },
      { label: "Certificação", value: "FSC" },
    ],
    rating: 4.9,
    reviews: 178,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Modelo 1",
        image:
          "https://i.postimg.cc/WzrM2kG7/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e1-9bb85fc426e3cc330d17663484447816.webp",
      },
      {
        name: "Modelo 2",
        image:
          "https://i.postimg.cc/T18DH3z2/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e4-888bb28bca9eb3bef417663484448674.webp",
      },
      {
        name: "Modelo 3",
        image:
          "https://i.postimg.cc/BnZ1zyV7/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e3-99ffe8dfa5c961351717663484448875.webp",
      },
      {
        name: "Modelo 4",
        image:
          "https://i.postimg.cc/d1C7dKhq/caderno-brochura-capa-dura-colegial-princesas-160-folhas-397415-e2-ae4fc7f7114de8c8c117663484448947.webp",
      },
    ],
  },
  {
    id: "41",
    name: "Mochila de Costas Dots Azul",
    slug: "mochila-de-costas-dots-azul",
    price: 49.9,
    image:
      "https://i.postimg.cc/6q7MCqd0/87d16deb89866605d50a7c6b5ca8b6f4-fe3b1d3abf7511e74e17528929269997-1024-1024.webp",
    images: [
      "https://i.postimg.cc/6q7MCqd0/87d16deb89866605d50a7c6b5ca8b6f4-fe3b1d3abf7511e74e17528929269997-1024-1024.webp",
      "https://i.postimg.cc/x1V6b0qT/28eb360133f0178130970f12c72ab86c-688a1d8912934e628717528929285947-640-0.webp",
      "https://i.postimg.cc/d136K3Nz/5f74caa50fcd725fb10152662aec6eb5-a8b18eb165177901a217528929303754-640-0.webp",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "Académie",
    description:
      "A Mochila de Costas Académie Dots é confeccionada em material resistente, com base reforçada, parte interna forrada e alças acolchoadas e ajustáveis para garantir conforto a quem utilizá-la. Possui dois compartimentos, sendo um bolso externo e uma abertura principal, com divisória interna, além de um bolso lateral, para armazenamento de materiais do dia a dia.",
    specifications: [
      { label: "Material", value: "Resistente" },
      { label: "Base", value: "Reforçada" },
      { label: "Alças", value: "Acolchoadas e ajustáveis" },
      { label: "Compartimentos", value: "2 (externo + principal)" },
      { label: "Bolso lateral", value: "Sim" },
    ],
    rating: 4.8,
    reviews: 145,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Azul",
        image:
          "https://i.postimg.cc/6q7MCqd0/87d16deb89866605d50a7c6b5ca8b6f4-fe3b1d3abf7511e74e17528929269997-1024-1024.webp",
      },
    ],
  },
  {
    id: "42",
    name: "Lápis de Cor Faber Castell Aquarelável",
    slug: "lapis-de-cor-faber-castell-aquarelavel",
    price: 12.9,
    image:
      "https://i.postimg.cc/R049G5sj/e479d0dfd21f690378472f6f6265fabe-bbe15157dea7f7302517528925179147-1024-1024.webp",
    images: [
      "https://i.postimg.cc/R049G5sj/e479d0dfd21f690378472f6f6265fabe-bbe15157dea7f7302517528925179147-1024-1024.webp",
      "https://i.postimg.cc/bvyck0dz/e129c444a1bcaeac40387261e3d2597c-f8157a6bffb78b04e017528925196762-640-0.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Faber-Castell",
    description:
      "Os Ecolápis de Cor Aquarelável da Faber-Castell são perfeitos para liberar sua criatividade. Com a capacidade de se transformarem em aquarelas ao serem usados com um pincel úmido, esses lápis oferecem uma cobertura impecável. Sua forma sextavada e a fórmula exclusiva TS garantem resistência à ponta e traços precisos, permitindo que seus desenhos sejam vivos e realistas.",
    specifications: [
      { label: "Tipo", value: "Aquarelável" },
      { label: "Formato", value: "Sextavado" },
      { label: "Fórmula", value: "TS (resistência à ponta)" },
      { label: "Marca", value: "Faber-Castell" },
    ],
    rating: 4.9,
    reviews: 267,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Aquarelável",
        image:
          "https://i.postimg.cc/R049G5sj/e479d0dfd21f690378472f6f6265fabe-bbe15157dea7f7302517528925179147-1024-1024.webp",
      },
    ],
  },
  {
    id: "43",
    name: "Kit Artístico Papelaria Volta Às Aulas 27 pcs Fofy",
    slug: "kit-artistico-papelaria-patinhas-27-pcs-fofy",
    price: 22.9,
    image: "https://i.postimg.cc/pXvHPtx8/108663-2-674b11a8d12718e6f417659216102348-1024-1024.webp",
    images: [
      "https://i.postimg.cc/pXvHPtx8/108663-2-674b11a8d12718e6f417659216102348-1024-1024.webp",
      "https://i.postimg.cc/J0W97bwG/108663-1-6408c4c26d8d2fff9d17659216101681-640-0.webp",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Fofy",
    description:
      "Kit Artístico Papelaria Volta Às Aulas Patinhas 27 pcs Fofy é o conjunto perfeito para crianças e estudantes que querem começar o ano letivo com muita criatividade e diversão. Com 27 peças essenciais, este kit reúne tudo de que você precisa para desenhar, pintar e escrever com estilo e qualidade.\n\nEste kit inclui itens cuidadosamente selecionados como lápis de cor, canetinhas, borracha, apontador, régua e muito mais, todos com design encantador da coleção Patinhas, que conquista pela fofura e cores vibrantes. Ideal para estimular a imaginação e o desenvolvimento artístico das crianças, o Kit Artístico Fofy alia praticidade e charme.\n\nDestaques do Kit:\n- Conjunto completo com 27 peças essenciais para desenho e escrita\n- Design exclusivo e divertido da linha Patinhas\n- Materiais de qualidade que proporcionam maior resistência e conforto\n- Perfeito para uso escolar e atividades artísticas em casa\n- Estimula a criatividade, coordenação motora e aprendizado das crianças",
    specifications: [
      { label: "Quantidade", value: "27 peças" },
      { label: "Inclui", value: "Lápis de cor, canetinhas, borracha, apontador, régua" },
      { label: "Linha", value: "Patinhas" },
      { label: "Marca", value: "Fofy" },
    ],
    rating: 4.8,
    reviews: 134,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Patinhas",
        image: "https://i.postimg.cc/pXvHPtx8/108663-2-674b11a8d12718e6f417659216102348-1024-1024.webp",
      },
    ],
  },
  {
    id: "44",
    name: "Lápis de Cor Apagável Big Color Joy 12 Cores Leo&Leo",
    slug: "lapis-de-cor-apagavel-big-color-joy-12-cores-leo-leo",
    price: 12.9,
    image:
      "https://i.postimg.cc/kXHvx74v/design-sem-nome-2025-08-15t162222-397-345edfb7ecaa874d5717552858088010-1024-1024.webp",
    images: [
      "https://i.postimg.cc/kXHvx74v/design-sem-nome-2025-08-15t162222-397-345edfb7ecaa874d5717552858088010-1024-1024.webp",
      "https://i.postimg.cc/HnxbyN1q/design-sem-nome-2025-08-15t162259-460-bea5e0656d325d0c0e17552858154335-640-0.webp",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Leo&Leo",
    description:
      "O Lápis de Cor Apagável Big Color Joy 12 Cores Leo e Leo é muito Mais do que um simples lápis: ele é o lápis que muitas crianças e mães estavam esperando.\n\nSeu formato big ajuda as crianças a segurarem com mais facilidade, principalmente as que possuem mãos pequenas. O tamanho e o formato hexagonal contribuem para uma pegada mais firme, o que auxilia no desenvolvimento da coordenação motora fina.\n\nCom ele, a criança pode desenhar e pintar, desenvolvendo a criatividade de maneira lúdica. E um grande diferencial: com ele é possível apagar, sendo muito eficaz e prático.\n\nSão 12 cores do Lápis de Cor Apagável Big Color Joy, sendo que cada cor representa um sentimento: feliz, confiante, frustrado, angustiado, irritado, preocupado, seguro, animado, estressado, solitário e triste.\n\nEste é um produto que inclui, estimula e educa, feito também para crianças atípicas com os transtornos TEA, TDAH e TOD. A Linha inclusiva Color Joy foi aprovada por mães, filhos e profissionais especialistas da área.",
    specifications: [
      { label: "Cores", value: "12" },
      { label: "Tipo", value: "Apagável" },
      { label: "Formato", value: "Big (hexagonal)" },
      { label: "Indicação", value: "Inclusivo (TEA, TDAH, TOD)" },
      { label: "Marca", value: "Leo&Leo" },
    ],
    rating: 4.9,
    reviews: 189,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Color Joy",
        image:
          "https://i.postimg.cc/kXHvx74v/design-sem-nome-2025-08-15t162222-397-345edfb7ecaa874d5717552858088010-1024-1024.webp",
      },
    ],
  },
  {
    id: "45",
    name: "Kit Escolar Gatinho PLUS 12 pcs Fofy",
    slug: "kit-escolar-gatinho-plus-12-pcs-fofy",
    price: 29.9,
    image: "https://i.postimg.cc/jdfXKLtq/116989-1-b930121f63dc30c8a817659938843896-1024-1024.webp",
    images: ["https://i.postimg.cc/jdfXKLtq/116989-1-b930121f63dc30c8a817659938843896-1024-1024.webp"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Fofy",
    description:
      "Kit Escolar Gatinho PLUS 12 pcs Fofy – o companheiro perfeito para os pequenos arrasarem na escola com muita fofura e praticidade!\n\nEste kit completo traz 12 itens essenciais para o dia a dia escolar, todos com o tema encantador de gatinhos, que vai conquistar a criançada. É ideal para organizar os materiais e deixar os estudos ainda mais divertidos.\n\nO que vem no Kit Escolar Gatinho PLUS 12 pcs Fofy?\n- Caderno pautado com capa dura, resistente e design exclusivo de gatinho\n- 6 lápis de cor\n- Cartela de adesivos\n- Borracha\n- Apontador\n- Clips\n\nPor que escolher o Kit Escolar Gatinho PLUS?\n- Design exclusivo e encantador: ideal para quem ama gatinhos e quer um material escolar diferenciado\n- Alta qualidade: produtos resistentes para acompanhar o ritmo das crianças\n- Praticidade: itens selecionados para todas as necessidades escolares em um só kit\n- Perfeito para presente: surpreenda com um conjunto completo e cheio de charme",
    specifications: [
      { label: "Quantidade", value: "12 peças" },
      { label: "Inclui", value: "Caderno, 6 lápis de cor, adesivos, borracha, apontador, clips" },
      { label: "Tema", value: "Gatinho" },
      { label: "Marca", value: "Fofy" },
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Gatinho",
        image: "https://i.postimg.cc/jdfXKLtq/116989-1-b930121f63dc30c8a817659938843896-1024-1024.webp",
      },
    ],
  },
  {
    id: "46",
    name: "Kit Fini 18 itens",
    slug: "kit-fini-18-itens",
    price: 19.9,
    image:
      "https://i.postimg.cc/pXQFq8PJ/71abd78a0b7c0f20e35dd2f3342be72b-98f062b27f909a5f7d17528924574981-1024-1024.webp",
    images: [
      "https://i.postimg.cc/pXQFq8PJ/71abd78a0b7c0f20e35dd2f3342be72b-98f062b27f909a5f7d17528924574981-1024-1024.webp",
      "https://i.postimg.cc/wvstJRWF/5a0e0be0d96216087cb53242308463dc-0e8657c72f334313ae17528924594438-640-0.webp",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Leo&Leo",
    description:
      "Além de trazer doçura e alegria no dia a dia, os personagens da Fini deixam o estudo muito mais divertido com o Kit Lápis de Cor 12 Cores Fini - Caixa com 6 Kits Leo&Leo.\n\nPara usar em sala de aula, o kit é recheado de materiais básicos para diversas atividades em sala de aula, com opções para a criança se desenvolver de forma saudável, alegre e estimulada.\n\nO Kit possui um total de 18 itens, incluindo:\n- 1 Caixa de Lápis de cor 12 cores sextavado com mina de 2,6 mm macia resistente\n- 2 Lápis grafite nº 2 / HB mina de 2,2 mm macia e resistente\n- 1 Apontador com depósito\n- 1 Borracha com formato\n- 1 Cola bastão de 10 g\n- 1 Tesoura de 13 cm\n\nDá pra desenhar, escrever, apagar, apontar, colar e recortar tudo o que for pedido nas atividades da escola e no dever de casa.\n\nO Kit Lápis de Cor 12 Cores Fini é atóxico e veio para ser a companhia ideal, doce e delicada em todos os momentos de aprendizagem da criançada.",
    specifications: [
      { label: "Quantidade", value: "18 itens" },
      { label: "Lápis de cor", value: "12 cores" },
      { label: "Lápis grafite", value: "2 unidades (HB)" },
      { label: "Inclui", value: "Apontador, borracha, cola, tesoura" },
      { label: "Tema", value: "Fini" },
    ],
    rating: 4.7,
    reviews: 123,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Fini",
        image:
          "https://i.postimg.cc/pXQFq8PJ/71abd78a0b7c0f20e35dd2f3342be72b-98f062b27f909a5f7d17528924574981-1024-1024.webp",
      },
    ],
  },
  {
    id: "47",
    name: "Box Surpresa Papelaria Volta Às Aulas 22 Itens Sortidos Tamanho M",
    slug: "box-surpresa-papelaria-volta-as-aulas-22-itens-m",
    price: 29.9,
    image: "https://i.postimg.cc/6qMNpYd8/design-sem-nome-6-938d381b042c13ebd017656546605702-1024-1024.webp",
    images: ["https://i.postimg.cc/6qMNpYd8/design-sem-nome-6-938d381b042c13ebd017656546605702-1024-1024.webp"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description:
      "Box Surpresa Papelaria Volta Às Aulas 22 Itens Sortidos Tamanho M é a solução perfeita para quem quer começar o ano letivo com tudo organizado e cheio de estilo! Este box contém uma seleção especial de 22 itens variados, cuidadosamente escolhidos para garantir praticidade, diversão e qualidade em seus estudos.\n\nIdeal para estudantes de todas as idomidades, o box traz desde artigos básicos como cadernos, canetas, lápis e borrachas, até acessórios criativos que tornam o dia a dia mais alegre e produtivo. Com o tamanho M, ele é compacto e fácil de transportar, perfeito para mochilas e estojos.\n\nPor que escolher o Box Surpresa Papelaria Volta Às Aulas?\n- Variedade: 22 itens sortidos que atendem a todas as necessidades escolares\n- Qualidade: produtos resistentes e com acabamento caprichado\n- Praticidade: tudo em um único kit para economizar seu tempo e dinheiro\n- Estilo: design moderno e cores vibrantes para motivar sua criatividade",
    specifications: [
      { label: "Quantidade", value: "22 itens" },
      { label: "Tamanho", value: "M" },
      { label: "Tipo", value: "Sortidos" },
      { label: "Inclui", value: "Cadernos, canetas, lápis, borrachas e mais" },
    ],
    rating: 4.8,
    reviews: 167,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Sortido",
        image: "https://i.postimg.cc/6qMNpYd8/design-sem-nome-6-938d381b042c13ebd017656546605702-1024-1024.webp",
      },
    ],
  },
  {
    id: "48",
    name: "Caderno Colegial Argolado Molin Sakura Capa Dura 80 Folhas",
    slug: "caderno-colegial-argolado-molin-sakura-80-folhas",
    price: 19.9,
    image: "https://i.postimg.cc/4drWbtXk/30-7530831f-a359-47f6-9b31-05d6c2bf474a.webp",
    images: [
      "https://i.postimg.cc/4drWbtXk/30-7530831f-a359-47f6-9b31-05d6c2bf474a.webp",
      "https://i.postimg.cc/9F2pmcM8/31-dd95f88b-723a-48be-a927-59ba5af24aee.jpg",
      "https://i.postimg.cc/TPKj7w7x/32-dd059f5b-6ef9-4f74-bcbc-fec62b834eda.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Molin",
    description:
      "O Caderno Colegial Molin Sakura é a escolha perfeita para quem busca um produto completo e funcional. Com capa dura resistente, 80 folhas pautadas de alta qualidade e espiral duplo, ele oferece organização e praticidade para o dia a dia. Além disso, conta com diversos acessórios como elástico, cartela de adesivos, bolsa de papel e elástico porta canetas, tornando-o ainda mais completo.\n\nEspecificações Técnicas:\nMarca: Molin\nModelo: Caderno Colegial\nContém 1 unidade\nFormato: 170 x 235 mm\nFolhas: 80 folhas, 75g/m², pautadas\nAcabamento: Espiral duplo (wire-o)\nPeso: 325g\nCapa: Dura, revestida em papel com laminação fosca e verniz UV\nAcessórios: Elástico, cartela de adesivos, bolsa de papel, elástico porta canetas",
    specifications: [
      { label: "Formato", value: "170 x 235 mm" },
      { label: "Folhas", value: "80" },
      { label: "Gramatura", value: "75 g/m²" },
      { label: "Acabamento", value: "Espiral duplo (wire-o)" },
      { label: "Peso", value: "325g" },
      { label: "Acessórios", value: "Elástico, adesivos, bolsa de papel, porta canetas" },
    ],
    rating: 4.8,
    reviews: 145,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Sakura", image: "https://i.postimg.cc/4drWbtXk/30-7530831f-a359-47f6-9b31-05d6c2bf474a.webp" },
    ],
  },
  {
    id: "49",
    name: "Caderno Colegial Meninas Superpoderosas Animativa 160 Folhas",
    slug: "caderno-colegial-meninas-superpoderosas-animativa-160-folhas",
    price: 19.9,
    image: "https://i.postimg.cc/mZjc94jq/ppg.webp",
    images: ["https://i.postimg.cc/mZjc94jq/ppg.webp"],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Animativa",
    description:
      "É hora de dar superpoderes às suas anotações com o Caderno Colegial Meninas Superpoderosas – Animativa – 160 Folhas! Esse caderno é perfeito para quem quer transformar os estudos em um momento cheio de energia e diversão, ao lado das icônicas Florzinha, Lindinha e Docinho. Com uma capa dura decorada com design vibrante e detalhes em hot stamp holográfico, ele une estilo e praticidade para acompanhar o dia a dia de forma leve e alegre.\n\nIdeal para o público jovem adulto, este caderno traz toda a nostalgia das Meninas Superpoderosas, inspirando criatividade e bom humor em cada página. Ele possui folhas pautadas de alta qualidade, com gramatura de 70 g/m², para garantir uma escrita confortável e sem manchas. Com 160 folhas, é perfeito para anotações de estudo, trabalho ou organização pessoal, oferecendo espaço de sobra para colocar todas as ideias e projetos em dia.\n\nEspecificações técnicas:\nAtributos: 70 g/m², Hot Stamping Holográfico, Laminação Fosca\nCapa: Dura\nLombada: Espiral\nTipo de Folha: Pautado\nFolhas: 160\nGramatura: 70\nFormato: 179x241\nSelo: Produto Certificado FSC® Misto",
    specifications: [
      { label: "Formato", value: "179 x 241 mm" },
      { label: "Folhas", value: "160" },
      { label: "Gramatura", value: "70 g/m²" },
      { label: "Capa", value: "Dura com hot stamping holográfico" },
      { label: "Encadernação", value: "Espiral" },
      { label: "Certificação", value: "FSC Misto" },
    ],
    rating: 4.9,
    reviews: 189,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Meninas Superpoderosas", image: "https://i.postimg.cc/mZjc94jq/ppg.webp" }],
  },
  {
    id: "50",
    name: "Caderno Universitário Tilibra 16 Matérias Pepper Masculino",
    slug: "caderno-universitario-tilibra-16-materias-pepper-masculino",
    price: 12.9,
    image:
      "https://i.postimg.cc/K80S79Vw/caderno-universitario-tilibra-16-materias-pepper-masculino-19855-variacao-24883-1-5803d732456fbbfe96.webp",
    images: [
      "https://i.postimg.cc/K80S79Vw/caderno-universitario-tilibra-16-materias-pepper-masculino-19855-variacao-24883-1-5803d732456fbbfe96.webp",
      "https://i.postimg.cc/W1WCqdFK/caderno-universitario-tilibra-16-materias-pepper-masculino-19855-variacao-24883-5-968e0d44ca41fa51ff.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Tilibra",
    description:
      "O Caderno Espiral Universitário 16 Matérias Pepper Masculino possui 256 folhas e capa dura, com folhas pautadas e espiral na cor branca. Ideal para o seu dia a dia na escola ou na faculdade.\n\nDetalhes:\nCapa: dura\nEspiral: colorido\nFolhas: pautadas\nÍndice e separador de matérias\nMiolo\nNúmero de matérias: 16 matérias\nProduto certificado: FSC\nFormato: 20cm x 27,5cm\nGramatura: 56 g/m²\nNúmero de folhas: 256 folhas",
    specifications: [
      { label: "Matérias", value: "16" },
      { label: "Folhas", value: "256" },
      { label: "Formato", value: "20 x 27,5 cm" },
      { label: "Gramatura", value: "56 g/m²" },
      { label: "Capa", value: "Dura" },
      { label: "Certificação", value: "FSC" },
    ],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Pepper",
        image:
          "https://i.postimg.cc/K80S79Vw/caderno-universitario-tilibra-16-materias-pepper-masculino-19855-variacao-24883-1-5803d732456fbbfe96.webp",
      },
    ],
  },
  {
    id: "51",
    name: "Caderno Universitário Tilibra 10 Matérias Pepper Masculino",
    slug: "caderno-universitario-tilibra-10-materias-pepper-masculino",
    price: 12.9,
    image:
      "https://i.postimg.cc/W367ryYn/caderno-universitario-tilibra-10-materias-pepper-masculino-20123-variacao-25263-1-dc4255d089d1cc2d38.webp",
    images: [
      "https://i.postimg.cc/W367ryYn/caderno-universitario-tilibra-10-materias-pepper-masculino-20123-variacao-25263-1-dc4255d089d1cc2d38.webp",
      "https://i.postimg.cc/RV0T6X76/caderno-universitario-tilibra-10-materias-pepper-masculino-20123-variacao-25263-2-b6d3f055f17b3ac5bc.webp",
      "https://i.postimg.cc/x1Jyg8FT/caderno-universitario-tilibra-10-materias-pepper-masculino-20123-variacao-25263-3-7ce451a01bde3cc320.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Tilibra",
    description:
      "O Caderno Espiral Universitário 10 Matérias Pepper Masculino possui 160 folhas e capa dura, com folhas pautadas e espiral na cor branca. Ideal para o seu dia a dia na escola ou na faculdade.\n\nDetalhes:\nCapa: dura\nEspiral: colorido\nFolhas: pautadas\nÍndice e separador de matérias\nMiolo\nNúmero de matérias: 10 matérias\nProduto certificado: FSC\nFormato: 20cm x 27,5cm\nGramatura: 56 g/m²\nNúmero de folhas: 160 folhas",
    specifications: [
      { label: "Matérias", value: "10" },
      { label: "Folhas", value: "160" },
      { label: "Formato", value: "20 x 27,5 cm" },
      { label: "Gramatura", value: "56 g/m²" },
      { label: "Capa", value: "Dura" },
      { label: "Certificação", value: "FSC" },
    ],
    rating: 4.7,
    reviews: 112,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Pepper",
        image:
          "https://i.postimg.cc/W367ryYn/caderno-universitario-tilibra-10-materias-pepper-masculino-20123-variacao-25263-1-dc4255d089d1cc2d38.webp",
      },
    ],
  },
  {
    id: "52",
    name: "Caderno CR7 de 20 Matérias Design Exclusivo Capa Dura",
    slug: "caderno-cr7-20-materias-design-exclusivo-capa-dura",
    price: 19.9,
    image: "https://i.postimg.cc/QMStTkkN/br-11134207-81z1k-mhw7q0mkb0n6b6.webp",
    images: [
      "https://i.postimg.cc/QMStTkkN/br-11134207-81z1k-mhw7q0mkb0n6b6.webp",
      "https://i.postimg.cc/gJQ6xHmh/br-11134207-81z1k-mhw2ry2jgq9ydb.webp",
      "https://i.postimg.cc/DyVXF6CK/br-11134207-81z1k-mhw2ry2jmcjqfe.webp",
      "https://i.postimg.cc/7Z9G3kwp/br-11134207-81z1k-mhw2ry2jfbpi28.webp",
      "https://i.postimg.cc/bvFZ59GB/br-11134207-81z1k-mhw7p07xg6x2be.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description:
      "Caderno capa Dura plastificada.\nCaderno capa dura personalizado que combina estilo e funcionalidade com cores vibrantes e padrões criativos. Inclui folhas pautadas de alta qualidade para uma escrita suave e organizada, ideais para estudos, anotações ou planejamento.\n\nTorne seus momentos de estudos, anotações ou trabalho ainda mais mágicos e especiais com nosso cadernos! Olha essa ótima opção de caderno para começar a deixar tudo organizado\n\nSão cadernos, com capa dura, tamanho 200mm x 275mm e espiral, que facilita o manuseio.\n\nCARACTERÍSTICAS:\nFormato Universitário\nA4\n275mm x 200mm\nCapa Dura\nEspiral",
    specifications: [
      { label: "Formato", value: "Universitário A4" },
      { label: "Dimensões", value: "275mm x 200mm" },
      { label: "Capa", value: "Dura plastificada" },
      { label: "Encadernação", value: "Espiral" },
      { label: "Tema", value: "CR7" },
    ],
    rating: 4.8,
    reviews: 178,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Modelo 1", image: "https://i.postimg.cc/QMStTkkN/br-11134207-81z1k-mhw7q0mkb0n6b6.webp" },
      { name: "Modelo 2", image: "https://i.postimg.cc/gJQ6xHmh/br-11134207-81z1k-mhw2ry2jgq9ydb.webp" },
      { name: "Modelo 3", image: "https://i.postimg.cc/DyVXF6CK/br-11134207-81z1k-mhw2ry2jmcjqfe.webp" },
      { name: "Modelo 4", image: "https://i.postimg.cc/7Z9G3kwp/br-11134207-81z1k-mhw2ry2jfbpi28.webp" },
      { name: "Modelo 5", image: "https://i.postimg.cc/bvFZ59GB/br-11134207-81z1k-mhw7p07xg6x2be.webp" },
    ],
  },
  {
    id: "53",
    name: "Caderno Escolar Corinthians FC Capa Dura",
    slug: "caderno-escolar-corinthians-fc-capa-dura",
    price: 19.9,
    image: "https://i.postimg.cc/MT78BW85/br-11134207-81z1k-mi3knmhea3uq64.webp",
    images: [
      "https://i.postimg.cc/MT78BW85/br-11134207-81z1k-mi3knmhea3uq64.webp",
      "https://i.postimg.cc/h40BPPsG/br-11134207-81z1k-mi3h5kag1gxyef.webp",
      "https://i.postimg.cc/gkkPwFtN/br-11134207-81z1k-mi3h5kag2vie48.webp",
      "https://i.postimg.cc/bwZcT0hk/br-11134207-81z1k-mi3km33cupdv31.webp",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Corinthians",
    description:
      "Mostre sua paixão do Timão em cada página! Este caderno inspirado no Sport Club Corinthians Paulista é ideal para quem carrega o amor pelo alvinegro dentro e fora dos estádios. Perfeito para estudar, trabalhar ou simplesmente exibir seu orgulho corinthiano por onde passar.\n\nCom capa dura premium e acabamento de alta qualidade, ele é resistente e feito para aguentar o dia a dia — igual ao torcedor fiel!\n\nDisponível em versões de 1 a 20 matérias, oferece muito espaço para anotações, tarefas, resumos ou planejamentos.\n\nDestaques do produto:\n- Estampa exclusiva do Corinthians\n- Capa dura resistente e de alta durabilidade\n- Miolo pautado com divisórias por matéria\n- Disponível em 1 a 20 matérias\n\nPerfeito para:\n- Estudantes apaixonados pelo Timão\n- Organização escolar, universitária ou pessoal\n- Presentear torcedores fiéis",
    specifications: [
      { label: "Tema", value: "Corinthians FC" },
      { label: "Capa", value: "Dura premium" },
      { label: "Matérias", value: "1 a 20" },
      { label: "Miolo", value: "Pautado com divisórias" },
    ],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Modelo 1", image: "https://i.postimg.cc/MT78BW85/br-11134207-81z1k-mi3knmhea3uq64.webp" },
      { name: "Modelo 2", image: "https://i.postimg.cc/h40BPPsG/br-11134207-81z1k-mi3h5kag1gxyef.webp" },
      { name: "Modelo 3", image: "https://i.postimg.cc/gkkPwFtN/br-11134207-81z1k-mi3h5kag2vie48.webp" },
      { name: "Modelo 4", image: "https://i.postimg.cc/bwZcT0hk/br-11134207-81z1k-mi3km33cupdv31.webp" },
    ],
  },
  {
    id: "mochila-rebecca-rosa",
    name: "Mochila Rebecca Bonbon de Costas Soft",
    slug: "mochila-rebecca-bonbon-costas-soft-rosa",
    price: 59.9,
    image:
      "https://i.postimg.cc/FRF51pc3/mochila-rebecca-bonbon-de-costas-soft-21579-variacao-27295-1-e631671eadac5a660093d7e8a3bcd3f1.webp",
    images: [
      "https://i.postimg.cc/FRF51pc3/mochila-rebecca-bonbon-de-costas-soft-21579-variacao-27295-1-e631671eadac5a660093d7e8a3bcd3f1.webp",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "Rebecca Bonbon",
    description: `Mochila Soft com Matelassê 17,5" - Rebecca Bonbon
Elegância, toque macio e organização completa para as It Girls que amam a Bulldog mais charmosa de Paris.

A Mochila Rebecca Bonbon Matelassê da Rebecca Bonbon, fabricada pela Clio Style, é um modelo premium que combina um design sofisticado com alta funcionalidade. Ela se destaca pelo seu material soft (toque macio) e o elegante acabamento em matelassê, sendo ideal para a escola, faculdade, trabalho e passeios.

Destaques do Produto:
• Design e Material Premium: O grande diferencial é o material Soft Texturizado, que oferece um toque macio, combinado com um Matelassê Personalizado que confere um visual chique e moderno.
• Segurança Reforçada: Inclui um Bolso Antifurto discreto na parte traseira, ideal para guardar objetos de valor como celular, carteira e documentos.
• Organização Avançada (Múltiplos Compartimentos): Compartimento Principal Amplo, Compartimento para Notebook/Tablet, Dois Bolsos Frontais, Dois Bolsos Laterais.
• Conforto e Durabilidade: As alças de costas são acolchoadas e ajustáveis, proporcionando conforto ergonômico no uso prolongado.
• Detalhes Exclusivos: Chaveiro Pompom Triplo de Corações, Placa de Metal Colorido, Puxadores Personalizados.`,
    specifications: [
      { label: "Material", value: "Soft Texturizado com Matelassê" },
      { label: "Tamanho", value: "17,5 polegadas" },
      { label: "Compartimentos", value: "Principal, Notebook/Tablet, 2 Frontais, 2 Laterais" },
      { label: "Segurança", value: "Bolso Antifurto traseiro" },
      { label: "Extras", value: "Chaveiro Pompom, Placa de Metal, Puxadores Personalizados" },
    ],
    rating: 4.9,
    reviews: 245,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Rosa",
        image:
          "https://i.postimg.cc/FRF51pc3/mochila-rebecca-bonbon-de-costas-soft-21579-variacao-27295-1-e631671eadac5a660093d7e8a3bcd3f1.webp",
      },
      {
        name: "Azul",
        image:
          "https://i.postimg.cc/bvVcDbRJ/mochila-rebecca-bonbon-de-costas-soft-21579-variacao-27297-1-546eae83d0f3093e8ce100206d41fb8b.webp",
      },
    ],
  },
  {
    id: "estojo-rebecca-matelasse-rosa",
    name: "Estojo 1 Divisória Rebecca Bonbon Matelassê",
    slug: "estojo-rebecca-bonbon-matelasse-rosa",
    price: 25.9,
    image:
      "https://i.postimg.cc/yNkpGGF0/estojo-1-divisoria-rebecca-bonbon-matelasse-21577-variacao-27283-1-afa2f6ca33a9c903e4a6293728339bc3.webp",
    images: [
      "https://i.postimg.cc/yNkpGGF0/estojo-1-divisoria-rebecca-bonbon-matelasse-21577-variacao-27283-1-afa2f6ca33a9c903e4a6293728339bc3.webp",
    ],
    category: "Estojos",
    categorySlug: "estojos",
    brand: "Rebecca Bonbon",
    description: `Estojo Box Rebecca Bonbon (1 Divisória) - Matelassê
O Estojo Rebecca Bonbon Matelassê é o acessório de desejo de estudantes e fashionistas que buscam aliar organização a um visual glamouroso.

• Estilo Fashion: Confeccionado em crinkle, um material têxtil de alta resistência com efeito "amassadinho" que é tendência absoluta.
• Detalhes Exclusivos: Possui o logotipo da Rebecca Bonbon em placa metálica ou bordado de alta definição. Os puxadores de zíper são personalizados.
• Cores Sofisticadas: Disponível em tons como rosa, lilás, preto e azul.

Funcionalidade e Espaço (Formato Box):
• Divisória Única Inteligente: Modelo "Box" com profundidade maior para acomodar muitos itens.
• Organizador Interno: Aba com elásticos para prender até 36 lápis ou canetas.
• Amplo Compartimento Livre: Espaço generoso para réguas, colas, tesouras, borrachas.

Durabilidade: Material Resistente e Zíper de Alta Qualidade.`,
    specifications: [
      { label: "Material", value: "Crinkle (efeito amassadinho)" },
      { label: "Tipo", value: "Box com 1 Divisória" },
      { label: "Capacidade", value: "Até 36 lápis/canetas + compartimento extra" },
      { label: "Detalhes", value: "Logo em placa metálica, puxadores personalizados" },
    ],
    rating: 4.8,
    reviews: 178,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Rosa",
        image:
          "https://i.postimg.cc/yNkpGGF0/estojo-1-divisoria-rebecca-bonbon-matelasse-21577-variacao-27283-1-afa2f6ca33a9c903e4a6293728339bc3.webp",
      },
      {
        name: "Azul",
        image:
          "https://i.postimg.cc/bvpNHQkX/estojo-1-divisoria-rebecca-bonbon-matelasse-21577-variacao-27289-1-818194845fc4663fa4898d1ea8bb05f0.webp",
      },
    ],
  },
  {
    id: "estojo-rebecca-jeans-denim",
    name: "Estojo 1 Divisória Rebecca Bonbon Jeans Denim Vintage",
    slug: "estojo-rebecca-bonbon-jeans-denim-vintage",
    price: 25.9,
    image:
      "https://i.postimg.cc/s2h97CY5/estojo-1-divisoria-rebecca-bonbon-jeans-denim-vintage-21575-1-d1af4c44898b2e899a7b66a32602686b.webp",
    images: [
      "https://i.postimg.cc/s2h97CY5/estojo-1-divisoria-rebecca-bonbon-jeans-denim-vintage-21575-1-d1af4c44898b2e899a7b66a32602686b.webp",
    ],
    category: "Estojos",
    categorySlug: "estojos",
    brand: "Rebecca Bonbon",
    description: `Estojo Rebecca Bonbon Jeans Denim Vintage
O acessório ideal para quem procura um estilo "urban chic" com um toque de nostalgia.

• Material em Denim Premium: Confeccionado em tecido jeans de alta qualidade, oferece um visual clássico e despojado que nunca sai de moda. O acabamento "vintage" confere uma textura única e durabilidade superior.
• Detalhes Exclusivos: Bordados e Patches em matelassê, Logo em Metal dourado ou prateado.
• Organização e Espaço: Espaço interno otimizado para canetas, lápis e acessórios de papelaria.
• Zíperes Reforçados: Puxadores personalizados com deslize suave.
• Estilo Versátil: O denim é neutro e versátil, combinando com qualquer mochila.
• Fácil Manutenção: Material resistente pensado para uso intenso.`,
    specifications: [
      { label: "Material", value: "Denim Jeans Premium" },
      { label: "Estilo", value: "Vintage Urban Chic" },
      { label: "Detalhes", value: "Bordados, Patches, Logo em Metal" },
      { label: "Zíper", value: "Reforçado com puxadores personalizados" },
    ],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Preto",
        image:
          "https://i.postimg.cc/s2h97CY5/estojo-1-divisoria-rebecca-bonbon-jeans-denim-vintage-21575-1-d1af4c44898b2e899a7b66a32602686b.webp",
      },
    ],
  },
  {
    id: "mochila-carrinho-rebecca",
    name: "Mochila de Carrinho Color Rebecca Bonbon",
    slug: "mochila-carrinho-color-rebecca-bonbon",
    price: 99.9,
    image:
      "https://i.postimg.cc/Y2GGSzxy/mochila-de-carrinho-color-rebecca-bonbon-21497-variacao-27091-2-b6195f3f66d05c76bdb3045291bd5f75.webp",
    images: [
      "https://i.postimg.cc/Y2GGSzxy/mochila-de-carrinho-color-rebecca-bonbon-21497-variacao-27091-2-b6195f3f66d05c76bdb3045291bd5f75.webp",
      "https://i.postimg.cc/RVwW7Cym/mochila-de-carrinho-color-rebecca-bonbon-21497-variacao-27095-3-6edf139f7739e372cad8409064070622.webp",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "Rebecca Bonbon",
    description: `Mochila Rebecca Bonbon com Carrinho
A combinação perfeita de elegância, organização e praticidade para o dia a dia escolar ou universitário.

• Cor Clássica: Design elegante, fácil de combinar e ideal para qualquer ambiente.
• Tamanho Grande (19"): Amplo espaço interno para cadernos universitários, livros e materiais.
• Compartimento para Notebook: Bolso interno acolchoado, ideal para notebooks de até 15,6 polegadas.
• Sistema de Rodinhas: Carrinho resistente com rodinhas de alta qualidade e base reforçada para estabilidade.
• Organização Funcional: Bolsos frontais com organizadores internos e bolsos laterais para garrafas.
• Detalhes de Marca: Logo em metal, puxadores personalizados e chaveiro charmoso.`,
    specifications: [
      { label: "Tamanho", value: "19 polegadas (Grande)" },
      { label: "Compartimento Notebook", value: "Até 15,6 polegadas" },
      { label: "Sistema", value: "Carrinho com rodinhas de alta qualidade" },
      { label: "Organização", value: "Bolsos frontais, laterais e organizadores internos" },
      { label: "Detalhes", value: "Logo em metal, puxadores personalizados, chaveiro" },
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      {
        name: "Rosa",
        image:
          "https://i.postimg.cc/Y2GGSzxy/mochila-de-carrinho-color-rebecca-bonbon-21497-variacao-27091-2-b6195f3f66d05c76bdb3045291bd5f75.webp",
      },
      {
        name: "Preto",
        image:
          "https://i.postimg.cc/RVwW7Cym/mochila-de-carrinho-color-rebecca-bonbon-21497-variacao-27095-3-6edf139f7739e372cad8409064070622.webp",
      },
    ],
  },
  {
    id: "kit-faber-castell-volta-aulas",
    name: "Kit Material Escolar Volta às Aulas Faber Castell",
    slug: "kit-material-escolar-volta-aulas-faber-castell",
    price: 22.9,
    image: "https://i.postimg.cc/gJKMLPps/sg-11134201-7rbl6-m5udnei3s1hc3a.webp",
    images: [
      "https://i.postimg.cc/gJKMLPps/sg-11134201-7rbl6-m5udnei3s1hc3a.webp",
      "https://i.postimg.cc/D0jB5d8p/sg-11134201-7rdvv-lxyhogywpffk8a.webp",
      "https://i.postimg.cc/Dzk5Czy5/sg-11134201-7rdwg-lxyhogywpf3333.webp",
      "https://i.postimg.cc/d1nBtmmh/sg-11134201-7rdw4-lxyhogywpf9id3.webp",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Faber Castell",
    description: `Kit Escolar/Volta às Aulas - Estojo Completo Faber Castell
Produtos originais, adquiridos direto com as marcas. Produtos novos!

Disponível nas cores: Lilás, Rosa, Verde e Preto.

Each kit contains:
• 4 Lápis Grafite nº2 Redondo Ecolápis Grafite Pastel, Metallic, Pérola, Max Colors ou Max Preto Faber Castell
• 3 Canetas Esferográficas Trilux Colors 1.0mm Faber Castell
• 3 Canetas Esferográficas Trilux 1.0mm Faber Castell nas cores azul, preto e vermelho
• 1 Borracha Max Tons Pastel, Neon ou Glitz Faber Castell
• 1 Marca Texto Tons Pastel ou Neon Grifpen Faber Castell
• 1 Apontador Mini Box cor pastel ou Clássico Faber Castell
• 1 Estojo Plástico Multiuso Escolar Linho

PRODUTO ORIGINAL com Nota Fiscal e Garantia do vendedor.`,
    specifications: [
      { label: "Marca", value: "Faber Castell" },
      { label: "Lápis Grafite", value: "4 unidades nº2" },
      { label: "Canetas Coloridas", value: "3 Trilux Colors 1.0mm" },
      { label: "Canetas Básicas", value: "3 Trilux (azul, preto, vermelho)" },
      { label: "Borracha", value: "1 Max Tons Pastel/Neon/Glitz" },
      { label: "Marca Texto", value: "1 Grifpen Pastel/Neon" },
      { label: "Apontador", value: "1 Mini Box" },
      { label: "Estojo", value: "1 Plástico Multiuso Linho" },
    ],
    rating: 4.8,
    reviews: 267,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Rosa", image: "https://i.postimg.cc/gJKMLPps/sg-11134201-7rbl6-m5udnei3s1hc3a.webp" },
      { name: "Roxo", image: "https://i.postimg.cc/D0jB5d8p/sg-11134201-7rdvv-lxyhogywpffk8a.webp" },
      { name: "Preto", image: "https://i.postimg.cc/Dzk5Czy5/sg-11134201-7rdwg-lxyhogywpf3333.webp" },
      { name: "Verde", image: "https://i.postimg.cc/d1nBtmmh/sg-11134201-7rdw4-lxyhogywpf9id3.webp" },
    ],
  },
  {
    id: "kit-completo-45-itens",
    name: "Kit Material Escolar Completo Volta as Aulas 45 Itens",
    slug: "kit-material-escolar-completo-45-itens",
    price: 69.9,
    image: "https://i.postimg.cc/QM8KxL6H/br-11134207-7r98o-m5syuga5w9dx0d.webp",
    images: [
      "https://i.postimg.cc/QM8KxL6H/br-11134207-7r98o-m5syuga5w9dx0d.webp",
      "https://i.postimg.cc/4dnP82h0/br-11134207-7r98o-m3ry6izb02t1eb.webp",
      "https://i.postimg.cc/GtyQRBKF/br-11134207-7r98o-m4uoqedun3ph90.webp",
    ],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description: `SUPER KIT MATERIAL ESCOLAR - COMPLETO
OPÇÕES DE TEMAS MASCULINOS E FEMININOS
Todos os itens foram escolhidos CRITERIOSAMENTE pela equipe e são de qualidade PRIME.

TOTAL DE 45 ITENS INCLUSO:
• 01 Super Mochila de 45cm
• 01 Caderno Temático, 10 matérias, 200 folhas, Capa DURA
• 01 Estojo/Penal com Zíper reforçado
• 12 Lápis de Cor
• 06 Caneta Fineliner Colorida, ponta fina
• 06 Lápis de Cor (Tom pastel)
• 04 Bloco de notas
• 01 Lapiseira, Grafite 07mm
• 01 Apontador Com Lixeira
• 01 Régua 30cm
• 01 Caneta Corretiva, secagem rápida
• 01 Cola em Bastão
• 01 Borracha
• 01 Caneta Azul, Preta e Vermelha
• 01 Lápis HB Grafite
• 01 Marca Texto Amarelo
• 01 Tesoura
• 01 Mini Grampeador
• 01 Pasta L

TODOS OS ITENS DE QUALIDADE PREMIUM E FOTOS REAIS.`,
    specifications: [
      { label: "Total de Itens", value: "45 peças" },
      { label: "Mochila", value: "45cm de altura" },
      { label: "Caderno", value: "10 matérias, 200 folhas, capa dura" },
      { label: "Lápis de Cor", value: "12 cores + 6 tons pastel" },
      { label: "Canetas Fineliner", value: "6 cores" },
      { label: "Qualidade", value: "Premium" },
    ],
    rating: 4.9,
    reviews: 456,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Mochila Cinza", image: "https://i.postimg.cc/QM8KxL6H/br-11134207-7r98o-m5syuga5w9dx0d.webp" },
      { name: "Mochila Rosa", image: "https://i.postimg.cc/4dnP82h0/br-11134207-7r98o-m3ry6izb02t1eb.webp" },
      { name: "Mochila Preta", image: "https://i.postimg.cc/GtyQRBKF/br-11134207-7r98o-m4uoqedun3ph90.webp" },
    ],
  },
  {
    id: "kit-feminino-43-itens",
    name: "Kit Material Escolar Feminino Completo",
    slug: "kit-material-escolar-feminino-completo-43-itens",
    price: 49.9,
    image: "https://i.postimg.cc/pXdWsD0Y/br-11134207-81z1k-mim9z35ky4nab1.webp",
    images: ["https://i.postimg.cc/pXdWsD0Y/br-11134207-81z1k-mim9z35ky4nab1.webp"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description: `Kit Material Escolar Menina Completo! 43 Itens com Tudo que você precisa em um único Kit.
Economize tempo e dinheiro com o melhor kit volta às aulas!

No total são 43 ITENS Unitários:

ITENS PREMIUM:
• 1 Mochila (Alta Durabilidade e Resistência) (Opcional)
• 1 Estojo (Cabe todos os itens)
• 1 Caderno 10 Matérias

PARA ESCREVER:
• 1 Lapiseira
• 1 Marca Texto
• 2 Lápis de escrever (+ Borracha)
• 3 Canetas Esferográficas (Azul, Preta e Vermelha)
• 6 Canetas Fine Line (colorida)
• 12 Lápis de cor

OUTROS ITENS INDISPENSÁVEIS:
• 1 Borracha, Apontador, Tesoura, Régua de Alumínio
• 1 Cola Bastão, Caneta Corretiva
• 1 Porta Cartão Para Estudante
• 4 Blocos de Notas (adesivo)
• 100 Marcadores de Página
• 1 Grampeador + Grampos
• 1 Pote de Clips`,
    specifications: [
      { label: "Total de Itens", value: "43 peças" },
      { label: "Mochila", value: "Alta durabilidade (opcional)" },
      { label: "Caderno", value: "10 matérias" },
      { label: "Lápis de Cor", value: "12 cores" },
      { label: "Canetas Fine Line", value: "6 cores" },
      { label: "Público", value: "Feminino" },
    ],
    rating: 4.8,
    reviews: 389,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
  },
  {
    id: "kit-47-itens-volta-aulas",
    name: "Kit 47 Itens Material Escolar Volta as Aulas",
    slug: "kit-47-itens-material-escolar-volta-aulas",
    price: 29.9,
    image: "https://i.postimg.cc/j27G1S7V/br-11134207-81z1k-mflnwvftsf0n87.webp",
    images: ["https://i.postimg.cc/j27G1S7V/br-11134207-81z1k-mflnwvftsf0n87.webp"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description: `Kit Escolar Completo com 47 Itens Essenciais para um Ano de Sucesso!
Prepare-se para o volta às aulas com o kit mais completo e prático do mercado!

O que você encontra neste kit (47 itens):

Para colar e criar:
• 1x Cola Bastão 10g
• 1x Cola Branca Líquida 40g

Para corrigir:
• 1x Corretivo Líquido 18ml
• 1x Corretivo em Fita 5mm x 6m

Para desenhar e colorir:
• 1x Borracha com Capa
• 1x Caixa de Lápis de Colorir com 12 cores
• 1x Caixa de Canetinhas com 12 cores
• 2x Lápis de Escrever

Para organizar e destacar:
• 1x Bloco Adesivo Post-it com 4 cores
• 1x Apontador com Depósito

Para escrever e marcar:
• 6x Marca Texto
• 4x Canetas

Para segurança e praticidade:
• 1x Tesoura sem Ponta 13cm

Embalamos com todo carinho e cuidado!`,
    specifications: [
      { label: "Total de Itens", value: "47 peças" },
      { label: "Lápis de Cor", value: "12 cores" },
      { label: "Canetinhas", value: "12 cores" },
      { label: "Marca Texto", value: "6 unidades" },
      { label: "Canetas", value: "4 unidades" },
      { label: "Corretivos", value: "Líquido + Fita" },
    ],
    rating: 4.7,
    reviews: 234,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
  },
  {
    id: "kit-canetas-36-pecas",
    name: "Kit Canetas Coloridas Ponta Fina 12 Cores + 12 Cores Dual Brush + 12 Gel Pastel",
    slug: "kit-canetas-coloridas-36-pecas",
    price: 22.9,
    image: "https://i.postimg.cc/SKR15xB1/br-11134207-81z1k-midjpb8y0sue74.webp",
    images: ["https://i.postimg.cc/SKR15xB1/br-11134207-81z1k-midjpb8y0sue74.webp"],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "EscolaShop",
    description: `Kit Canetas Coloridas Completo

Tipo de Caneta: Caneta Tinteiro
Peso da Linha: 0.4mm
Garantia do Fornecedor
Envio de São Paulo

Conteúdo:
• 12 Canetas Ponta Fina Coloridas
• 12 Canetas Dual Brush (duas pontas)
• 12 Canetas Gel Pastel

Total: 36 canetas para todas as suas necessidades de escrita, desenho e marcação!`,
    specifications: [
      { label: "Total de Canetas", value: "36 unidades" },
      { label: "Ponta Fina", value: "12 cores (0.4mm)" },
      { label: "Dual Brush", value: "12 cores (duas pontas)" },
      { label: "Gel Pastel", value: "12 cores" },
      { label: "Tipo", value: "Caneta Tinteiro" },
    ],
    rating: 4.8,
    reviews: 178,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
  },
  {
    id: "kit-65-itens-volta-aulas",
    name: "Kit Volta às Aulas Completo 65 Itens",
    slug: "kit-volta-aulas-completo-65-itens",
    price: 39.9,
    image: "https://i.postimg.cc/Wp8rDwFV/br-11134207-81z1k-mec0x0ahezgh9f.webp",
    images: ["https://i.postimg.cc/Wp8rDwFV/br-11134207-81z1k-mec0x0ahezgh9f.webp"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "EscolaShop",
    description: `Kit Ideal para presentear com itens funcionais e lindos. Kit Feminino com capas divertidas.
Serve para: Presente de Natal, Amigo secreto, Volta às aulas, Dia Das Crianças e aniversários.

Kit Extra G (65 Itens):
• 1 Caderno 1 matéria
• 1 Bloco Adesivo
• 4 Mini Blocos Adesivos
• 6 Marca texto fofos
• 4 Marca textos Slim
• 6 Marca textos pastel G
• 6 Marca textos duas pontas
• 5 Canetas Spiro
• 5 Canetas apagáveis
• 3 Canetas Fofas
• 6 Canetas Fineliner
• 5 Canetas Esferográficas
• 5 Canetas Gel Coloridas
• 2 Corretivos
• 1 Borracha
• 1 Apontador
• 2 Lápis grafite
• 1 Lapiseira
• 1 Tubinho Grafite`,
    specifications: [
      { label: "Total de Itens", value: "65 peças" },
      { label: "Caderno", value: "1 matéria" },
      { label: "Marca Textos", value: "22 unidades (vários tipos)" },
      { label: "Canetas", value: "24 unidades (vários tipos)" },
      { label: "Blocos Adesivos", value: "5 unidades" },
      { label: "Ideal para", value: "Presente, Volta às aulas" },
    ],
    rating: 4.9,
    reviews: 345,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
  },
  {
    id: "kit-escolar-faber-castell",
    name: "Kit Escolar Faber-Castell",
    slug: "kit-escolar-faber-castell-completo",
    price: 25.9,
    image: "https://i.postimg.cc/1tJtzMCg/sg-11134201-7rbl6-m5udnei3s1hc3a.webp",
    images: ["https://i.postimg.cc/1tJtzMCg/sg-11134201-7rbl6-m5udnei3s1hc3a.webp"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Faber Castell",
    description: `Kit Escolar - Faber-Castell
Produtos certificados INMETRO de alta qualidade.

Contém:

Blister Borracha TK-Plast FC Max com 2 unidades:
• Borracha com formulação de alta qualidade, livre de PVC
• Excelente desempenho ao apagar
• Capa protetora que evita sujeira

Caneta hidrográfica prestocolor 12 cores:
• Tinta lavável da maioria dos tecidos
• Tampas com respiro antiasfixiante
• Pontas macias e duráveis
• Produto atóxico com cores vivas

Lápis de cor 24 cores:
• Cores mais vivas e total respeito ao meio ambiente
• Pigmentos com alta concentração
• Excelente deposição

Lápis preto NR 2 Sextavado com 6 unidades:
• EcoLápis: madeira 100% reflorestada
• Ponta MAX Resistente
• Técnica Sekural para maior resistência
• Graduação nº 2 = B`,
    specifications: [
      { label: "Marca", value: "Faber Castell" },
      { label: "Borrachas", value: "2 unidades TK-Plast (livre de PVC)" },
      { label: "Canetinhas", value: "12 cores Prestocolor" },
      { label: "Lápis de Cor", value: "24 cores" },
      { label: "Lápis Grafite", value: "6 unidades nº2 Sextavado" },
      { label: "Certificação", value: "INMETRO" },
    ],
    rating: 4.9,
    reviews: 289,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
  },
  {
    id: "101",
    name: "Borracha Decorada Fantasia Toast c/4",
    slug: "borracha-decorada-fantasia-toast",
    price: 10.99,
    image: "https://i.postimg.cc/kXkpPFvQ/image.png",
    images: ["https://i.postimg.cc/kXkpPFvQ/image.png"],
    category: "Borrachas",
    categorySlug: "borrachas",
    brand: "CiS",
    description: `Conjunto de borrachas decoradas.
Com 4 borrachas em formato de torrada.
Embalagem divertida.`,
    specifications: [
      { label: "Material", value: "Borracha" },
      { label: "Tipo de estilo", value: "Colecionável, Escolar" },
      { label: "Certificação", value: "INMETRO - OCP0061 - Registro 003521/2013" },
    ],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Única Opção", image: "https://i.postimg.cc/kXkpPFvQ/image.png" }],
  },
  {
    id: "102",
    name: "Borracha Stitch",
    slug: "borracha-stitch",
    price: 4.2,
    image: "https://i.postimg.cc/Cxk6hBv8/image.png",
    images: ["https://i.postimg.cc/Cxk6hBv8/image.png"],
    category: "Borrachas",
    categorySlug: "borrachas",
    brand: "MoLin",
    description: `Borracha macia colorida e estampada.
No formato do rostinho do Stitch e Angel.
Não tóxica.`,
    specifications: [
      { label: "Material", value: "Borracha" },
      { label: "Tipo de estilo", value: "Temático, Escolar, Colecionável" },
      { label: "Características", value: "Disponível em 4 opções de cores/modelos" },
    ],
    rating: 4.9,
    reviews: 215,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Azul (Stitch)", image: "https://i.postimg.cc/Cxk6hBv8/image.png" },
      { name: "Amarelo (Stitch)", image: "https://i.postimg.cc/Cxk6hBv8/image.png" },
      { name: "Rosa claro (Angel)", image: "https://i.postimg.cc/Cxk6hBv8/image.png" },
      { name: "Rosa Pink (Angel)", image: "https://i.postimg.cc/Cxk6hBv8/image.png" },
    ],
  },
  {
    id: "103",
    name: "Borracha Zoo",
    slug: "borracha-zoo",
    price: 5.5,
    image: "https://i.postimg.cc/vBHPtPGM/image.png",
    images: ["https://i.postimg.cc/vBHPtPGM/image.png"],
    category: "Borrachas",
    categorySlug: "borrachas",
    brand: "BRW",
    description: `Borracha macia estampada.
Disponível em 4 opções diferentes de animais.
Item colecionável.`,
    specifications: [
      { label: "Material", value: "Borracha" },
      { label: "Tipo de estilo", value: "Temático, Escolar, Colecionável" },
      { label: "Dimensões", value: "4,5cm x 4,5cm (aproximadamente)" },
    ],
    rating: 4.6,
    reviews: 124,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Panda", image: "https://i.postimg.cc/vBHPtPGM/image.png" },
      { name: "Porquinho", image: "https://i.postimg.cc/vBHPtPGM/image.png" },
      { name: "Ratinho", image: "https://i.postimg.cc/vBHPtPGM/image.png" },
      { name: "Tigre", image: "https://i.postimg.cc/vBHPtPGM/image.png" },
    ],
  },
  {
    id: "104",
    name: "Borracha Formas Divertidas",
    slug: "borracha-formas-divertidas",
    price: 4.15,
    image: "https://i.postimg.cc/8c7tqjJT/image.png",
    images: ["https://i.postimg.cc/8c7tqjJT/image.png"],
    category: "Borrachas",
    categorySlug: "borrachas",
    brand: "Leo&Leo",
    description: `Borracha com formas divertidas e variadas.
Produto atóxico.
Produto colecionável.`,
    specifications: [
      { label: "Material", value: "Borracha" },
      { label: "Tipo de estilo", value: "Temático, Escolar, Colecionável" },
      { label: "Dimensão média", value: "5cm x 1cm x 3cm" },
    ],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Arco-íris", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Panda", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Donuts", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Pinguim", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Sereia", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Lhama", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Picolé", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Melancia", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Astronauta", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Robô", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Macaron", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
      { name: "Fada", image: "https://i.postimg.cc/8c7tqjJT/image.png" },
    ],
  },
  {
    id: "105",
    name: "Kit Escolar Stitch c/ 5 Itens",
    slug: "kit-escolar-stitch-5-itens",
    price: 12.9,
    image: "https://i.postimg.cc/xjZsLyhm/image.png",
    images: ["https://i.postimg.cc/xjZsLyhm/image.png"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "MoLin",
    description: `Kit escolar temático com 5 items.
Itens não tóxicos.
Selo de qualidade garantida.`,
    specifications: [
      { label: "Material", value: "Diversos (Plástico, Grafite, Tinta)" },
      { label: "Tipo de estilo", value: "Kit Escolar, Temático" },
      {
        label: "Conteúdo",
        value: "2 lápis pretos HB nº2, 1 caneta esferográfica azul, 1 borracha e 1 apontador com depósito",
      },
      { label: "Dimensões do kit", value: "22.5cm x 10cm" },
      { label: "Certificação", value: "INMETRO - Registro 002689/2021" },
    ],
    rating: 4.8,
    reviews: 167,
    inStock: false,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Azul (Stitch)", image: "https://i.postimg.cc/xjZsLyhm/image.png" }],
  },
  {
    id: "106",
    name: "Apontador c/ Borracha Love Pastelito",
    slug: "apontador-borracha-love-pastelito",
    price: 14.95,
    image: "https://i.postimg.cc/JzNPVwnQ/image.png",
    images: ["https://i.postimg.cc/JzNPVwnQ/image.png"],
    category: "Apontadores",
    categorySlug: "apontadores",
    brand: "MoLin",
    description: `Item 4 em 1: Apontador Jumbo, Apontador Comum, Depósito e Borracha.
Design fofo e funcional.`,
    specifications: [
      { label: "Material", value: "Plástico e Borracha" },
      { label: "Tipo de estilo", value: "Escolar, Funcional" },
      { label: "Características", value: "Possui depósito para resíduos" },
    ],
    rating: 4.7,
    reviews: 143,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Roxo", image: "https://i.postimg.cc/JzNPVwnQ/image.png" },
      { name: "Rosa", image: "https://i.postimg.cc/JzNPVwnQ/image.png" },
      { name: "Verde", image: "https://i.postimg.cc/JzNPVwnQ/image.png" },
      { name: "Azul", image: "https://i.postimg.cc/JzNPVwnQ/image.png" },
    ],
  },
  {
    id: "107",
    name: "Caneta Borracha Pastel",
    slug: "caneta-borracha-pastel",
    price: 12.25,
    image: "https://i.postimg.cc/7LX9hgSG/image.png",
    images: ["https://i.postimg.cc/7LX9hgSG/image.png"],
    category: "Canetas",
    categorySlug: "canetas",
    brand: "MoLin",
    description: `Caneta borracha com sistema retrátil.
Apaga macio e sem borrar.
Grip emborrachado para maior conforto.`,
    specifications: [
      { label: "Material", value: "Plástico e Borracha" },
      { label: "Tipo de estilo", value: "Escolar, Escritório" },
      { label: "Características", value: "Corpo triangular" },
    ],
    rating: 4.6,
    reviews: 112,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Roxo + Amarelo", image: "https://i.postimg.cc/7LX9hgSG/image.png" },
      { name: "Laranja + Azul", image: "https://i.postimg.cc/7LX9hgSG/image.png" },
      { name: "Rosa + Verde", image: "https://i.postimg.cc/7LX9hgSG/image.png" },
      { name: "Azul + Rosa", image: "https://i.postimg.cc/7LX9hgSG/image.png" },
    ],
  },
  {
    id: "108",
    name: "Kit Escolar Temático c/4",
    slug: "kit-escolar-tematico-4",
    price: 19.9,
    image: "https://i.postimg.cc/rmmJrK9h/image.png",
    images: ["https://i.postimg.cc/rmmJrK9h/image.png"],
    category: "Kits Escolares",
    categorySlug: "kits-escolares",
    brand: "Leo&Leo",
    description: `Kit Lápis temático com 4 itens.
Ideal para o dia a dia escolar.`,
    specifications: [
      { label: "Material", value: "Diversos (Madeira, Grafite, Plástico, Borracha)" },
      { label: "Tipo de estilo", value: "Kit Escolar, Temático" },
      { label: "Conteúdo", value: "Dois lápis pretos, um apontador e uma borracha temática" },
    ],
    rating: 4.5,
    reviews: 87,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Panda - Preto", image: "https://i.postimg.cc/rmmJrK9h/image.png" },
      { name: "Panda - Rosa", image: "https://i.postimg.cc/rmmJrK9h/image.png" },
      { name: "Pastel Trend - Roxo", image: "https://i.postimg.cc/rmmJrK9h/image.png" },
      { name: "Pastel Trend - Rosa", image: "https://i.postimg.cc/rmmJrK9h/image.png" },
      { name: "Pastel Trend - Verde", image: "https://i.postimg.cc/rmmJrK9h/image.png" },
      { name: "Donut - Rosa", image: "https://i.postimg.cc/rmmJrK9h/image.png" },
    ],
  },
  {
    id: "109",
    name: "Lapiseira Troca Ponta Tik Tak",
    slug: "lapiseira-troca-ponta-tik-tak",
    price: 5.0,
    image: "https://i.postimg.cc/tCPLTMJR/image.png",
    images: ["https://i.postimg.cc/tCPLTMJR/image.png"],
    category: "Lapiseiras",
    categorySlug: "lapiseiras",
    brand: "CiS",
    description: `Lapiseira tipo troca ponta.
Corpo redondo transparente estampado.
Com tampa e borracha no topo.`,
    specifications: [
      { label: "Material", value: "Plástico" },
      { label: "Tipo de estilo", value: "Escolar, Tendência" },
      { label: "Características", value: "Não utiliza grafite, as pontas são trocadas" },
    ],
    rating: 4.4,
    reviews: 76,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Unicórnio Verde", image: "https://i.postimg.cc/tCPLTMJR/image.png" },
      { name: "Unicórnio Rosa", image: "https://i.postimg.cc/tCPLTMJR/image.png" },
      { name: "Unicórnio Lilás", image: "https://i.postimg.cc/tCPLTMJR/image.png" },
      { name: "Cupcake Azul", image: "https://i.postimg.cc/tCPLTMJR/image.png" },
      { name: "Cupcake Rosa", image: "https://i.postimg.cc/tCPLTMJR/image.png" },
      { name: "Cupcake Lilás", image: "https://i.postimg.cc/tCPLTMJR/image.png" },
    ],
  },
  {
    id: "110",
    name: "Caneta de Luxo Twist Pink",
    slug: "caneta-luxo-twist-pink",
    price: 22.9,
    image: "https://i.postimg.cc/cLB27tfm/image.png",
    images: ["https://i.postimg.cc/cLB27tfm/image.png"],
    category: "Canetas",
    categorySlug: "canetas",
    brand: "MoLin",
    description: `Caneta de luxo de corpo metálico.
Item presenteável, acompanha caixa em papel.
Design elegante e sofisticado.`,
    specifications: [
      { label: "Material", value: "Corpo metálico" },
      { label: "Tipo de estilo", value: "Executivo, Presenteável" },
      { label: "Ponta", value: "Esferográfica de 1.0mm" },
      { label: "Tinta", value: "Preta em gel" },
      { label: "Dimensões da caixa", value: "18.5cm x 5.5cm x 2.5cm" },
    ],
    rating: 4.9,
    reviews: 198,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Pink", image: "https://i.postimg.cc/cLB27tfm/image.png" }],
  },
  {
    id: "111",
    name: "Caneta de Luxo Twist Cyan",
    slug: "caneta-luxo-twist-cyan",
    price: 22.9,
    image: "https://i.postimg.cc/g0c5gcD8/image.png",
    images: ["https://i.postimg.cc/g0c5gcD8/image.png"],
    category: "Canetas",
    categorySlug: "canetas",
    brand: "MoLin",
    description: `Caneta de luxo de corpo metálico.
Item presenteável, acompanha caixa em papel.
Design elegante e sofisticado.`,
    specifications: [
      { label: "Material", value: "Corpo metálico" },
      { label: "Tipo de estilo", value: "Executivo, Presenteável" },
      { label: "Ponta", value: "Esferográfica de 1.0mm" },
      { label: "Tinta", value: "Preta em gel" },
      { label: "Dimensões da caixa", value: "18.5cm x 5.5cm x 2.5cm" },
    ],
    rating: 4.9,
    reviews: 176,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Cyan", image: "https://i.postimg.cc/g0c5gcD8/image.png" }],
  },
  {
    id: "112",
    name: "Caneta de Luxo Roller Purple",
    slug: "caneta-luxo-roller-purple",
    price: 22.9,
    image: "https://i.postimg.cc/26VtfHMw/image.png",
    images: ["https://i.postimg.cc/26VtfHMw/image.png"],
    category: "Canetas",
    categorySlug: "canetas",
    brand: "MoLin",
    description: `Caneta de luxo de corpo metálico.
Item presenteável, acompanha caixa em papel.
Design elegante e sofisticado.`,
    specifications: [
      { label: "Material", value: "Corpo metálico" },
      { label: "Tipo de estilo", value: "Executivo, Presenteável" },
      { label: "Ponta", value: "Esferográfica de 1.0mm" },
      { label: "Tinta", value: "Preta em gel" },
      { label: "Dimensões da caixa", value: "18.5cm x 5.5cm x 2.5cm" },
    ],
    rating: 4.8,
    reviews: 154,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Purple (Roxo)", image: "https://i.postimg.cc/26VtfHMw/image.png" }],
  },
  {
    id: "113",
    name: "Caneta de Luxo Coração Diamante Candy",
    slug: "caneta-luxo-coracao-diamante-candy",
    price: 12.9,
    image: "https://i.postimg.cc/NFXPKKgz/image.png",
    images: ["https://i.postimg.cc/NFXPKKgz/image.png"],
    category: "Canetas",
    categorySlug: "canetas",
    brand: "MoLin",
    description: `Caneta esferográfica de luxo.
Com topo de diamante em forma de coração.
Abertura rotacional.`,
    specifications: [
      { label: "Material", value: "Plástico e Metal" },
      { label: "Tipo de estilo", value: "Luxo, Tendência" },
      { label: "Ponta", value: "1.0mm" },
      { label: "Tinta", value: "Azul" },
    ],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Verde-água", image: "https://i.postimg.cc/NFXPKKgz/image.png" },
      { name: "Rosa", image: "https://i.postimg.cc/NFXPKKgz/image.png" },
      { name: "Lilás", image: "https://i.postimg.cc/NFXPKKgz/image.png" },
      { name: "Salmão", image: "https://i.postimg.cc/NFXPKKgz/image.png" },
      { name: "Roxo", image: "https://i.postimg.cc/NFXPKKgz/image.png" },
    ],
  },
  {
    id: "114",
    name: "Caneta Fineline Funny 0.4mm",
    slug: "caneta-fineline-funny",
    price: 7.9,
    image: "https://i.postimg.cc/xdFsgv87/image.png",
    images: ["https://i.postimg.cc/xdFsgv87/image.png"],
    category: "Canetas",
    categorySlug: "canetas",
    brand: "BRW",
    description: `Canetas fineline com decoração no topo (Unicórnio, Cupcake, Cacto, Flamingo).
Corpo redondo da cor da tinta.
Conforto na escrita.`,
    specifications: [
      { label: "Material", value: "Plástico" },
      { label: "Tipo de estilo", value: "Escolar, Artístico" },
      { label: "Ponta", value: "0.4mm" },
    ],
    rating: 4.6,
    reviews: 134,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Azul", image: "https://i.postimg.cc/xdFsgv87/image.png" },
      { name: "Rosa", image: "https://i.postimg.cc/xdFsgv87/image.png" },
      { name: "Verde", image: "https://i.postimg.cc/xdFsgv87/image.png" },
      { name: "Lilás", image: "https://i.postimg.cc/xdFsgv87/image.png" },
      { name: "Laranja", image: "https://i.postimg.cc/xdFsgv87/image.png" },
      { name: "Amarelo", image: "https://i.postimg.cc/xdFsgv87/image.png" },
    ],
  },
  {
    id: "115",
    name: "Caneta Fineline BRW Cats 0.4mm",
    slug: "caneta-fineline-brw-cats",
    category: "Canetas",
    categorySlug: "canetas",
    brand: "BRW",
    description: `Caneta fineline com ponta de 0.4mm.
Corpo redondo da cor da tinta.
Topo decorado com tema de gatos.`,
    specifications: [
      { label: "Material", value: "Plástico" },
      { label: "Tipo de estilo", value: "Escolar, Artístico, Temático" },
      { label: "Ponta", value: "0.4mm" },
      { label: "Características", value: "Disponível em 3 cores diferentes" },
    ],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Azul", image: "https://i.postimg.cc/NGXN7rc1/image.png" },
      { name: "Rosa", image: "https://i.postimg.cc/NGXN7rc1/image.png" },
      { name: "Lilás", image: "https://i.postimg.cc/NGXN7rc1/image.png" },
    ],
  },
  {
    id: "116",
    name: "Kit 60 Cores Canetas Ponta Dupla Desenho Colorir Brush Pen Tinta",
    slug: "kit-60-cores-canetas-ponta-dupla-brush-pen",
    price: 22.9,
    image: "https://i.postimg.cc/2jqtshJr/image.png",
    images: ["https://i.postimg.cc/2jqtshJr/image.png"],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "EscolaShop",
    description: `Contém 1 Kit com 60 canetas hidrográficas de cores vibrantes e duradouras.
Ponta Dupla para precisão e versatilidade.
Ideal para desenhos, pinturas e lettering.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Plástico, Tinta à base de água" },
      { label: "Tipo de estilo", value: "Artístico, Escolar" },
      { label: "Ponta", value: "Dupla (fina e brush)" },
      { label: "Quantidade", value: "60 canetas" },
    ],
    rating: 4.7,
    reviews: 245,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Kit com 60 Cores", image: "https://i.postimg.cc/2jqtshJr/image.png" }],
  },
  {
    id: "117",
    name: "Caderno Inteligente Capivara + Itens Fofos Escolar Kawaii",
    slug: "caderno-inteligente-capivara-kawaii",
    price: 39.9,
    image: "https://i.postimg.cc/3xPNZgPf/image.png",
    images: [
      "https://i.postimg.cc/3xPNZgPf/image.png",
      "https://i.postimg.cc/8cKPfWRc/image.png",
      "https://i.postimg.cc/DwbymS8L/image.png",
      "https://i.postimg.cc/RhFvmFjY/image.png",
      "https://i.postimg.cc/Gt5dmRRg/image.png",
      "https://i.postimg.cc/JhLmnKfN/image.png",
      "https://i.postimg.cc/hvfRwYmz/image.png",
      "https://i.postimg.cc/bNSj9K80/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description: `Kit Escolar Capivara com Caderno Inteligente.
Capa estampada com capivaras fofas e cheias de estilo.
Caderno moderno e funcional, com capa dura resistente.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Jovens" },
      { label: "Material", value: "Capa dura, Papel" },
      { label: "Tipo de estilo", value: "Escolar, Kawaii, Organização" },
      { label: "Características", value: "Sistema de discos, folhas reposicionáveis" },
    ],
    rating: 4.9,
    reviews: 178,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Estampa Capivara", image: "https://i.postimg.cc/3xPNZgPf/image.png" }],
  },
  {
    id: "118",
    name: "Caderno Smart Universitário Disney Stitch 4512",
    slug: "caderno-smart-universitario-disney-stitch",
    price: 25.9,
    image: "https://i.postimg.cc/NMCW1xnq/image.png",
    images: [
      "https://i.postimg.cc/NMCW1xnq/image.png",
      "https://i.postimg.cc/3NPVqx7V/image.png",
      "https://i.postimg.cc/WpKBzXrY/image.png",
      "https://i.postimg.cc/NjvZ7FdL/image.png",
      "https://i.postimg.cc/g0N5WDmN/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Disney",
    description: `Caderno Smart Universitário com Folhas Tira e Põe do Stitch.
Lindo, sofisticado e muito resistente, com wire-o de metal grosso.
Permite remover, acrescentar e reordenar as folhas sem danos.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Metal, Papel 90g" },
      { label: "Tipo de estilo", value: "Universitário, Temático (Disney), Organização" },
      { label: "Características", value: "80 folhas destacáveis, sistema de discos" },
    ],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Estampa Stitch", image: "https://i.postimg.cc/NMCW1xnq/image.png" }],
  },
  {
    id: "119",
    name: "Kit 2 Cadernos Inteligentes 8 E 10 Discos + Caneta Fofa",
    slug: "kit-2-cadernos-inteligentes-8-10-discos-caneta",
    price: 49.9,
    image: "https://i.postimg.cc/gkbP4gJx/image.png",
    images: [
      "https://i.postimg.cc/gkbP4gJx/image.png",
      "https://i.postimg.cc/ZRv1xNzW/image.png",
      "https://i.postimg.cc/Y2g54Qx5/image.png",
      "https://i.postimg.cc/ncJ6qMRB/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "EscolaShop",
    description: `Kit com 2 Cadernos Inteligentes de capa camurça (8 e 10 discos).
Capas com toque aveludado e sofisticado.
Permite montar, remover e reorganizar as páginas. Acompanha caneta fofa de brinde.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Capa camurça, Sistema de discos" },
      { label: "Tipo de estilo", value: "Escolar, Organização" },
      { label: "Conteúdo", value: "2 Cadernos Inteligentes + Caneta Fofa" },
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Cinza", image: "https://i.postimg.cc/gkbP4gJx/image.png" },
      { name: "Coral-claro", image: "https://i.postimg.cc/ZRv1xNzW/image.png" },
      { name: "Rosa-claro", image: "https://i.postimg.cc/Y2g54Qx5/image.png" },
      { name: "Verde-claro", image: "https://i.postimg.cc/ncJ6qMRB/image.png" },
    ],
  },
  {
    id: "120",
    name: "Caderno Smart Stitch Agenda Inteligente Discos Disney 72 Fls",
    slug: "caderno-smart-stitch-agenda-inteligente-72-fls",
    price: 29.9,
    image: "https://i.postimg.cc/9Mc7Gd7q/image.png",
    images: [
      "https://i.postimg.cc/9Mc7Gd7q/image.png",
      "https://i.postimg.cc/kg86z1Ny/image.png",
      "https://i.postimg.cc/W3pdDsBm/image.png",
      "https://i.postimg.cc/qqSqZyNV/image.png",
      "https://i.postimg.cc/BnWtT5Wc/image.png",
      "https://i.postimg.cc/25G6NP1K/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Disney",
    description: `Caderno Inteligente Stitch, perfeito para organização com estilo.
72 folhas personalizadas e 6 divisórias exclusivas.
Produto original e licenciado Disney.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Papel, Plástico" },
      { label: "Tipo de estilo", value: "Agenda, Temático (Disney), Organização" },
      { label: "Características", value: "72 folhas, 6 divisórias, sistema de discos" },
    ],
    rating: 4.8,
    reviews: 289,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Azul (Stitch)", image: "https://i.postimg.cc/9Mc7Gd7q/image.png" }],
  },
  {
    id: "121",
    name: "Caderno Inteligente - Pandalu Glow By Luluca - Grande",
    slug: "caderno-inteligente-pandalu-glow-luluca-grande",
    price: 49.9,
    image: "https://i.postimg.cc/NMLgqLhn/image.png",
    images: [
      "https://i.postimg.cc/NMLgqLhn/image.png",
      "https://i.postimg.cc/LX7mHR2z/image.png",
      "https://i.postimg.cc/rF5RYZNx/image.png",
      "https://i.postimg.cc/fL6k8Y3K/image.png",
      "https://i.postimg.cc/4NRmtbRd/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Luluca",
    description: `Caderno Inteligente Pandalu Glow By Luluca, tamanho Grande.
Design encantador e exclusivo, unindo funcionalidade e estilo.
Folhas destacáveis e reutilizáveis.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Jovens" },
      { label: "Material", value: "Capa, Papel" },
      { label: "Tipo de estilo", value: "Escolar, Tendência (Luluca), Organização" },
      { label: "Tamanho", value: "Grande" },
    ],
    rating: 4.9,
    reviews: 423,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Rosa-chiclete (Pandalu Glow)", image: "https://i.postimg.cc/NMLgqLhn/image.png" }],
  },
  {
    id: "122",
    name: "Caderno Inteligente Grande Hello Kitty Cor Rosa",
    slug: "caderno-inteligente-grande-hello-kitty-rosa",
    price: 49.9,
    image: "https://i.postimg.cc/k5H55Wym/image.png",
    images: [
      "https://i.postimg.cc/k5H55Wym/image.png",
      "https://i.postimg.cc/4dhxHn8q/image.png",
      "https://i.postimg.cc/BZHvqLPJ/image.png",
      "https://i.postimg.cc/L6V61cT6/image.png",
      "https://i.postimg.cc/8cSNF4fJ/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Jandaia",
    description: `Caderno Inteligente em parceria com Jandaia, com o tema Hello Kitty.
Sistema de discos inovador, permitindo remover e reposicionar as folhas.
Ideal para organização personalizada.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Jovens" },
      { label: "Material", value: "Capa dura, Papel" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Hello Kitty), Organização" },
      { label: "Tamanho", value: "Grande" },
    ],
    rating: 4.9,
    reviews: 367,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Rosa (Hello Kitty)", image: "https://i.postimg.cc/k5H55Wym/image.png" }],
  },
  {
    id: "123",
    name: "Caderno Inteligente Corinthians Fiel Preto Grande",
    slug: "caderno-inteligente-corinthians-fiel-preto-grande",
    price: 49.9,
    image: "https://i.postimg.cc/3JyHZW25/image.png",
    images: [
      "https://i.postimg.cc/3JyHZW25/image.png",
      "https://i.postimg.cc/rpTXcJ3w/image.png",
      "https://i.postimg.cc/d1Wz2K18/image.png",
      "https://i.postimg.cc/c4tVn2Nx/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Corinthians",
    description: `Caderno Inteligente Corinthians para o torcedor Fiel.
Capa exclusiva nas cores características do time.
Edição especial com selo, folha de adesivos e folha exclusiva com a evolução dos escudos.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Capa, Papel" },
      { label: "Tipo de estilo", value: "Temático (Futebol), Universitário, Escolar" },
      { label: "Tamanho", value: "Grande" },
    ],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Preto e Branco (Corinthians)", image: "https://i.postimg.cc/3JyHZW25/image.png" }],
  },
  {
    id: "124",
    name: "Caderno Inteligente Grande Santos Cor Branco",
    slug: "caderno-inteligente-grande-santos-branco",
    price: 49.9,
    image: "https://i.postimg.cc/1RBzdgg9/image.png",
    images: [
      "https://i.postimg.cc/1RBzdgg9/image.png",
      "https://i.postimg.cc/wTP9KD99/image.png",
      "https://i.postimg.cc/1z1PXPnX/image.png",
      "https://i.postimg.cc/vBQs7ztC/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Santos",
    description: `Caderno do Santos, para torcedores Santistas.
Capa exclusiva nas cores do time e discos pretos com elástico branco.
Produto artesanal, pode apresentar variações leves na tonalidade.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Capa, Papel" },
      { label: "Tipo de estilo", value: "Temático (Futebol), Universitário, Escolar" },
      { label: "Características", value: "Sistema de discos" },
    ],
    rating: 4.7,
    reviews: 198,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Branco e Preto (Santos)", image: "https://i.postimg.cc/1RBzdgg9/image.png" }],
  },
  {
    id: "125",
    name: "Caderno Inteligente Palmeiras Verdão Grande",
    slug: "caderno-inteligente-palmeiras-verdao-grande",
    price: 49.9,
    image: "https://i.postimg.cc/Y0HmzTs9/image.png",
    images: [
      "https://i.postimg.cc/Y0HmzTs9/image.png",
      "https://i.postimg.cc/gcHwPS7h/image.png",
      "https://i.postimg.cc/0ybrD8y5/image.png",
      "https://i.postimg.cc/76yLF0MZ/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "Palmeiras",
    description: `Caderno OFICIAL PALMEIRAS, para torcedores do Verdão.
Solução premium em anotações, estudos e escrita.
Cores Verde e Branca, criado exclusivamente para a torcida alviverde.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Capa, Papel" },
      { label: "Tipo de estilo", value: "Temático (Futebol), Universitário, Escolar" },
      { label: "Tamanho", value: "Grande" },
    ],
    rating: 4.8,
    reviews: 245,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Verde e Branco (Palmeiras)", image: "https://i.postimg.cc/Y0HmzTs9/image.png" }],
  },
  {
    id: "126",
    name: "Caderno Inteligente São Paulo Tricolor De Disco",
    slug: "caderno-inteligente-sao-paulo-tricolor-disco",
    price: 49.9,
    image: "https://i.postimg.cc/0Nn3vq7c/image.png",
    images: [
      "https://i.postimg.cc/0Nn3vq7c/image.png",
      "https://i.postimg.cc/rs0Y507L/image.png",
      "https://i.postimg.cc/zGr8X8Ht/image.png",
    ],
    category: "Cadernos",
    categorySlug: "cadernos",
    brand: "São Paulo",
    description: `Caderno Inteligente São Paulo Soberano, perfeito para os torcedores do tricolor paulista.
Capa exclusiva nas cores do time e discos pretos com elástico branco.
Produto artesanal, pode apresentar variações leves na tonalidade.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Capa, Papel" },
      { label: "Tipo de estilo", value: "Temático (Futebol), Universitário, Escolar" },
      { label: "Características", value: "Sistema de discos" },
    ],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Tricolor (São Paulo)", image: "https://i.postimg.cc/0Nn3vq7c/image.png" }],
  },
  {
    id: "127",
    name: "Marca Texto 15 Cores Chanfrado Com Suporte Kaz Kz6018",
    slug: "marca-texto-15-cores-chanfrado-suporte-kaz",
    price: 29.9,
    image: "https://i.postimg.cc/WzGY9Lp6/image.png",
    images: ["https://i.postimg.cc/WzGY9Lp6/image.png", "https://i.postimg.cc/Z5KsLMGr/image.png"],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Kaz",
    description: `Kit Marca Texto KAZ com 15 cores vibrantes.
Tinta à base de água de alta qualidade.
Ponta chanfrada para traço de 2 mm.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Resina (corpo)" },
      { label: "Tipo de estilo", value: "Escolar, Escritório, Artístico" },
      { label: "Características", value: "Inclui estojo e suporte" },
      { label: "Cores", value: "15 cores (9 fluo e 6 pasteis)" },
    ],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Kit com 15 Cores", image: "https://i.postimg.cc/WzGY9Lp6/image.png" }],
  },
  {
    id: "128",
    name: "18 Mini Canetas Marca Texto Fofo Fofinhos Carinhas Lindas",
    slug: "18-mini-canetas-marca-texto-fofinhos-carinhas",
    price: 29.9,
    image: "https://i.postimg.cc/d3Y4ZHR0/image.png",
    images: [
      "https://i.postimg.cc/d3Y4ZHR0/image.png",
      "https://i.postimg.cc/8z5wvrvv/image.png",
      "https://i.postimg.cc/qvScCD0F/image.png",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "EscolaShop",
    description: `Kit com 18 mini canetas marca texto com carinhas fofas.
Ideal para dar um toque divertido e colorido aos estudos.
Produto colecionável.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Jovens" },
      { label: "Material", value: "Plástico" },
      { label: "Tipo de estilo", value: "Escolar, Kawaii, Colecionável" },
      { label: "Quantidade", value: "18 unidades" },
    ],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Kit com 18 Mini Canetas", image: "https://i.postimg.cc/d3Y4ZHR0/image.png" }],
  },
  {
    id: "129",
    name: "Make Fofura Marcador Colorido Mini Coelho 6 Unidades",
    slug: "make-fofura-marcador-mini-coelho-6-unidades",
    price: 29.9,
    image: "https://i.postimg.cc/mDbPc7cp/image.png",
    images: [
      "https://i.postimg.cc/mDbPc7cp/image.png",
      "https://i.postimg.cc/Y2Dv9Gts/image.png",
      "https://i.postimg.cc/MHnKR5zN/image.png",
      "https://i.postimg.cc/BbP4tvgt/image.png",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Make Fofura",
    description: `Kit Conjunto de 6 Marcadores Textos de coelhinho Coloridos.
Marcadores em cores vibrantes, ideais para destacar informações.
Experiência visual e funcional para organização.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Jovens" },
      { label: "Material", value: "Plástico" },
      { label: "Tipo de estilo", value: "Escolar, Kawaii, Organização" },
      { label: "Conteúdo", value: "6 unidades" },
    ],
    rating: 4.7,
    reviews: 178,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Kit com 6 Cores", image: "https://i.postimg.cc/mDbPc7cp/image.png" }],
  },
  {
    id: "131",
    name: "Kit Canetas Fofas 15 Uni Modelos Diferentes Em Gel Kawaii",
    slug: "kit-canetas-fofas-15-uni-modelos-gel-kawaii",
    price: 29.9,
    image: "https://i.postimg.cc/3NkmR2VR/image.png",
    images: [
      "https://i.postimg.cc/3NkmR2VR/image.png",
      "https://i.postimg.cc/mDDFXQbn/image.png",
      "https://i.postimg.cc/3rznGwBj/image.png",
      "https://i.postimg.cc/jdzQJ4Ch/image.png",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "EscolaShop",
    description: `Kit com 15 canetas em gel com modelos diferentes (Kawaii).
Tinta preta ou cores vibrantes.
Dá um toque de estilo, personalidade e alegria à rotina de escrita.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Jovens" },
      { label: "Material", value: "Plástico, Tinta Gel" },
      { label: "Tipo de estilo", value: "Escolar, Kawaii, Lettering" },
    ],
    rating: 4.8,
    reviews: 267,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Kit com 15 Modelos/Cores", image: "https://i.postimg.cc/3NkmR2VR/image.png" }],
  },
  {
    id: "132",
    name: "Kit 3 Canetas Apagáveis Capivara Filó Papelaria Fofa Kawaii",
    slug: "kit-3-canetas-apagaveis-capivara-filo-kawaii",
    price: 12.9,
    image: "https://i.postimg.cc/90yTZcXH/image.png",
    images: [
      "https://i.postimg.cc/90yTZcXH/image.png",
      "https://i.postimg.cc/SNpcqYVm/image.png",
      "https://i.postimg.cc/2SkvLpsr/image.png",
    ],
    category: "Lápis e Canetas",
    categorySlug: "lapis-canetas",
    brand: "Filó",
    description: `Kit de Canetas Apagáveis Capivara Filó.
Ponta 0,5 mm para escrita suave e precisa.
Tinta azul em gel apagável, permitindo correções sem deixar marcas.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Jovens" },
      { label: "Material", value: "Plástico, Tinta Gel Apagável" },
      { label: "Tipo de estilo", value: "Escolar, Kawaii, Funcional" },
      { label: "Ponta", value: "0.5mm" },
    ],
    rating: 4.7,
    reviews: 145,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Kit com 3 Canetas", image: "https://i.postimg.cc/90yTZcXH/image.png" }],
  },
  {
    id: "133",
    name: "40 Blocos Recados Cole Fácil Neon 38x50mm 100 Folhas",
    slug: "40-blocos-recados-cole-facil-neon-38x50mm",
    price: 29.9,
    image: "https://i.postimg.cc/k58nnGTm/image.png",
    images: ["https://i.postimg.cc/k58nnGTm/image.png", "https://i.postimg.cc/dQnJQzjy/image.png"],
    category: "Acessórios",
    categorySlug: "acessorios",
    brand: "Cole Fácil",
    description: `Kit com 40 blocos de recados adesivos Cole Fácil Neon.
Cada bloco contém 100 folhas.
Ideal para anotações, lembretes e organização.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Papel Adesivo" },
      { label: "Tipo de estilo", value: "Escritório, Escolar, Organização" },
      { label: "Dimensões", value: "38mm x 50mm" },
    ],
    rating: 4.6,
    reviews: 112,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Cores Neon (Rosa, Azul, Laranja, Amarelo)", image: "https://i.postimg.cc/k58nnGTm/image.png" },
    ],
  },
  {
    id: "134",
    name: "Bloco Adesivo Colorido 76x76mm 500 Folhas",
    slug: "bloco-adesivo-colorido-76x76mm-500-folhas",
    price: 14.9,
    image: "https://i.postimg.cc/QN6rZcj7/image.png",
    images: ["https://i.postimg.cc/QN6rZcj7/image.png", "https://i.postimg.cc/wv0nHdYp/image.png"],
    category: "Acessórios",
    categorySlug: "acessorios",
    brand: "EscolaShop",
    description: `Bloco adesivo colorido com 500 folhas.
As folhas aderem bem a qualquer superfície e não deixam resíduos.
Ferramenta essencial para organizar tarefas e compromissos.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Papel Adesivo" },
      { label: "Tipo de estilo", value: "Escritório, Escolar, Organização" },
      { label: "Dimensões", value: "76mm x 76mm" },
    ],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [{ name: "Cores Sortidas", image: "https://i.postimg.cc/QN6rZcj7/image.png" }],
  },
  {
    id: "135",
    name: "Grampeador Stitch De Mesa Hello Kitty Disney Papelaria Fofa",
    slug: "grampeador-stitch-mesa-hello-kitty-disney",
    price: 24.9,
    image: "https://i.postimg.cc/fW6QbD0N/image.png",
    images: ["https://i.postimg.cc/fW6QbD0N/image.png", "https://i.postimg.cc/wBWSYppq/image.png"],
    category: "Acessórios",
    categorySlug: "acessorios",
    brand: "Disney",
    description: `Grampeador de mesa compacto, divertido e super funcional.
Perfeito para estudos, escritório e organização.
Une praticidade com um toque de charme temático (Stitch/Hello Kitty).`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Plástico, Metal" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Stitch/Hello Kitty)" },
      { label: "Características", value: "Grampeador de mesa" },
    ],
    rating: 4.8,
    reviews: 203,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Stitch / Hello Kitty", image: "https://i.postimg.cc/fW6QbD0N/image.png" }],
  },
  {
    id: "136",
    name: "Kit Tesoura+Grampeador Infantil Escolar S/ Ponta Hello Kitty",
    slug: "kit-tesoura-grampeador-infantil-hello-kitty",
    price: 16.9,
    image: "https://i.postimg.cc/gJXB9LsL/image.png",
    images: [
      "https://i.postimg.cc/gJXB9LsL/image.png",
      "https://i.postimg.cc/0ykWkBZS/image.png",
      "https://i.postimg.cc/gc3NvWTr/image.png",
      "https://i.postimg.cc/G3Px4j4D/image.png",
      "https://i.postimg.cc/RF5wF393/image.png",
    ],
    category: "Acessórios",
    categorySlug: "acessorios",
    brand: "Hello Kitty",
    description: `Kit Tesoura e Grampeador Infantil Escolar com tema Hello Kitty.
Tesoura sem ponta, segura para crianças.
Ideal para dar um toque especial no momento de estudos.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Crianças" },
      { label: "Material", value: "Plástico, Metal" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Hello Kitty)" },
      { label: "Características", value: "Tesoura sem ponta" },
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Rosa", image: "https://i.postimg.cc/0ykWkBZS/image.png" },
      { name: "Azul", image: "https://i.postimg.cc/gc3NvWTr/image.png" },
      { name: "Roxo", image: "https://i.postimg.cc/G3Px4j4D/image.png" },
      { name: "Amarelo", image: "https://i.postimg.cc/RF5wF393/image.png" },
    ],
  },
  {
    id: "137",
    name: "Tesoura Escolar Stitch Infantil Com Protetor - Molin",
    slug: "tesoura-escolar-stitch-infantil-protetor-molin",
    price: 14.9,
    image: "https://i.postimg.cc/15nRWvDD/image.png",
    images: [
      "https://i.postimg.cc/15nRWvDD/image.png",
      "https://i.postimg.cc/RVNhkSxW/image.png",
      "https://i.postimg.cc/XJsNPh2K/image.png",
    ],
    category: "Acessórios",
    categorySlug: "acessorios",
    brand: "Molin",
    description: `Tesoura escolar infantil com protetor para as lâminas.
Tema Stitch, fofo e cativante.
Lâminas resistentes em aço inoxidável, com bordas arredondadas.`,
    specifications: [
      { label: "Gênero", value: "Unissex" },
      { label: "Material", value: "Aço Inoxidável, Polipropileno (cabo)" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Disney)" },
      { label: "Dimensões", value: "13,5 cm de comprimento" },
    ],
    rating: 4.6,
    reviews: 134,
    inStock: true,
    isBestSeller: false,
    isOnSale: false,
    colorVariants: [
      { name: "Azul-celeste", image: "https://i.postimg.cc/RVNhkSxW/image.png" },
      { name: "Rosa", image: "https://i.postimg.cc/XJsNPh2K/image.png" },
    ],
  },
  {
    id: "138",
    name: "Kit 7 Unidades Escolar Infantil Hello Kitty Leo&leo",
    slug: "kit-7-unidades-escolar-infantil-hello-kitty-leoleo",
    price: 24.9,
    image: "https://i.postimg.cc/BQHbShtJ/image.png",
    images: ["https://i.postimg.cc/BQHbShtJ/image.png", "https://i.postimg.cc/vTWysNhp/image.png"],
    category: "Acessórios",
    categorySlug: "acessorios",
    brand: "Leonora",
    description: `Kit Escolar Lápis de Cor 12 Cores Hello Kitty da marca Leonora.
Ideal para estimular a criatividade e a imaginação.
Conjunto completo de materiais necessários para atividades escolares.`,
    specifications: [
      { label: "Gênero", value: "Mulheres/Meninas/Crianças" },
      { label: "Material", value: "Diversos" },
      { label: "Tipo de estilo", value: "Escolar, Temático (Hello Kitty)" },
      {
        label: "Conteúdo",
        value:
          "12 lápis de cor, 2 lápis grafite HB nº2, 1 apontador com depósito, 1 borracha, 1 cola em bastão, 1 tesoura",
      },
    ],
    rating: 4.9,
    reviews: 287,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [{ name: "Kit Único (Hello Kitty)", image: "https://i.postimg.cc/BQHbShtJ/image.png" }],
  },
  {
    id: "139",
    name: "Kit Mochila Personalizado Batman",
    slug: "kit-mochila-personalizado-batman",
    price: 79.9,
    image: "https://i.postimg.cc/c13FnB4J/image.png",
    images: [
      "https://i.postimg.cc/c13FnB4J/image.png",
      "https://i.postimg.cc/wTVcXfK3/image.png",
      "https://i.postimg.cc/HLJwCTrj/image.png",
      "https://i.postimg.cc/tJbWPP2h/image.png",
      "https://i.postimg.cc/Kj5L5zWG/image.png",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "EscolaShop",
    description: `Kit completo e personalizado do Batman, ideal para crianças que buscam aventura e organização. O conjunto inclui uma mochila de carrinho tamanho G, espaçosa e resistente, acompanhada de uma lancheira térmica com alça de mão e um estojo de abas funcional. O diferencial deste kit são os 3 chaveiros exclusivos (símbolo, nome bordado e boneco) e a possibilidade de personalização com nome bordado em duas peças.`,
    specifications: [
      { label: "Gênero", value: "Masculino/Infantil" },
      { label: "Material", value: "Poliéster resistente e componentes de alta qualidade" },
      {
        label: "Tipo de Estilo",
        value: "Kit Escolar Personalizado (Mochila de Rodinhas G, Lancheira Térmica e Estojo)",
      },
      { label: "Fechamento", value: "Zíper reforçado" },
      { label: "Estilo", value: "Aventura, Heróis e Escolar" },
      { label: "Cenários", value: "Uso escolar diário e viagens" },
      { label: "Diferenciais", value: "Inclui 3 chaveiros exclusivos e personalização com nome bordado" },
      { label: "Alça", value: "Sistema de rodinhas resistente e alça de mão na lancheira" },
    ],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
  },
  {
    id: "140",
    name: "Mochila Rodas e Lancheira + Estojo 100 Lápis Metalizado Emilly Vick",
    slug: "mochila-rodas-lancheira-estojo-metalizado-emilly-vick",
    price: 79.9,
    image: "https://i.postimg.cc/wvjP98Qz/image.png",
    images: [
      "https://i.postimg.cc/wvjP98Qz/image.png",
      "https://i.postimg.cc/9XSSHk4B/image.png",
      "https://i.postimg.cc/tgXvzQfx/image.png",
      "https://i.postimg.cc/gJjMfyGw/image.png",
      "https://i.postimg.cc/qgVjh9yM/image.png",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "Emilly Vick",
    description: `O conjunto é fabricado em Nylon metalizado de alta durabilidade, conferindo um aspecto moderno e resistente. A mochila e seus acessórios possuem compartimentos otimizados para o transporte organizado de cadernos, agendas, tablets e itens pessoais. O design é enriquecido com logo e puxadores em metal, além de um zíper tratorado colorido. A lancheira conta com forro térmico interno para preservação da temperatura dos alimentos.`,
    specifications: [
      { label: "Gênero", value: "Feminino (Mulheres/Meninas/Jovens/Crianças)" },
      { label: "Material", value: "Nylon Metalizado de alta qualidade" },
      { label: "Tipo de Estilo", value: "Kit Escolar (Mochila de Rodinhas, Lancheira e Estojo)" },
      { label: "Fechamento", value: "Zíper tratorado reforçado" },
      { label: "Estilo", value: "Fashion, tendência escolar e uso diário" },
      { label: "Cenários", value: "Estudo, lazer, compras e viagens" },
      { label: "Dimensões (Lancheira)", value: "22 cm (L) x 20 cm (A) x 18 cm (P)" },
      { label: "Peso Estimado", value: "0,80 kg para o kit completo" },
      { label: "Alça", value: "Alça ajustável com design listrado" },
    ],
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
  },
  {
    id: "141",
    name: "Kit Mochila Escolar Rodinha Homem Aranha PVC 3D",
    slug: "kit-mochila-escolar-rodinha-homem-aranha-pvc-3d",
    price: 79.9,
    image: "https://i.postimg.cc/g0VDQMC1/image.png",
    images: [
      "https://i.postimg.cc/g0VDQMC1/image.png",
      "https://i.postimg.cc/ZRjLKWKG/image.png",
      "https://i.postimg.cc/Ls3tNJP0/image.png",
      "https://i.postimg.cc/3NVmdmMd/image.png",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "EscolaShop",
    description: `Desenvolvido com material de alta resistência (composição de 80% Poliéster e 20% PVC), este kit é ideal para a rotina escolar intensa. A mochila apresenta um compartimento principal amplo para materiais de grande porte e bolsos laterais para hidratação. O destaque visual fica por conta da frente em PVC transparente com efeito 3D em alto relevo. A lancheira é totalmente térmica e possui sistema de acoplamento na mochila.`,
    specifications: [
      { label: "Gênero", value: "Masculino (Meninos/Crianças/Jovens)" },
      { label: "Material", value: "Poliéster e PVC resistente" },
      { label: "Tipo de Estilo", value: "Kit Escolar Completo (Rodinhas, Lancheira e Estojo Duplo)" },
      { label: "Fechamento", value: "Zíper com puxadores temáticos personalizados" },
      { label: "Estilo", value: "Aventura e escolar" },
      { label: "Cenários", value: "Uso escolar diário e viagens curtas" },
      { label: "Dimensões (Mochila)", value: "28 cm (L) x 40 cm (A) x 12 cm (P)" },
      { label: "Peso Estimado", value: "0,75 kg para o kit completo" },
      { label: "Alça", value: "Costas acolchoadas e ajustáveis; alça de mão superior reforçada" },
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Azul", image: "https://i.postimg.cc/g0VDQMC1/image.png" },
      { name: "Vermelho", image: "https://i.postimg.cc/ZRjLKWKG/image.png" },
    ],
  },
  {
    id: "142",
    name: "Kit Mochila Rodinhas Stitch Angel Pelúciado Apliques em 3D",
    slug: "kit-mochila-rodinhas-stitch-angel-peluciado-3d",
    price: 79.9,
    image: "https://i.postimg.cc/CL085jQ6/image.png",
    images: [
      "https://i.postimg.cc/CL085jQ6/image.png",
      "https://i.postimg.cc/QMF9wSFD/image.png",
      "https://i.postimg.cc/pVf9wmL8/image.png",
      "https://i.postimg.cc/2S6VLTFJ/image.png",
      "https://i.postimg.cc/kGsgBt2h/image.png",
    ],
    category: "Mochilas",
    categorySlug: "mochilas",
    brand: "Disney",
    description: `Este kit combina funcionalidade com um design encantador em material pelúciado e apliques 3D. É um produto impermeável e highly resistente, garantindo a proteção total dos materiais escolares. A mochila possui excelente espaço interno e bolsos laterais de fácil acesso. Acompanha lancheira térmica coordenada para manter a organização e temperatura dos alimentos durante o período escolar.`,
    specifications: [
      { label: "Gênero", value: "Feminino/Unissex (Meninas/Jovens/Crianças)" },
      { label: "Material", value: "Poliéster com acabamento em Pelúcia" },
      { label: "Tipo de Estilo", value: "Kit Escolar Premium (Rodinhas, Lancheira e Estojo)" },
      { label: "Fechamento", value: "Zíper de alta qualidade" },
      { label: "Estilo", value: "Casual, fofo e escolar" },
      { label: "Cenários", value: "Estudo, lazer e passeios" },
      { label: "Dimensões", value: "Tamanho padrão escolar (Aproximadamente 40 cm de altura)" },
      { label: "Peso Estimado", value: "0,85 kg para o kit completo" },
      { label: "Alça", value: "Sistema de rodinhas reforçado e alça de mão superior" },
    ],
    rating: 4.9,
    reviews: 267,
    inStock: true,
    isBestSeller: true,
    isOnSale: false,
    colorVariants: [
      { name: "Stitch Azul", image: "https://i.postimg.cc/QMF9wSFD/image.png" },
      { name: "Angel Rosa", image: "https://i.postimg.cc/2S6VLTFJ/image.png" },
    ],
  },
]

export function getAllProducts() {
  return products
}

export function getBestSellers() {
  return products.filter((product) => product.isBestSeller === true)
}

export function getOnSaleProducts() {
  return products.filter((product) => product.isOnSale === true)
}

export function searchProducts(query: string) {
  const lowerQuery = query.toLowerCase()
  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.brand.toLowerCase().includes(lowerQuery)
    )
  })
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
