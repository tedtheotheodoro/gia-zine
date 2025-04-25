import React from 'react';
import ZinePage from '../components/ZinePage';
import AudioPlayer from '../components/AudioPlayer';
import giaImage from '../assets/images/gia-collage-1.jpg';
import ZineNavigation from '../components/ZineNavigation';

const introAudio = "/assets/audio/i-am-i-said.mp3";

const Origem = ({ language }) => {
  const title = language === 'pt'
    ? "Bloco 1: Origem & Ascensão"
    : "Block 1: Origins & Rise";

  const textPT = `
<strong>A gênese de Gia: raízes de deslocamento</strong><br><br>
Gia Marie Carangi nasceu em 29 de janeiro de 1960, na Filadélfia, Pensilvânia — cidade industrial, carregada de tensões raciais e econômicas. Filha de uma família ítalo-americana, Gia cresceu entre dois mundos: um lar culturalmente vibrante, mas emocionalmente instável.[1]<br><br>

Seu pai, Joseph Carangi, era dono de uma lanchonete e vinha de uma linhagem de imigrantes italianos — descendentes de Giovanni Carangi, que migrara de Castel Pizzuto, Molise, no início do século XX.[2]<br><br>

Gia cresceu tomboy: jogava futebol com meninos, usava roupas largas, tinha um carisma magnético que desafiava as categorias.<br><br>

<strong>Mediterrânea dourada: entre pertencimento e alienação</strong><br><br>
Fisicamente, Gia já carregava em si a ambiguidade racializada que a tornaria icônica: pele dourada, cabelos escuros e espessos, feições que evocavam o "mediterrâneo genérico" explorado pela moda — misto de exótico e familiar, sexual e inatingível.<br><br>

A moda não soube de onde ela veio. Mas soube imediatamente que queria fazer dela um símbolo.
`;

  const textEN = `
<strong>Gia’s Genesis: roots of displacement</strong><br><br>
Gia Marie Carangi was born on January 29, 1960, in Philadelphia, Pennsylvania — an industrial city marked by racial and economic tensions. The daughter of an Italian-American family, Gia grew up between two worlds: a culturally vibrant home, but emotionally unstable.[1]<br><br>

Her father, Joseph Carangi, owned a sandwich shop and came from a lineage of Italian immigrants — descendants of Giovanni Carangi, who migrated from Castel Pizzuto, Molise, in the early 20th century.[2]<br><br>

Gia grew up a tomboy: she played football with boys, wore baggy clothes, and had a magnetic charisma that defied categories.<br><br>

<strong>Golden Mediterranean: between belonging and alienation</strong><br><br>
Physically, Gia already embodied the racialized ambiguity that would make her iconic: golden skin, thick dark hair, and features that evoked the fashion world's "generic Mediterranean" — exotic yet familiar, sexual yet untouchable.<br><br>

Fashion didn’t know where she came from. But it knew, instantly, that it wanted to make her a symbol.
`;

  const text = language === 'pt' ? textPT : textEN;

  const referencesPT = [
    "Fried, Stephen. Thing of Beauty: A Tragédia da Supermodelo Gia. Pocket Books, 1993.",
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Sedgwick, Eve Kosofsky. Epistemologia do Armário. University of California Press, 1990.",
    "Roediger, David. Trabalhando para Ser Branco. Basic Books, 2005."
  ];

  const referencesEN = [
    "Fried, Stephen. Thing of Beauty: The Tragedy of Supermodel Gia. Pocket Books, 1993.",
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Sedgwick, Eve Kosofsky. Epistemology of the Closet. University of California Press, 1990.",
    "Roediger, David. Working Toward Whiteness. Basic Books, 2005."
  ];

  return (
    <>
      <AudioPlayer src={introAudio} />
      <ZinePage
        title={title}
        text={text}
        image={giaImage}
        references={language === 'pt' ? referencesPT : referencesEN}
      />
    </>
  );
};

export default Origem;
