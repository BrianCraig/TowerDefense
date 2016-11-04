# Tower Defense Game Documentation
Tower Defense is a Game type where you must defend your "castle" from enemies rounds with towers which kills the enemies, and survive all the rounds. 

## Matches 
A match consists of
  - a map
  - enemies rounds
  - a player stats
It can end in a variety of status
  - Player wins
  - Player loses
  - Player quits

## Map
A map is a 2d plane with some dimensions(in chunks). It's filled with chunks.

## Chunk
A chunk is a indivisible and atomic part of the map. There are 5 types of chunks
  - The Focus, where the enemies appear
  - The path
  - The Castle, where enemies wins
  - Towereable chunks
  - Non towereable chunks
Each type of chunk has some properties, Focus and Path have a direction (N.S.E.W.), Towereable chunks have Towers, and so on.

## Enemies Rounds
Each enemy round consists on a ordered collection of zombies, a time interval where they appear, 
the total number of enemies, alive enemies on stage, who is the next enemy to appear, if it has a next enemy 
if the round has been defeated.

## Enemies
Protection makes Physical Attacks (by arrows) less effective. Real damage is equal to damage divided one plus protection rate 
### Standard zombies
  - Speed: 0.7 chunks / sec
  - HP: 20 hearts
  - Protection: 0%

### Strong zombies
  - Speed: 0.5 chunks / sec
  - HP: 50 hearts
  - Protection: 0%

### Better kill'im with fire
  - Speed: 0.6 chunks / sec
  - HP: 20 hearts
  - Protection: 100%

## Towers
### Simple Towers
  - Distance attacks: 3.5 chunks
  - Speed: 1 attack every 0.2 sec
  - Damage: Physic 5 hearts

### Fire Towers
  - Distance attacks: 2 chunks
  - Speed: 1 attack every 0.5 sec
  - Damage: Fire 10 hearts per second