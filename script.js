// Translation System
const translations = {
    en: {
        // App Title
        app_title: "Grow & Thrive",
        
        // Welcome Screen
        welcome_title: "🌱 Welcome to Grow & Thrive!",
        welcome_description: "This app helps you use what you have to grow your own food. Whether you don't have a job or struggle to buy groceries — planting vegetables at home can give you food to eat and even sell.",
        welcome_user: "🎉 Welcome, User!",
        welcome_instruction: "You're now part of the Grow & Thrive community. Start by picking a vegetable below to learn how to plant and grow it.",
        
        // Features
        feature_1: "Learn what to plant",
        feature_2: "Follow step-by-step planting guides",
        feature_3: "Get reminders to water your plants",
        feature_4: "Track growth from day 1 to harvest",
        feature_5: "Learn how to cook or sell your veggies",
        
        // Buttons
        sign_up: "Sign Up",
        login: "Login",
        create_account: "Create Account",
        
        // Auth
        why_signup: "Why Sign Up?",
        signup_benefits: "Creating an account helps you:",
        benefit_1: "Save your planting progress",
        benefit_2: "Get watering reminders",
        benefit_3: "Track your harvest",
        benefit_4: "Sell or cook your vegetables",
        first_name: "First Name",
        last_name: "Last Name",
        age: "Age",
        email: "Email",
        password: "Password",
        password_req_length: "At least 8 characters",
        password_req_uppercase: "One uppercase letter",
        password_req_symbol: "One special character",
        already_have_account: "Already have an account?",
        login_here: "Login here",
        welcome_back: "Welcome Back!",
        login_description: "Log in to continue planting, growing, and feeding your future.",
        no_account: "Don't have an account?",
        sign_up_here: "Sign up here",
        forgot_password: "Forgot Password?",
        
        // Search
        search_vegetables: "Search vegetables...",
        
        // Tabs
        soil_check: "Soil Check",
        resources: "Resources",
        instructions: "Instructions",
        growth_tracker: "Growth Tracker",
        post_harvest: "Post-Harvest",
        
        // Soil Check
        soil_suitability_check: "Soil Suitability Check",
        soil_type_question: "What type of soil do you have?",
        select_soil_type: "Select soil type",
        clay: "Clay",
        sandy: "Sandy",
        loamy: "Loamy",
        dont_know: "I don't know",
        rainfall_question: "How often does it rain in your area?",
        select_frequency: "Select frequency",
        daily: "Daily",
        weekly: "Weekly",
        monthly: "Monthly",
        rarely: "Rarely",
        fertilizer_question: "Do you have access to compost or fertilizer?",
        select_option: "Select option",
        yes: "Yes",
        no: "No",
        check_soil_suitability: "Check Soil Suitability",
        
        // Resources
        required_resources_tools: "Required Resources & Tools",
        tools: "Tools",
        seeds: "Seeds",
        soil_fertilizer: "Soil & Fertilizer",
        
        // Instructions
        planting_instructions: "Planting Instructions",
        video_tutorial: "Video Tutorial",
        video_placeholder: "Video tutorial will be embedded here",
        
        // Growth Tracker
        planting_calendar: "Planting Calendar",
        todays_tasks: "Today's Tasks",
        start_tracking: "Start Tracking This Plant",
        
        // Post Harvest
        post_harvest_options: "Post-Harvest Options",
        sell_veggies: "Sell Your Veggies",
        sell_description: "List your vegetables for sale in our marketplace",
        go_to_marketplace: "Go to Marketplace",
        cook_veggies: "Cook Your Veggies",
        cook_description: "Find delicious recipes using your harvested vegetables",
        view_recipes: "View Recipes",
        
        // Marketplace
        marketplace: "Marketplace",
        sell_vegetables: "Sell Your Vegetables",
        vegetable_name: "Vegetable Name",
        quantity_kg: "Quantity (kg)",
        price_per_kg: "Price per kg (R)",
        contact_information: "Contact Information",
        phone_or_email: "Phone or email",
        list_for_sale: "List for Sale",
        available_vegetables: "Available Vegetables",
        
        // Password Reset
        reset_password: "Reset Password",
        need_help: "Need Help?",
        reset_description: "Enter your email address and we'll send you a link to reset your password.",
        email_address: "Email Address",
        send_reset_link: "Send Reset Link",
        remember_password: "Remember your password?",
        create_new_password: "Create New Password",
        almost_done: "Almost Done!",
        new_password_description: "Enter your new password below. Make sure it's secure and easy to remember.",
        new_password: "New Password",
        confirm_new_password: "Confirm New Password",
        
        // Recipes
        recipes: "Recipes"
    },
    
    af: {
        app_title: "Groe & Gedy",
        welcome_title: "🌱 Welkom by Groe & Gedy!",
        welcome_description: "Hierdie app help jou om te gebruik wat jy het om jou eie kos te kweek. Of jy nou nie werk het nie of sukkel om kruideniersware te koop — groente by die huis plant kan jou kos gee om te eet en selfs te verkoop.",
        welcome_user: "🎉 Welkom, Gebruiker!",
        welcome_instruction: "Jy is nou deel van die Groe & Gedy gemeenskap. Begin deur 'n groente hieronder te kies om te leer hoe om dit te plant en te kweek.",
        feature_1: "Leer wat om te plant",
        feature_2: "Volg stap-vir-stap plantgidse",
        feature_3: "Kry herinnerings om jou plante nat te maak",
        feature_4: "Spoor groei van dag 1 tot oes",
        feature_5: "Leer hoe om jou groente te kook of te verkoop",
        sign_up: "Teken Aan",
        login: "Teken In",
        create_account: "Skep Rekening",
        why_signup: "Hoekom Aanmeld?",
        signup_benefits: "Om 'n rekening te skep help jou om:",
        benefit_1: "Jou plantvordering te stoor",
        benefit_2: "Waterherinnerings te kry",
        benefit_3: "Jou oes dop te hou",
        benefit_4: "Jou groente te verkoop of te kook",
        first_name: "Voornaam",
        last_name: "Van",
        age: "Ouderdom",
        email: "E-pos",
        password: "Wagwoord",
        password_req_length: "Ten minste 8 karakters",
        password_req_uppercase: "Een hoofletter",
        password_req_symbol: "Een spesiale karakter",
        already_have_account: "Het jy reeds 'n rekening?",
        login_here: "Teken hier in",
        welcome_back: "Welkom Terug!",
        login_description: "Teken in om voort te gaan met plant, groei en voed jou toekoms.",
        no_account: "Het jy nie 'n rekening nie?",
        sign_up_here: "Teken hier aan",
        forgot_password: "Wagwoord Vergeet?",
        search_vegetables: "Soek groente...",
        soil_check: "Grond Kontrole",
        resources: "Hulpbronne",
        instructions: "Instruksies",
        growth_tracker: "Groei Dop Hou",
        post_harvest: "Na-Oes",
        soil_suitability_check: "Grond Geskiktheid Kontrole",
        soil_type_question: "Watter tipe grond het jy?",
        select_soil_type: "Kies grond tipe",
        clay: "Klei",
        sandy: "Sand",
        loamy: "Leem",
        dont_know: "Ek weet nie",
        rainfall_question: "Hoe dikwels reën dit in jou area?",
        select_frequency: "Kies frekwensie",
        daily: "Daagliks",
        weekly: "Weekliks",
        monthly: "Maandeliks",
        rarely: "Skaars",
        fertilizer_question: "Het jy toegang tot kompos of kunsmis?",
        select_option: "Kies opsie",
        yes: "Ja",
        no: "Nee",
        check_soil_suitability: "Kontroleer Grond Geskiktheid",
        required_resources_tools: "Benodigde Hulpbronne & Gereedskap",
        tools: "Gereedskap",
        seeds: "Sade",
        soil_fertilizer: "Grond & Kunsmis",
        planting_instructions: "Plant Instruksies",
        video_tutorial: "Video Tutoriaal",
        video_placeholder: "Video tutoriaal sal hier ingebed word",
        planting_calendar: "Plant Kalender",
        todays_tasks: "Vandag se Take",
        start_tracking: "Begin Dop Hou van Hierdie Plant",
        post_harvest_options: "Na-Oes Opsies",
        sell_veggies: "Verkoop Jou Groente",
        sell_description: "Lys jou groente te koop in ons markplein",
        go_to_marketplace: "Gaan na Markplein",
        cook_veggies: "Kook Jou Groente",
        cook_description: "Vind heerlike resepte met jou geoes groente",
        view_recipes: "Bekyk Resepte",
        marketplace: "Markplein",
        sell_vegetables: "Verkoop Jou Groente",
        vegetable_name: "Groente Naam",
        quantity_kg: "Hoeveelheid (kg)",
        price_per_kg: "Prys per kg (R)",
        contact_information: "Kontak Inligting",
        phone_or_email: "Foon of e-pos",
        list_for_sale: "Lys te Koop",
        available_vegetables: "Beskikbare Groente",
        reset_password: "Herstel Wagwoord",
        need_help: "Benodig Hulp?",
        reset_description: "Voer jou e-posadres in en ons sal jou 'n skakel stuur om jou wagwoord te herstel.",
        email_address: "E-pos Adres",
        send_reset_link: "Stuur Herstel Skakel",
        remember_password: "Onthou jy jou wagwoord?",
        create_new_password: "Skep Nuwe Wagwoord",
        almost_done: "Byna Klaar!",
        new_password_description: "Voer jou nuwe wagwoord hieronder in. Maak seker dit is veilig en maklik om te onthou.",
        new_password: "Nuwe Wagwoord",
        confirm_new_password: "Bevestig Nuwe Wagwoord",
        recipes: "Resepte"
    },
    
    zu: {
        app_title: "Khula & Phila",
        welcome_title: "🌱 Wamukelekile ku-Khula & Phila!",
        welcome_description: "Le app ikusiza ukusebenzisa lokho onakho ukutshala ukudla kwakho. Noma ungenayo imisebenzi noma ubunzima bokuthenga ukudla — ukutshala imifino ekhaya kungakunike ukudla okudliwayo futhi nokudayisa.",
        welcome_user: "🎉 Wamukelekile, Umsebenzisi!",
        welcome_instruction: "Manje uyingxenye yomphakathi we-Khula & Phila. Qala ngokukhetha umfino ngezansi ukuze ufunde ukuthi ungawutshala futhi ukhulise kanjani.",
        feature_1: "Funda ukuthi yini okufanele utshale",
        feature_2: "Landela iziqondiso zokutshala ngezinyathelo",
        feature_3: "Thola izikhumbuzo zokunisela izitshalo zakho",
        feature_4: "Landela ukukhula kusuka ngosuku loku-1 kuya kokuvuna",
        feature_5: "Funda ukuthi ungawupheka noma udayise kanjani imifino yakho",
        sign_up: "Bhalisa",
        login: "Ngena",
        create_account: "Dala I-akhawunti",
        why_signup: "Kungani Ukubhalisa?",
        signup_benefits: "Ukudala i-akhawunti kukusiza ukuthi:",
        benefit_1: "Londoloze inqubekelaphambili yakho yokutshala",
        benefit_2: "Thole izikhumbuzo zokunisela",
        benefit_3: "Landela ukuvuna kwakho",
        benefit_4: "Dayisa noma upheke imifino yakho",
        first_name: "Igama Lokuqala",
        last_name: "Isibongo",
        age: "Ubudala",
        email: "I-imeyili",
        password: "Iphasiwedi",
        password_req_length: "Okungenani amagama angu-8",
        password_req_uppercase: "Unobumba olukhulu olulodwa",
        password_req_symbol: "Unobumba olukhethekile olulodwa",
        already_have_account: "Usenayo i-akhawunti?",
        login_here: "Ngena lapha",
        welcome_back: "Wamukelekile Emuva!",
        login_description: "Ngena ukuze uqhubeke nokutshala, ukukhula nokondla ikusasa lakho.",
        no_account: "Awunayo i-akhawunti?",
        sign_up_here: "Bhalisa lapha",
        forgot_password: "Ukhohlwe Iphasiwedi?",
        search_vegetables: "Sesha imifino...",
        soil_check: "Ukuhlola Inhlabathi",
        resources: "Izinsiza",
        instructions: "Izixwayiso",
        growth_tracker: "Ukuqapha Ukukhula",
        post_harvest: "Emva Kokuvuna",
        soil_suitability_check: "Ukuhlola Ukufaneleka Kwenhlabathi",
        soil_type_question: "Uhlobo luni lwenhlabathi onalo?",
        select_soil_type: "Khetha uhlobo lwenhlabathi",
        clay: "Umbumba",
        sandy: "Isihlabathi",
        loamy: "Inhlabathi enomhlabathi",
        dont_know: "Angazi",
        rainfall_question: "Kunamathiselani imvula endaweni yakho?",
        select_frequency: "Khetha ubuningi",
        daily: "Nsuku zonke",
        weekly: "Ngesonto",
        monthly: "Ngenyanga",
        rarely: "Kakade",
        fertilizer_question: "Uyathola amathumba noma umanyolo?",
        select_option: "Khetha inketho",
        yes: "Yebo",
        no: "Cha",
        check_soil_suitability: "Hlola Ukufaneleka Kwenhlabathi",
        required_resources_tools: "Izinsiza Nezinsimbi Ezidingekayo",
        tools: "Izinsimbi",
        seeds: "Imbewu",
        soil_fertilizer: "Inhlabathi & Umanyolo",
        planting_instructions: "Izixwayiso Zokutshala",
        video_tutorial: "Ividiyo Yokufundisa",
        video_placeholder: "Ividiyo yokufundisa izofakwa lapha",
        planting_calendar: "Ikhalenda Lokutshala",
        todays_tasks: "Imisebenzi Yanamuhla",
        start_tracking: "Qala Ukuqapha Lesi Sitshalo",
        post_harvest_options: "Izinketho Emva Kokuvuna",
        sell_veggies: "Dayisa Imifino Yakho",
        sell_description: "Bhala imifino yakho ukudayiswa emakethe yethu",
        go_to_marketplace: "Iya Emakethe",
        cook_veggies: "Pheka Imifino Yakho",
        cook_description: "Thola amaresiphi amnandi usebenzisa imifino yakho evunwe",
        view_recipes: "Buka Amaresiphi",
        marketplace: "Imakethe",
        sell_vegetables: "Dayisa Imifino Yakho",
        vegetable_name: "Igama Lomfino",
        quantity_kg: "Inani (kg)",
        price_per_kg: "Intengo nge-kg (R)",
        contact_information: "Ulwazi Lokuxhumana",
        phone_or_email: "Ucingo noma i-imeyili",
        list_for_sale: "Bhala Ukudayiswa",
        available_vegetables: "Imifino Etholakalayo",
        reset_password: "Buyisela Iphasiwedi",
        need_help: "Udinga Usizo?",
        reset_description: "Faka ikheli lakho le-imeyili futhi sizokuthumela isixhumanisi sokubuyisela iphasiwedi yakho.",
        email_address: "Ikheli Le-imeyili",
        send_reset_link: "Thumela Isixhumanisi Sokubuyisela",
        remember_password: "Uyakhumbula iphasiwedi yakho?",
        create_new_password: "Dala Iphasiwedi Entsha",
        almost_done: "Kuseyisencane!",
        new_password_description: "Faka iphasiwedi yakho entsha ngezansi. Qiniseka ukuthi iphephile futhi kulula ukuyikhumbula.",
        new_password: "Iphasiwedi Entsha",
        confirm_new_password: "Qinisekisa Iphasiwedi Entsha",
        recipes: "Amaresiphi"
    },
    
    xh: {
        app_title: "Khula & Phila",
        welcome_title: "🌱 Wamkelekile ku-Khula & Phila!",
        welcome_description: "Esi sixhobo sikunceda ukusebenzisa oko unako ukutshala ukutya kwakho. Nokuba awunamsebenzi okanye ubunzima bokuthenga ukutya — ukutshala imifuno ekhaya kunokukunika ukutya okudliwayo nokudayisa.",
        welcome_user: "🎉 Wamkelekile, Umsebenzisi!",
        welcome_instruction: "Ngoku uyingxenye yomphakathi we-Khula & Phila. Qala ngokukhetha umfuno ngezantsi ukuze ufunde ukuba ungawutshala nokukhulisa njani.",
        feature_1: "Funda ukuba yintoni ekufuneka utshale",
        feature_2: "Landela izikhokelo zokutshala ngezinyathelo",
        feature_3: "Fumana izikhumbuzo zokunisela izityalo zakho",
        feature_4: "Landela ukukhula ukusuka kusuku loku-1 ukuya kuvuno",
        feature_5: "Funda ukuba ungawupheka okanye udayise njani imifuno yakho",
        sign_up: "Bhalisa",
        login: "Ngena",
        create_account: "Yenza I-akhawunti",
        why_signup: "Kutheni Ukubhalisa?",
        signup_benefits: "Ukwenza i-akhawunti kukunceda ukuba:",
        benefit_1: "Gcina inkqubela yakho yokutshala",
        benefit_2: "Fumane izikhumbuzo zokunisela",
        benefit_3: "Landela ukuvuno kwakho",
        benefit_4: "Dayisa okanye upheke imifuno yakho",
        first_name: "Igama Lokuqala",
        last_name: "Isibongo",
        age: "Ubudala",
        email: "I-imeyili",
        password: "Iphasiwedi",
        password_req_length: "Okungenani amagama ali-8",
        password_req_uppercase: "Unobumba olukhulu olunye",
        password_req_symbol: "Unobumba olukhethekile olunye",
        already_have_account: "Unayo i-akhawunti?",
        login_here: "Ngena apha",
        welcome_back: "Wamkelekile Emva!",
        login_description: "Ngena ukuze uqhubeke nokutshala, ukukhula nokondla ikamva lakho.",
        no_account: "Awunayo i-akhawunti?",
        sign_up_here: "Bhalisa apha",
        forgot_password: "Ukhohlwe Iphasiwedi?",
        search_vegetables: "Khangela imifuno...",
        soil_check: "Ukuhlola Umhlaba",
        resources: "Izixhobo",
        instructions: "Imiyalelo",
        growth_tracker: "Ukuqapha Ukukhula",
        post_harvest: "Emva Kuvuno",
        soil_suitability_check: "Ukuhlola Ukufaneleka Komhlaba",
        soil_type_question: "Luhlobo luni lomhlaba onalo?",
        select_soil_type: "Khetha uhlobo lomhlaba",
        clay: "Umbumba",
        sandy: "Isanti",
        loamy: "Umhlaba onomhlaba",
        dont_know: "Andazi",
        rainfall_question: "Kunamathiselani imvula kwindawo yakho?",
        select_frequency: "Khetha ubuninzi",
        daily: "Yonke imihla",
        weekly: "Ngeveki",
        monthly: "Ngenyanga",
        rarely: "Kakade",
        fertilizer_question: "Uyafumana amathumba okanye umanyolo?",
        select_option: "Khetha inketho",
        yes: "Ewe",
        no: "Hayi",
        check_soil_suitability: "Hlola Ukufaneleka Komhlaba",
        required_resources_tools: "Izixhobo Nezixhobo Ezifunekayo",
        tools: "Izixhobo",
        seeds: "Imbewu",
        soil_fertilizer: "Umhlaba & Umanyolo",
        planting_instructions: "Imyalelo Yokutshala",
        video_tutorial: "Ividiyo Yokufundisa",
        video_placeholder: "Ividiyo yokufundisa iza kufakwa apha",
        planting_calendar: "Ikhalenda Yokutshala",
        todays_tasks: "Imisebenzi Yanamhlanje",
        start_tracking: "Qala Ukuqapha Esi Sityalo",
        post_harvest_options: "Iinketho Emva Kuvuno",
        sell_veggies: "Dayisa Imifuno Yakho",
        sell_description: "Bhala imifuno yakho ukudayiswa kwimarike yethu",
        go_to_marketplace: "Iya Kwimarike",
        cook_veggies: "Pheka Imifuno Yakho",
        cook_description: "Thola amaresiphi amnandi usebenzisa imifuno yakho evunwe",
        view_recipes: "Jonga Amaresiphi",
        marketplace: "Imarike",
        sell_vegetables: "Dayisa Imifuno Yakho",
        vegetable_name: "Igama Lomfuno",
        quantity_kg: "Inani (kg)",
        price_per_kg: "Intengo nge-kg (R)",
        contact_information: "Ulwazi Lokuxhumana",
        phone_or_email: "Ucingo okanye i-imeyili",
        list_for_sale: "Bhala Ukudayiswa",
        available_vegetables: "Imifuno Ekhoyo",
        reset_password: "Buyisela Iphasiwedi",
        need_help: "Ufuna Uncedo?",
        reset_description: "Faka idilesi yakho ye-imeyili kwaye siza kuthumela ikhonkco lokubuyisela iphasiwedi yakho.",
        email_address: "Idilesi Ye-imeyili",
        send_reset_link: "Thumela Ikhonkco Lokubuyisela",
        remember_password: "Uyakhumbula iphasiwedi yakho?",
        create_new_password: "Yenza Iphasiwedi Entsha",
        almost_done: "Kuseyisencinci!",
        new_password_description: "Faka iphasiwedi yakho entsha ngezantsi. Qinisekisa ukuba iphephile kwaye kulula ukuyikhumbula.",
        new_password: "Iphasiwedi Entsha",
        confirm_new_password: "Qinisekisa Iphasiwedi Entsha",
        recipes: "Amaresiphi"
    }
};

