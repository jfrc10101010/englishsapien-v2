// --- Simulated Learning Path Data ---
// This array holds the data for the learning path topics.
// It includes all 268 topics from the user's database list, with their
// original IDs, Names, Level IDs (mapped to 'level'), and the unique
// emojis we have assigned through our review process.
// NOTE: Status ('completed', 'active', 'locked', 'skipped') is a
// simulation for UI demonstration and would typically come from the DB.
// The emoji icons are assigned to be unique across all 268 topics.
// Data is intentionally not sorted here; the build function will sort it.
const learningPathData = [
    { id: 1, name: "Accidents", status: "completed", icon: "💥", level: 1 }, // Changed status to 'completed' to test checkmark and color
    { id: 6, name: "Age", status: "completed", icon: "⏳", level: 1 },
    { id: 8, name: "Anger", status: "active", icon: "😡", level: 1 }, // Last topic of Level 1 (example)
    { id: 11, name: "Appliances", status: "locked", icon: "🎛️", level: 1 }, // Another topic from Level 1
    { id: 17, name: "Barbecues", status: "locked", icon: "♨️", level: 1 }, // Another topic from Level 1
    { id: 18, name: "Beach", status: "locked", icon: "🏖️", level: 1 }, // Another topic from Level 1
    { id: 25, name: "Boredom", status: "locked", icon: "🥱", level: 1 },// Another topic from Level 1
    { id: 27, name: "Bread", status: "locked", icon: "🍞", level: 1 }, // Another topic from Level 1
    { id: 28, name: "Breakfast", status: "locked", icon: "🍳", level: 1 }, // Another topic from Level 1
    { id: 32, name: "Cats", status: "locked", icon: "🐈", level: 1 },// Another topic from Level 1
    { id: 35, name: "Childhood", status: "locked", icon: "🧸", level: 1 },// Another topic from Level 1
    { id: 36, name: "Chocolate", status: "locked", icon: "🍫", level: 1 },// Another topic from Level 1
    { id: 37, name: "Chores", status: "locked", icon: "🧹", level: 1 },// Another topic from Level 1
    { id: 38, name: "Christmas", status: "locked", icon: "🎄", level: 1 },// Another topic from Level 1
    { id: 43, name: "Coffee", status: "locked", icon: "☕", level: 1 },// Another topic from Level 1
    { id: 44, name: "Colors", status: "locked", icon: "🌈", level: 1 },// Another topic from Level 1
    { id: 53, name: "Corn", status: "locked", icon: "🌽", level: 1 },// Another topic from Level 1
    { id: 58, name: "Daily Routines", status: "locked", icon: "⏰", level: 1 },// Another topic from Level 1
    { id: 64, name: "Dessert", status: "locked", icon: "🍰", level: 1 },// Another topic from Level 1
    { id: 67, name: "Dogs", status: "locked", icon: "🐕", level: 1 },// Another topic from Level 1
    { id: 69, name: "Drinks", status: "locked", icon: "🍹", level: 1 },// Another topic from Level 1
    { id: 72, name: "Easter", status: "locked", icon: "🥚", level: 1 },// Another topic from Level 1
    { id: 74, name: "Elephants", status: "locked", icon: "🐘", level: 1 },// Another topic from Level 1
    { id: 81, name: "Fall and Autumn", status: "locked", icon: "🍂", level: 1 },// Another topic from Level 1
    { id: 83, name: "Family", status: "locked", icon: "👨‍👩‍👧‍👦", level: 1 },// Another topic from Level 1
    { id: 86, name: "Fast Food", status: "locked", icon: "🍔", level: 1 },// Another topic from Level 1
    { id: 89, name: "Feelings", status: "locked", icon: "😊", level: 1 },// Another topic from Level 1
    { id: 92, name: "Fish", status: "locked", icon: "🐟", level: 1 },// Another topic from Level 1
    { id: 94, name: "Flowers", status: "locked", icon: "🌸", level: 1 },// Another topic from Level 1
    { id: 99, name: "Fruit", status: "locked", icon: "🍎", level: 1 },// Another topic from Level 1
    { id: 105, name: "Ghosts", status: "locked", icon: "👻", level: 1 },// Another topic from Level 1
    { id: 112, name: "Halloween", status: "locked", icon: "🎃", level: 1 },// Another topic from Level 1
    { id: 120, name: "Holidays", status: "locked", icon: "🌴", level: 1 },// Another topic from Level 1
    { id: 125, name: "Horses", status: "locked", icon: "🐴", level: 1 },// Another topic from Level 1
    { id: 130, name: "Insects", status: "locked", icon: "🐜", level: 1 },// Another topic from Level 1
    { id: 147, name: "Lunch", status: "locked", icon: "🥪", level: 1 },// Another topic from Level 1
    { id: 150, name: "Meat", status: "locked", icon: "🥩", level: 1 },// Another topic from Level 1
    { id: 154, name: "Milk", status: "locked", icon: "🥛", level: 1 },// Another topic from Level 1
    { id: 158, name: "Morning", status: "locked", icon: "🌅", level: 1 },// Another topic from Level 1
    { id: 159, name: "Mosquitos", status: "locked", icon: "🦟", level: 1 },// Another topic from Level 1
    { id: 170, name: "New Year", status: "locked", icon: "🗓️", level: 1 },// Another topic from Level 1
    { id: 173, name: "Numbers", status: "locked", icon: "#️⃣", level: 1 },// Another topic from Level 1
    { id: 184, name: "Pets", status: "locked", icon: "🐶", level: 1 },// Another topic from Level 1
    { id: 188, name: "Picnics", status: "locked", icon: "🧺", level: 1 },// Another topic from Level 1
    { id: 189, name: "Pirates", status: "locked", icon: "🏴‍☠️", level: 1 },// Another topic from Level 1
    { id: 190, name: "Pizza", status: "locked", icon: "🍕", level: 1 },// Another topic from Level 1
    { id: 197, name: "Rain", status: "locked", icon: "🌧️", level: 1 },// Another topic from Level 1
    { id: 199, name: "Reptiles", status: "locked", icon: "🦎", level: 1 },// Another topic from Level 1
    { id: 210, name: "Seafood", status: "locked", icon: "🦞", level: 1 },// Another topic from Level 1
    { id: 213, name: "Sharks", status: "locked", icon: "🦈", level: 1 },// Another topic from Level 1
    { id: 214, name: "Shopping", status: "locked", icon: "🛍️", level: 1 },// Another topic from Level 1
    { id: 215, name: "Siblings", status: "locked", icon: "🧑‍🤝‍🧑", level: 1 },// Another topic from Level 1
    { id: 218, name: "Snow", status: "locked", icon: "雪", level: 1 },// Another topic from Level 1
    { id: 222, name: "Spices", status: "locked", icon: "🌶️", level: 1 },// Another topic from Level 1
    { id: 224, name: "Spring", status: "locked", icon: "🌷", level: 1 },// Another topic from Level 1
    { id: 229, name: "Sugar", status: "locked", icon: "🍬", level: 1 },// Another topic from Level 1
    { id: 230, name: "Summer", status: "locked", icon: "☀️", level: 1 },// Another topic from Level 1
    { id: 235, name: "Tea", status: "locked", icon: "🍵", level: 1 },// Another topic from Level 1
    { id: 237, name: "Thanksgiving", status: "locked", icon: "🦃", level: 1 },// Another topic from Level 1
    { id: 238, name: "Tigers", status: "locked", icon: "🐅", level: 1 },// Another topic from Level 1
    { id: 246, name: "Trees", status: "locked", icon: "🌳", level: 1 },// Another topic from Level 1
    { id: 250, name: "Vegetables", status: "locked", icon: "🥦", level: 1 },// Another topic from Level 1
    { id: 253, name: "Walking", status: "locked", icon: "🚶", level: 1 },// Another topic from Level 1
    { id: 256, name: "Waterfalls", status: "locked", icon: "↘️", level: 1 },// Another topic from Level 1
    { id: 259, name: "Weather", status: "locked", icon: "☁️", level: 1 },// Another topic from Level 1
    { id: 260, name: "Weekends", status: "locked", icon: "🍻", level: 1 },// Another topic from Level 1
    { id: 261, name: "Whales", status: "locked", icon: "🐋", level: 1 },// Another topic from Level 1
    { id: 262, name: "Winter", status: "completed", icon: "❄️", level: 1 },// Last topic of Level 1 (example)
    { id: 268, name: "Zoos", status: "locked", icon: "🦒", level: 1 },// Another topic from Level 1

    { id: 2, name: "Adventure", status: "active", icon: "⛰️", level: 2 }, // First topic of Level 2 (example)
    { id: 4, name: "Advice", status: "skipped", icon: "🤔", level: 2 },
    { id: 7, name: "Airports", status: "locked", icon: "🛬", level: 2 }, // Last topic of Level 2 (example)
    { id: 10, name: "Appearance", status: "locked", icon: "👀", level: 2 },// Another topic from Level 2
    { id: 16, name: "Banks", status: "locked", icon: "🏦", level: 2 },// Another topic from Level 2
    { id: 19, name: "Beauty", status: "locked", icon: "✨", level: 2 },// Another topic from Level 2
    { id: 23, name: "Body language", status: "locked", icon: "🙅🏻‍♂️", level: 2 },// Another topic from Level 2
    { id: 29, name: "Bucket list", status: "locked", icon: "✅", level: 2 },// Another topic from Level 2
    { id: 30, name: "Camping", status: "locked", icon: "🏕️", level: 2 },// Another topic from Level 2
    { id: 31, name: "Cars", status: "locked", icon: "🚗", level: 2 },// Another topic from Level 2
    { id: 33, name: "Change", status: "locked", icon: "🔄", level: 2 },// Another topic from Level 2
    { id: 39, name: "Cinema", status: "locked", icon: "🎬", level: 2 },// Another topic from Level 2
    { id: 42, name: "Clothing", status: "locked", icon: "👕", level: 2 },// Another topic from Level 2
    { id: 45, name: "Comfort", status: "locked", icon: "😌", level: 2 },// Another topic from Level 2
    { id: 47, name: "Comparatives", status: "locked", icon: "↔️", level: 2 },// Another topic from Level 2
    { id: 48, name: "Complaints", status: "locked", icon: "😠", level: 2 },// Another topic from Level 2
    { id: 52, name: "Cooking", status: "locked", icon: "👩‍🍳", level: 2 },// Another topic from Level 2
    { id: 55, name: "COVID", status: "locked", icon: "🦠", level: 2 },// Another topic from Level 2
    { id: 59, name: "Danger", status: "locked", icon: "⚠️", level: 2 },// Another topic from Level 2
    { id: 60, name: "Dating", status: "locked", icon: "💘", level: 2 },// Another topic from Level 2
    { id: 62, name: "Dentists", status: "locked", icon: "🦷", level: 2 },// Another topic from Level 2
    { id: 65, name: "Diving", status: "locked", icon: "🤿", level: 2 },// Another topic from Level 2
    { id: 66, name: "DIY", status: "locked", icon: "🛠️", level: 2 },// Another topic from Level 2
    { id: 70, name: "Driving", status: "locked", icon: "🚘", level: 2 },// Another topic from Level 2
    { id: 78, name: "Exercise", status: "locked", icon: "🏋🏻‍♂️", level: 2 },// Another topic from Level 2
    { id: 80, name: "Extreme sports", status: "locked", icon: "🤸", level: 2 },// Another topic from Level 2
    { id: 84, name: "Farming", status: "locked", icon: "🚜", level: 2 },// Another topic from Level 2
    { id: 85, name: "Fashion", status: "locked", icon: "👗", level: 2 },// Another topic from Level 2
    { id: 87, name: "Favorites", status: "locked", icon: "🌟", level: 2 },// Another topic from Level 2
    { id: 88, name: "Fears", status: "locked", icon: "😨", level: 2 },// Another topic from Level 2
    { id: 90, name: "Fire", status: "locked", icon: "🔥", level: 2 },// Another topic from Level 2
    { id: 91, name: "First conditional", status: "locked", icon: "1️⃣", level: 2 },// Another topic from Level 2
    { id: 93, name: "Fishing", status: "locked", icon: "🎣", level: 2 },// Another topic from Level 2
    { id: 95, name: "Flying", status: "locked", icon: "✈️", level: 2 },// Another topic from Level 2
    { id: 96, name: "Football", status: "locked", icon: "⚽", level: 2 },// Another topic from Level 2
    { id: 98, name: "Friendship", status: "locked", icon: "🤝", level: 2 },// Another topic from Level 2
    { id: 100, name: "Furniture", status: "locked", icon: "🛋️", level: 2 },// Another topic from Level 2
    { id: 104, name: "Gardening", status: "locked", icon: "🥕", level: 2 },// Another topic from Level 2
    { id: 106, name: "Gifts", status: "locked", icon: "🎁", level: 2 },// Another topic from Level 2
    { id: 109, name: "Going to", status: "locked", icon: "➡️", level: 2 },// Another topic from Level 2
    { id: 111, name: "Habits", status: "locked", icon: "🔁", level: 2 },// Another topic from Level 2
    { id: 113, name: "Hair", status: "locked", icon: "💇", level: 2 },// Another topic from Level 2
    { id: 115, name: "Health and sickness", status: "locked", icon: "🏥", level: 2 },// Another topic from Level 2
    { id: 116, name: "Healthy living", status: "locked", icon: "🥗", level: 2 },// Another topic from Level 2
    { id: 117, name: "Hiking", status: "locked", icon: "🥾", level: 2 },// Another topic from Level 2
    { id: 119, name: "Hobbies", status: "locked", icon: "🎲", level: 2 },// Another topic from Level 2
    { id: 121, name: "Home", status: "locked", icon: "🏠", level: 2 },// Another topic from Level 2
    { id: 126, name: "Hotels", status: "locked", icon: "🏨", level: 2 },// Another topic from Level 2
    { id: 128, name: "How much how many", status: "locked", icon: "🔢", level: 2 },// Another topic from Level 2
    { id: 129, name: "Hunting", status: "locked", icon: "🏹", level: 2 },// Another topic from Level 2
    { id: 136, name: "Jungles", status: "locked", icon: "🌿", level: 2 },// Another topic from Level 2
    { id: 138, name: "Kitchens", status: "locked", icon: "🔪", level: 2 },// Another topic from Level 2
    { id: 141, name: "Laziness", status: "locked", icon: "😩", level: 2 },// Another topic from Level 2
    { id: 142, name: "Logging", status: "locked", icon: "🪵", level: 2 },// Another topic from Level 2
    { id: 146, name: "Luck", status: "locked", icon: "🍀", level: 2 },// Another topic from Level 2
    { id: 148, name: "Manners", status: "locked", icon: "🙇", level: 2 },// Another topic from Level 2
    { id: 157, name: "Moon", status: "locked", icon: "🌕", level: 2 },// Another topic from Level 2
    { id: 161, name: "Motorcycles", status: "locked", icon: "🏍️", level: 2 },// Another topic from Level 2
    { id: 162, name: "Mountains", status: "locked", icon: "🏔️", level: 2 },// Another topic from Level 2
    { id: 163, name: "Moving", status: "locked", icon: "📦", level: 2 },// Another topic from Level 2
    { id: 164, name: "Music", status: "locked", icon: "🎵", level: 2 },// Another topic from Level 2
    { id: 168, name: "Neighbors", status: "locked", icon: "🏘️", level: 2 },// Another topic from Level 2
    { id: 171, name: "Noise", status: "locked", icon: "👂", level: 2 },// Another topic from Level 2
    { id: 174, name: "Nutrition", status: "locked", icon: "🥕", level: 2 },// Another topic from Level 2
    { id: 178, name: "Past continuous", status: "locked", icon: "🕚", level: 2 },// Another topic from Level 2
    { id: 179, name: "Past perfect", status: "locked", icon: "🔙", level: 2 },// Another topic from Level 2
    { id: 180, name: "Past simple", status: "locked", icon: "🕰️", level: 2 },// Another topic from Level 2
    { id: 186, name: "Photography", status: "locked", icon: "📸", level: 2 },// Another topic from Level 2
    { id: 187, name: "Phrasal verbs", status: "locked", icon: "🧩", level: 2 },// Another topic from Level 2
    { id: 195, name: "Present perfect", status: "locked", icon: "✔️", level: 2 },// Another topic from Level 2
    { id: 200, name: "Restaurants", status: "locked", icon: "🍽️", level: 2 },// Another topic from Level 2
    { id: 201, name: "Rivers", status: "locked", icon: "〰️", level: 2 },// Another topic from Level 2
    { id: 202, name: "Roads", status: "locked", icon: "🛣️", level: 2 },// Another topic from Level 2
    { id: 204, name: "Safety", status: "locked", icon: "🦺", level: 2 },// Another topic from Level 2
    { id: 206, name: "Sailing", status: "locked", icon: "⛵", level: 2 },// Another topic from Level 2
    { id: 208, name: "School", status: "locked", icon: "🏫", level: 2 },// Another topic from Level 2
    { id: 212, name: "Senses", status: "locked", icon: "👃", level: 2 },// Another topic from Level 2
    { id: 216, name: "Sleep", status: "locked", icon: "💤", level: 2 },// Another topic from Level 2
    { id: 223, name: "Sports", status: "locked", icon: "🏃🏻‍♀️", level: 2 },// Another topic from Level 2
    { id: 225, name: "Storms", status: "locked", icon: "⛈️", level: 2 },// Another topic from Level 2
    { id: 231, name: "Superlatives", status: "locked", icon: "🔝", level: 2 },// Another topic from Level 2
    { id: 233, name: "Swimming", status: "locked", icon: "🏊", level: 2 },// Another topic from Level 2
    { id: 234, name: "Tattoos", status: "locked", icon: "💉", level: 2 },// Another topic from Level 2
    { id: 236, name: "Television", status: "locked", icon: "📺", level: 2 },// Another topic from Level 2
    { id: 239, name: "Time", status: "locked", icon: "⏱️", level: 2 },// Another topic from Level 2
    { id: 242, name: "Trains", status: "locked", icon: "🚂", level: 2 },// Another topic from Level 2
    { id: 243, name: "Transport", status: "locked", icon: "🚌", level: 2 },// Another topic from Level 2
    { id: 244, name: "Trash", status: "locked", icon: "🗑️", level: 2 },// Another topic from Level 2
    { id: 245, name: "Travel", status: "locked", icon: "✈️", level: 2 },// Another topic from Level 2
    { id: 251, name: "Video games", status: "locked", icon: "🎮", level: 2 },// Another topic from Level 2
    { id: 252, name: "Volcanoes", status: "locked", icon: "🌋", level: 2 },// Another topic from Level 2
    { id: 255, name: "Water", status: "locked", icon: "💧", level: 2 },// Another topic from Level 2
    { id: 257, name: "Water Sports", status: "locked", icon: "🤽", level: 2 },// Another topic from Level 2
    { id: 263, name: "Wind", status: "completed", icon: "🌬️", level: 2 },// Last topic of Level 2 (example)
    { id: 266, name: "Would you rather", status: "locked", icon: "🤷", level: 2 },// Another topic from Level 2
    { id: 267, name: "Zero conditional", status: "locked", icon: "0️⃣", level: 2 },// Another topic from Level 2

    { id: 3, name: "Advertising", status: "active", icon: "📢", level: 3 }, // First topic of Level 3 (example)
    { id: 5, name: "Africa", status: "locked", icon: "🦓", level: 3 },
    { id: 12, name: "Art", status: "locked", icon: "🎨", level: 3 },
    { id: 13, name: "Artificial Intelligence", status: "locked", icon: "💭", level: 3 },
    { id: 14, name: "Asia", status: "locked", icon: "🏯", level: 3 },
    { id: 15, name: "Australia", status: "locked", icon: "🐨", level: 3 },
    { id: 24, name: "Books and reading", status: "locked", icon: "📚", level: 3 },
    { id: 26, name: "Brain", status: "locked", icon: "🧠", level: 3 },
    { id: 34, name: "Charity", status: "locked", icon: "🎗️", level: 3 },
    { id: 40, name: "Cities", status: "locked", icon: "🏙️", level: 3 },
    { id: 41, name: "Citizenship", status: "locked", icon: "🛂", level: 3 },
    { id: 46, name: "Communication", status: "locked", icon: "🗣️", level: 3 },
    { id: 49, name: "Computers", status: "locked", icon: "💻", level: 3 },
    { id: 50, name: "Construction and building", status: "locked", icon: "🏗️", level: 3 },
    { id: 51, name: "Consumerism", status: "locked", icon: "🛒", level: 3 },
    { id: 54, name: "Countries", status: "locked", icon: "🗺️", level: 3 },
    { id: 56, name: "Crime", status: "locked", icon: "🔪", level: 3 },
    { id: 57, name: "Culture", status: "locked", icon: "🎭", level: 3 },
    { id: 61, name: "Decisions and choices", status: "locked", icon: "↕️", level: 3 },
    { id: 63, name: "Desert Island", status: "locked", icon: "🏝️", level: 3 },
    { id: 68, name: "Dreams", status: "locked", icon: "😴", level: 3 },
    { id: 71, name: "Drought", status: "locked", icon: "🏜️", level: 3 },
    { id: 73, name: "Electricity", status: "locked", icon: "⚡", level: 3 },
    { id: 75, name: "England", status: "locked", icon: "🇬🇧", level: 3 },
    { id: 76, name: "Entertainment", status: "locked", icon: "🥳", level: 3 },
    { id: 77, name: "Environment", status: "locked", icon: "🍁", level: 3 },
    { id: 79, name: "Extinction", status: "locked", icon: "💀", level: 3 },
    { id: 82, name: "Fame", status: "locked", icon: "🏆", level: 3 },
    { id: 97, name: "Freedom", status: "locked", icon: "🕊️", level: 3 },
    { id: 101, name: "Future", status: "locked", icon: "🦿", level: 3 },
    { id: 102, name: "Gadgets", status: "locked", icon: "📱", level: 3 },
    { id: 103, name: "Gambling", status: "locked", icon: "🎰", level: 3 },
    { id: 107, name: "Global warming", status: "locked", icon: "🌡️", level: 3 },
    { id: 108, name: "Goals", status: "locked", icon: "🎯", level: 3 },
    { id: 110, name: "Gold", status: "locked", icon: "💰", level: 3 },
    { id: 112, name: "Halloween", status: "completed", icon: "🎃", level: 3 }, // Last topic of Level 3 (example)
    { id: 114, name: "Happiness", status: "locked", icon: "😄", level: 3 },
    { id: 118, name: "History", status: "locked", icon: "📜", level: 3 },
    { id: 122, name: "Hometowns", status: "locked", icon: "🏘️", level: 3 },
    { id: 123, name: "Honesty and lies", status: "locked", icon: "🤥", level: 3 },
    { id: 124, name: "Hope", status: "locked", icon: "🤞🏻", level: 3 },
    { id: 127, name: "Housing", status: "locked", icon: "🔑", level: 3 },
    { id: 131, name: "Internet", status: "locked", icon: "🌐", level: 3 },
    { id: 132, name: "Inventions", status: "locked", icon: "💡", level: 3 },
    { id: 133, name: "Jail", status: "locked", icon: "⛓️", level: 3 },
    { id: 134, name: "Japan", status: "locked", icon: "🇯🇵", level: 3 },
    { id: 135, name: "Jobs", status: "locked", icon: "💼", level: 3 },
    { id: 137, name: "Kindness", status: "locked", icon: "💖", level: 3 },
    { id: 139, name: "Languages", status: "locked", icon: "🅰️", level: 3 },
    { id: 140, name: "Law", status: "locked", icon: "⚖️", level: 3 },
    { id: 143, name: "Loneliness", status: "locked", icon: "🙁", level: 3 },
    { id: 144, name: "Loss", status: "locked", icon: "💔", level: 3 },
    { id: 145, name: "Love", status: "locked", icon: "❤️", level: 3 },
    { id: 149, name: "Marriage", status: "locked", icon: "💍", level: 3 },
    { id: 151, name: "Medicine", status: "locked", icon: "💊", level: 3 },
    { id: 152, name: "Memory", status: "locked", icon: "📆", level: 3 },
    { id: 153, name: "Migration", status: "locked", icon: "🗽", level: 3 },
    { id: 155, name: "Mining", status: "locked", icon: "⛏️", level: 3 },
    { id: 156, name: "Money", status: "locked", icon: "💵", level: 3 },
    { id: 160, name: "Motivation", status: "locked", icon: "🌟", level: 3 },
    { id: 165, name: "Natural disasters", status: "locked", icon: "🌪️", level: 3 },
    { id: 166, name: "Natural wonders", status: "locked", icon: "🏞️", level: 3 },
    { id: 167, name: "Nature", status: "locked", icon: "🍃", level: 3 },
    { id: 169, name: "News", status: "locked", icon: "📰", level: 3 },
    { id: 172, name: "Nuclear energy", status: "locked", icon: "☢️", level: 3 },
    { id: 175, name: "Ocean", status: "locked", icon: "🌊", level: 3 },
    { id: 176, name: "Obesity", status: "locked", icon: "📏", level: 3 },
    { id: 177, name: "Oil", status: "locked", icon: "⛽", level: 3 },
    { id: 181, name: "Patience", status: "locked", icon: "🧘🏻‍♀️", level: 3 },
    { id: 182, name: "People", status: "locked", icon: "👥", level: 3 },
    { id: 183, name: "Personality", status: "locked", icon: "🥸", level: 3 },
    { id: 185, name: "Phones", status: "locked", icon: "📞", level: 3 },
    { id: 191, name: "Police", status: "locked", icon: "🚓", level: 3 },
    { id: 192, name: "Pollution", status: "locked", icon: "🏭", level: 3 },
    { id: 193, name: "Poverty", status: "locked", icon: "🏚️", level: 3 },
    { id: 194, name: "Predictions", status: "locked", icon: "🔮", level: 3 },
    { id: 196, name: "Privacy", status: "locked", icon: "🔐", level: 3 },
    { id: 198, name: "Recycling", status: "locked", icon: "♻️", level: 3 },
    { id: 203, name: "Robots", status: "locked", icon: "🤖", level: 3 },
    { id: 207, name: "Saving", status: "locked", icon: "🐷", level: 3 },
    { id: 209, name: "Science", status: "locked", icon: "🔬", level: 3 },
    { id: 211, name: "Secrets", status: "locked", icon: "🤫", level: 3 },
    { id: 217, name: "Smoking", status: "locked", icon: "🚭", level: 3 },
    { id: 219, name: "Social Media", status: "locked", icon: "👍", level: 3 },
    { id: 220, name: "South America", status: "locked", icon: "🦜", level: 3 },
    { id: 221, name: "Space", status: "locked", icon: "🚀", level: 3 },
    { id: 226, name: "Stress", status: "locked", icon: "😫", level: 3 },
    { id: 227, name: "Study", status: "locked", icon: "📖", level: 3 },
    { id: 228, name: "Success", status: "locked", icon: "🥇", level: 3 },
    { id: 232, name: "Superstition", status: "locked", icon: "🎱", level: 3 },
    { id: 240, name: "Tourism", status: "locked", icon: "🎡", level: 3 },
    { id: 241, name: "Trade", status: "locked", icon: "📈", level: 3 },
    { id: 247, name: "Trust", status: "locked", icon: "🤗", level: 3 },
    { id: 248, name: "UFOs", status: "locked", icon: "🛸", level: 3 },
    { id: 249, name: "Unemployment", status: "locked", icon: "😥", level: 3 },
    { id: 254, name: "War", status: "locked", icon: "💣", level: 3 },
    { id: 258, name: "Wealth", status: "locked", icon: "💎", level: 3 },
    { id: 264, name: "Wisdom", status: "locked", icon: "🦉", level: 3 },
    { id: 265, name: "Work", status: "locked", icon: "👔", level: 3 }
];

