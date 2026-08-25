import { Wallet, Users, BookOpen, FileText, Building2, BarChart3 } from "lucide-react";

const ICONS = {
  Wallet,
  Users,
  BookOpen,
  FileText,
  Building2,
  BarChart3,
};

export default function ProductIcon({ name, size = "md" }) {
  const Icon = ICONS[name];
  if (!Icon) return null;

  const sizes = {
    sm: "h-9 w-9",
    md: "h-12 w-12",
  };

  const iconSizes = {
    sm: 18,
    md: 22,
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-card bg-grid ${sizes[size]}`}
      aria-hidden="true"
    >
      <Icon size={iconSizes[size]} className="text-white" strokeWidth={1.75} />
    </div>
  );
}