// Add more languages (abbreviated for space)
const additionalTranslations = {
    nr: { app_title: "Khula & Phila", welcome_title: "🌱 Wamukelekile ku-Khula & Phila!" },
    st: { app_title: "Hola & Phela", welcome_title: "🌱 Rea u amohela ho-Hola & Phela!" },
    nso: { app_title: "Hola & Phela", welcome_title: "🌱 Rea u amohela ho-Hola & Phela!" },
    tn: { app_title: "Gola & Tshela", welcome_title: "🌱 Re a u amohela go-Gola & Tshela!" },
    ss: { app_title: "Khula & Phila", welcome_title: "🌱 Wamukelekile ku-Khula & Phila!" },
    ve: { app_title: "Khula & Pfa", welcome_title: "🌱 Ni takalelwa kha-Khula & Pfa!" },
    ts: { app_title: "Kula & Phela", welcome_title: "🌱 Ni amukeriwa eka-Kula & Phela!" },
    sasl: { app_title: "Grow & Thrive", welcome_title: "🌱 Welcome to Grow & Thrive!" }
};

// Merge additional translations
Object.keys(additionalTranslations).forEach(lang => {
    translations[lang] = { ...translations.en, ...additionalTranslations[lang] };
});

// Current language
let currentLanguage = 'en';

// Translation function
function translateText(key) {
    const lang = translations[currentLanguage] || translations.en;
    return lang[key] || translations.en[key] || key;
}

// Change language function
function changeLanguage(langCode) {
    currentLanguage = langCode;
    localStorage.setItem('preferredLanguage', langCode);
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.placeholder = translateText(key);
        } else {
            element.textContent = translateText(key);
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = translateText(key);
    });
    
    // Update welcome message if user is logged in
    if (currentUser) {
        updateWelcomeMessage();
    }
}

// Initialize language on page load
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    const languageDropdown = document.getElementById('language-dropdown');
    if (languageDropdown) {
        languageDropdown.value = savedLanguage;
        changeLanguage(savedLanguage);
    }
}

// Global variables
let currentUser = null;
let currentVegetable = null;
let userPlants = [];
let marketplaceListings = [];
let resetTokens = {};
let currentCalendarDate = new Date();
let currentPlantingDate = null;

// YouTube video mappings for vegetables (using real gardening tutorial videos)
const vegetableVideos = {
    'Tomatoes': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Carrots': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Spinach': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Bell Peppers': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Lettuce': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Cucumbers': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Zucchini': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Green Beans': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Onions': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Garlic': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Broccoli': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Cauliflower': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Kale': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Radishes': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Beets': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Sweet Corn': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Peas': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Potatoes': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Swiss Chard': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Arugula': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Eggplant': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Cabbage': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Brussels Sprouts': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Turnips': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Parsnips': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Leeks': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Celery': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Fennel': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Bok Choy': 'https://www.youtube.com/embed/8T7UBaN4u_k',
    'Mustard Greens': 'https://www.youtube.com/embed/8T7UBaN4u_k'
};

