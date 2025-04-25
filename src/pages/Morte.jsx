import React from 'react';
import ZinePage from '../components/ZinePage';
import AudioPlayer from '../components/AudioPlayer';
import giaImage from '../assets/images/gia-collage-4.jpg';

const heroesReprise = "/assets/audio/heroes.mp3";

const Morte = ({ language }) => {
  const title = language === 'pt'
    ? "Bloco 4: Vício & Morte como Narrativa Estética"
    : "Block 4: Addiction & Death as Aesthetic Narrative";

  const textPT = `
<strong>A beleza que sangra</strong><br><br>
O vício de Gia em heroína não foi uma nota de rodapé. Foi uma coautoria silenciosa de sua imagem. Ela começou a desaparecer antes mesmo de sair das revistas.<br><br>

Em algumas sessões, seus olhos já estavam distantes. Seus braços eram cobertos. Sua presença era <em>um espectro bonito demais para ser ignorado</em>.<br><br>

<blockquote>"Era como se ela já não estivesse lá. Só um rosto incrível flutuando pela dor."</blockquote>
<small>— Born This Way (Baumann)</small><br><br>

<strong>O romantismo da ruína branca</strong><br><br>
Gia entrou para o panteão das “belas destruídas”: Edie Sedgwick, Amy Winehouse, Jean Seberg. Todas jovens, todas brancas, todas lindas demais para serem cuidadas em vez de celebradas.<br><br>

O colapso virou estética. A morte virou culto.<br><br>

<strong>AIDS: o tabu final</strong><br><br>
Gia morreu em 1986, aos 26 anos, sozinha em um hospital na Filadélfia. A causa? Complicações decorrentes da AIDS — provavelmente contraída por seringas contaminadas.<br><br>

Nenhuma capa. Nenhum desfile em sua homenagem. A primeira supermodelo a morrer de AIDS foi apagada da história da moda como se fosse vergonha.<br><br>

<strong>O corpo em ruína como lucro</strong><br><br>
Enquanto Gia se deteriorava, ainda vendia. Seus olhos fundos, a palidez, a inquietação nas imagens — tudo isso era fetichizado. A mídia quis o colapso como estética, não como denúncia.<br><br>

<blockquote>Ela morreu jovem o suficiente para virar lenda. Mas velha demais para ser salva.</blockquote><br><br>

<strong>A iconografia da decadência</strong><br><br>
Hoje, sua imagem sobrevive. Em filtros no Instagram. Em videoclipes de Lana Del Rey. Em editoriais que imitam a morte com maquiagem.<br><br>

Mas a pergunta permanece: <em>quem lucra com o corpo que não pode mais responder?</em>
`;

  const textEN = `
<strong>The beauty that bleeds</strong><br><br>
Gia's heroin addiction wasn’t a footnote. It was a silent co-author of her image. She started disappearing before she even left the pages of fashion magazines.<br><br>

In some photoshoots, her eyes were already gone. Her arms were hidden. Her presence was <em>a ghost too beautiful to ignore</em>.<br><br>

<blockquote>"It was like she wasn’t there anymore. Just this incredible face floating through pain."</blockquote>
<small>— Born This Way (Baumann)</small><br><br>

<strong>The romanticism of white ruin</strong><br><br>
Gia joined the pantheon of “beautifully destroyed”: Edie Sedgwick, Amy Winehouse, Jean Seberg. All young. All white. All too beautiful to be cared for instead of celebrated.<br><br>

Collapse became aesthetic. Death became cult.<br><br>

<strong>AIDS: the ultimate taboo</strong><br><br>
Gia died in 1986, at 26, alone in a Philadelphia hospital. The cause? Complications from AIDS — likely contracted through contaminated needles.<br><br>

No covers. No tribute shows. The first supermodel to die of AIDS was erased from fashion history as if she were a scandal.<br><br>

<strong>The ruined body as profit</strong><br><br>
Even as Gia decayed, she still sold. Her sunken eyes, her paleness, her restlessness — all were fetishized. The media wanted collapse as aesthetic, not as warning.<br><br>

<blockquote>She died young enough to become legend. But too old to be saved.</blockquote><br><br>

<strong>The iconography of decay</strong><br><br>
Today, her image lives on. In Instagram filters. In Lana Del Rey videos. In fashion editorials that mimic death with makeup.<br><br>

But the question remains: <em>who profits from the body that can no longer respond?</em>
`;

  const text = language === 'pt' ? textPT : textEN;

  const referencesPT = [
    "Fried, Stephen. Thing of Beauty: A Tragédia da Supermodelo Gia. Pocket Books, 1993.",
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Sontag, Susan. Doença como Metáfora. Companhia das Letras, 1984.",
    "Preciado, Paul B. Testo Junkie: Sexo, Drogas e Biopolítica. N-1 Edições, 2018."
  ];

  const referencesEN = [
    "Fried, Stephen. Thing of Beauty: The Tragedy of Supermodel Gia. Pocket Books, 1993.",
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Sontag, Susan. Illness as Metaphor. Farrar, Straus and Giroux, 1978.",
    "Preciado, Paul B. Testo Junkie: Sex, Drugs, and Biopolitics in the Pharmacopornographic Era. Feminist Press, 2013."
  ];

  return (
    <>
      <AudioPlayer src={heroesReprise} />
      <ZinePage
        title={title}
        text={text}
        image={giaImage}
        references={language === 'pt' ? referencesPT : referencesEN}
      />
    </>
  );
};

export default Morte;