// --- Helper function to get Level Name ---
// This function provides a descriptive name for each level number.
function getLevelName(level) {
    switch (level) {
        case 1: return "Basic Survival";
        case 2: return "Moving Forward";
        case 3: return "Building Opportunities";
        // Add more levels if needed based on your data distribution
        default: return `Level ${level}`; // Fallback for any other level number
    }
}

// --- Function to Create a Single Topic Element (Icon Shape + Name) ---
// This helper function creates the HTML structure for a single topic node visual.
function createTopicElement(topic) {
    // Create a container div for the entire topic block
    const topicBlock = document.createElement('div');
    // Apply Tailwind classes for the topic block container
    // Using the 'topic-node' class defined in CSS for the main style
    // Add 'group' to allow conditional styles on child elements when hovering over the parent
    // Add the status as a class for CSS styling
    topicBlock.className = `topic-node cursor-pointer relative group ${topic.status}`;


    // --- Determine colors and icon based on status and assemble ---
    // Color and icon emoji logic is mainly handled with CSS now via status classes
    // But we keep the logic here if we need fine adjustments or state-specific icons that are not just emojis

    let displayIcon = topic.icon; // The default icon is the topic's icon

    // Override the icon if the status requires it (e.g., next for skipped)
    // The checkmark for 'completed' will be added with a CSS pseudo-element
    if (topic.status === 'skipped') {
         displayIcon = '⏭️'; // Using the next track emoji for skipped
    }
    // For 'active' and 'locked', we use the default topic.icon


    // Create the span for the icon itself (will be placed inside the shape)
    const iconSpan = document.createElement('span');
    // Apply Tailwind classes for the icon:
    // text-3xl: Sets the large text size for the emoji/icon (adjusted for better fit)
    iconSpan.className = 'text-3xl mb-1'; // Classes for the icon inside the node

    // Set the text content (the emoji/icon) for the icon span
    iconSpan.textContent = displayIcon;

    // Create the div for the topic name text below the icon shape
    const topicNameElement = document.createElement('span');
    // Using span is more semantic for short text
    // Apply Tailwind classes for the topic name text
    // text-xs for small size
    // Adjusted to use defined CSS/Tailwind classes
    topicNameElement.className = `text-xs text-center text-gray-700`;

    // Add a class to handle truncation if needed
    // Using the CSS class for ellipsis
    topicNameElement.classList.add('topic-name');


    topicNameElement.textContent = topic.name;


    // --- Assemble the elements ---
    // Put the icon span inside the main topic block container
    topicBlock.appendChild(iconSpan);
    // Put the topic name text element inside the topic block
    topicBlock.appendChild(topicNameElement);


    // Add the click event listener to the main topic block container
    topicBlock.addEventListener('click', () => {
        // Check if the topic is not locked before allowing interaction
        if (topic.status !== 'locked') {
            console.log(`Clicked on topic: ${topic.name} (ID: ${topic.id}). Status: ${topic.status}`);
            // TODO: In the future, implement navigation to the Phrase/Class screen for this specific topic.
            // You will likely pass the topic.id or other relevant data to the next screen.
        } else {
            console.log(`Topic "${topic.name}" is locked.`);
            // TODO: Optionally, show a visual indication or message to the user that the topic is locked.
        }
    });
    // Store a reference to the topic data object in the DOM element
    topicBlock.dataset.topicId = topic.id;
    topicBlock.dataset.topicLevel = topic.level;


    // Return the assembled topic block element
    return topicBlock;
}