// Vegetable data
const vegetables = [
    {
        id: 1,
        name: 'Tomatoes',
        image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400',
        description: 'Easy to grow and very versatile. Perfect for beginners!',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: [
            { name: 'Garden trowel', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Stakes or cages', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Pruning shears', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        seeds: [
            { name: 'Tomato seeds', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Seedling trays', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        fertilizer: [
            { name: 'Compost', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Organic fertilizer', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        instructions: [
            { 
                step: 1, 
                title: 'Prepare Soil', 
                description: 'Mix compost into well-draining soil',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 2, 
                title: 'Plant Seeds', 
                description: 'Plant seeds 1/4 inch deep, 2 feet apart',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 3, 
                title: 'Water Regularly', 
                description: 'Keep soil moist but not waterlogged',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 4, 
                title: 'Support Plants', 
                description: 'Add stakes or cages when plants are 6 inches tall',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 5, 
                title: 'Harvest', 
                description: 'Pick when tomatoes are firm and fully colored',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            }
        ],
        growthDays: 70,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 2, task: 'Water lightly' },
            { day: 3, task: 'Water lightly' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Add support stakes' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Prune suckers' },
            { day: 42, task: 'Check for pests' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Harvest first tomatoes' },
            { day: 70, task: 'Full harvest' }
        ]
    },
    {
        id: 2,
        name: 'Carrots',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
        description: 'Root vegetables that grow well in loose, sandy soil.',
        soilType: 'sandy',
        rainfall: 'weekly',
        tools: [
            { name: 'Garden fork', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Rake', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Watering can', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        seeds: [
            { name: 'Carrot seeds', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        fertilizer: [
            { name: 'Compost', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Phosphorus-rich fertilizer', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        instructions: [
            { 
                step: 1, 
                title: 'Prepare Soil', 
                description: 'Loosen soil to 12 inches deep, remove rocks',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 2, 
                title: 'Plant Seeds', 
                description: 'Sow seeds 1/4 inch deep, 2 inches apart',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 3, 
                title: 'Water Gently', 
                description: 'Keep soil consistently moist',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 4, 
                title: 'Thin Seedlings', 
                description: 'Thin to 3 inches apart when 2 inches tall',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 5, 
                title: 'Harvest', 
                description: 'Pull carrots when tops are 1/2 inch in diameter',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            }
        ],
        growthDays: 60,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 2, task: 'Water gently' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Weed around plants' },
            { day: 35, task: 'Check soil moisture' },
            { day: 42, task: 'Fertilize lightly' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Check carrot size' },
            { day: 60, task: 'Harvest carrots' }
        ]
    },
    {
        id: 3,
        name: 'Spinach',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400',
        description: 'Fast-growing leafy green, perfect for salads and cooking.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: [
            { name: 'Garden trowel', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Watering can', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Scissors', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        seeds: [
            { name: 'Spinach seeds', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        fertilizer: [
            { name: 'Nitrogen-rich fertilizer', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' },
            { name: 'Compost', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200' }
        ],
        instructions: [
            { 
                step: 1, 
                title: 'Prepare Soil', 
                description: 'Work compost into well-draining soil',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 2, 
                title: 'Plant Seeds', 
                description: 'Sow seeds 1/2 inch deep, 2 inches apart',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 3, 
                title: 'Water Regularly', 
                description: 'Keep soil consistently moist',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 4, 
                title: 'Thin Plants', 
                description: 'Thin to 6 inches apart when 2 inches tall',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            },
            { 
                step: 5, 
                title: 'Harvest', 
                description: 'Pick outer leaves when 6 inches tall',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
            }
        ],
        growthDays: 45,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 2, task: 'Water lightly' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check for pests' },
            { day: 42, task: 'Harvest first leaves' },
            { day: 45, task: 'Full harvest' }
        ]
    },
    {
        id: 4,
        name: 'Bell Peppers',
        image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400',
        description: 'Colorful and nutritious, great for cooking and eating raw.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Stakes', 'Pruning shears'],
        seeds: ['Bell pepper seeds', 'Seedling trays'],
        fertilizer: ['Balanced fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 8 weeks before last frost' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 18 inches apart in garden' },
            { step: 3, title: 'Water Deeply', description: 'Water deeply but allow soil to dry between' },
            { step: 4, title: 'Support Plants', description: 'Add stakes for support as plants grow' },
            { step: 5, title: 'Harvest', description: 'Pick when peppers are firm and fully colored' }
        ],
        growthDays: 80,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Add support stakes' },
            { day: 49, task: 'Fertilize' },
            { day: 56, task: 'Check for pests' },
            { day: 63, task: 'Water deeply' },
            { day: 70, task: 'Check for flowers' },
            { day: 77, task: 'Harvest first peppers' },
            { day: 80, task: 'Full harvest' }
        ]
    },
    {
        id: 5,
        name: 'Lettuce',
        image: 'https://images.unsplash.com/photo-1622205313162-be1d5716a43b?w=400',
        description: 'Quick-growing salad green, perfect for beginners.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can', 'Scissors'],
        seeds: ['Lettuce seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into loose, well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/4 inch deep, 1 inch apart' },
            { step: 3, title: 'Water Lightly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Plants', description: 'Thin to 8 inches apart when 2 inches tall' },
            { step: 5, title: 'Harvest', description: 'Cut leaves when 6 inches tall' }
        ],
        growthDays: 50,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 2, task: 'Water lightly' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check for pests' },
            { day: 42, task: 'Harvest outer leaves' },
            { day: 50, task: 'Full harvest' }
        ]
    },
    {
        id: 6,
        name: 'Cucumbers',
        image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400',
        description: 'Refreshing and easy to grow, perfect for salads and pickling.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Trellis or cage', 'Watering can'],
        seeds: ['Cucumber seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1 inch deep, 12 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Support Vines', description: 'Add trellis when vines start growing' },
            { step: 5, title: 'Harvest', description: 'Pick when 6-8 inches long and firm' }
        ],
        growthDays: 55,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Water deeply' },
            { day: 21, task: 'Add trellis support' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check for flowers' },
            { day: 42, task: 'Water deeply' },
            { day: 49, task: 'Check for fruits' },
            { day: 55, task: 'Harvest cucumbers' }
        ]
    },
    {
        id: 7,
        name: 'Zucchini',
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400',
        description: 'Fast-growing summer squash, very productive and versatile.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Zucchini seeds'],
        fertilizer: ['Balanced fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1 inch deep, 3 feet apart' },
            { step: 3, title: 'Water Deeply', description: 'Water deeply but allow soil to dry between' },
            { step: 4, title: 'Monitor Growth', description: 'Check for pests and diseases regularly' },
            { step: 5, title: 'Harvest', description: 'Pick when 6-8 inches long for best flavor' }
        ],
        growthDays: 50,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Water deeply' },
            { day: 21, task: 'Fertilize lightly' },
            { day: 28, task: 'Check for flowers' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Check for fruits' },
            { day: 50, task: 'Harvest zucchini' }
        ]
    },
    {
        id: 8,
        name: 'Green Beans',
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400',
        description: 'Easy to grow and very productive, great for beginners.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Trellis (for pole beans)', 'Watering can'],
        seeds: ['Green bean seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1 inch deep, 4 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Support Plants', description: 'Add trellis for pole beans' },
            { step: 5, title: 'Harvest', description: 'Pick when pods are firm and crisp' }
        ],
        growthDays: 60,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Water deeply' },
            { day: 21, task: 'Add trellis if needed' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check for flowers' },
            { day: 42, task: 'Water deeply' },
            { day: 49, task: 'Check for pods' },
            { day: 60, task: 'Harvest beans' }
        ]
    },
    {
        id: 9,
        name: 'Onions',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
        description: 'Essential kitchen vegetable, can be grown from seeds or sets.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Onion seeds or sets'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds/Sets', description: 'Plant 1/2 inch deep, 4 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Fertilize', description: 'Apply nitrogen fertilizer every 3 weeks' },
            { step: 5, title: 'Harvest', description: 'Harvest when tops fall over and dry' }
        ],
        growthDays: 100,
        dailyTasks: [
            { day: 1, task: 'Plant seeds/sets' },
            { day: 7, task: 'Check for growth' },
            { day: 14, task: 'Water deeply' },
            { day: 21, task: 'Fertilize' },
            { day: 28, task: 'Water deeply' },
            { day: 35, task: 'Fertilize again' },
            { day: 42, task: 'Check for pests' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Fertilize' },
            { day: 70, task: 'Stop watering' },
            { day: 100, task: 'Harvest onions' }
        ]
    },
    {
        id: 10,
        name: 'Garlic',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Easy to grow and stores well, perfect for year-round use.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Garlic cloves'],
        fertilizer: ['Phosphorus-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Cloves', description: 'Plant cloves 2 inches deep, 6 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Fertilize', description: 'Apply fertilizer when shoots appear' },
            { step: 5, title: 'Harvest', description: 'Harvest when leaves turn yellow and fall over' }
        ],
        growthDays: 240,
        dailyTasks: [
            { day: 1, task: 'Plant garlic cloves' },
            { day: 14, task: 'Check for shoots' },
            { day: 28, task: 'Water deeply' },
            { day: 42, task: 'Fertilize' },
            { day: 56, task: 'Water deeply' },
            { day: 70, task: 'Check for pests' },
            { day: 84, task: 'Water deeply' },
            { day: 98, task: 'Fertilize' },
            { day: 112, task: 'Water deeply' },
            { day: 126, task: 'Check for scapes' },
            { day: 240, task: 'Harvest garlic' }
        ]
    },
    {
        id: 11,
        name: 'Broccoli',
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400',
        description: 'Nutritious cool-season crop, great for health-conscious gardeners.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Broccoli seeds', 'Seedling trays'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 6-8 weeks before transplanting' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 18 inches apart in garden' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Fertilize', description: 'Apply nitrogen fertilizer every 3 weeks' },
            { step: 5, title: 'Harvest', description: 'Cut central head when tight and firm' }
        ],
        growthDays: 70,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Fertilize' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Check for pests' },
            { day: 63, task: 'Water deeply' },
            { day: 70, task: 'Harvest broccoli' }
        ]
    },
    {
        id: 12,
        name: 'Cauliflower',
        image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3caa?w=400',
        description: 'Delicate cool-season vegetable, requires consistent care.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can', 'String for blanching'],
        seeds: ['Cauliflower seeds', 'Seedling trays'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 6-8 weeks before transplanting' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 18 inches apart in garden' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Blanch Heads', description: 'Tie leaves over head when 2-3 inches across' },
            { step: 5, title: 'Harvest', description: 'Cut when head is firm and white' }
        ],
        growthDays: 75,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Fertilize' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Check for head formation' },
            { day: 63, task: 'Blanch heads if needed' },
            { day: 75, task: 'Harvest cauliflower' }
        ]
    },
    {
        id: 13,
        name: 'Kale',
        image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=400',
        description: 'Hardy leafy green, very nutritious and cold-tolerant.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can', 'Scissors'],
        seeds: ['Kale seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/2 inch deep, 12 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Plants', description: 'Thin to 18 inches apart when 4 inches tall' },
            { step: 5, title: 'Harvest', description: 'Pick outer leaves when 8 inches tall' }
        ],
        growthDays: 55,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check for pests' },
            { day: 42, task: 'Harvest first leaves' },
            { day: 55, task: 'Full harvest' }
        ]
    },
    {
        id: 14,
        name: 'Radishes',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
        description: 'Fastest growing vegetable, perfect for impatient gardeners!',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Radish seeds'],
        fertilizer: ['Phosphorus-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into loose, well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/2 inch deep, 1 inch apart' },
            { step: 3, title: 'Water Lightly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Seedlings', description: 'Thin to 2 inches apart when 1 inch tall' },
            { step: 5, title: 'Harvest', description: 'Pull when radishes are 1 inch in diameter' }
        ],
        growthDays: 30,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 3, task: 'Check for seedlings' },
            { day: 7, task: 'Thin seedlings' },
            { day: 14, task: 'Water deeply' },
            { day: 21, task: 'Check radish size' },
            { day: 30, task: 'Harvest radishes' }
        ]
    },
    {
        id: 15,
        name: 'Beets',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Dual-purpose vegetable - eat both roots and greens.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Beet seeds'],
        fertilizer: ['Phosphorus-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into loose, well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/2 inch deep, 2 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Seedlings', description: 'Thin to 4 inches apart when 2 inches tall' },
            { step: 5, title: 'Harvest', description: 'Pull when beets are 2-3 inches in diameter' }
        ],
        growthDays: 60,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check beet size' },
            { day: 42, task: 'Water deeply' },
            { day: 49, task: 'Check for pests' },
            { day: 60, task: 'Harvest beets' }
        ]
    },
    {
        id: 16,
        name: 'Sweet Corn',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Summer favorite, best planted in blocks for pollination.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Sweet corn seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1 inch deep, 12 inches apart in blocks' },
            { step: 3, title: 'Water Deeply', description: 'Water deeply but allow soil to dry between' },
            { step: 4, title: 'Fertilize', description: 'Apply nitrogen fertilizer when 12 inches tall' },
            { step: 5, title: 'Harvest', description: 'Pick when kernels are plump and milky' }
        ],
        growthDays: 80,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Water deeply' },
            { day: 21, task: 'Fertilize' },
            { day: 28, task: 'Water deeply' },
            { day: 35, task: 'Check for tassels' },
            { day: 42, task: 'Water deeply' },
            { day: 49, task: 'Check for ears' },
            { day: 56, task: 'Water deeply' },
            { day: 80, task: 'Harvest corn' }
        ]
    },
    {
        id: 17,
        name: 'Peas',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Cool-season crop, perfect for early spring planting.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Trellis', 'Watering can'],
        seeds: ['Pea seeds'],
        fertilizer: ['Phosphorus-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1 inch deep, 2 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Support Vines', description: 'Add trellis when vines start growing' },
            { step: 5, title: 'Harvest', description: 'Pick when pods are plump but not bulging' }
        ],
        growthDays: 65,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Water deeply' },
            { day: 21, task: 'Add trellis support' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check for flowers' },
            { day: 42, task: 'Water deeply' },
            { day: 49, task: 'Check for pods' },
            { day: 65, task: 'Harvest peas' }
        ]
    },
    {
        id: 18,
        name: 'Potatoes',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Staple crop, can be grown in containers or garden beds.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden fork', 'Watering can'],
        seeds: ['Seed potatoes'],
        fertilizer: ['Phosphorus-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into loose, well-draining soil' },
            { step: 2, title: 'Plant Seed Potatoes', description: 'Plant 4 inches deep, 12 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Hill Soil', description: 'Add soil around plants as they grow' },
            { step: 5, title: 'Harvest', description: 'Dig when plants die back and tubers are mature' }
        ],
        growthDays: 100,
        dailyTasks: [
            { day: 1, task: 'Plant seed potatoes' },
            { day: 14, task: 'Check for shoots' },
            { day: 28, task: 'Water deeply' },
            { day: 35, task: 'Hill soil around plants' },
            { day: 42, task: 'Fertilize' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Hill soil again' },
            { day: 70, task: 'Water deeply' },
            { day: 84, task: 'Check for flowers' },
            { day: 100, task: 'Harvest potatoes' }
        ]
    },
    {
        id: 19,
        name: 'Swiss Chard',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Colorful and nutritious, grows well in hot weather.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can', 'Scissors'],
        seeds: ['Swiss chard seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/2 inch deep, 6 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Plants', description: 'Thin to 12 inches apart when 4 inches tall' },
            { step: 5, title: 'Harvest', description: 'Pick outer leaves when 8 inches tall' }
        ],
        growthDays: 55,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check for pests' },
            { day: 42, task: 'Harvest first leaves' },
            { day: 55, task: 'Full harvest' }
        ]
    },
    {
        id: 20,
        name: 'Arugula',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Peppery salad green, fast-growing and flavorful.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can', 'Scissors'],
        seeds: ['Arugula seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/4 inch deep, 1 inch apart' },
            { step: 3, title: 'Water Lightly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Plants', description: 'Thin to 4 inches apart when 2 inches tall' },
            { step: 5, title: 'Harvest', description: 'Pick leaves when 4 inches tall' }
        ],
        growthDays: 40,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 5, task: 'Check for seedlings' },
            { day: 10, task: 'Thin seedlings' },
            { day: 15, task: 'Water deeply' },
            { day: 20, task: 'Fertilize lightly' },
            { day: 25, task: 'Check for pests' },
            { day: 30, task: 'Harvest first leaves' },
            { day: 40, task: 'Full harvest' }
        ]
    },
    {
        id: 21,
        name: 'Eggplant',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Warm-season favorite, perfect for Mediterranean dishes.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Stakes', 'Watering can'],
        seeds: ['Eggplant seeds', 'Seedling trays'],
        fertilizer: ['Balanced fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 8 weeks before last frost' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 24 inches apart in garden' },
            { step: 3, title: 'Water Deeply', description: 'Water deeply but allow soil to dry between' },
            { step: 4, title: 'Support Plants', description: 'Add stakes for support as plants grow' },
            { step: 5, title: 'Harvest', description: 'Pick when skin is glossy and fruit is firm' }
        ],
        growthDays: 85,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Add support stakes' },
            { day: 49, task: 'Fertilize' },
            { day: 56, task: 'Check for flowers' },
            { day: 63, task: 'Water deeply' },
            { day: 70, task: 'Check for fruits' },
            { day: 85, task: 'Harvest eggplant' }
        ]
    },
    {
        id: 22,
        name: 'Cabbage',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Cool-season crop, great for coleslaw and fermenting.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Cabbage seeds', 'Seedling trays'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 6-8 weeks before transplanting' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 18 inches apart in garden' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Fertilize', description: 'Apply nitrogen fertilizer every 3 weeks' },
            { step: 5, title: 'Harvest', description: 'Cut when head is firm and solid' }
        ],
        growthDays: 80,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Fertilize' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Check for head formation' },
            { day: 63, task: 'Water deeply' },
            { day: 80, task: 'Harvest cabbage' }
        ]
    },
    {
        id: 23,
        name: 'Brussels Sprouts',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Cool-season crop, sprouts form along the stem.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Brussels sprouts seeds', 'Seedling trays'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 6-8 weeks before transplanting' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 24 inches apart in garden' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Fertilize', description: 'Apply nitrogen fertilizer every 3 weeks' },
            { step: 5, title: 'Harvest', description: 'Pick sprouts from bottom up when 1 inch diameter' }
        ],
        growthDays: 100,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Fertilize' },
            { day: 49, task: 'Water deeply' },
            { day: 56, task: 'Check for sprout formation' },
            { day: 63, task: 'Water deeply' },
            { day: 70, task: 'Fertilize' },
            { day: 100, task: 'Harvest sprouts' }
        ]
    },
    {
        id: 24,
        name: 'Turnips',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Fast-growing root vegetable, both roots and greens are edible.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Turnip seeds'],
        fertilizer: ['Phosphorus-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into loose, well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/2 inch deep, 2 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Seedlings', description: 'Thin to 4 inches apart when 2 inches tall' },
            { step: 5, title: 'Harvest', description: 'Pull when roots are 2-3 inches in diameter' }
        ],
        growthDays: 50,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Check root size' },
            { day: 42, task: 'Water deeply' },
            { day: 50, task: 'Harvest turnips' }
        ]
    },
    {
        id: 25,
        name: 'Parsnips',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Sweet root vegetable, best flavor after frost.',
        soilType: 'sandy',
        rainfall: 'weekly',
        tools: ['Garden fork', 'Watering can'],
        seeds: ['Parsnip seeds'],
        fertilizer: ['Phosphorus-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Loosen soil to 12 inches deep, remove rocks' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/2 inch deep, 3 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Seedlings', description: 'Thin to 6 inches apart when 2 inches tall' },
            { step: 5, title: 'Harvest', description: 'Dig after first frost for best flavor' }
        ],
        growthDays: 120,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 14, task: 'Check for seedlings' },
            { day: 21, task: 'Thin seedlings' },
            { day: 28, task: 'Water deeply' },
            { day: 35, task: 'Fertilize lightly' },
            { day: 42, task: 'Water deeply' },
            { day: 49, task: 'Check for pests' },
            { day: 56, task: 'Water deeply' },
            { day: 120, task: 'Harvest parsnips' }
        ]
    },
    {
        id: 26,
        name: 'Leeks',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Mild onion flavor, great for soups and stews.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Leek seeds', 'Seedling trays'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 8-10 weeks before transplanting' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 6 inches apart in trenches' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Hill Soil', description: 'Add soil around stems to blanch them' },
            { step: 5, title: 'Harvest', description: 'Pull when stems are 1 inch in diameter' }
        ],
        growthDays: 120,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Hill soil around stems' },
            { day: 49, task: 'Fertilize' },
            { day: 56, task: 'Water deeply' },
            { day: 63, task: 'Hill soil again' },
            { day: 120, task: 'Harvest leeks' }
        ]
    },
    {
        id: 27,
        name: 'Celery',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Crisp stalks, requires consistent moisture and care.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Celery seeds', 'Seedling trays'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Start Indoors', description: 'Start seeds indoors 10-12 weeks before transplanting' },
            { step: 2, title: 'Transplant', description: 'Plant seedlings 12 inches apart in garden' },
            { step: 3, title: 'Water Frequently', description: 'Keep soil very moist at all times' },
            { step: 4, title: 'Fertilize', description: 'Apply nitrogen fertilizer every 2 weeks' },
            { step: 5, title: 'Harvest', description: 'Cut stalks when 8-12 inches tall' }
        ],
        growthDays: 130,
        dailyTasks: [
            { day: 1, task: 'Start seeds indoors' },
            { day: 14, task: 'Check seedlings' },
            { day: 28, task: 'Transplant to garden' },
            { day: 35, task: 'Water daily' },
            { day: 42, task: 'Fertilize' },
            { day: 49, task: 'Water daily' },
            { day: 56, task: 'Fertilize' },
            { day: 63, task: 'Water daily' },
            { day: 130, task: 'Harvest celery' }
        ]
    },
    {
        id: 28,
        name: 'Fennel',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Anise-flavored bulb, great for Mediterranean cooking.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can'],
        seeds: ['Fennel seeds'],
        fertilizer: ['Balanced fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/4 inch deep, 12 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Plants', description: 'Thin to 18 inches apart when 4 inches tall' },
            { step: 5, title: 'Harvest', description: 'Cut bulb when 3-4 inches in diameter' }
        ],
        growthDays: 90,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 7, task: 'Check for seedlings' },
            { day: 14, task: 'Thin seedlings' },
            { day: 21, task: 'Water deeply' },
            { day: 28, task: 'Fertilize lightly' },
            { day: 35, task: 'Water deeply' },
            { day: 42, task: 'Check for bulb formation' },
            { day: 49, task: 'Water deeply' },
            { day: 90, task: 'Harvest fennel' }
        ]
    },
    {
        id: 29,
        name: 'Bok Choy',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Asian green, fast-growing and very nutritious.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can', 'Scissors'],
        seeds: ['Bok choy seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/4 inch deep, 6 inches apart' },
            { step: 3, title: 'Water Regularly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Plants', description: 'Thin to 12 inches apart when 3 inches tall' },
            { step: 5, title: 'Harvest', description: 'Cut entire plant when 8-10 inches tall' }
        ],
        growthDays: 45,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 5, task: 'Check for seedlings' },
            { day: 10, task: 'Thin seedlings' },
            { day: 15, task: 'Water deeply' },
            { day: 20, task: 'Fertilize lightly' },
            { day: 25, task: 'Check for pests' },
            { day: 30, task: 'Water deeply' },
            { day: 45, task: 'Harvest bok choy' }
        ]
    },
    {
        id: 30,
        name: 'Mustard Greens',
        image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400',
        description: 'Spicy leafy green, great for adding flavor to dishes.',
        soilType: 'loamy',
        rainfall: 'weekly',
        tools: ['Garden trowel', 'Watering can', 'Scissors'],
        seeds: ['Mustard green seeds'],
        fertilizer: ['Nitrogen-rich fertilizer', 'Compost'],
        instructions: [
            { step: 1, title: 'Prepare Soil', description: 'Work compost into well-draining soil' },
            { step: 2, title: 'Plant Seeds', description: 'Sow seeds 1/4 inch deep, 2 inches apart' },
            { step: 3, title: 'Water Lightly', description: 'Keep soil consistently moist' },
            { step: 4, title: 'Thin Plants', description: 'Thin to 6 inches apart when 2 inches tall' },
            { step: 5, title: 'Harvest', description: 'Pick leaves when 6 inches tall' }
        ],
        growthDays: 40,
        dailyTasks: [
            { day: 1, task: 'Plant seeds' },
            { day: 5, task: 'Check for seedlings' },
            { day: 10, task: 'Thin seedlings' },
            { day: 15, task: 'Water deeply' },
            { day: 20, task: 'Fertilize lightly' },
            { day: 25, task: 'Check for pests' },
            { day: 30, task: 'Harvest first leaves' },
            { day: 40, task: 'Full harvest' }
        ]
    }
];

