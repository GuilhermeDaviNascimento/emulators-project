interface Emulator {
  name: string;
  patch: string;
  url: string;
}

type Emulators = Emulator[];

export interface EmulatorsProps {
  list: Emulators;
}
