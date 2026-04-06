import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ScanLine, Clock, Info, Shield } from "lucide-react";
import { getCurrentUser, User } from "@/lib/auth";
import { useTranslation } from "react-i18next";

const BottomNav = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  const navItems = [
    { to: "/dashboard", icon: Home, label: t('nav_home') },
    { to: "/scan", icon: ScanLine, label: t('nav_scan') },
    { to: "/history", icon: Clock, label: t('nav_history') },
    { to: "/about", icon: Info, label: t('nav_about') },
  ];

  const items = [...navItems];
  if (user?.role === "admin") {
    items.push({ to: "/admin", icon: Shield, label: t('nav_admin') });
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {items.map(({ to, icon: Icon, label }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center gap-1 px-4 py-2 text-xs transition-colors ${active ? "text-primary" : "text-muted-foreground"
                }`}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 1.5} />
              <span className="font-display text-[10px] font-medium tracking-wide uppercase">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
