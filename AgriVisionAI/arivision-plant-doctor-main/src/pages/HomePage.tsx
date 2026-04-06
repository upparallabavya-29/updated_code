import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ScanLine, Shield, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import FallingLeaves from "@/components/FallingLeaves";
import { getCurrentUser, User } from "@/lib/auth";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background relative">
      <FallingLeaves />
      {/* Premium Header */}
      <header
        className="flex items-center justify-between px-6 relative z-10"
        style={{
          background: "linear-gradient(135deg, hsl(153 75% 12%) 0%, hsl(153 75% 20%) 50%, hsl(160 60% 25%) 100%)",
          boxShadow: "0 2px 24px 0 hsl(153 75% 12% / 0.35), 0 1px 0 hsl(153 75% 40% / 0.15) inset",
          minHeight: 64,
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 py-3">
          <motion.div
            whileHover={{ rotate: 20, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{
              background: "linear-gradient(135deg, hsl(255 100% 69%) 0%, hsl(280 100% 65%) 100%)",
              boxShadow: "0 0 16px hsl(255 100% 69% / 0.5)",
            }}
          >
            <Leaf className="h-5 w-5 text-white" strokeWidth={2.2} />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-[15px] font-bold tracking-tight text-white"
              style={{ letterSpacing: "-0.01em" }}
            >
              {t('app_name')}
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "hsl(153 60% 65%)" }}>
              {t('subtitle')}
            </span>
          </div>
        </div>

        {/* Enter Dashboard CTA */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        {user ? (
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, hsl(255 100% 69% / 0.9) 0%, hsl(255 100% 60% / 0.9) 100%)",
                boxShadow: "0 0 18px hsl(255 100% 69% / 0.4), 0 2px 8px hsl(0 0% 0% / 0.25)",
                border: "1px solid hsl(255 100% 80% / 0.3)",
              }}
            >
              {t('enter_dashboard')}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        ) : (
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
                border: "1px solid #e5e7eb",
              }}
            >
              {t('sign_in')}
            </motion.button>
          </Link>
        )}
        </div>
      </header>


      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 relative z-10">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t('powered_by')}
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t('title_main')}
            <br />
            <span className="text-primary">{t('title_sub')}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground leading-relaxed">
            {t('description')}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="gap-2 px-8">
                {t('start_diagnosis')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="gap-2 px-8">
                {t('how_it_works')}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              icon: ScanLine,
              title: t('vit_analysis'),
              desc: t('vit_desc'),
            },
            {
              icon: Zap,
              title: t('instant_results'),
              desc: t('instant_desc'),
            },
            {
              icon: Shield,
              title: t('treatment_plans'),
              desc: t('treatment_desc'),
            },
          ].map((f) => (
            <div key={f.title} className="lab-card rounded-lg">
              <f.icon className="mb-3 h-5 w-5 text-accent" />
              <h3 className="font-display text-sm font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground relative z-10">
        {t('footer')}
      </footer>
    </div>
  );
};

export default HomePage;
