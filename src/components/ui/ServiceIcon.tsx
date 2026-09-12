import { Boxes, Compass, Cpu, Handshake, Rocket, Users } from 'lucide-react';
import type { Service } from '@/content/types';

const icons = { compass: Compass, cpu: Cpu, boxes: Boxes, rocket: Rocket, users: Users, handshake: Handshake };

export function ServiceIcon({ icon, className }: { icon: Service['icon']; className?: string }) {
  const Icon = icons[icon];
  return <Icon className={className} aria-hidden="true" />;
}
