/* Além dos Estereótipos: script comum a todas as páginas.
   Cada bloco só roda se a página tiver o elemento correspondente. */

const PAGINA = document.body.dataset.pagina;
const $ = (id) => document.getElementById(id);
const el = (tag, cls, txt) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
};

/* ================================================================
   DADOS — edite aqui
   ================================================================ */

/* Propostas do grupo (fictícias). "pagina" diz onde cada uma aparece. */
const PROJETOS = [
    { pagina: 'ods5', titulo: 'Liderança sem Rótulos', meta: 'Meta 5.5 · Participação e liderança',
      resumo: 'Formação em oratória, negociação e letramento em gênero para mulheres de bairros periféricos, incluindo mulheres trans e travestis.',
      metodologia: 'Trilha de 4 meses com oficinas de oratória, negociação e letramento em gênero, além de mentoria com mulheres em cargos de liderança. Parte das vagas é reservada para mulheres trans e travestis.',
      indicadores: 'Participantes que assumem cargos de coordenação ou direção e conselhos comunitários criados.' },
    { pagina: 'ods5', titulo: 'Rede Cuidado Compartilhado', meta: 'Meta 5.4 · Trabalho doméstico e de cuidado não remunerado',
      resumo: 'Rodas de conversa sobre paternidade ativa e um banco de tempo para apoiar mães solo.',
      metodologia: 'Rodas de conversa com homens sobre divisão das tarefas de cuidado, combinadas a um banco de tempo em que vizinhos trocam horas de apoio.',
      indicadores: 'Horas semanais de cuidado por pessoa, antes e depois, e número de famílias na rede de apoio.' },
    { pagina: 'ods10', titulo: 'Clínica Cidadã', meta: 'Meta 10.2 · Inclusão social e econômica',
      resumo: 'Mutirões em bairros periféricos para emitir documentos, renegociar dívidas e orientar pessoas trans sobre a retificação de nome.',
      metodologia: 'Mutirões em associações de bairro, com estudantes de Direito e Economia supervisionados, para emitir documentos, renegociar dívidas, ensinar educação financeira e orientar a mudança de nome e gênero no cartório.',
      indicadores: 'Documentos emitidos, nomes retificados, dívidas renegociadas e famílias atendidas.' },
    { pagina: 'ods10', titulo: 'Elo Local', meta: 'Meta 10.3 · Igualdade de oportunidades',
      resumo: 'Consultoria gratuita e feiras de negócios que aproximam pequenos empreendedores negros e LGBTQIA+ de empresas maiores.',
      metodologia: 'Orientação fiscal gratuita para pequenos negócios e feiras em que empresas maiores conhecem e contratam fornecedores locais, com prioridade para empreendedores negros e LGBTQIA+.',
      indicadores: 'Contratos fechados com fornecedores locais e permanência desses fornecedores após um ano.' }
];

/* Pessoas de referência.
   Para trocar uma foto: ponha o arquivo na pasta "img" (nome curto, minúsculo, sem acento,
   de preferência .jpg leve ou .webp) e ajuste "foto" e "credito".
   Sem foto (ou se o arquivo não existir), aparecem as iniciais. */
