# Além dos Estereótipos

## 🖼️ Título do Projeto Integrador
Além dos Estereótipos: igualdade de gênero e redução das desigualdades no Brasil

## 🧠 Objetivo do Projeto
O site tem como objetivo mostrar, com dados oficiais e fontes citadas, como as desigualdades de gênero, raça, renda, orientação sexual e identidade de gênero se somam no Brasil. Ele é baseado em dois Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030 da ONU:

- **ODS 5 – Igualdade de gênero:** alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.
- **ODS 10 – Redução das desigualdades:** reduzir a desigualdade dentro dos países e entre eles.

Além de informar, o site propõe projetos ligados às metas das duas ODS e apresenta pessoas que são referência nessas lutas.

## 👥 Equipe
1. Nome do(a) integrante 1
2. Nome do(a) integrante 2
3. Nome do(a) integrante 3

## 🚀 Como usar o site
1. Abra o arquivo `index.html` no navegador.
2. Use o menu no topo para navegar entre as páginas. No celular, toque no botão **Menu**.
3. Para editar textos, abra o arquivo `.html` da página desejada. O cabeçalho e o rodapé se repetem nas cinco páginas: se mudar um, mude em todas.
4. Para editar propostas, pessoas de referência e perguntas do "Mito ou fato?", abra `js/script.js` e altere as listas `PROJETOS`, `ICONES` e `MITOS`, no início do arquivo.
5. Para colocar fotos das pessoas de referência, salve a imagem na pasta `img/` com o nome já indicado em `js/script.js` (por exemplo, `img/bertha-lutz.jpg`) e preencha o campo `credito`. Enquanto não houver foto, aparecem as iniciais.

> É preciso internet para carregar as fontes (Google Fonts). Sem internet, o site funciona normalmente com as fontes do sistema.

## 🗺️ Páginas do site
| Arquivo | Página | Conteúdo |
|---|---|---|
| `index.html` | Início | Apresentação, por que os temas andam juntos, calculadora de alcance, glossário e mural de mensagens |
| `ods5.html` | ODS 5 | Diferença salarial entre mulheres e homens, marcos legais, mito ou fato, propostas e mulheres de referência |
| `ods10.html` | ODS 10 | Desigualdade racial de renda e trabalho, metas da ODS 10, Estatuto da Igualdade Racial, propostas e pessoas de referência |
| `lgbt.html` | Movimentos LGBTQIA+ | Dados de violência, linha do tempo de conquistas, mito ou fato, pessoas de referência e glossário |
| `referencias.html` | Referências | Lista de todas as fontes citadas, em ordem alfabética, no padrão ABNT |

## 📁 Estrutura do Site
```
alem-dos-estereotipos/
├── index.html
├── ods5.html
├── ods10.html
├── lgbt.html
├── referencias.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo.png
│   ├── icon-menu.svg
│   └── (fotos das pessoas de referência, ex.: bertha-lutz.jpg)
└── docs/
    ├── README.md
    ├── fluxograma-1-navegacao.png
    └── fluxograma-2-interacoes.png
```

## 🔀 Fluxograma
O fluxograma mostra como o visitante navega entre as páginas e como funcionam as interações (quiz, janela das propostas, calculadora e mural).

![Fluxograma de navegação](fluxograma-1-navegacao.png)

![Fluxograma das interações](fluxograma-2-interacoes.png)

## 👩‍💻 Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (sem bibliotecas externas)
- Google Fonts (fontes Fraunces e IBM Plex Sans)

## 📚 Referências e créditos
- As fontes de todos os dados estão na página `referencias.html`, no padrão ABNT (NBR 6023). No texto, as citações aparecem entre parênteses, como (BRASIL, 2023).
- As propostas de projeto e a calculadora de alcance são ilustrativas: foram criadas para este trabalho e usam valores reais de 2026 (benefício médio do Bolsa Família e salário mínimo) com hipóteses do grupo.
- Fotos: preencher o crédito de cada imagem usada (autor e fonte).

## 📄 Licença
Este projeto é de uso livre para fins educacionais.
