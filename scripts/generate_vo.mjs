import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const voDir = path.resolve('brag-output/composition/assets/vo');
if (!fs.existsSync(voDir)) {
  fs.mkdirSync(voDir, { recursive: true });
}

// Concise, high-impact first-person lines engineered for a 26.5s video
const segments = [
  {
    file: 'vo_1.wav',
    text: 'I do not just build software that works. I build software people remember.',
    speed: 1.08
  },
  {
    file: 'vo_2.wav',
    text: 'I turn ideas into real, interactive digital experiences.',
    speed: 1.08
  },
  {
    file: 'vo_3.wav',
    text: 'Like What If: Another Life—an interactive 3D WebGL journey with custom shaders.',
    speed: 1.08
  },
  {
    file: 'vo_4.wav',
    text: 'And WordDrop—an Android app bringing curated vocabulary right to your lock screen, completely offline.',
    speed: 1.08
  },
  {
    file: 'vo_5.wav',
    text: 'For me, engineering is crafting systems that feel resilient, intuitive, and worth using.',
    speed: 1.08
  },
  {
    file: 'vo_6.wav',
    text: 'I am Narendra. And I am just getting started.',
    speed: 1.05
  }
];

console.log('Synthesizing concise 25-30s voiceover clips with Kokoro (am_adam)...');

for (let i = 0; i < segments.length; i++) {
  const seg = segments[i];
  const outPath = path.join(voDir, seg.file);
  console.log(`[${i + 1}/${segments.length}] Generating ${seg.file}...`);
  const cmd = `npx hyperframes tts "${seg.text}" -v am_adam -s ${seg.speed} -o "${outPath}"`;
  execSync(cmd, { stdio: 'inherit' });
}

console.log('All voiceover segments generated.');