// Recipe data
const recipes = [
    {
        id: 1,
        name: 'Fresh Tomato Salad',
        ingredients: ['4 ripe tomatoes', '1/4 cup olive oil', '2 tbsp balsamic vinegar', 'Fresh basil', 'Salt and pepper'],
        instructions: 'Slice tomatoes and arrange on a plate. Drizzle with olive oil and balsamic vinegar. Garnish with fresh basil and season with salt and pepper.',
        difficulty: 'Easy',
        time: '10 minutes'
    },
    {
        id: 2,
        name: 'Carrot and Ginger Soup',
        ingredients: ['6 large carrots', '1 onion', '2 cloves garlic', '1 inch ginger', '4 cups vegetable broth', 'Coconut milk'],
        instructions: 'Sauté onion, garlic, and ginger. Add chopped carrots and broth. Simmer until carrots are tender. Blend until smooth and add coconut milk.',
        difficulty: 'Medium',
        time: '30 minutes'
    },
    {
        id: 3,
        name: 'Spinach and Feta Omelette',
        ingredients: ['3 eggs', '1 cup fresh spinach', '1/4 cup feta cheese', '1 tbsp butter', 'Salt and pepper'],
        instructions: 'Beat eggs with salt and pepper. Melt butter in pan, add spinach until wilted. Pour in eggs, add feta, fold and cook until set.',
        difficulty: 'Easy',
        time: '15 minutes'
    },
    {
        id: 4,
        name: 'Stuffed Bell Peppers',
        ingredients: ['4 bell peppers', '1 cup cooked rice', '1/2 lb ground meat', '1 onion', '2 cloves garlic', 'Tomato sauce'],
        instructions: 'Cut tops off peppers and remove seeds. Mix rice, meat, onion, and garlic. Stuff peppers, top with tomato sauce, bake at 375°F for 45 minutes.',
        difficulty: 'Medium',
        time: '60 minutes'
    },
    {
        id: 5,
        name: 'Lettuce Wraps',
        ingredients: ['1 head lettuce', '1 lb ground chicken', '1/2 cup water chestnuts', '2 tbsp soy sauce', '1 tbsp ginger', 'Hoisin sauce'],
        instructions: 'Brown chicken with ginger and soy sauce. Add chopped water chestnuts. Serve in lettuce leaves with hoisin sauce.',
        difficulty: 'Easy',
        time: '20 minutes'
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeApp();
});

