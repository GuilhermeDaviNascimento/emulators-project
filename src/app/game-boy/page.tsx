import { CarouselOrientation } from '@/components/carousel';
import games from '@/data/game-boy-games.json';
export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="w-2/3"></div>
      <div className="h-full flex items-center justify-center">
        <CarouselOrientation list={games}></CarouselOrientation>
      </div>
    </div>
  );
}