const ICONES = [
    { pagina: 'ods5', nome: 'Bertha Lutz', foto: 'imagens/bertha_lutz.jpg', credito: '', papel: 'Bióloga, advogada e líder sufragista',
      texto: 'Liderou a Federação Brasileira pelo Progresso Feminino na luta pelo voto das mulheres, garantido pelo Código Eleitoral de 1932. Em 1945, participou da elaboração da Carta das Nações Unidas; em 2016, a própria ONU reconheceu o papel das latino-americanas lideradas por ela nesse trabalho (SAIBA..., 2023).' },
    { pagina: 'ods5', nome: 'Maria da Penha', foto: 'imagens/maria_penha.jpg', credito: '', papel: 'Farmacêutica bioquímica e ativista',
      texto: 'Em 1983, sobreviveu a duas tentativas de homicídio cometidas pelo marido. Ele foi condenado em 1991 e em 1996, mas continuou em liberdade. Em 2001, a Comissão Interamericana de Direitos Humanos responsabilizou o Brasil pelo caso, e a luta dela deu nome à lei de 2006 (NUNES, 2026).' },
    { pagina: 'ods10', nome: 'Djamila Ribeiro', foto: 'imagens/djamila_ribeiro.jpg', credito: '', papel: 'Filósofa e escritora',
      texto: 'Referência no feminismo negro. Em "O que é lugar de fala?" e "Pequeno manual antirracista", levou o debate sobre racismo e desigualdade a um público amplo (RIBEIRO, 2017; 2019).' },
    { pagina: 'ods10', nome: 'Sônia Guajajara', foto: 'imagens/sonia_guajajara.jpg', credito: '', papel: 'Liderança indígena',
      texto: 'Defende os territórios indígenas e a justiça climática. Foi a primeira ministra dos Povos Indígenas do Brasil.' },
    { pagina: 'lgbt', nome: 'Luiz Mott', foto: 'imagens/luiz_mott.jpg', credito: '', papel: 'Antropólogo',
      texto: 'Professor da Universidade Federal da Bahia, fundou o Grupo Gay da Bahia. Nos anos 1990, encontrou nos registros da Inquisição a história de Xica Manicongo, hoje considerada a primeira travesti conhecida do Brasil (VEIGA, 2025).' },
    { pagina: 'lgbt', nome: 'Bruna Benevides', foto: 'imagens/bruna_benevides.jpg', credito: '', papel: 'Presidenta da ANTRA',
      texto: 'Preside a Associação Nacional de Travestis e Transexuais e é autora do dossiê anual sobre assassinatos de pessoas trans no Brasil (BENEVIDES, 2026).' },
    { pagina: 'lgbt', nome: 'Erika Hilton', foto: 'imagens/erika_hilton.jpg', credito: '', papel: 'Deputada federal',
      texto: 'Em 2020, foi a primeira mulher trans eleita vereadora em São Paulo. Na Câmara dos Deputados, atua contra a violência de gênero, a LGBTfobia e o racismo (CÂMARA..., 2023).' },
    { pagina: 'lgbt', nome: 'Liniker', foto: 'imagens/liniker.jpg', credito: '', papel: 'Cantora e compositora',
      texto: 'Artista premiada com o Grammy Latino, ampliou a visibilidade de pessoas trans na música brasileira.' }
];

/* Mito ou fato, por página. */
const MITOS = {
    ods5: [
        { frase: 'Depois da lei de igualdade salarial de 2023, a diferença entre homens e mulheres acabou.', fato: false,
          explica: 'O dado do título desta página mostra que não: a diferença é maior hoje do que era em 2023. A lei trouxe transparência, mas ainda não igualdade (BRASIL, 2026).' },
        { frase: 'A diferença salarial entre homens e mulheres é igual em todos os estados.', fato: false,
          explica: 'Varia bastante. Espírito Santo, Rio de Janeiro e Paraná têm as maiores diferenças (a remuneração das mulheres fica em torno de 71% da dos homens), enquanto Acre, Piauí e Distrito Federal têm as menores (BRASIL, 2026).' },
        { frase: 'Empresas de grande porte precisam divulgar relatórios sobre os salários de mulheres e homens.', fato: true,
          explica: 'A Lei nº 14.611/2023 criou o Relatório de Transparência Salarial, que abrange as empresas com 100 ou mais empregados e é a base dos dados desta página (BRASIL, 2023).' }
    ],
    lgbt: [
        { frase: 'No Brasil, a homofobia e a transfobia não são crime.', fato: false,
          explica: 'Em 2019, o STF decidiu que atos de homofobia e transfobia devem ser punidos pela Lei do Racismo até que o Congresso aprove uma lei específica (BRASIL, 2019).' },
        { frase: 'Casais do mesmo sexo podem se casar no civil em qualquer cartório do país.', fato: true,
          explica: 'Desde 2013, os cartórios não podem recusar esses casamentos, por determinação do Conselho Nacional de Justiça (CONSELHO NACIONAL DE JUSTIÇA, 2013).' },
        { frase: 'Como os assassinatos de pessoas trans caíram em 2025, a violência diminuiu.', fato: false,
          explica: 'As tentativas de homicídio subiram 32% no mesmo ano, e a ANTRA alerta para a subnotificação. O Brasil é, há 18 anos seguidos, o país que mais mata pessoas trans no mundo (BENEVIDES, 2026).' }
    ]
};

