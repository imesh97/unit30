import { Release } from '@/lib/constants';

interface ReleaseCardProps {
  release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center overflow-hidden hover:border-accent hover-glow cursor-pointer transition-colors duration-300 group">
        <span className="text-5xl md:text-6xl font-black text-muted-foreground group-hover:text-accent transition-colors duration-300">
          {release.abbreviation}
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-bold text-foreground italic">
          {release.title}
        </h3>

        <p className="text-xl font-light text-muted-foreground">
          {release.artist}
        </p>

        <div className="flex items-center">
          <span className="text-sm font-medium text-accent uppercase tracking-wide">
            {release.type}
          </span>
          <span className="text-sm font-black text-muted-foreground mx-2">·</span>
          <span className="text-sm text-muted-foreground">
            {release.year}
          </span>
        </div>
      </div>
    </div>
  );
}
