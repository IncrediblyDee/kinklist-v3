import { generateId } from '@/util/idGenerator';
import { InKinkCategory } from '../types/kinks';
import { Rating } from '../types/ratings';

export const getDefaultRatings = (): Rating[] => [
    { name: 'Not Entered', color: '#FFF' },
    { name: 'Favorite', color: '#6DB5FE' },
    { name: 'Like', color: '#23FD22' },
    { name: 'Okay', color: '#FDFD6B' },
    { name: 'Maybe', color: '#DB6C00' },
    { name: 'No', color: '#920000' },
];

const createKinkCategory = (name: string, subcategories: string[], kinks: string[], defaultRating: string): InKinkCategory => ({
    id: generateId(),
    name,
    subcategories,
    kinks: kinks.map((kinkname) => ({
        id: generateId(),
        name: kinkname,
        ratings: subcategories.reduce((map: Record<string, string>, subcategory: string) => ({ ...map, [subcategory]: defaultRating }), {}),
    })),
});

export const getDefaultKinkContent = (defaultRating: string): InKinkCategory[] => [
    createKinkCategory("Bodies", ["Self", "Partner"], [
        "Skinny Girls", "Fat Girls", "Tall Girls", "Short Girls", "Athletic Girls", "Obese Girls",
        "Big Cock", "Small Cock", "Big Tits", "Flat Tits", "Big Areola", "Small Areola",
        "Big Feet", "Small Feet", "Big Hands", "Small Hands", "Pregnant Girls"
    ], defaultRating),

    createKinkCategory("Clothing & Accessories", ["Self", "Partner"], [
        "Clothed Sex", "Lingerie", "Pantyhose", "Socks", "Dirty Socks", "Shoes", "Dirty Shoes",
        "Gloves", "Glasses", "Contacts", "Underwear", "Corsets", "Body Harnesses"
    ], defaultRating),

    createKinkCategory("Groupings", ["General"], [
        "Group Sex", "3+ Penetration", "Double Penetration", "Spitroasting", "Gangbanged by Smaller",
        "Reverse Harem", "Harems"
    ], defaultRating),

    createKinkCategory("Oral", ["Giving", "Receiving"], [
        "Cunnilingus", "Fellatio", "Autofellatio", "Autocunnilingus", "Oral Sex", "Analingus", "Face-fucking",
        "Gagging", "Cum on Face", "Cum on Hair", "Gokkun", "Nursing Handjob"
    ], defaultRating),

    createKinkCategory("Anal", ["Giving", "Receiving"], [
        "Anal Sex", "Rimjobs", "Anal Vibrators", "Anal Prolapse", "Rosebudding", "Assjobs",
        "Ass Expansion", "Assrape"
    ], defaultRating),

    createKinkCategory("Domination & Degradation", ["Dominant", "Submissive"], [
        "Cuckolding", "Cuckqueaning", "Humiliation", "Name-calling", "Degradation",
        "Small Penis Humilation", "Public Use", "Master", "Slave", "Pet", "Submission"
    ], defaultRating),

    createKinkCategory("Consent & Non-Consent", ["Aggressor", "Target"], [
        "Rape", "Defeat Rape", "Victory Rape", "Pseudo Rape", "Trapped Rape",
        "Sex in Exchange for Services", "Blackmail / Coercion", "Kidnapping"
    ], defaultRating),

    createKinkCategory("Fantasy & Surreal", ["Self", "Partner"], [
        "Aliens", "Tentacle Rape", "Monstergirls", "Monster Sex", "Monster Rape",
        "Furries", "Transformation", "Demons", "Angels", "Dragons", "Succubus", "Incubus"
    ], defaultRating),

    createKinkCategory("Fluids", ["General"], [
        "Cum on Face", "Cum on Legs", "Cum on Ass", "Cum on Feet", "Cum on Pussy",
        "Cum on Armpits", "Cumming Inside", "Cumming Outside", "Menstruation",
        "Lactation", "Piss", "Squirting"
    ], defaultRating),

    createKinkCategory("Pain & Play", ["Giving", "Receiving"], [
        "Spanking", "Flogging", "Slapping", "Ball Busting", "Cuntbusting",
        "Hot Wax", "Scratching", "Biting", "Cutting", "Nipple Clamps"
    ], defaultRating),

    createKinkCategory("Psychological & Emotional", ["General"], [
        "Embarrassment", "Blushing", "Fear", "Seduction", "Being Teased",
        "Uninterested", "Ignoring", "Sexual Frustration", "Urgency for Sex",
        "Desperation", "Shame", "Voyeurism", "Exhibitionism"
    ], defaultRating),

    createKinkCategory("Taboo", ["General"], [
        "Incest", "Ageplay", "Interracial", "Bestiality", "Necrophilia",
        "Zoophilia", "Lolicon", "Shotacon", "Toddlercon", "Dads", "Moms",
        "Babysitters", "Elderly", "Mature", "Celebrities", "Netorare"
    ], defaultRating),

    createKinkCategory("Gender & Identity", ["Self", "Partner"], [
        "Crossdressing", "Feminization", "Sissification", "Trap", "Reverse Trap",
        "Futas", "Shemales", "Cuntboys", "Busty Boys", "Genderbend M2F", "Genderbend F2M",
        "Transexual", "Transgender", "Bishonen", "Tomboys"
    ], defaultRating),

    createKinkCategory("Sci-Fi & Supernatural", ["Self", "Partner"], [
        "Aliens", "Ghosts", "Demons", "Angels", "Mind Control", "Hypnosis",
        "Machines", "Cyborgs", "Robots", "Hiveminds", "Possession", "Psychosis",
        "Time Stop", "Transforming", "Viral Transform", "X-Ray"
    ], defaultRating),

    createKinkCategory("Creatures & Mythical", ["Self", "Partner"], [
        "Monstergirls", "Monster Sex", "Monster Rape", "Dragons", "Centaurs",
        "Minotaurs", "Goblins", "Fairies", "Succubus", "Incubus", "Wolf Girls", "Wolf Guys"
    ], defaultRating),

    createKinkCategory("Vore & Insertion", ["Self", "Partner"], [
        "Vore Consensual", "Vore Noncon", "Cock Vore", "Breast Vore", "Anal Vore",
        "Oral Vore", "Vaginal Vore", "Unbirth", "Live Insertions", "All The Way Through"
    ], defaultRating),

    createKinkCategory("Transformation & Modification", ["Self", "Partner"], [
        "Bimbofication", "Stepfordization", "Cock Transformation", "Cock Shrinking",
        "Breast Expansion", "Ass Expansion", "Muscles", "Extreme Muscles",
        "Body Bulges", "Face Bulges", "Bodyswapping", "Fusion", "Giantess"
    ], defaultRating),

    createKinkCategory("Medical & Biological", ["General"], [
        "Lactation", "Pregnancy", "Extreme Pregnancy", "Enemas", "Menstruation",
        "Medical Play", "Speculums", "Milf-ification", "Nursing Handjob"
    ], defaultRating),

    createKinkCategory("Restraint & Equipment", ["Self", "Partner"], [
        "Chastity", "Bondage Gear", "Blindfolds", "Collars", "Leash",
        "Shibari", "Encasement", "Rope-play", "Restraints"
    ], defaultRating),

    createKinkCategory("Toys & Devices", ["Self", "Partner"], [
        "Sex Toys", "Public Vibrators", "Hidden Vibrators", "Sounding",
        "Electric Shocks", "Inflation", "Speculums"
    ], defaultRating),

    createKinkCategory("Fetish Wear & Looks", ["Self", "Partner"], [
        "Latex", "Zentai", "Uniforms", "School Uniform", "School Swimsuit",
        "Alternate Costumes", "Naked Apron", "Glasses", "Tattoos", "Piercings",
        "Freckles", "Tanlines", "Unnatural Hair Colors", "Painted Nails"
    ], defaultRating),

    createKinkCategory("Misc. Fetish", ["Giving", "Receiving"], [
        "Fisting", "Frotting", "Footjobs", "Handjobs", "Titjobs (Paizuri)",
        "Foot Play", "Cock Worship", "Ass Worship", "Facesitting",
        "Breast Smothering", "Armpits", "Tickling", "Sensation Play", "Electro Stimulation"
    ], defaultRating),

    createKinkCategory("Extreme / Edge", ["Giving", "Receiving"], [
        "Cutting", "Blood", "Ballplay", "Castration", "Circumcision", "Scat",
        "Watersports", "Vomiting", "Forced Vomit", "Murder", "GURO", "Torture"
    ], defaultRating)
];
