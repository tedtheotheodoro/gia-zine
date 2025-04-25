// src/components/AudioPlayer.jsx
import { useEffect } from 'react';
import { Howl } from 'howler';

const AudioPlayer = ({ src }) => {
  useEffect(() => {
    const sound = new Howl({
      src: [src],
      volume: 0.3,
      autoplay: true,
      loop: true,
      fadeIn: 1500
    });

    sound.play();

    return () => {
      sound.fade(0.3, 0, 1000);
      sound.unload();
    };
  }, [src]);

  return null;
};

export default AudioPlayer;
