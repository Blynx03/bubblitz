import intro from '../assets/sound/intro.wav'
import choice from '../assets/sound/choice.wav'
import click from '../assets/sound/click.wav'
import tick from '../assets/sound/tick.wav'
import gameover from '../assets/sound/gameover.wav'
import levelup from '../assets/sound/levelup.wav'
import losealife from '../assets/sound/losealife.wav'
import extralife from '../assets/sound/extralife.wav'


const sounds = {
    intro: new Audio(intro),
    choice: new Audio(choice),
    click: new Audio(click),
    tick: new Audio(tick),
    gameover: new Audio(gameover),
    levelup: new Audio(levelup),
    losealife: new Audio(losealife),
    extralife: new Audio(extralife)
};

export type SoundKey = keyof typeof sounds;

export const playSound = (key: SoundKey) => {
  const sound = sounds[key];
  if (!sound) return;

  sound.currentTime = 0;
  sound.play();
};