/* ================================================================
   MENU DO CELULAR
   Sem JavaScript, o menu aparece aberto. Com JavaScript, vira um botão.
   ================================================================ */
const topo = document.querySelector('.top');
const botaoMenu = document.querySelector('.menu-btn');
if (topo && botaoMenu) {
    topo.classList.add('com-menu');
    botaoMenu.hidden = false;
    botaoMenu.addEventListener('click', () => {
        const aberto = topo.classList.toggle('aberto');
        botaoMenu.setAttribute('aria-expanded', String(aberto));
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && topo.classList.contains('aberto')) {
            topo.classList.remove('aberto');
            botaoMenu.setAttribute('aria-expanded', 'false');
            botaoMenu.focus();
        }
    });
}

/* ================================================================
   COMPONENTES
   ================================================================ */

/* Janela de detalhes (<dialog> nativo) */
const modal = $('modal');
function abrirModal(titulo, sub, paragrafos) {
    $('modal-titulo').textContent = titulo;
    $('modal-sub').textContent = sub;
    $('modal-corpo').replaceChildren(...paragrafos.map(([rotulo, txt]) => {
        const p = el('p');
        if (rotulo) p.append(el('strong', '', rotulo + ' '));
        p.append(txt);
        return p;
    }));
    modal.showModal();
}
if (modal) {
    $('modal-fechar').addEventListener('click', () => modal.close());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
}

/* Propostas */
if ($('lista-propostas')) {
    PROJETOS.filter((p) => p.pagina === PAGINA).forEach((p) => {
        const d = el('div', 'item');
        const b = el('button', 'link', 'Ver metodologia e indicadores');
        b.type = 'button';
        b.addEventListener('click', () => abrirModal(p.titulo, p.meta, [['Metodologia:', p.metodologia], ['Indicadores:', p.indicadores]]));
        d.append(el('small', '', p.meta), el('h3', '', p.titulo), el('p', '', p.resumo), b);
        $('lista-propostas').append(d);
    });
}

/* Pessoas de referência */
if ($('lista-icones')) {
    ICONES.filter((p) => p.pagina === PAGINA).forEach((p) => {
        const art = el('article', 'pessoa');
        const fig = el('figure'), caixa = el('div', 'foto sem'), img = el('img');
        img.alt = `Foto de ${p.nome}`;
        img.onload = () => caixa.classList.remove('sem');
        img.onerror = () => caixa.classList.add('sem');
        if (p.foto) img.src = p.foto;
        caixa.append(el('span', '', p.nome.split(' ').map((n) => n[0]).join('').slice(0, 2)), img);
        fig.append(caixa);
        if (p.credito) fig.append(el('figcaption', '', `Foto: ${p.credito}`));

        const txt = el('div');
        txt.append(el('small', '', p.papel), el('h3', '', p.nome), el('p', '', p.texto));
        art.append(fig, txt);
        $('lista-icones').append(art);
    });
}

/* Mito ou fato */
if ($('lista-mitos') && MITOS[PAGINA]) {
    MITOS[PAGINA].forEach((m) => {
        const card = el('article', 'mito');
        const op = el('div', 'opcoes');
        const resp = el('div', 'resposta');
        resp.setAttribute('aria-live', 'polite');
        [['Mito', false], ['Fato', true]].forEach(([rotulo, valor]) => {
            const b = el('button', '', rotulo);
            b.type = 'button';
            b.addEventListener('click', () => {
                op.querySelectorAll('button').forEach((x) => { x.disabled = true; });
                b.classList.add('escolha');
                const acertou = valor === m.fato;
                resp.replaceChildren(el('strong', '', `${acertou ? 'Você acertou.' : 'Não é bem assim.'} É ${m.fato ? 'fato' : 'mito'}.`), m.explica);
            });
            op.append(b);
        });
        card.append(el('q', '', m.frase), op, resp);
        $('lista-mitos').append(card);
    });
}