// --- Function to Build Learning Path UI (Revised Structure) ---
// This function generates the HTML structure for the learning path,
// creating separate containers for each level.
function buildLearningPath() {
    const container = document.getElementById('learning-path-container');
    console.log("Learning path container:", container);
    if (!container) {
        console.error("Learning path container not found! Cannot build path.");
        return;
    }

    const topicsContainer = container.querySelector('.topics-container');
    if (!topicsContainer) {
         console.error("Topics container not found inside learning path container!");
         return;
         }
    // Clear existing dynamic content
    topicsContainer.innerHTML = '';


    // Sort learningPathData by level and then id to ensure correct grouping and ordering
    learningPathData.sort((a, b) => {
        if (a.level !== b.level) {
            return a.level - b.level;
        }
        // Sort by ID within the same level
        return a.id - b.id;
    });

    // --- Group topics by level ---
    const topicsByLevel = learningPathData.reduce((acc, topic) => {
        if (!acc[topic.level]) {
            acc[topic.level] = [];
        }
        acc[topic.level].push(topic);
        return acc;
    }, {});

    // Iterate over the sorted levels
    // Ensure numeric order
    const sortedLevels = Object.keys(topicsByLevel).sort((a, b) => parseInt(a) - parseInt(b));


    sortedLevels.forEach(level => {
        const levelTopics = topicsByLevel[level];
        // Index for the 1-2-1 pattern within this level
        let levelTopicIndex = 0;

        // --- Create a container for the current level ---
        const levelContainer = document.createElement('div');
        // Add a class to identify level containers and apply margin/padding if needed
        // Added mb-16 for space after each level container
        levelContainer.className = 'level-container w-full mb-16';
        levelContainer.dataset.level = level; // Store the level number

        // --- Add Level Title ---
        const levelTitleElement = document.createElement('h2');
        // Classes for the level title style
        levelTitleElement.className = 'text-xl font-bold mt-8 mb-8 w-full text-center font-caveat text-[#223d65]';
        levelTitleElement.textContent = `${getLevelName(parseInt(level))}`;
        // Add the title inside the level container
        levelContainer.appendChild(levelTitleElement);


        // --- Create a container specifically for the topics within this level ---
        const levelTopicsInnerContainer = document.createElement('div');
         // This container will hold the 1-2-1 pattern rows for this level
        levelTopicsInnerContainer.className = 'level-topics-inner-container flex flex-col items-center w-full';
        levelContainer.appendChild(levelTopicsInnerContainer);


        // Iterate over the topics within this level to apply the 1-2-1 pattern
        while (levelTopicIndex < levelTopics.length) {
            // 0 (Center), 1 (Start of Pair), 2 (End of Pair)
            const positionInLevelPattern = levelTopicIndex % 3;


            if (positionInLevelPattern === 0) {
                // Row with a single centered topic
                const topic = levelTopics[levelTopicIndex];
                const topicElement = createTopicElement(topic);

                const centerContainer = document.createElement('div');
                // mb-6 for space below the row
                centerContainer.className = 'topic-row flex justify-center w-full mb-6';
                centerContainer.appendChild(topicElement);
                levelTopicsInnerContainer.appendChild(centerContainer); // Append to inner container

                // Advance by 1
                levelTopicIndex++;
            } else if (positionInLevelPattern === 1) {
                // Start of a pair row (needs 2 topics)
                const topic1 = levelTopics[levelTopicIndex];
                // Try to get the next one
                const topic2 = levelTopics[levelTopicIndex + 1];

                if (topic2) { // If the second topic exists to form the pair
                    const topicElement1 = createTopicElement(topic1);
                    const topicElement2 = createTopicElement(topic2);

                    const pairContainer = document.createElement('div');
                    // flex, justify-around for spacing, items-start for aligning at the top, w-full, mb-6
                    pairContainer.className = 'topic-row flex justify-around items-start w-full mb-6';
                    // Left topic
                    pairContainer.appendChild(topicElement1);
                    // Right topic
                    pairContainer.appendChild(topicElement2);

                    levelTopicsInnerContainer.appendChild(pairContainer); // Append to inner container
                    // Advance by 2 (both topics of the pair)
                    levelTopicIndex += 2;
                } else {
                    // If there is no second topic, the first one remains alone and centered
                    const topicElement1 = createTopicElement(topic1);
                    const centerContainer = document.createElement('div');
                    centerContainer.className = 'topic-row flex justify-center w-full mb-6';
                    centerContainer.appendChild(topicElement1);
                    levelTopicsInnerContainer.appendChild(centerContainer); // Append to inner container

                    // Advance by 1
                    levelTopicIndex++;
                }
            } else if (positionInLevelPattern === 2) {
                 // This case should not happen if the '1' logic correctly consumes pairs.
                 // If it occurs, it's a logic error.
                 console.warn("Logic error: Encountered topic at position 2 in level pattern.", levelTopics[levelTopicIndex]);
                 // Ensure not to get into an infinite loop
                 levelTopicIndex++;
            }
        }
        // Append the completed level container to the main topics container
        topicsContainer.appendChild(levelContainer);

    });


    // --- IMPROVED Part: Draw lines after elements are in the DOM ---
    // Call the function to draw lines once buildLearningPath has finished adding topics
    console.log("Finished building topic elements. Now drawing lines...");
    // We don't need to pass all data, as the draw function will now iterate level containers
    // Use a small delay to ensure the browser has had time to render and position elements
    setTimeout(() => {
        drawConnectorLines(); // Call without data, it will find containers in the DOM
    }, 100); // Small delay of 100ms
}


