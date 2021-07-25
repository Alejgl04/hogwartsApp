export interface Characters {
  name:            string;
  species:         Species;
  gender:          Gender;
  house:           House;
  dateOfBirth:     string;
  yearOfBirth:     number;
  ancestry:        string;
  eyeColour:       string;
  hairColour:      string;
  wand:            Wand;
  patronus:        string;
  hogwartsStudent: boolean;
  hogwartsStaff:   boolean;
  actor:           string;
  alive:           boolean;
  image:           string;
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export enum House {
  Gryffindor = "Gryffindor",
}

export enum Species {
  HalfGiant = "half-giant",
  Human = "human",
  Werewolf = "werewolf",
}

export interface Wand {
  wood:   string;
  core:   string;
  length: number | string;
}