function initializeApp() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showScreen('welcome-screen');
        loadVegetables();
        updateWelcomeMessage();
    }
    
    // Add event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Sign up form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Password validation
    const signupPassword = document.getElementById('signup-password');
    if (signupPassword) {
        signupPassword.addEventListener('input', validatePassword);
    }
    
    // Email validation
    const signupEmail = document.getElementById('signup-email');
    if (signupEmail) {
        signupEmail.addEventListener('input', validateEmail);
    }
    
    // Vegetable search
    const vegetableSearch = document.getElementById('vegetable-search');
    if (vegetableSearch) {
        vegetableSearch.addEventListener('input', filterVegetables);
    }
    
    // Soil check form
    const soilForm = document.getElementById('soil-form');
    if (soilForm) {
        soilForm.addEventListener('submit', handleSoilCheck);
    }
    
    // Sell form
    const sellForm = document.getElementById('sell-form');
    if (sellForm) {
        sellForm.addEventListener('submit', handleSell);
    }
    
    // Forgot password form
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }
    
    // Reset password form
    const resetPasswordForm = document.getElementById('reset-password-form');
    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', handleResetPassword);
    }
    
    // Password validation for reset
    const newPassword = document.getElementById('new-password');
    if (newPassword) {
        newPassword.addEventListener('input', validateResetPassword);
    }
    
    const confirmPassword = document.getElementById('confirm-password');
    if (confirmPassword) {
        confirmPassword.addEventListener('input', validateConfirmPassword);
    }
}

// Screen management
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        targetScreen.classList.add('fade-in');
        
        // Load content based on screen
        switch(screenId) {
            case 'welcome-screen':
                loadVegetables();
                updateWelcomeMessage();
                break;
            case 'marketplace-screen':
                loadMarketplace();
                break;
            case 'recipes-screen':
                loadRecipes();
                break;
        }
    }
}

// Authentication functions
function handleSignup(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('signup-firstname').value;
    const lastName = document.getElementById('signup-lastname').value;
    const age = document.getElementById('signup-age').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Validate all fields
    if (!validateAllFields(firstName, lastName, age, email, password)) {
        return;
    }
    
    // Create user object
    currentUser = {
        id: Date.now(),
        firstName,
        lastName,
        age: parseInt(age),
        email,
        password, // In a real app, this would be hashed
        createdAt: new Date().toISOString()
    };
    
    // Save user
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Show success message and redirect
    showMessage('Account created successfully!', 'success');
    setTimeout(() => {
        showScreen('welcome-screen');
    }, 1500);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // In a real app, this would check against a database
    // For demo purposes, we'll check if user exists in localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.email === email && user.password === password) {
            currentUser = user;
            showMessage('Login successful!', 'success');
            setTimeout(() => {
                showScreen('welcome-screen');
            }, 1500);
        } else {
            showMessage('Invalid email or password', 'error');
        }
    } else {
        showMessage('No account found. Please sign up first.', 'error');
    }
}

function validateAllFields(firstName, lastName, age, email, password) {
    if (!firstName || !lastName || !age || !email || !password) {
        showMessage('Please fill in all fields', 'error');
        return false;
    }
    
    if (age < 13 || age > 120) {
        showMessage('Age must be between 13 and 120', 'error');
        return false;
    }
    
    if (!validateEmailFormat(email)) {
        showMessage('Please enter a valid email address', 'error');
        return false;
    }
    
    if (!validatePasswordStrength(password)) {
        showMessage('Password does not meet requirements', 'error');
        return false;
    }
    
    return true;
}

function validateEmail() {
    const email = document.getElementById('signup-email').value;
    const errorElement = document.getElementById('email-error');
    
    if (!validateEmailFormat(email)) {
        errorElement.textContent = 'Please enter a valid email address';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword() {
    const password = document.getElementById('signup-password').value;
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        symbol: /[\W_]/.test(password)
    };
    
    // Update requirement indicators
    document.getElementById('req-length').classList.toggle('met', requirements.length);
    document.getElementById('req-uppercase').classList.toggle('met', requirements.uppercase);
    document.getElementById('req-symbol').classList.toggle('met', requirements.symbol);
}

function validatePasswordStrength(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[\W_]/.test(password);
}

// Vegetable functions
function loadVegetables() {
    const grid = document.getElementById('vegetables-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    vegetables.forEach(vegetable => {
        const card = createVegetableCard(vegetable);
        grid.appendChild(card);
    });
}

function createVegetableCard(vegetable) {
    const card = document.createElement('div');
    card.className = 'vegetable-card';
    card.onclick = () => openVegetableDetail(vegetable);
    
    card.innerHTML = `
        <img src="${vegetable.image}" alt="${vegetable.name}">
        <div class="vegetable-card-content">
            <h3>${vegetable.name}</h3>
            <p>${vegetable.description}</p>
        </div>
    `;
    
    return card;
}

function filterVegetables() {
    const searchTerm = document.getElementById('vegetable-search').value.toLowerCase();
    const grid = document.getElementById('vegetables-grid');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredVegetables = vegetables.filter(vegetable =>
        vegetable.name.toLowerCase().includes(searchTerm)
    );
    
    filteredVegetables.forEach(vegetable => {
        const card = createVegetableCard(vegetable);
        grid.appendChild(card);
    });
}

function openVegetableDetail(vegetable) {
    currentVegetable = vegetable;
    
    // Update vegetable detail screen
    document.getElementById('vegetable-name').textContent = vegetable.name;
    document.getElementById('vegetable-img').src = vegetable.image;
    document.getElementById('vegetable-img').alt = vegetable.name;
    
    // Load resources
    loadVegetableResources(vegetable);
    
    // Load instructions
    loadVegetableInstructions(vegetable);
    
    // Load growth tracker
    loadGrowthTracker(vegetable);
    
    showScreen('vegetable-detail-screen');
}