/* Calculadora de alcance
   Dados reais (2026): benefício médio do Bolsa Família e salário mínimo.
   Hipóteses do grupo: meses de bolsa e valor da hora voluntária. */
if ($('slider-orcamento')) {
    const BOLSA_FAMILIA_MEDIO = 677.66;   // R$ por família ao mês (jun. 2026)
    const SALARIO_MINIMO = 1621;          // R$ (2026)
    const HORAS_MES = 220;                // jornada mensal de referência
    const MESES_BOLSA_MULHER = 6;         // hipótese
    const MESES_COMPLEMENTO_FAMILIA = 12; // hipótese

    const fmt = (n) => n.toLocaleString('pt-BR');
    const reais = (n) => 'R$ ' + Math.round(n).toLocaleString('pt-BR');
    const atualizar = () => {
        const investimento = +$('slider-orcamento').value;
        const voluntarios = +$('slider-voluntarios').value;
        const horas = +$('slider-horas').value;
        const parteOds5 = +$('slider-divisao').value / 100;

        const voluntariado = voluntarios * horas * 12 * (SALARIO_MINIMO / HORAS_MES);
        const total = investimento + voluntariado;
        const mulheres = (total * parteOds5) / (SALARIO_MINIMO * MESES_BOLSA_MULHER);
        const familias = (total * (1 - parteOds5)) / (BOLSA_FAMILIA_MEDIO * MESES_COMPLEMENTO_FAMILIA);

        $('val-orcamento').textContent = reais(investimento);
        $('val-voluntarios').textContent = fmt(voluntarios);
        $('val-horas').textContent = horas + ' h';
        $('val-divisao').textContent = `${Math.round(parteOds5 * 100)}% ODS 5 · ${Math.round((1 - parteOds5) * 100)}% ODS 10`;
        $('res-mulheres').textContent = fmt(Math.floor(mulheres));
        $('res-familias').textContent = fmt(Math.floor(familias));
        $('res-voluntariado').textContent = reais(voluntariado);
    };
    ['slider-orcamento', 'slider-voluntarios', 'slider-horas', 'slider-divisao']
        .forEach((id) => $(id).addEventListener('input', atualizar));
    atualizar();
}

/* Mural (salvo só neste navegador; texto sempre tratado como texto) */
if ($('form-mural')) {
    const CHAVE = 'mural-ods-mensagens';
    const feed = $('mural-feed');
    let mensagens = [];
    try { mensagens = JSON.parse(localStorage.getItem(CHAVE)) || []; } catch { mensagens = []; }

    const desenhar = () => {
        if (!mensagens.length) {
            feed.replaceChildren(el('p', 'vazio', 'Ainda não há mensagens. Seja a primeira pessoa a escrever.'));
            return;
        }
        feed.replaceChildren(...[...mensagens].reverse().map((m) => {
            const bq = el('blockquote');
            bq.append(el('p', '', m.texto), el('cite', '', m.autor));
            return bq;
        }));
    };
    desenhar();

    $('texto-msg').addEventListener('input', (e) => { $('contador').textContent = `${e.target.value.length}/240`; });
    $('form-mural').addEventListener('submit', (e) => {
        e.preventDefault();
        const autor = $('autor-msg').value.trim();
        const texto = $('texto-msg').value.trim();
        if (!autor || !texto) { $('erro-msg').textContent = 'Preencha o nome e a mensagem.'; return; }
        $('erro-msg').textContent = '';
        mensagens = [...mensagens, { autor, texto }].slice(-30);
        try { localStorage.setItem(CHAVE, JSON.stringify(mensagens)); } catch { /* sem armazenamento */ }
        desenhar();
        e.target.reset();
        $('contador').textContent = '0/240';
    });
}
