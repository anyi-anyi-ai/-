import { HTMLAttributes } from "react";

export default function GlassCard({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`glass-surface relative overflow-hidden ${className}`} {...props} />;
}
