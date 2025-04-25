import React from 'react';
import ZinePage from '../components/ZinePage';
import AudioPlayer from '../components/AudioPlayer';
import giaImage from '../assets/images/gia-collage-2.jpg';
import ZineNavigation from '../components/ZineNavigation';

const atomicAudio = "/assets/audio/atomic.mp3";

const Estetica = ({ language }) => {
  const title = language === 'pt'
    ? "Bloco 2: A Estética Gia"
    : "Block 2: The Gia Aesthetic";

  const textPT = `
<strong>Um rosto fora do molde</strong><br><br>
No final dos anos 70, a moda flertava com a transição: saía do glamour plástico de Beverly Hills e mergulhava no caos elegante de Nova York. Gia não sorria. Ela não posava como se estivesse vendendo uma vida perfeita. Ela <em>olhava de volta</em>, como se dissesse: “não me domestiquem”.<br><br>

<blockquote>"Gia nunca dava à câmera o que ela queria. Ela dava o que ela temia."</blockquote>
<small>— Thing of Beauty</small><br><br>

<strong>Corpo desejado, mas não obediente</strong><br><br>
A força da imagem de Gia vinha da sua <em>disruptividade corporal</em>: androginia sutil, postura informal, olhar de tédio ou desejo não domesticado. Em sessões com <strong>Chris von Wangenheim</strong>, ela posava nua com maquiagem pesada e armas — uma fantasia de decadência e poder que só funcionava <em>porque ela não pedia desculpas</em>.<br><br>

<strong>Roupas como armadura</strong><br><br>
Gia misturava jaquetas largas, jeans rasgado, camisetas de banda — estilo mais próximo de James Dean do que das “American Girls” da época. Antecipava, sem saber, toda uma geração de andróginas de passarela e streetwear.<br><br>

<strong>O corpo impresso e a violência do clique</strong><br><br>
Ela foi moldada por dois extremos:
<ul>
  <li><strong>Wangenheim</strong>: sadismo estético, fantasia erótica, mulher perigosa.</li>
  <li><strong>Scavullo</strong>: suavização romântica, <em>soft-core goddess</em>.</li>
</ul>
Mas Gia, mesmo vendida, <strong>não se oferecia</strong> — e é isso que sua estética gritava.

<br><br><em>A imagem era dela. O controle, nunca foi.</em>
`;

  const textEN = `
<strong>A face off the mold</strong><br><br>
In the late 1970s, fashion was shifting: leaving behind the plastic glamour of Beverly Hills and plunging into New York's elegant chaos. Gia didn’t smile. She didn’t pose as if selling a perfect life. She <em>looked back</em>, as if saying: “don’t domesticate me.”<br><br>

<blockquote>"Gia never gave the camera what it wanted. She gave it what it feared."</blockquote>
<small>— Thing of Beauty</small><br><br>

<strong>A desired body, but not an obedient one</strong><br><br>
Gia's visual power came from her <em>embodied disruptiveness</em>: subtle androgyny, informal posture, a gaze full of boredom or untamed desire. In sessions with <strong>Chris von Wangenheim</strong>, she posed nude with heavy makeup and weapons — a fantasy of decadence and power that only worked <em>because she didn’t apologize</em>.<br><br>

<strong>Clothing as armor</strong><br><br>
Gia combined oversized jackets, ripped jeans, band tees — a look closer to James Dean than the “All-American Girls” of the era. She unknowingly anticipated a whole generation of runway and streetwear androgynes.<br><br>

<strong>The printed body and the violence of the click</strong><br><br>
She was shaped by two extremes:
<ul>
  <li><strong>Wangenheim</strong>: aesthetic sadism, erotic fantasy, dangerous woman.</li>
  <li><strong>Scavullo</strong>: romantic softening, <em>soft-core goddess</em>.</li>
</ul>
But Gia, even when sold, <strong>was never offering herself</strong> — and that’s what her aesthetic screamed.

<br><br><em>The image was hers. The control never was.</em>
`;

  const text = language === 'pt' ? textPT : textEN;

  const referencesPT = [
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Butler, Judith. Problemas de Gênero: Feminismo e Subversão da Identidade. Civilização Brasileira, 2003.",
    "Mendes, Antonia. A Pose e o Corpo: Modos de Performar Gênero na Fotografia de Moda. Revista Z Cultural, 2018.",
    "Dazed Digital. ‘Gia: The Story of a Forgotten Supermodel’. Dazed & Confused Magazine. Acesso em abril de 2025."
  ];

  const referencesEN = [
    "Baumann, Sacha Lanvin. Born This Way: Friends, Colleagues, and Coworkers Recall Gia Carangi. 2016.",
    "Butler, Judith. Gender Trouble: Feminism and the Subversion of Identity. Routledge, 1990.",
    "Mendes, Antonia. ‘The Pose and the Body: Performing Gender in Fashion Photography’. Z Cultural Journal, 2018.",
    "Dazed Digital. ‘Gia: The Story of a Forgotten Supermodel’. Dazed & Confused Magazine. Accessed April 2025."
  ];

  return (
    <>
      <AudioPlayer src={atomicAudio} />
      <ZinePage
        title={title}
        text={text}
        image={giaImage}
        references={language === 'pt' ? referencesPT : referencesEN}
      />
    </>
  );
};

export default Estetica;
