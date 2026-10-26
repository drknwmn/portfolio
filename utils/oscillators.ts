export interface Oscillator {
  phase: number;
  frequency: number;
}

export const createOscillators = (count = 64): Oscillator[] => Array.from({ length: count }, (_, index) => ({
  phase: index * 2.399963229728653,
  frequency: 1 + 0.6 * Math.sin(index * 13.7),
}));

export const orderParameter = (oscillators: Oscillator[]) => {
  const real = oscillators.reduce((total, oscillator) => total + Math.cos(oscillator.phase), 0) / oscillators.length;
  const imaginary = oscillators.reduce((total, oscillator) => total + Math.sin(oscillator.phase), 0) / oscillators.length;
  return { real, imaginary, magnitude: Math.hypot(real, imaginary) };
};

export const stepOscillators = (oscillators: Oscillator[], coupling: number, timeStep: number) => {
  const { real, imaginary } = orderParameter(oscillators);
  oscillators.forEach((oscillator) => {
    oscillator.phase += (oscillator.frequency + coupling * (imaginary * Math.cos(oscillator.phase) - real * Math.sin(oscillator.phase))) * timeStep;
    oscillator.phase %= Math.PI * 2;
  });
};

export const perturbOscillators = (oscillators: Oscillator[]) => {
  oscillators.forEach((oscillator, index) => {
    if (index % 3 === 0) oscillator.phase += Math.PI;
  });
};
