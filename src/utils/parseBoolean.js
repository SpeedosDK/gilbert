// Normalizes values coming from request bodies (booleans, strings, numbers)
// into a real boolean. Handles true/"true"/"on"/"1"/1 as true, everything
// else (including "false", "0", undefined, null) as false.
function parseBoolean(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value === 1;
    if (typeof value === "string") {
        const normalized = value.trim().toLowerCase();
        return normalized === "true" || normalized === "on" || normalized === "1";
    }
    return false;
}

module.exports = { parseBoolean };
