// Exporting a function named checkFavorite as the default export of the module.
export default function checkFavorite(favorites, item) {
    // Using the .some() method to check if any favorite has the same ID as the provided item.
    // .some() returns true if at least one favorite meets the condition defined by the callback function.
    return favorites.some(favorite => {
        // The callback function takes each favorite from the favorites array.
        // It checks if the ID of the current favorite matches the ID of the provided item.
        // Note: Story.id should likely be replaced with item.id to correctly compare IDs.
        // If a match is found, .some() returns true; otherwise, it continues checking other favorites.
        return favorite.id === item.id;
    });
}
