import React from 'react';
import ZinePage from '../components/ZinePage';
import AudioPlayer from '../components/AudioPlayer';
import giaImage from '../assets/images/gia-collage-5.jpg';
import ZineNavigation from '../components/ZineNavigation';


const outroAudio = "/assets/audio/i-am-i-said.mp3"; // ou qualquer ambient final

const Ressurgencia = ({ language }) => {
  const title = language === 'pt'
    ? "Bloco 5: Pós-morte & Ressurgência"
    : "Block 5: Afterdeath & Resurgence";

  const textPT = `
<strong>Culto, não memória</strong><br><br>
Gia morreu aos 26 anos. Mas sua imagem nunca foi enterrada. Ela segue pinada no Pinterest, colada em Tumblr de estética y2k, usada como referência por marcas que nunca dizem seu nome.<br><br>

Ela virou um <em>ícone visual sem contexto</em>. Um rosto para transmitir “vibe decadente-chique”. Mas sua história? Ainda é marginal, contada por fãs, não pela indústria.<br><br>

<strong>O filme que esvaziou</strong><br><br>
Gia (1998), com Angelina Jolie, trouxe atenção — mas também apagou. Romantizou o vício, simplificou a sexualidade, tirou complexidade e deixou só o drama.  
A AIDS? Um sussurro. A crítica? Nenhuma.<br><br>

Gia virou fetiche trágico. E não discurso.<br><br>

<blockquote>“Eles a transformaram em um moodboard.”</blockquote>
<small>— Revista Dazed & Confused (2015)</small><br><br>

<strong>O que sobrevive?</strong><br><br>
Hoje, a imagem da Gia é remixada por artistas queer, reaparecendo em colagens digitais, vídeos low-res, posts que dizem: “She walked so we could run.”<br><br>

Ela virou ícone de um tipo muito específico de resistência: a beleza que não pede aprovação.<br><br>

<em>Ela é um corpo queer que a moda tentou apagar — e o underground recusou deixar morrer.</em><br><br>

<strong>Gia não precisa de altar.</strong>  
Gia precisa ser lembrada como uma cicatriz aberta, não como uma musa inofensiva.

<br><br><blockquote><strong>Ela não sobreviveu. Mas também não desapareceu.</strong></blockquote>
`;

  const textEN = `
<strong>Cult, not memory</strong><br><br>
Gia died at 26. But her image was never buried. She’s still pinned on Pinterest, pasted into Y2K Tumblr aesthetics, used as reference by brands that never say her name.<br><br>

She became a <em>visual icon without context</em>. A face to signal “decadent-chic vibe.” But her story? Still marginal, told by fans — not by the industry.<br><br>

<strong>The film that hollowed</strong><br><br>
Gia (1998), starring Angelina Jolie, brought attention — but also erasure. It romanticized addiction, simplified sexuality, stripped away complexity and left only drama.  
AIDS? A whisper. Critique? Absent.<br><br>

Gia became tragic fetish. Not discourse.<br><br>

<blockquote>“They turned her into a moodboard.”</blockquote>
<small>— Dazed & Confused Magazine (2015)</small><br><br>

<strong>What survives?</strong><br><br>
Today, Gia’s image is remixed by queer artists, reappearing in digital collages, low-res videos, and posts that say: “She walked so we could run.”<br><br>

She became an icon of a very specific kind of resistance: beauty that doesn’t seek approval.<br><br>

<em>She is a queer body fashion tried to erase — and the underground refused to let die.</em><br><br>

<strong>Gia doesn’t need an altar.</strong>  
Gia must be remembered as an open wound, not a harmless muse.

<br><br><blockquote><strong>She didn’t survive. But she didn’t disappear either.</strong></blockquote>
`;

  const text = language === 'pt' ? textPT : textEN;

  return (
    <>
      <AudioPlayer src={outroAudio} />
      <ZinePage title={title} text={text} image={giaImage} />
      <ZineNavigation language={language} />   </>
  );
};

export default Ressurgencia;