// Tab management
function showTab(tabName) {
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Soil check functions
function handleSoilCheck(e) {
    e.preventDefault();
    
    const soilType = document.getElementById('soil-type').value;
    const rainfall = document.getElementById('rainfall').value;
    const fertilizer = document.getElementById('fertilizer').value;
    
    if (!soilType || !rainfall || !fertilizer) {
        showMessage('Please answer all questions', 'error');
        return;
    }
    
    const result = checkSoilSuitability(soilType, rainfall, fertilizer);
    displaySoilResult(result);
}

function checkSoilSuitability(soilType, rainfall, fertilizer) {
    const vegetable = currentVegetable;
    
    // Simple suitability check
    let score = 0;
    let recommendations = [];
    
    // Soil type check
    if (soilType === vegetable.soilType || soilType === 'loamy') {
        score += 2;
    } else if (soilType === 'unknown') {
        score += 1;
        recommendations.push('Test your soil type for better results');
    } else {
        recommendations.push(`Consider amending your ${soilType} soil with compost`);
    }
    
    // Rainfall check
    if (rainfall === vegetable.rainfall || rainfall === 'weekly') {
        score += 2;
    } else if (rainfall === 'rarely') {
        score += 0;
        recommendations.push('You may need to water more frequently');
    } else {
        score += 1;
    }
    
    // Fertilizer check
    if (fertilizer === 'yes') {
        score += 2;
    } else {
        score += 0;
        recommendations.push('Consider adding compost or organic fertilizer');
    }
    
    return {
        score,
        suitable: score >= 4,
        recommendations
    };
}

function displaySoilResult(result) {
    const resultBox = document.getElementById('soil-result');
    
    if (result.suitable) {
        resultBox.className = 'result-box suitable';
        resultBox.innerHTML = `
            <h4>✅ Your soil is suitable!</h4>
            <p>Great! Your soil conditions are good for growing ${currentVegetable.name}.</p>
            ${result.recommendations.length > 0 ? '<p><strong>Recommendations:</strong></p><ul>' + result.recommendations.map(rec => `<li>${rec}</li>`).join('') + '</ul>' : ''}
        `;
    } else {
        resultBox.className = 'result-box not-suitable';
        resultBox.innerHTML = `
            <h4>⚠️ Consider improving your soil</h4>
            <p>Your soil conditions may need some adjustments for optimal ${currentVegetable.name} growth.</p>
            <p><strong>Recommendations:</strong></p>
            <ul>
                ${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        `;
    }
    
    resultBox.style.display = 'block';
}

// Resource loading functions
function loadVegetableResources(vegetable) {
    const toolsList = document.getElementById('tools-list');
    const seedsList = document.getElementById('seeds-list');
    const fertilizerList = document.getElementById('fertilizer-list');
    
    if (toolsList && vegetable.tools) {
        toolsList.innerHTML = vegetable.tools.map(tool => `
            <li class="resource-item">
                <span>${typeof tool === 'string' ? tool : (tool.name || 'Unknown tool')}</span>
            </li>
        `).join('');
    }
    
    if (seedsList && vegetable.seeds) {
        seedsList.innerHTML = vegetable.seeds.map(seed => `
            <li class="resource-item">
                <span>${typeof seed === 'string' ? seed : (seed.name || 'Unknown seed')}</span>
            </li>
        `).join('');
    }
    
    if (fertilizerList && vegetable.fertilizer) {
        fertilizerList.innerHTML = vegetable.fertilizer.map(fert => `
            <li class="resource-item">
                <span>${typeof fert === 'string' ? fert : (fert.name || 'Unknown fertilizer')}</span>
            </li>
        `).join('');
    }
}

function loadVegetableInstructions(vegetable) {
    const instructionsContainer = document.getElementById('instructions-steps');
    const videoContainer = document.getElementById('video-placeholder');
    
    if (instructionsContainer) {
        instructionsContainer.innerHTML = vegetable.instructions.map(instruction => `
            <div class="instruction-step">
                <div class="instruction-content">
                    <div class="instruction-text">
                        <h4>Step ${instruction.step}: ${instruction.title}</h4>
                        <p>${instruction.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Get video URL from mapping
    const videoUrl = vegetableVideos[vegetable.name];
    
    if (videoContainer && videoUrl) {
        videoContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="315" 
                src="${videoUrl}" 
                title="How to grow ${vegetable.name}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else if (videoContainer) {
        videoContainer.innerHTML = `
            <div class="no-video">
                <i class="fas fa-video-slash"></i>
                <p>Video tutorial coming soon for ${vegetable.name}</p>
            </div>
        `;
    }
}

function loadGrowthTracker(vegetable) {
    const calendarContainer = document.getElementById('calendar-container');
    const dailyTasksList = document.getElementById('daily-tasks-list');
    
    if (calendarContainer) {
        calendarContainer.innerHTML = `
            <div class="calendar-info">
                <p><strong>Growth Period:</strong> ${vegetable.growthDays} days</p>
                <p><strong>Planting Date:</strong> <span id="planting-date">Not started</span></p>
                <p><strong>Expected Harvest:</strong> <span id="harvest-date">Not started</span></p>
            </div>
            <div class="calendar-wrapper">
                <div class="calendar-header">
                    <button class="calendar-nav" onclick="previousMonth()">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <h4 id="current-month-year">${getCurrentMonthYear()}</h4>
                    <button class="calendar-nav" onclick="nextMonth()">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="calendar-grid" id="calendar-grid">
                    ${generateCalendar()}
                </div>
            </div>
        `;
    }
    
    if (dailyTasksList) {
        dailyTasksList.innerHTML = `
            <div class="today-tasks">
                <h5><i class="fas fa-calendar-day"></i> Today's Tasks (${new Date().toLocaleDateString()})</h5>
                <div id="today-tasks-content">
                    ${getTodayTasks(vegetable)}
                </div>
            </div>
            <div class="upcoming-tasks">
                <h5><i class="fas fa-calendar-week"></i> This Week's Tasks</h5>
                <div id="upcoming-tasks-content">
                    ${getUpcomingTasks(vegetable)}
                </div>
            </div>
        `;
    }
}

function startTracking() {
    if (!currentVegetable) return;
    
    const plantingDate = new Date();
    const harvestDate = new Date(plantingDate.getTime() + (currentVegetable.growthDays * 24 * 60 * 60 * 1000));
    
    const plant = {
        id: Date.now(),
        vegetableId: currentVegetable.id,
        vegetableName: currentVegetable.name,
        plantingDate: plantingDate.toISOString(),
        harvestDate: harvestDate.toISOString(),
        completedTasks: [],
        isActive: true
    };
    
    userPlants.push(plant);
    localStorage.setItem('userPlants', JSON.stringify(userPlants));
    
    currentPlantingDate = plantingDate;
    
    showMessage(`Started tracking ${currentVegetable.name}!`, 'success');
    
    // Update display
    document.getElementById('planting-date').textContent = plantingDate.toLocaleDateString();
    document.getElementById('harvest-date').textContent = harvestDate.toLocaleDateString();
    
    // Refresh calendar and tasks
    if (document.getElementById('calendar-grid')) {
        document.getElementById('calendar-grid').innerHTML = generateCalendar();
    }
    if (document.getElementById('today-tasks-content')) {
        document.getElementById('today-tasks-content').innerHTML = getTodayTasks(currentVegetable);
    }
    if (document.getElementById('upcoming-tasks-content')) {
        document.getElementById('upcoming-tasks-content').innerHTML = getUpcomingTasks(currentVegetable);
    }
    
    // Set up notifications
    setupNotifications(plant);
}

// Calendar functions
function getCurrentMonthYear() {
    return currentCalendarDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
    });
}

function generateCalendar() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    let calendarHTML = `
        <div class="calendar-weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div class="calendar-days">
    `;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        
        const isCurrentMonth = currentDate.getMonth() === month;
        const isToday = currentDate.getTime() === today.getTime();
        const hasTask = currentPlantingDate && hasTaskOnDate(currentDate);
        const isPlantingDay = currentPlantingDate && isPlantingDate(currentDate);
        const isHarvestDay = currentPlantingDate && isHarvestDate(currentDate);
        
        let dayClass = 'calendar-day';
        if (!isCurrentMonth) dayClass += ' other-month';
        if (isToday) dayClass += ' today';
        if (hasTask) dayClass += ' has-task';
        if (isPlantingDay) dayClass += ' planting-day';
        if (isHarvestDay) dayClass += ' harvest-day';
        
        calendarHTML += `
            <div class="${dayClass}" onclick="selectDate('${currentDate.toISOString()}')">
                <span class="day-number">${currentDate.getDate()}</span>
                ${hasTask ? '<i class="fas fa-seedling task-indicator"></i>' : ''}
                ${isPlantingDay ? '<i class="fas fa-play planting-indicator"></i>' : ''}
                ${isHarvestDay ? '<i class="fas fa-cut harvest-indicator"></i>' : ''}
            </div>
        `;
    }
    
    calendarHTML += '</div>';
    return calendarHTML;
}

function previousMonth() {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    updateCalendar();
}

function nextMonth() {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    updateCalendar();
}

function updateCalendar() {
    const monthYearElement = document.getElementById('current-month-year');
    const calendarGridElement = document.getElementById('calendar-grid');
    
    if (monthYearElement) {
        monthYearElement.textContent = getCurrentMonthYear();
    }
    
    if (calendarGridElement) {
        calendarGridElement.innerHTML = generateCalendar();
    }
}

function selectDate(dateString) {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showMessage('Cannot select past dates', 'error');
        return;
    }
    
    if (!currentPlantingDate) {
        currentPlantingDate = selectedDate;
        showMessage(`Planting date set to ${selectedDate.toLocaleDateString()}`, 'success');
        updateCalendar();
    } else {
        showMessage(`Planting date is already set to ${currentPlantingDate.toLocaleDateString()}`, 'info');
    }
}

function hasTaskOnDate(date) {
    if (!currentPlantingDate || !currentVegetable) return false;
    
    const daysDiff = Math.floor((date - currentPlantingDate) / (1000 * 60 * 60 * 24));
    return currentVegetable.dailyTasks.some(task => task.day === daysDiff);
}

function isPlantingDate(date) {
    if (!currentPlantingDate) return false;
    return date.toDateString() === currentPlantingDate.toDateString();
}

function isHarvestDate(date) {
    if (!currentPlantingDate || !currentVegetable) return false;
    const harvestDate = new Date(currentPlantingDate.getTime() + (currentVegetable.growthDays * 24 * 60 * 60 * 1000));
    return date.toDateString() === harvestDate.toDateString();
}

function getTodayTasks(vegetable) {
    if (!currentPlantingDate) {
        return '<p class="no-tasks">Start tracking to see today\'s tasks</p>';
    }
    
    const today = new Date();
    const daysDiff = Math.floor((today - currentPlantingDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff < 0) {
        return '<p class="no-tasks">Planting hasn\'t started yet</p>';
    }
    
    const todaysTasks = vegetable.dailyTasks.filter(task => task.day === daysDiff);
    
    if (todaysTasks.length === 0) {
        return '<p class="no-tasks">No specific tasks for today</p>';
    }
    
    return todaysTasks.map(task => `
        <div class="task-item">
            <input type="checkbox" id="today-task-${task.day}" onchange="completeTask(${task.day})">
            <label for="today-task-${task.day}">${task.task}</label>
        </div>
    `).join('');
}

function getUpcomingTasks(vegetable) {
    if (!currentPlantingDate) {
        return '<p class="no-tasks">Start tracking to see upcoming tasks</p>';
    }
    
    const today = new Date();
    const daysDiff = Math.floor((today - currentPlantingDate) / (1000 * 60 * 60 * 24));
    const weekFromNow = daysDiff + 7;
    
    const upcomingTasks = vegetable.dailyTasks.filter(task => 
        task.day > daysDiff && task.day <= weekFromNow
    );
    
    if (upcomingTasks.length === 0) {
        return '<p class="no-tasks">No upcoming tasks this week</p>';
    }
    
    return upcomingTasks.map(task => `
        <div class="task-item">
            <span class="task-date">Day ${task.day} (${getDateFromDay(task.day)})</span>
            <span class="task-description">${task.task}</span>
        </div>
    `).join('');
}

function getDateFromDay(dayNumber) {
    if (!currentPlantingDate) return '';
    const targetDate = new Date(currentPlantingDate.getTime() + (dayNumber * 24 * 60 * 60 * 1000));
    return targetDate.toLocaleDateString();
}

function completeTask(dayNumber) {
    // Mark task as completed
    showMessage('Task completed!', 'success');
}

function setupNotifications(plant) {
    // Request notification permission
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // Schedule daily notifications
                scheduleDailyNotification(plant);
            }
        });
    }
}

function scheduleDailyNotification(plant) {
    // This would integrate with a notification service
    // For now, we'll show a success message
    showMessage('Daily notifications enabled!', 'success');
}

// Marketplace functions
function showMarketplace() {
    showScreen('marketplace-screen');
}

function loadMarketplace() {
    const listingsContainer = document.getElementById('marketplace-listings');
    
    if (listingsContainer) {
        if (marketplaceListings.length === 0) {
            listingsContainer.innerHTML = '<p>No vegetables available for sale yet.</p>';
        } else {
            listingsContainer.innerHTML = marketplaceListings.map(listing => `
                <div class="listing-item">
                    <h4>${listing.vegetableName}</h4>
                    <div class="listing-details">
                        <div class="listing-detail"><strong>Quantity:</strong> ${listing.quantity} kg</div>
                        <div class="listing-detail"><strong>Price:</strong> R${listing.price}/kg</div>
                        <div class="listing-detail"><strong>Contact:</strong> ${listing.contact}</div>
                    </div>
                </div>
            `).join('');
        }
    }
}

function handleSell(e) {
    e.preventDefault();
    
    const vegetableName = document.getElementById('sell-vegetable').value;
    const quantity = parseFloat(document.getElementById('sell-quantity').value);
    const price = parseFloat(document.getElementById('sell-price').value);
    const contact = document.getElementById('sell-contact').value;
    
    if (!vegetableName || !quantity || !price || !contact) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    const listing = {
        id: Date.now(),
        vegetableName,
        quantity,
        price,
        contact,
        sellerId: currentUser.id,
        createdAt: new Date().toISOString()
    };
    
    marketplaceListings.push(listing);
    localStorage.setItem('marketplaceListings', JSON.stringify(marketplaceListings));
    
    showMessage('Vegetable listed for sale successfully!', 'success');
    e.target.reset();
    
    // Reload marketplace
    loadMarketplace();
}

// Recipe functions
function showRecipes() {
    showScreen('recipes-screen');
}

function loadRecipes() {
    const recipesContainer = document.getElementById('recipes-list');
    
    if (recipesContainer) {
        recipesContainer.innerHTML = recipes.map(recipe => `
            <div class="recipe-item">
                <h3>${recipe.name}</h3>
                <p><strong>Difficulty:</strong> ${recipe.difficulty} | <strong>Time:</strong> ${recipe.time}</p>
                <div class="recipe-ingredients">
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            </div>
        `).join('');
    }
}

// Navigation functions
function goBackToDetail() {
    showScreen('vegetable-detail-screen');
}

// Forgot password functions
function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = document.getElementById('reset-email').value;
    
    if (!validateEmailFormat(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Check if user exists
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.email === email) {
            // Generate reset token
            const resetToken = generateResetToken();
            const expiryTime = Date.now() + (30 * 60 * 1000); // 30 minutes
            
            resetTokens[email] = {
                token: resetToken,
                expiry: expiryTime,
                used: false
            };
            
            localStorage.setItem('resetTokens', JSON.stringify(resetTokens));
            
            // In a real app, this would send an email
            // For demo purposes, we'll show the token
            showMessage(`Reset link sent! Your reset code is: ${resetToken}`, 'success');
            
            // Store email for reset screen
            sessionStorage.setItem('resetEmail', email);
            
            setTimeout(() => {
                showScreen('reset-password-screen');
            }, 2000);
            
        } else {
            showMessage('No account found with this email address', 'error');
        }
    } else {
        showMessage('No account found with this email address', 'error');
    }
}

function handleResetPassword(e) {
    e.preventDefault();
    
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const resetEmail = sessionStorage.getItem('resetEmail');
    
    if (!validatePasswordStrength(newPassword)) {
        showMessage('Password does not meet requirements', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    // Update user password
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.email === resetEmail) {
            user.password = newPassword; // In a real app, this would be hashed
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Mark token as used
            if (resetTokens[resetEmail]) {
                resetTokens[resetEmail].used = true;
                localStorage.setItem('resetTokens', JSON.stringify(resetTokens));
            }
            
            // Clear session storage
            sessionStorage.removeItem('resetEmail');
            
            showMessage('Password reset successfully! You can now login with your new password.', 'success');
            
            setTimeout(() => {
                showScreen('login-screen');
            }, 2000);
            
        } else {
            showMessage('Invalid reset session', 'error');
        }
    } else {
        showMessage('Invalid reset session', 'error');
    }
}

function generateResetToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function validateResetPassword() {
    const password = document.getElementById('new-password').value;
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        symbol: /[\W_]/.test(password)
    };
    
    // Update requirement indicators
    document.getElementById('reset-req-length').classList.toggle('met', requirements.length);
    document.getElementById('reset-req-uppercase').classList.toggle('met', requirements.uppercase);
    document.getElementById('reset-req-symbol').classList.toggle('met', requirements.symbol);
}

function validateConfirmPassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorElement = document.getElementById('confirm-password-error');
    
    if (newPassword !== confirmPassword && confirmPassword.length > 0) {
        errorElement.textContent = 'Passwords do not match';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

function showForgotPassword() {
    showScreen('forgot-password-screen');
}

// Utility functions
function updateWelcomeMessage() {
    if (currentUser) {
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            const welcomeText = translateText('welcome_user').replace('User', currentUser.firstName);
            welcomeMessage.textContent = welcomeText;
        }
    }
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Add to current screen
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen) {
        activeScreen.insertBefore(messageDiv, activeScreen.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showScreen('splash-screen');
}

// Add logout button to welcome screen (optional)
function addLogoutButton() {
    const welcomeContainer = document.querySelector('.welcome-container');
    if (welcomeContainer && currentUser) {
        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'btn btn-secondary';
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = logout;
        logoutBtn.style.position = 'absolute';
        logoutBtn.style.top = '20px';
        logoutBtn.style.right = '20px';
        welcomeContainer.appendChild(logoutBtn);
    }
}

// Initialize logout button
setTimeout(addLogoutButton, 1000);

// Helper function to convert old vegetable format to new format with images
function convertVegetableFormat(vegetable) {
    // Convert tools array to objects with images
    if (Array.isArray(vegetable.tools)) {
        vegetable.tools = vegetable.tools.map(tool => ({
            name: typeof tool === 'string' ? tool : tool.name || 'Unknown tool',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200'
        }));
    }
    
    // Convert seeds array to objects with images
    if (Array.isArray(vegetable.seeds)) {
        vegetable.seeds = vegetable.seeds.map(seed => ({
            name: typeof seed === 'string' ? seed : seed.name || 'Unknown seed',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200'
        }));
    }
    
    // Convert fertilizer array to objects with images
    if (Array.isArray(vegetable.fertilizer)) {
        vegetable.fertilizer = vegetable.fertilizer.map(fert => ({
            name: typeof fert === 'string' ? fert : fert.name || 'Unknown fertilizer',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200'
        }));
    }
    
    // Convert instructions to include images
    if (Array.isArray(vegetable.instructions)) {
        vegetable.instructions = vegetable.instructions.map(instruction => ({
            ...instruction,
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300'
        }));
    }
    
    return vegetable;
}

// Convert all vegetables to new format on app initialization
function convertAllVegetables() {
    vegetables.forEach(convertVegetableFormat);
}

// Call the conversion function when the app loads
document.addEventListener('DOMContentLoaded', convertAllVegetables);

// Chatbot System
let chatHistory = [];
let isChatOpen = false;

// Chatbot responses database
const chatbotResponses = {
    // General gardening questions
    'how do i start': {
        en: "Great question! To start gardening, you'll need: 1) Good soil or potting mix, 2) Seeds or seedlings, 3) Basic tools (trowel, watering can), 4) A sunny spot. Start with easy vegetables like tomatoes, lettuce, or herbs. Would you like specific instructions for any particular vegetable?",
        af: "Goeie vraag! Om te begin tuinmaak, het jy nodig: 1) Goeie grond of potmengsel, 2) Sade of saailinge, 3) Basiese gereedskap (skoffel, gieter), 4) 'n Sonnige plek. Begin met maklike groente soos tamaties, blaarslaai of kruie. Wil jy spesifieke instruksies vir enige spesifieke groente?",
        zu: "Umbuzo omuhle! Ukuqala ukulima, uzodinga: 1) Inhlabathi enhle noma isixubho samapotsi, 2) Imbewu noma izitshalo, 3) Izinsimbi eziyisisekelo (iskhali, igada), 4) Indawo enelanga. Qala ngemifino elula njengamatamatisi, uletisi, noma amakhambi. Ufuna izixwayiso ezithile zomfino othile?",
        xh: "Umbuzo omhle! Ukuqala ukulima, ufuna: 1) Umhlaba omhle okanye isixubho samapotsi, 2) Imbewu okanye izityalo, 3) Izixhobo eziyisisekelo (iskhali, igada), 4) Indawo enelanga. Qala ngemifuno elula njengamatamatisi, uletisi, okanye amakhambi. Ufuna imiyalelo ethile yomfuno othile?"
    },
    
    'tomato': {
        en: "Tomatoes are perfect for beginners! Here's how to grow them: 1) Plant seeds 1/4 inch deep in well-draining soil, 2) Keep soil moist but not waterlogged, 3) Provide support (stakes or cages) when plants are 6 inches tall, 4) Harvest when tomatoes are firm and fully colored. They typically take 70 days to mature.",
        af: "Tamaties is perfek vir beginners! Hier is hoe om hulle te kweek: 1) Plant sade 1/4 duim diep in goed-dreinerende grond, 2) Hou grond vogtig maar nie waterverlore nie, 3) Verskaf ondersteuning (paaltjies of hokke) wanneer plante 6 duim lank is, 4) Oes wanneer tamaties ferm en ten volle gekleur is. Hulle neem tipies 70 dae om volwasse te word.",
        zu: "Amatamatisi afanele abaqalayo! Nansi indlela yokuwakhulisa: 1) Tshala imbewu 1/4 intshi ejulile enhlabathini enokukhipha amanzi kahle, 2) Gcina inhlabathi imanzi kodwa ingagcwali amanzi, 3) Nika ukwesekwa (izinti noma amakhathini) lapho izitshalo zingama-6 intshi ubude, 4) Vuna lapho amatamatisi enzima futhi enemibala egcwele. Ngokuvamile athatha izinsuku ezingama-70 ukuvuthwa.",
        xh: "Amatamatisi afanelekile kubaqalayo! Nantsi indlela yokuwakhulisa: 1) Tshala imbewu 1/4 intshi ejulile kumhlaba onokukhipha amanzi, 2) Gcina umhlaba umanzi kodwa ungagcwali amanzi, 3) Nika inkxaso (izinti okanye amakhathini) xa izityalo zingama-6 intshi ubude, 4) Vuna xa amatamatisi enzima kwaye enemibala egcwele. Ngokuvamile athatha iintsuku ezingama-70 ukuvuthwa."
    },
    
    'soil': {
        en: "Good soil is the foundation of successful gardening! For vegetables, you want: 1) Well-draining soil (not clay), 2) Rich in organic matter (add compost), 3) pH between 6.0-7.0 (slightly acidic to neutral), 4) Loose texture for root growth. You can test your soil with a simple pH kit from a garden center.",
        af: "Goeie grond is die fondasie van suksesvolle tuinmaak! Vir groente wil jy: 1) Goed-dreinerende grond (nie klei nie), 2) Ryk aan organiese materiaal (voeg kompos by), 3) pH tussen 6.0-7.0 (effens suur tot neutraal), 4) Los tekstuur vir wortelgroei. Jy kan jou grond toets met 'n eenvoudige pH-stel van 'n tuinsentrum.",
        zu: "Inhlabathi enhle isisisekelo sokulima okuyimpumelelo! Kwezifino, ufuna: 1) Inhlabathi enokukhipha amanzi kahle (hhayi umbumba), 2) Ecebile ngezinto zemvelo (engeza amathumba), 3) I-pH phakathi kuka-6.0-7.0 (ecijile kancane kuya kokungacacisi), 4) Ukuthambeka okukhululekile kokukhula kwezimpande. Ungahlola inhlabathi yakho ngesethi elula ye-pH esuka esikhungweni sokulima.",
        xh: "Umhlaba omhle sisiseko sokulima okuyimpumelelo! Kwemifuno, ufuna: 1) Umhlaba onokukhipha amanzi (hhayi umbumba), 2) Ucebile ngezinto zemvelo (engeza amathumba), 3) I-pH phakathi kuka-6.0-7.0 (ecijile kancane kuya kokungacacisi), 4) Ukuthambeka okukhululekile kokukhula kwezimpande. Ungahlola umhlaba wakho ngesethi elula ye-pH esuka kwisikhungo sokulima."
    },
    
    'water': {
        en: "Watering is crucial! Here are the basics: 1) Water deeply but less frequently (encourages deep roots), 2) Water in the morning to reduce evaporation, 3) Keep soil consistently moist, not soggy, 4) Most vegetables need 1-2 inches of water per week. Check soil moisture by sticking your finger 1 inch into the soil.",
        af: "Water gee is krities! Hier is die basiese: 1) Water diep maar minder gereeld (moedig diep wortels aan), 2) Water in die oggend om verdamping te verminder, 3) Hou grond konsekwent vogtig, nie pap nie, 4) Die meeste groente benodig 1-2 duim water per week. Kontroleer grondvog deur jou vinger 1 duim in die grond te steek.",
        zu: "Ukunisela kubalulekile! Nansi okuyisisekelo: 1) Nisela kakhulu kodwa kancane (khuthaza izimpande ezijulile), 2) Nisela ekuseni ukuze unciphise ukuhwamuka kwamanzi, 3) Gcina inhlabathi imanzi njalo, hhayi igcwele amanzi, 4) Iningi lemifino lidinga amanzi angama-1-2 intshi ngesonto. Hlola ukumanzi kwenhlabathi ngokufaka umunwe wakho 1 intshi enhlabathini.",
        xh: "Ukunisela kubalulekile! Nantsi okuyisisekelo: 1) Nisela kakhulu kodwa kancane (khuthaza izimpande ezijulile), 2) Nisela ekuseni ukuze unciphise ukuhwamuka kwamanzi, 3) Gcina umhlaba umanzi njalo, hhayi ogcwele amanzi, 4) Iningi lemifuno lidinga amanzi angama-1-2 intshi ngeveki. Hlola ukumanzi komhlaba ngokufaka umunwe wakho 1 intshi kumhlaba."
    },
    
    'pest': {
        en: "Pest control starts with prevention! 1) Keep your garden clean and remove dead plants, 2) Use companion planting (marigolds repel many pests), 3) Check plants regularly for early signs, 4) Use natural remedies like neem oil or soap spray, 5) Encourage beneficial insects like ladybugs. What specific pest are you dealing with?",
        af: "Plagbeheer begin met voorkoming! 1) Hou jou tuin skoon en verwyder dooie plante, 2) Gebruik geselskapplant (afrikaners stoot baie plae af), 3) Kontroleer plante gereeld vir vroeë tekens, 4) Gebruik natuurlike remedies soos neem-olie of seepspuit, 5) Moedig voordelige insekte soos lieveheersbeestjies aan. Met watter spesifieke plaad het jy te doen?",
        zu: "Ukulawula izinambuzane kuqala ngokuvimbela! 1) Gcina umsimu wakho uhlanzekile bese ususa izitshalo ezifile, 2) Sebenzisa ukutshala okuhambisanayo (amamarigold avimbela izinambuzane eziningi), 3) Hlola izitshalo njalo ukuze ubone izimpawu zakuqala, 4) Sebenzisa amakhambi emvelo njengamafutha e-neem noma isifutho sesepha, 5) Khuthaza izinambuzane ezizuzayo njengamaladybug. Uyasebenza nezinambuzane zini ezithile?",
        xh: "Ukulawula izinambuzane kuqala ngokuvimbela! 1) Gcina umsimu wakho uhlanzekile kwaye ususe izityalo ezifile, 2) Sebenzisa ukutshala okuhambisanayo (amamarigold avimbela izinambuzane eziningi), 3) Hlola izityalo rhoqo ukuze ubone izimpawu zakuqala, 4) Sebenzisa amakhambi emvelo njengamafutha e-neem okanye isifutho sesepha, 5) Khuthaza izinambuzane ezizuzayo njengamaladybug. Uyasebenza nezinambuzane zini ezithile?"
    },
    
    'harvest': {
        en: "Harvesting at the right time is key! General tips: 1) Harvest in the morning when plants are cool, 2) Use clean, sharp tools, 3) Don't pull - cut or twist gently, 4) Leave some plants to go to seed for next year, 5) Store properly (cool, dry place). What vegetable are you ready to harvest?",
        af: "Oes op die regte tyd is die sleutel! Algemene wenke: 1) Oes in die oggend wanneer plante koel is, 2) Gebruik skoon, skerp gereedskap, 3) Moenie trek nie - sny of draai saggies, 4) Los sommige plante om saad te gaan vir volgende jaar, 5) Stoor behoorlik (koel, droë plek). Watter groente is jy gereed om te oes?",
        zu: "Ukuvuna ngesikhathi esifanele kuyisihluthulelo! Amathiphu ajwayelekile: 1) Vuna ekuseni lapho izitshalo zipholile, 2) Sebenzisa izinsimbi ezihlanzekile, ezibukhali, 3) Ungadonsi - sheba noma ujike kancane, 4) Shiya ezinye izitshalo zibe imbewu zonyaka ozayo, 5) Gcina kahle (indawo epholile, eyomile). Yimuphi umfino osulungele ukuvuna?",
        xh: "Ukuvuna ngexesha elifanelekileyo kuyisihluthulelo! Amathiphu ajwayelekile: 1) Vuna ekuseni xa izityalo zipholile, 2) Sebenzisa izixhobo ezihlanzekile, ezibukhali, 3) Ungadonsi - sheba okanye ujike kancane, 4) Shiya ezinye izityalo zibe imbewu zonyaka ozayo, 5) Gcina kakuhle (indawo epholile, eyomile). Yimuphi umfuno osulungele ukuvuna?"
    },
    
    'fertilizer': {
        en: "Fertilizing helps plants grow strong! 1) Use organic fertilizers like compost or manure, 2) Apply in spring before planting, 3) Don't over-fertilize (can burn plants), 4) Different plants need different nutrients, 5) You can make your own compost from kitchen scraps. Start with a balanced fertilizer (10-10-10).",
        af: "Bemesting help plante sterk groei! 1) Gebruik organiese kunsmis soos kompos of mis, 2) Pas in die lente voor plant toe, 3) Moenie oor-bemest nie (kan plante verbrand), 4) Verskillende plante benodig verskillende voedingstowwe, 5) Jy kan jou eie kompos maak van kombuisafval. Begin met 'n gebalanseerde kunsmis (10-10-10).",
        zu: "Ukunika umanyolo kusiza izitshalo zikhule zibe namandla! 1) Sebenzisa umanyolo wemvelo njengamathumba noma umququ, 2) Nika intwasahlobo ngaphambi kokutshala, 3) Unganiki umanyolo kakhulu (kungashisa izitshalo), 4) Izitshalo ezahlukene zidinga izakhamzimba ezahlukene, 5) Ungazenza amathumba akho kusuka kuzindenda zasekhishini. Qala ngomanyolo obalanced (10-10-10).",
        xh: "Ukunika umanyolo kusiza izityalo zikhule zibe namandla! 1) Sebenzisa umanyolo wemvelo njengamathumba okanye umququ, 2) Nika intwasahlobo ngaphambi kokutshala, 3) Unganiki umanyolo kakhulu (kungashisa izityalo), 4) Izityalo ezahlukeneyo zidinga izakhamzimba ezahlukeneyo, 5) Ungazenza amathumba akho kusuka kuzindenda zasekhishini. Qala ngomanyolo obalanced (10-10-10)."
    }
};

// Chatbot functions
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    const chatButton = document.getElementById('chat-button');
    
    if (isChatOpen) {
        chatWindow.style.display = 'none';
        chatButton.innerHTML = '<i class="fas fa-comments"></i>';
    } else {
        chatWindow.style.display = 'flex';
        chatButton.innerHTML = '<i class="fas fa-times"></i>';
        scrollToBottom();
    }
    
    isChatOpen = !isChatOpen;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate AI response delay
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateResponse(message);
            addBotMessage(response);
        }, 1500);
    }
}

function askQuickQuestion(question) {
    addUserMessage(question);
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        const response = generateResponse(question);
        addBotMessage(response);
    }, 1500);
}

function addUserMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatHistory.push({ type: 'user', message: message });
    scrollToBottom();
}

function addBotMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-seedling"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatHistory.push({ type: 'bot', message: message });
    scrollToBottom();
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-seedling"></i>
        </div>
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function scrollToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    const lang = currentLanguage || 'en';
    
    // Check for specific keywords
    if (message.includes('tomato') || message.includes('tamatie') || message.includes('amatamatisi')) {
        return chatbotResponses.tomato[lang] || chatbotResponses.tomato.en;
    }
    
    if (message.includes('soil') || message.includes('grond') || message.includes('inhlabathi') || message.includes('umhlaba')) {
        return chatbotResponses.soil[lang] || chatbotResponses.soil.en;
    }
    
    if (message.includes('water') || message.includes('water') || message.includes('amanzi')) {
        return chatbotResponses.water[lang] || chatbotResponses.water.en;
    }
    
    if (message.includes('pest') || message.includes('plaad') || message.includes('izinambuzane')) {
        return chatbotResponses.pest[lang] || chatbotResponses.pest.en;
    }
    
    if (message.includes('harvest') || message.includes('oes') || message.includes('vuna')) {
        return chatbotResponses.harvest[lang] || chatbotResponses.harvest.en;
    }
    
    if (message.includes('fertilizer') || message.includes('kunsmis') || message.includes('umanyolo')) {
        return chatbotResponses.fertilizer[lang] || chatbotResponses.fertilizer.en;
    }
    
    if (message.includes('start') || message.includes('begin') || message.includes('qala')) {
        return chatbotResponses['how do i start'][lang] || chatbotResponses['how do i start'].en;
    }
    
    // Default response
    const defaultResponses = {
        en: "I'm here to help with your gardening questions! You can ask me about planting, soil, watering, pests, harvesting, or any other gardening topic. Try asking about a specific vegetable or gardening technique!",
        af: "Ek is hier om te help met jou tuinmaakvrae! Jy kan my vra oor plant, grond, water gee, plae, oes, of enige ander tuinmaakonderwerp. Probeer vra oor 'n spesifieke groente of tuinmaaktegniek!",
        zu: "Ngilapha ukusiza ngezibuzo zakho zokulima! Ungangibuza ngezokutshala, inhlabathi, ukunisela, izinambuzane, ukuvuna, noma noma yimuphi udaba lokulima. Zama ukubuza ngomfino othile noma inqubo yokulima!",
        xh: "Ndilapha ukunceda ngezibuzo zakho zokulima! Ungandibuza ngezokutshala, umhlaba, ukunisela, izinambuzane, ukuvuna, okanye noma yimuphi udaba lokulima. Zama ukubuza ngomfuno othile okanye inqubo yokulima!"
    };
    
    return defaultResponses[lang] || defaultResponses.en;
}

// Add chatbot translations to the translation system
const chatbotTranslations = {
    en: {
        garden_assistant: "Garden Assistant",
        chat_welcome: "Hello! I'm your Garden Assistant. I can help you with:",
        chat_help_1: "Planting advice and tips",
        chat_help_2: "Soil and watering questions",
        chat_help_3: "Pest and disease identification",
        chat_help_4: "Harvesting guidance",
        chat_help_5: "General gardening support",
        chat_ask: "What would you like to know about?",
        chat_placeholder: "Ask me about gardening...",
        quick_tomatoes: "🍅 Tomatoes",
        quick_soil: "🌱 Soil",
        quick_water: "💧 Watering"
    },
    af: {
        garden_assistant: "Tuin Assistent",
        chat_welcome: "Hallo! Ek is jou Tuin Assistent. Ek kan jou help met:",
        chat_help_1: "Plant advies en wenke",
        chat_help_2: "Grond en water vrae",
        chat_help_3: "Plaad en siekte identifikasie",
        chat_help_4: "Oes leiding",
        chat_help_5: "Algemene tuinmaak ondersteuning",
        chat_ask: "Waarvan wil jy weet?",
        chat_placeholder: "Vra my oor tuinmaak...",
        quick_tomatoes: "🍅 Tamaties",
        quick_soil: "🌱 Grond",
        quick_water: "💧 Water"
    },
    zu: {
        garden_assistant: "Umthandazeli Womsimu",
        chat_welcome: "Sawubona! Ngingumthandazeli wakho womsimu. Ngingakusiza nge:",
        chat_help_1: "Amathiphu nokweluleka kokutshala",
        chat_help_2: "Imibuzo yenhlabathi nokunisela",
        chat_help_3: "Ukuhlonza izinambuzane nezifo",
        chat_help_4: "Ukweluleka kokuvuna",
        chat_help_5: "Ukusekela okujwayelekile kokulima",
        chat_ask: "Ufuna ukwazi ngezinto zini?",
        chat_placeholder: "Ngibuze ngezokulima...",
        quick_tomatoes: "🍅 Amatamatisi",
        quick_soil: "🌱 Inhlabathi",
        quick_water: "💧 Amanzi"
    },
    xh: {
        garden_assistant: "Umthandazeli Womsimu",
        chat_welcome: "Molo! Ndingumthandazeli wakho womsimu. Ndingakunceda nge:",
        chat_help_1: "Amathiphu nokweluleka kokutshala",
        chat_help_2: "Imibuzo yomhlaba nokunisela",
        chat_help_3: "Ukuhlonza izinambuzane nezifo",
        chat_help_4: "Ukweluleka kokuvuna",
        chat_help_5: "Ukunceda okujwayelekile kokulima",
        chat_ask: "Ufuna ukwazi ngezinto zini?",
        chat_placeholder: "Ndibuze ngezokulima...",
        quick_tomatoes: "🍅 Amatamatisi",
        quick_soil: "🌱 Umhlaba",
        quick_water: "💧 Amanzi"
    }
};

// Merge chatbot translations
Object.keys(chatbotTranslations).forEach(lang => {
    if (translations[lang]) {
        translations[lang] = { ...translations[lang], ...chatbotTranslations[lang] };
    }
});

// Add Enter key support for chat input
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// ... existing code ...