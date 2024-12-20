import { 
  Cat, 
  Dog, 
  Bird, 
  Fish, 
  Bug,
  Rat,
  Turtle,
  Squirrel
} from 'lucide-react';

export const ANIMAL_ICONS = {
  cat: Cat,
  dog: Dog,
  bird: Bird,
  fish: Fish,
  bug: Bug,
  rat: Rat,
  turtle: Turtle,
  squirrel: Squirrel
} as const;

export const ANIMALS = Object.keys(ANIMAL_ICONS);