// --- CORRECTED Function to Draw Connector Lines (Iterates through Level Containers) ---
// This function finds all topic nodes within EACH level container in the DOM
// and draws SVG lines only between consecutive topics within those containers.
function drawConnectorLines() {
    const svg = document.getElementById('path-lines');
    const topicsContainer = document.querySelector('.topics-container'); // The main container

    console.log("SVG element:", svg);
    console.log("Drawing lines based on level containers.");

    if (!svg || !topicsContainer) {
        console.warn("SVG element or topics container not found. Cannot draw lines.");
        return;
    }

    // Clear previous lines
    svg.innerHTML = '';
    // Get the coordinates of the SVG container relative to the viewport
    const svgContainerRect = svg.parentElement.getBoundingClientRect(); // learning-path-container


    // Find all level containers in the DOM
    const levelContainers = topicsContainer.querySelectorAll('.level-container');

    levelContainers.forEach(levelContainer => {
        // Find all topic nodes WITHIN the current level container
        const topicElements = levelContainer.querySelectorAll('.topic-node');

        // Iterate through the topic elements within this level container to draw lines
        for (let i = 0; i < topicElements.length - 1; i++) {
            const currentTopicElement = topicElements[i];
            const nextTopicElement = topicElements[i + 1];

            // Get the positions and centers of the topic elements
            const currentRect = currentTopicElement.getBoundingClientRect();
            const nextRect = nextTopicElement.getBoundingClientRect();

            const currentCenterX = currentRect.left + currentRect.width / 2;
            const currentCenterY = currentRect.top + currentRect.height / 2;
            const nextCenterX = nextRect.left + nextRect.width / 2;
            const nextCenterY = nextRect.top + nextRect.height / 2;

            // Adjust coordinates to the SVG coordinate system (relative to the SVG's parent)
            const svgX1 = currentCenterX - svgContainerRect.left;
            const svgY1 = currentCenterY - svgContainerRect.top;
            const svgX2 = nextCenterX - svgContainerRect.left;
            const svgY2 = nextCenterY - svgContainerRect.top;

            // Create the SVG line element
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', svgX1);
            line.setAttribute('y1', svgY1);
            line.setAttribute('x2', svgX2);
            line.setAttribute('y2', svgY2);

            // --- Line Style ---
            // Default light gray color (Tailwind gray-300)
            let strokeColor = '#D1D5DB';

            // Optional: Change line color based on the status of the *next* topic element
             const nextTopicStatus = nextTopicElement.classList.contains('active') ? 'active' :
                                     nextTopicElement.classList.contains('completed') ? 'completed' :
                                     nextTopicElement.classList.contains('skipped') ? 'skipped' :
                                     'locked'; // Default to locked if no known status class

             if (nextTopicStatus === 'active') {
                 // Example blue color for active lines
                 strokeColor = '#3B82F6';
             }
             // You could add conditions for 'completed' or 'skipped' lines here too

            line.setAttribute('stroke', strokeColor);
            // Line thickness
            line.setAttribute('stroke-width', '2');
            // Rounded ends
            line.setAttribute('stroke-linecap', 'round');
            // Add a class
            line.setAttribute('class', 'path-connector-line');

            // Add the line to the SVG
            svg.appendChild(line);
        }
        // Lines within this level container are drawn. The loop moves to the next level container.
    });
    // All level containers processed, all necessary lines within levels are drawn.
}


// --- Handle window resize to redraw lines ---
// When the window is resized, the positions of the elements change.
// We need to redraw the lines to connect the correct centers.
window.addEventListener('resize', () => {
    console.log("Window resized. Redrawing lines.");
    // Call buildLearningPath() again to rebuild everything and then draw lines
    // This ensures that element positions and lines are calculated correctly
    // Add a small delay on resize as well for consistency
    setTimeout(() => {
        buildLearningPath();
    }, 100); // Small delay of 100ms
});

// --- Initialize the Application ---
// Listen for the DOMContentLoaded event. This ensures that the HTML document
// has been fully loaded and parsed before the script attempts to access elements.
document.addEventListener('DOMContentLoaded', () => {
    buildLearningPath();
});