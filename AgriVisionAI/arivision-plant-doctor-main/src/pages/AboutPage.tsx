import { motion } from "framer-motion";
import { Cpu, Eye, Layers, Zap } from "lucide-react";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20">
      <TopBar />
      <main className="flex-1 px-4 py-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold mb-1">{t('about_title')}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {t('about_subtitle')}
          </p>

          <div className="space-y-4">
            <div className="lab-card rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="h-5 w-5 text-accent" />
                <h3 className="font-display text-sm font-semibold">{t('about_vit_title')}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('about_vit_desc')}
              </p>
            </div>

            <div className="lab-card rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="h-5 w-5 text-accent" />
                <h3 className="font-display text-sm font-semibold">{t('about_swin_title')}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('about_swin_desc')}
              </p>
            </div>

            <div className="lab-card rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="h-5 w-5 text-accent" />
                <h3 className="font-display text-sm font-semibold">{t('about_ensemble_title')}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('about_ensemble_desc')}
              </p>
            </div>

            <div className="lab-card rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-5 w-5 text-accent" />
                <h3 className="font-display text-sm font-semibold">{t('about_realtime_title')}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('about_realtime_desc')}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border p-4 text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t('about_built_for_field')}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t('about_field_desc')}
            </p>
          </div>
        </motion.div>
      </main>
      <BottomNav />
    </div>
  );
};

export default AboutPage;
