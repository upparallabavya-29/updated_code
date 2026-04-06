import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // App-wide
      "app_name": "AriVision AI",
      "subtitle": "Plant Pathology",
      "footer": "AriVision AI · Plant Pathology Diagnostic Platform",

      // HomePage
      "enter_dashboard": "Enter Dashboard",
      "sign_in": "Sign in",
      "powered_by": "Powered by Vision Transformer & Swin Transformer",
      "title_main": "Plant Pathology",
      "title_sub": "Diagnostic Lab",
      "description": "Clinical-grade disease detection for your crops. Upload a leaf image, receive an instant AI diagnosis with treatment protocols.",
      "start_diagnosis": "Start Diagnosis",
      "how_it_works": "How It Works",
      "vit_analysis": "ViT Analysis",
      "vit_desc": "Vision Transformer breaks your leaf image into patches for pixel-level classification.",
      "instant_results": "Instant Results",
      "instant_desc": "Get disease identification, confidence scores, and treatment in seconds.",
      "treatment_plans": "Treatment Plans",
      "treatment_desc": "Actionable cure protocols, prevention methods, and ongoing care instructions.",

      // Chatbot
      "chat_title": "Plant Doctor Chatbot",
      "chat_placeholder": "Ask a question about plants...",

      // BottomNav
      "nav_home": "Home",
      "nav_scan": "Scan",
      "nav_history": "History",
      "nav_about": "About",
      "nav_admin": "Admin",

      // Dashboard
      "dash_title": "Diagnostic Lab",
      "dash_subtitle": "Upload or capture a leaf for analysis",
      "dash_total_scans": "Total Scans",
      "dash_diseases_found": "Diseases Found",
      "dash_capture": "Capture",
      "dash_upload": "Upload",
      "dash_recent_scans": "Recent Scans",
      "dash_syncing": "Syncing Records...",
      "dash_no_activity": "No recent activity detected.",
      "dash_scan_new_leaf": "Scan New Leaf",

      // Scan Page
      "scan_title": "Scan Leaf",
      "scan_subtitle": "Capture or upload a leaf image for diagnosis",
      "scan_take_photo": "Take Photo",
      "scan_use_camera": "Use device camera",
      "scan_upload_image": "Upload Image",
      "scan_select_gallery": "Select from gallery",
      "scan_drag_drop": "Or drag and drop an image here",
      "scan_what_plant": "What plant is this?",
      "scan_select_placeholder": "Select plant type (Searchable...)",
      "scan_search_species": "Search plant species...",
      "scan_no_species": "No plant species found.",
      "scan_available_plants": "Available Plants",
      "scan_select_warning": "Please select a plant type to proceed with analysis.",
      "scan_analyze_btn": "Analyze Pathology",
      "scan_healthy_detected": "HEALTHY LEAF DETECTED",

      // Results Page
      "results_back": "Back",
      "results_diagnosed_by": "Diagnosed by",
      "results_leaf_plant": "Leaf / Plant",
      "results_disease": "Disease",
      "results_confidence": "Confidence",
      "results_status": "Status",
      "results_description": "Description",
      "results_cure": "Cure / Treatment",
      "results_prevention": "Prevention",
      "results_care_tips": "Plant Care Tips",
      "results_feedback_title": "Was this diagnosis accurate?",
      "results_accurate": "Accurate",
      "results_inaccurate": "Inaccurate",
      "results_comments": "Additional comments (optional)",
      "results_submit_feedback": "Submit Feedback",
      "results_scan_another": "Scan Another Leaf",
      "results_no_data": "No diagnosis data found.",
      "results_go_scanner": "Go to Scanner",
      "results_feedback_saved": "Feedback saved. Thank you.",

      // History Page
      "history_title": "Scan History",
      "history_subtitle": "Previous diagnostic results",
      "history_loading": "Loading scan history...",
      "history_no_scans": "No scans found yet.",

      // About Page
      "about_title": "About AriVision AI",
      "about_subtitle": "Clinical-grade plant pathology diagnostics powered by transformer neural networks.",
      "about_vit_title": "Vision Transformer (ViT)",
      "about_vit_desc": "Splits leaf images into fixed-size patches, linearly embeds each, and processes them through a standard Transformer encoder. This enables the model to capture both local lesion patterns and global leaf morphology.",
      "about_swin_title": "Swin Transformer",
      "about_swin_desc": "Uses shifted windows to compute self-attention within local regions, then merges patches hierarchically. This produces multi-scale feature maps ideal for detecting diseases at varying scales and stages.",
      "about_ensemble_title": "Ensemble Classification",
      "about_ensemble_desc": "Both models run inference in parallel. Their probability distributions are averaged to produce a final classification with higher accuracy and robustness than either model alone.",
      "about_realtime_title": "Real-Time AI Analysis",
      "about_realtime_desc": "AriVision AI operates on a live inference engine. When you upload a leaf image, it is instantly processed by our Vision Transformer models and returns a real-time diagnosis — no delays, no batch processing, just instant results.",
      "about_built_for_field": "Built for the field",
      "about_field_desc": "High-contrast UI designed for outdoor visibility. Thumb-driven navigation for one-handed use.",

      // Disease content (used in results page)
      "disease_early_blight_desc": "Early blight is caused by the fungus Alternaria solani. It produces dark, concentric spots on older leaves, which eventually yellow and drop. The disease can also affect stems and fruit.",
      "disease_early_blight_cure": "Apply fungicides such as chlorothalonil or copper-based sprays. Remove and destroy infected plant debris.",
      "disease_early_blight_prev": "Avoid overhead watering and maintain good air circulation. Rotate crops and use disease-resistant varieties.",
      "disease_early_blight_care": "Remove infected leaves promptly. Maintain proper soil nutrition with balanced fertilizer. Mulch around plants to prevent soil splash.",

      "disease_late_blight_desc": "Late blight, caused by Phytophthora infestans, creates water-soaked lesions that rapidly enlarge and turn brown-black. White mold may appear on leaf undersides in humid conditions.",
      "disease_late_blight_cure": "Apply systemic fungicides containing mefenoxam or chlorothalonil immediately. Remove and destroy all infected plant material.",
      "disease_late_blight_prev": "Plant certified disease-free seed potatoes. Ensure adequate spacing for airflow. Avoid irrigation late in the day.",
      "disease_late_blight_care": "Monitor weather conditions closely—cool, wet weather promotes spread. Hill soil around plants to protect tubers from spore wash.",

      "disease_apple_scab_desc": "Apple scab is caused by the fungus Venturia inaequalis. It creates olive-green to black lesions on leaves and fruit, leading to premature leaf drop and unmarketable fruit.",
      "disease_apple_scab_cure": "Apply fungicide sprays (captan or myclobutanil) beginning at green tip stage through petal fall.",
      "disease_apple_scab_prev": "Rake and destroy fallen leaves in autumn. Plant scab-resistant varieties. Prune trees to improve air circulation.",
      "disease_apple_scab_care": "Maintain a regular spray schedule during wet spring weather. Thin fruit to reduce humidity within the canopy.",

      "disease_black_rot_desc": "Black rot, caused by Guignardia bidwellii, produces reddish-brown leaf spots and causes berries to shrivel into hard, black mummies.",
      "disease_black_rot_cure": "Apply fungicides (mancozeb or myclobutanil) from bud break through four weeks after bloom.",
      "disease_black_rot_prev": "Remove mummified berries and infected canes during dormant pruning. Maintain open canopy for air circulation.",
      "disease_black_rot_care": "Train vines properly and remove excess growth. Ensure good drainage around the vineyard.",

      "disease_nlb_desc": "Caused by Exserohilum turcicum, this disease creates long, cigar-shaped grayish-green lesions on corn leaves, reducing photosynthetic area and yield.",
      "disease_nlb_cure": "Apply foliar fungicides containing azoxystrobin or propiconazole at disease onset.",
      "disease_nlb_prev": "Plant resistant hybrids. Practice crop rotation with non-host crops. Till infected residue after harvest.",
      "disease_nlb_care": "Scout fields regularly beginning at V8 growth stage. Ensure adequate plant nutrition to support disease tolerance.",

      "disease_blast_desc": "Rice blast, caused by Magnaporthe oryzae, produces diamond-shaped lesions with gray centers on leaves and can destroy entire panicles before harvest.",
      "disease_blast_cure": "Apply tricyclazole or isoprothiolane fungicides. Drain fields for 3–5 days during susceptible growth stages.",
      "disease_blast_prev": "Use blast-resistant varieties. Avoid excessive nitrogen fertilization. Maintain proper water management.",
      "disease_blast_care": "Inspect fields weekly during humid conditions. Practice crop rotation. Destroy infected stubble after harvest.",

      "disease_stripe_rust_desc": "Stripe rust (yellow rust) is caused by Puccinia striiformis and forms bright yellow-orange pustules in stripes along wheat leaves.",
      "disease_stripe_rust_cure": "Apply propiconazole or tebuconazole fungicides at first sign of infection.",
      "disease_stripe_rust_prev": "Grow resistant varieties. Early sowing often reduces risk. Monitor neighboring fields for rust outbreaks.",
      "disease_stripe_rust_care": "Scout fields from tillering onward. Avoid dense plantings that trap humidity around leaves.",

      "disease_healthy_cure": "No treatment required. Maintain regular watering and fertilization schedules.",
      "disease_healthy_prev": "Continue standard care protocols. Ensure adequate sunlight and pest monitoring.",
      "disease_healthy_care": "Clean leaves occasionally to ensure maximum photosynthesis. Monitor for early signs of seasonal pests.",
    }
  },

  te: {
    translation: {
      // App-wide
      "app_name": "AriVision AI",
      "subtitle": "మొక్కల వ్యాధి పరీక్ష",
      "footer": "AriVision AI · మొక్కల వ్యాధి నిర్ధారణ వేదిక",

      // HomePage
      "enter_dashboard": "డాష్‌బోర్డ్ తెరవండి",
      "sign_in": "లాగిన్ అవ్వండి",
      "powered_by": "Vision Transformer & Swin Transformer తో పనిచేస్తుంది",
      "title_main": "మొక్కల వ్యాధి",
      "title_sub": "నిర్ధారణ కేంద్రం",
      "description": "మీ పంటల కోసం AI ఆధారిత వ్యాధి గుర్తింపు. ఆకు ఫోటో పంపించండి, వెంటనే వ్యాధి మరియు చికిత్స తెలుసుకోండి.",
      "start_diagnosis": "పరీక్ష మొదలుపెట్టండి",
      "how_it_works": "ఇది ఎలా పనిచేస్తుంది",
      "vit_analysis": "ViT విశ్లేషణ",
      "vit_desc": "Vision Transformer మీ ఆకు ఫోటోను చిన్న భాగాలుగా విభజించి, వ్యాధిని గుర్తిస్తుంది.",
      "instant_results": "వెంటనే ఫలితాలు",
      "instant_desc": "కొన్ని సెకన్లలో వ్యాధి పేరు, నమ్మకం శాతం మరియు చికిత్స తెలుసుకోండి.",
      "treatment_plans": "చికిత్స ప్రణాళిక",
      "treatment_desc": "వ్యాధి మాన్పించే మందులు, నివారణ చర్యలు మరియు మొక్క సంరక్షణ సూచనలు.",

      // Chatbot
      "chat_title": "మొక్కల డాక్టర్",
      "chat_placeholder": "మొక్కల గురించి అడగండి...",

      // BottomNav
      "nav_home": "హోమ్",
      "nav_scan": "స్కాన్",
      "nav_history": "చరిత్ర",
      "nav_about": "గురించి",
      "nav_admin": "అడ్మిన్",

      // Dashboard
      "dash_title": "నిర్ధారణ కేంద్రం",
      "dash_subtitle": "పరీక్షకు ఆకు ఫోటో తీయండి లేదా అప్‌లోడ్ చేయండి",
      "dash_total_scans": "మొత్తం స్కాన్‌లు",
      "dash_diseases_found": "గుర్తించిన వ్యాధులు",
      "dash_capture": "ఫోటో తీయండి",
      "dash_upload": "అప్‌లోడ్ చేయండి",
      "dash_recent_scans": "ఇటీవలి స్కాన్‌లు",
      "dash_syncing": "రికార్డులు లోడ్ అవుతున్నాయి...",
      "dash_no_activity": "ఇంకా ఏ పరీక్ష చేయలేదు.",
      "dash_scan_new_leaf": "కొత్త ఆకు స్కాన్ చేయండి",

      // Scan Page
      "scan_title": "ఆకు స్కాన్ చేయండి",
      "scan_subtitle": "వ్యాధి పరీక్షకు ఆకు ఫోటో తీయండి లేదా అప్‌లోడ్ చేయండి",
      "scan_take_photo": "ఫోటో తీయండి",
      "scan_use_camera": "ఫోన్ కెమెరా వాడండి",
      "scan_upload_image": "ఫోటో అప్‌లోడ్ చేయండి",
      "scan_select_gallery": "గ్యాలరీ నుండి ఎంచుకోండి",
      "scan_drag_drop": "లేదా ఇక్కడ ఫోటోను లాగి వేయండి",
      "scan_what_plant": "ఇది ఏ మొక్క?",
      "scan_select_placeholder": "మొక్క రకం ఎంచుకోండి (వెతకవచ్చు...)",
      "scan_search_species": "మొక్క పేరు వెతకండి...",
      "scan_no_species": "ఆ మొక్క దొరకలేదు.",
      "scan_available_plants": "అందుబాటులో ఉన్న మొక్కలు",
      "scan_select_warning": "పరీక్ష చేయడానికి మొదట మొక్క రకం ఎంచుకోండి.",
      "scan_analyze_btn": "వ్యాధి పరీక్ష చేయండి",
      "scan_healthy_detected": "ఆరోగ్యకరమైన ఆకు కనుగొనబడింది",

      // Results Page
      "results_back": "వెనక్కి",
      "results_diagnosed_by": "పరీక్ష చేసింది",
      "results_leaf_plant": "ఆకు / మొక్క",
      "results_disease": "వ్యాధి",
      "results_confidence": "నమ్మకం",
      "results_status": "స్థితి",
      "results_description": "వివరణ",
      "results_cure": "చికిత్స / మందు",
      "results_prevention": "నివారణ",
      "results_care_tips": "మొక్కల సంరక్షణ చిట్కాలు",
      "results_feedback_title": "ఈ పరీక్ష ఫలితం సరిగ్గా ఉందా?",
      "results_accurate": "సరిగ్గా ఉంది",
      "results_inaccurate": "సరిగ్గా లేదు",
      "results_comments": "మీ అభిప్రాయం చెప్పండి (అవసరమైతే)",
      "results_submit_feedback": "అభిప్రాయం పంపండి",
      "results_scan_another": "మరొక ఆకు స్కాన్ చేయండి",
      "results_no_data": "పరీక్ష ఫలితాలు దొరకలేదు.",
      "results_go_scanner": "స్కానర్‌కు వెళ్ళండి",
      "results_feedback_saved": "మీ అభిప్రాయం నమోదు అయింది. ధన్యవాదాలు.",

      // History Page
      "history_title": "స్కాన్ చరిత్ర",
      "history_subtitle": "అంతకు ముందు చేసిన పరీక్షల ఫలితాలు",
      "history_loading": "స్కాన్ చరిత్ర లోడ్ అవుతోంది...",
      "history_no_scans": "ఇంకా పరీక్షలు చేయలేదు.",

      // About Page
      "about_title": "AriVision AI గురించి",
      "about_subtitle": "AI మరియు Deep Learning ఉపయోగించి మొక్కల వ్యాధులు గుర్తించే వేదిక.",
      "about_vit_title": "Vision Transformer (ViT)",
      "about_vit_desc": "ఆకు ఫోటోను చిన్న చిన్న భాగాలుగా విభజించి, ప్రతి భాగంలో వ్యాధి సూచనలు వెతుకుతుంది. ఇది ఆకు మొత్తం మీద వ్యాధిని కచ్చితంగా గుర్తిస్తుంది.",
      "about_swin_title": "Swin Transformer",
      "about_swin_desc": "ఆకు ఫోటోలో వేర్వేరు భాగాలను పోల్చి వ్యాధి దశలను గుర్తిస్తుంది. చిన్న మరియు పెద్ద వ్యాధులు రెండూ పట్టుకోగలదు.",
      "about_ensemble_title": "రెండు మోడళ్ళ కలయిక",
      "about_ensemble_desc": "ViT మరియు Swin Transformer రెండూ కలిసి పరీక్ష చేస్తాయి, తద్వారా ఒంటరి మోడల్ కంటే ఎక్కువ కచ్చితత్వం వస్తుంది.",
      "about_dataset_title": "డేటా సమాచారం",
      "about_dataset_desc": "14 రకాల పంటలలో 38 వ్యాధి రకాలకు సంబంధించిన 54,000+ ఆకు ఫోటోలతో తయారయిన PlantVillage డేటాసెట్‌పై శిక్షణ పొందింది.",
      "about_built_for_field": "పొలంలో వాడేందుకు తయారైంది",
      "about_field_desc": "అవుట్‌డోర్‌లో స్పష్టంగా కనిపించే UI. ఒక్క చేత్తో నావిగేట్ చేయవచ్చు.",

      // Disease content in Telugu
      "disease_early_blight_desc": "ఇది Alternaria solani అనే శిలీంధ్రం వల్ల వచ్చే వ్యాధి. పాత ఆకులపై నల్లటి గుండ్రటి మచ్చలు వస్తాయి, తర్వాత ఆకులు పచ్చగిల్లి రాలిపోతాయి. కాండం మరియు పండ్లకు కూడా వ్యాపిస్తుంది.",
      "disease_early_blight_cure": "క్లోరోథాలోనిల్ లేదా రాగి ఆధారిత శిలీంధ్రనాశకాలు పిచికారీ చేయండి. సోకిన ఆకులను తొలగించి నాశనం చేయండి.",
      "disease_early_blight_prev": "నీళ్ళు నేరుగా ఆకుల మీద పడకుండా చూసుకోండి. మంచి గాలి ప్రసరణ ఉండేందుకు మొక్కల మధ్య దూరం పాటించండి. ఏటా పంట మార్చండి.",
      "disease_early_blight_care": "వ్యాధి సోకిన ఆకులు వెంటనే తీసివేయండి. మొక్కకు సరైన ఎరువులు వేయండి. మట్టి మీద పొట్టు పరచండి.",

      "disease_late_blight_desc": "Phytophthora infestans వల్ల వచ్చే ఈ వ్యాధి చాలా వేగంగా వ్యాపిస్తుంది. ఆకులపై నీళ్ళు మింగినట్టు మచ్చలు వస్తాయి, తర్వాత గోధుమ-నలుపు రంగుకు మారుతాయి. తేమలో ఆకు అడుగు భాగాన తెల్లటి పూత వస్తుంది.",
      "disease_late_blight_cure": "మెఫెనాక్సమ్ లేదా క్లోరోథాలోనిల్ ఉన్న చవకైన శిలీంధ్రనాశకాలు వెంటనే వాడండి. వ్యాధిగ్రస్త భాగాలన్నీ తీసేసి నాశనం చేయండి.",
      "disease_late_blight_prev": "ఆరోగ్యకరమైన విత్తన బంగాళాదుంపలు మాత్రమే వాడండి. మొక్కల మధ్య దూరం పాటించండి. సాయంత్రం నీళ్ళు పెట్టవద్దు.",
      "disease_late_blight_care": "చల్లని, తేమ వాతావరణంలో వ్యాధి త్వరగా వ్యాపిస్తుంది కాబట్టి నిరంతరం గమనించండి. దుంపలను రక్షించేందుకు మొక్కల చుట్టూ మట్టి పోయండి.",

      "disease_apple_scab_desc": "Venturia inaequalis శిలీంధ్రం వల్ల వచ్చే ఈ వ్యాధి ఆకులపై ఆలివ్-ఆకుపచ్చ నుండి నల్ల మచ్చలు వేస్తుంది. ఆకులు త్వరగా రాలిపోతాయి, పండ్లు అమ్మకానికి పనికిరాకుండా అవుతాయి.",
      "disease_apple_scab_cure": "చెట్టు మొగ్గలు వేయడం మొదలు పువ్వులు రాలే వరకు కాప్టన్ లేదా మైక్లోబుటానిల్ శిలీంధ్రనాశకాలు పిచికారీ చేయండి.",
      "disease_apple_scab_prev": "శరదృతువులో రాలిన ఆకులు ఏరి నాశనం చేయండి. వ్యాధి నిరోధక రకాలు నాటండి. గాలి బాగా వీచేందుకు కొమ్మలు కత్తిరించండి.",
      "disease_apple_scab_care": "వేసవి పూర్వ తేమ కాలంలో క్రమంగా పిచికారీ చేయండి. కొమ్మల్లో తేమ తగ్గించేందుకు పండ్లను తొలగించండి.",

      "disease_black_rot_desc": "Guignardia bidwellii వల్ల వచ్చే ఈ వ్యాధి ఆకులపై ఎర్రగోధుమ మచ్చలు వేస్తుంది, ద్రాక్ష ఫలాలు ముడతలు పడి నల్లటి ఎండు ద్రాక్షలా మారుతాయి.",
      "disease_black_rot_cure": "మొగ్గలు ఫుట్టిన నుండి నాలుగు వారాల పాటు మాంకోజెబ్ లేదా మైక్లోబుటానిల్ శిలీంధ్రనాశకాలు వాడండి.",
      "disease_black_rot_prev": "నిద్ర కత్తిరింపు సమయంలో ఎండిన ఫలాలు మరియు వ్యాధిగ్రస్త కొమ్మలు తీసేయండి. తీగలు బాగా విస్తరించేలా చూసుకోండి.",
      "disease_black_rot_care": "తీగలను సరిగ్గా నిర్వహించండి. తోట చుట్టూ మంచి నీటి పారుదల ఉండేలా చూసుకోండి.",

      "disease_nlb_desc": "Exserohilum turcicum వల్ల మొక్కజొన్న ఆకులపై పొడవైన, సిగార్ ఆకారంలో ఉండే బూడిద-ఆకుపచ్చ మచ్చలు వస్తాయి. దిగుబడి తగ్గిపోతుంది.",
      "disease_nlb_cure": "వ్యాధి మొదలయ్యాక వెంటనే అజాక్సీస్ట్రోబిన్ లేదా ప్రొపికొనజోల్ ఆకు శిలీంధ్రనాశకాలు పిచికారీ చేయండి.",
      "disease_nlb_prev": "నిరోధక సంకరజాతులు నాటండి. ఏటా పంట మార్చండి. పంట తర్వాత వ్యాధిగ్రస్త అవశేషాలు దున్నండి.",
      "disease_nlb_care": "V8 దశ నుండి పొలాన్ని నిరంతరం తనిఖీ చేయండి. మొక్కలకు సరైన పోషకాలు అందించండి.",

      "disease_blast_desc": "Magnaporthe oryzae వల్ల వచ్చే వరి బ్లాస్ట్ ఆకులపై వజ్రాకార మచ్చలు వేస్తుంది. పంట కోయడానికి ముందే పూర్తి కంకులను నాశనం చేయగలదు.",
      "disease_blast_cure": "ట్రైసైక్లజోల్ లేదా ఐసోప్రోథియోలేన్ శిలీంధ్రనాశకాలు వాడండి. వ్యాధి వచ్చే దశలో పొలంలో 3 నుండి 5 రోజులు నీళ్ళు తీసేయండి.",
      "disease_blast_prev": "బ్లాస్ట్ నిరోధక రకాలు నాటండి. అధిక నత్రజని ఎరువు వేయవద్దు. నీటి నిర్వహణ సరిగ్గా చేయండి.",
      "disease_blast_care": "తేమ ఎక్కువగా ఉన్నప్పుడు వారానికొకసారి పొలం తనిఖీ చేయండి. పంట తర్వాత వ్యాధిగ్రస్త మొండెం నాశనం చేయండి.",

      "disease_stripe_rust_desc": "Puccinia striiformis వల్ల వచ్చే ఈ వ్యాధి గోధుమ ఆకులపై వరుసలో పసుపు-నారింజ రంగు పొక్కులు వేస్తుంది.",
      "disease_stripe_rust_cure": "వ్యాధి మొదటి సంకేతం కనిపించాగానే ప్రొపికొనజోల్ లేదా టెబుకొనజోల్ శిలీంధ్రనాశకాలు వాడండి.",
      "disease_stripe_rust_prev": "నిరోధక రకాలు పెంచండి. ముందుగా విత్తనాలు వేయడం వల్ల రిస్క్ తగ్గుతుంది. పక్కన ఉన్న పొలాలలో తుప్పు వ్యాధి వచ్చిందా అని గమనించండి.",
      "disease_stripe_rust_care": "టిల్లరింగ్ నుండి పొలం సరిగ్గా పరీక్షించండి. మొక్కలు దట్టంగా నాటవద్దు.",

      "disease_healthy_cure": "మందు అవసరం లేదు. నీళ్ళు మరియు ఎరువులు క్రమంగా ఇస్తూ ఉండండి.",
      "disease_healthy_prev": "సాధారణ సంరక్షణ చర్యలు కొనసాగించండి. సరైన ఎండ మరియు పురుగుల గమనింపు ఉండేలా చూసుకోండి.",
      "disease_healthy_care": "ఆకులు క్రమంగా శుభ్రం చేయండి, తద్వారా బాగా కిరణజన్య సంయోగక్రియ జరుగుతుంది. సీజనల్ పురుగుల సంకేతాలు గమనించండి.",
    }
  },

  hi: {
    translation: {
      // App-wide
      "app_name": "AriVision AI",
      "subtitle": "पादप रोग विज्ञान",
      "footer": "AriVision AI · पादप रोग विज्ञान नैदानिक मंच",

      // HomePage
      "enter_dashboard": "डैशबोर्ड दर्ज करें",
      "sign_in": "साइन इन करें",
      "powered_by": "विज़न ट्रांसफॉर्मर और स्विन ट्रांसफॉर्मर द्वारा संचालित",
      "title_main": "पादप रोग विज्ञान",
      "title_sub": "निदान प्रयोगशाला",
      "description": "आपकी फसलों के लिए नैदानिक-ग्रेड रोग का पता लगाना। एक पत्ती की छवि अपलोड करें, उपचार प्रोटोकॉल के साथ तत्काल एआई निदान प्राप्त करें।",
      "start_diagnosis": "निदान शुरू करें",
      "how_it_works": "यह कैसे काम करता है",
      "vit_analysis": "ViT विश्लेषण",
      "vit_desc": "विज़न ट्रांसफॉर्मर पिक्सेल-स्तरीय वर्गीकरण के लिए आपकी पत्ती की छवि को पैच में तोड़ देता है।",
      "instant_results": "त्वरित परिणाम",
      "instant_desc": "सेकंड में रोग की पहचान, विश्वास स्कोर और उपचार प्राप्त करें।",
      "treatment_plans": "उपचार योजनाएं",
      "treatment_desc": "कार्रवाई योग्य इलाज प्रोटोकॉल, रोकथाम के तरीके और चल रहे देखभाल निर्देश।",

      // Chatbot
      "chat_title": "प्लांट डॉक्टर चैटबॉट",
      "chat_placeholder": "पौधों के बारे में एक प्रश्न पूछें...",

      // BottomNav
      "nav_home": "होम",
      "nav_scan": "स्कैन",
      "nav_history": "इतिहास",
      "nav_about": "के बारे में",
      "nav_admin": "व्यवस्थापक",

      // Dashboard
      "dash_title": "निदान प्रयोगशाला",
      "dash_subtitle": "विश्लेषण के लिए एक पत्ती अपलोड या कैप्चर करें",
      "dash_total_scans": "कुल स्कैन",
      "dash_diseases_found": "रोग मिले",
      "dash_capture": "कैप्चर करें",
      "dash_upload": "अपलोड करें",
      "dash_recent_scans": "हालिया स्कैन",
      "dash_syncing": "रिकॉर्ड सिंक हो रहे हैं...",
      "dash_no_activity": "हाल ही में कोई गतिविधि नहीं मिली।",
      "dash_scan_new_leaf": "नई पत्ती स्कैन करें",

      // Scan Page
      "scan_title": "पत्ती स्कैन करें",
      "scan_subtitle": "निदान के लिए एक पत्ती की छवि कैप्चर या अपलोड करें",
      "scan_take_photo": "फोटो लें",
      "scan_use_camera": "डिवाइस कैमरा उपयोग करें",
      "scan_upload_image": "छवि अपलोड करें",
      "scan_select_gallery": "गैलरी से चुनें",
      "scan_drag_drop": "या यहाँ एक छवि खींचें और छोड़ें",
      "scan_what_plant": "यह कौन सा पौधा है?",
      "scan_select_placeholder": "पौधे का प्रकार चुनें (खोज योग्य...)",
      "scan_search_species": "पौधे की प्रजाति खोजें...",
      "scan_no_species": "कोई पौधे की प्रजाति नहीं मिली।",
      "scan_available_plants": "उपलब्ध पौधे",
      "scan_select_warning": "विश्लेषण के लिए पौधे का प्रकार चुनें।",
      "scan_analyze_btn": "रोग विज्ञान का विश्लेषण करें",
      "scan_healthy_detected": "स्वस्थ पत्ती का पता चला",

      // Results Page
      "results_back": "वापस",
      "results_diagnosed_by": "निदान किया गया",
      "results_leaf_plant": "पत्ती / पौधा",
      "results_disease": "रोग",
      "results_confidence": "विश्वास",
      "results_status": "स्थिति",
      "results_description": "विवरण",
      "results_cure": "इलाज / उपचार",
      "results_prevention": "रोकथाम",
      "results_care_tips": "पौधे की देखभाल के सुझाव",
      "results_feedback_title": "क्या यह निदान सटीक था?",
      "results_accurate": "सटीक",
      "results_inaccurate": "गलत",
      "results_comments": "अतिरिक्त टिप्पणियाँ (वैकल्पिक)",
      "results_submit_feedback": "प्रतिक्रिया सबमिट करें",
      "results_scan_another": "एक और पत्ती स्कैन करें",
      "results_no_data": "कोई निदान डेटा नहीं मिला।",
      "results_go_scanner": "स्कैनर पर जाएं",
      "results_feedback_saved": "प्रतिक्रिया सहेजी गई। धन्यवाद।",

      // History Page
      "history_title": "स्कैन इतिहास",
      "history_subtitle": "पिछले नैदानिक परिणाम",
      "history_loading": "स्कैन इतिहास लोड हो रहा है...",
      "history_no_scans": "अभी तक कोई स्कैन नहीं मिला।",

      // About Page
      "about_title": "AriVision AI के बारे में",
      "about_subtitle": "ट्रांसफॉर्मर न्यूरल नेटवर्क द्वारा संचालित नैदानिक-ग्रेड पादप रोग विज्ञान निदान।",
      "about_vit_title": "विज़न ट्रांसफॉर्मर (ViT)",
      "about_vit_desc": "पत्ती की छवियों को निश्चित आकार के पैच में विभाजित करता है, प्रत्येक को रैखिक रूप से एम्बेड करता है, और उन्हें एक मानक ट्रांसफॉर्मर एनकोडर के माध्यम से प्रोसेस करता है।",
      "about_swin_title": "स्विन ट्रांसफॉर्मर",
      "about_swin_desc": "स्थानीय क्षेत्रों में सेल्फ-अटेंशन की गणना के लिए स्थानांतरित विंडो का उपयोग करता है, फिर पैच को पदानुक्रमिक रूप से विलय करता है।",
      "about_ensemble_title": "एन्सेम्बल वर्गीकरण",
      "about_ensemble_desc": "दोनों मॉडल समानांतर में अनुमान चलाते हैं। उनके संभाव्यता वितरण को औसत किया जाता है ताकि उच्च सटीकता के साथ अंतिम वर्गीकरण तैयार हो।",
      "about_realtime_title": "रियल-टाइम AI विश्लेषण",
      "about_realtime_desc": "AriVision AI एक लाइव इन्फरेंस इंजन पर काम करता है। जैसे ही आप पत्ती की छवि अपलोड करते हैं, हमारे Vision Transformer मॉडल तुरंत इसे प्रोसेस करके रियल-टाइम निदान देते हैं — बिना किसी देरी के, तुरंत परिणाम।",
      "about_built_for_field": "मैदान के लिए बनाया गया",
      "about_field_desc": "बाहरी दृश्यता के लिए उच्च-कंट्रास्ट UI। एक हाथ से उपयोग के लिए थंब-ड्रिवेन नेविगेशन।",

      // Disease content in Hindi
      "disease_early_blight_desc": "अर्ली ब्लाइट Alternaria solani नामक फंगस से होती है। पुरानी पत्तियों पर गहरे, गोल धब्बे बनते हैं जो पीली पड़कर गिर जाती हैं। यह बीमारी तनों और फलों को भी प्रभावित कर सकती है।",
      "disease_early_blight_cure": "क्लोरोथालोनिल या तांबे आधारित फफूंदनाशक स्प्रे करें। संक्रमित पौधे के अवशेषों को हटाकर नष्ट करें।",
      "disease_early_blight_prev": "पानी सीधे पत्तियों पर न डालें। अच्छे वायु प्रवाह के लिए पौधों के बीच दूरी रखें। फसल चक्र अपनाएं।",
      "disease_early_blight_care": "संक्रमित पत्तियाँ तुरंत हटाएं। संतुलित उर्वरक से मिट्टी की पोषण बनाए रखें। पौधों के आसपास मल्च करें।",

      "disease_late_blight_desc": "Phytophthora infestans से होने वाली यह बीमारी बहुत तेज़ी से फैलती है। पत्तियों पर पानी सोखे हुए धब्बे बनते हैं जो भूरे-काले हो जाते हैं। नमी में पत्तियों के नीचे सफेद फफूंद दिखती है।",
      "disease_late_blight_cure": "मेफेनोक्सम या क्लोरोथालोनिल युक्त फफूंदनाशक तुरंत लगाएं। सभी संक्रमित हिस्सों को नष्ट करें।",
      "disease_late_blight_prev": "रोगमुक्त बीज आलू लगाएं। पर्याप्त दूरी बनाए रखें। शाम को सिंचाई न करें।",
      "disease_late_blight_care": "ठंडे और गीले मौसम में बीमारी तेज फैलती है, इसलिए नजर रखें। कंदों को बचाने के लिए पौधों के आसपास मिट्टी चढ़ाएं।",

      "disease_apple_scab_desc": "Venturia inaequalis फंगस से होने वाला यह रोग पत्तियों और फलों पर जैतून-हरे से काले धब्बे बनाता है, जिससे पत्तियाँ जल्दी गिर जाती हैं और फल अनुपयोगी हो जाते हैं।",
      "disease_apple_scab_cure": "हरी कली अवस्था से फूल गिरने तक कैप्टन या माइक्लोब्यूटानिल फफूंदनाशक का छिड़काव करें।",
      "disease_apple_scab_prev": "शरद ऋतु में गिरी पत्तियाँ जलाएं। रोग प्रतिरोधी किस्में लगाएं। वायु प्रवाह के लिए छंटाई करें।",
      "disease_apple_scab_care": "बसंत में बारिश के मौसम में नियमित छिड़काव करें। नमी कम करने के लिए फलों को पतला करें।",

      "disease_black_rot_desc": "Guignardia bidwellii से होने वाला यह रोग पत्तियों पर लाल-भूरे धब्बे बनाता है और अंगूर के दाने सिकुड़कर काले सूखे अंगूर जैसे हो जाते हैं।",
      "disease_black_rot_cure": "कली फूटने से लेकर फूल खिलने के चार सप्ताह बाद तक मैनकोज़ेब या माइक्लोब्यूटानिल का उपयोग करें।",
      "disease_black_rot_prev": "सुप्त छंटाई के दौरान सूखे दाने और संक्रमित डंठल हटाएं। वायु प्रवाह के लिए खुला वातावरण बनाए रखें।",
      "disease_black_rot_care": "बेलों की सही तरीके से देखभाल करें। बाग के चारों ओर अच्छी जल निकासी सुनिश्चित करें।",

      "disease_nlb_desc": "Exserohilum turcicum से मक्के की पत्तियों पर लंबे, सिगार के आकार के धूसर-हरे धब्बे बनते हैं, जिससे प्रकाश संश्लेषण कम होता है और उपज घटती है।",
      "disease_nlb_cure": "बीमारी शुरू होते ही एज़ोक्सिस्ट्रोबिन या प्रोपिकोनाज़ोल युक्त पर्णीय फफूंदनाशक लगाएं।",
      "disease_nlb_prev": "प्रतिरोधी संकर किस्में लगाएं। फसल चक्र अपनाएं। फसल के बाद संक्रमित अवशेषों को जोत दें।",
      "disease_nlb_care": "V8 विकास अवस्था से खेतों की नियमित निगरानी करें। पर्याप्त पोषण सुनिश्चित करें।",

      "disease_blast_desc": "Magnaporthe oryzae से होने वाला धान का ब्लास्ट पत्तियों पर हीरे के आकार के धब्बे बनाता है और कटाई से पहले पूरी बालियाँ नष्ट कर सकता है।",
      "disease_blast_cure": "ट्राइसाइक्लाज़ोल या आइसोप्रोथियोलेन फफूंदनाशक लगाएं। संवेदनशील अवस्था में 3-5 दिन खेत से पानी निकालें।",
      "disease_blast_prev": "ब्लास्ट प्रतिरोधी किस्में लगाएं। अत्यधिक नाइट्रोजन न डालें। सिंचाई का सही प्रबंधन करें।",
      "disease_blast_care": "नमी होने पर साप्ताहिक निरीक्षण करें। फसल चक्र अपनाएं। कटाई के बाद संक्रमित ठूंठ नष्ट करें।",

      "disease_stripe_rust_desc": "Puccinia striiformis से गेहूं की पत्तियों पर पंक्तियों में चमकदार पीले-नारंगी फफोले बनते हैं।",
      "disease_stripe_rust_cure": "संक्रमण के पहले संकेत पर प्रोपिकोनाज़ोल या टेबुकोनाज़ोल फफूंदनाशक लगाएं।",
      "disease_stripe_rust_prev": "प्रतिरोधी किस्में उगाएं। जल्दी बुआई से जोखिम कम होता है। पड़ोसी खेतों में रस्ट का ध्यान रखें।",
      "disease_stripe_rust_care": "कल्ले फूटने से खेत की जांच करें। घनी बुआई से बचें।",

      "disease_healthy_cure": "उपचार की आवश्यकता नहीं। नियमित पानी और उर्वरक देना जारी रखें।",
      "disease_healthy_prev": "सामान्य देखभाल जारी रखें। पर्याप्त धूप और कीट निगरानी सुनिश्चित करें।",
      "disease_healthy_care": "प्रकाश संश्लेषण बेहतर करने के लिए समय-समय पर पत्तियाँ साफ करें। मौसमी कीटों के शुरुआती संकेत देखते रहें।",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
