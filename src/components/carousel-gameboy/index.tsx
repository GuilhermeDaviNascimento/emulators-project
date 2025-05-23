import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1">
        <CarouselItem className="pt-1 md:basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <Link href={"./gameboy"}>
                  <Image src="/game_boy.png" alt="game-boy-logo" width={300} height={300} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem className="pt-1 md:basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <Image src="/mega_drive.svg" alt="game-boy-logo" width={300} height={300} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem className="pt-1 md:basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <Image src="/SNES.png" alt="game-boy-logo" width={300} height={300} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
