/**
 * Todo modes
 * Using for filter
 * Using instead of string literal in comparesion
 */

export const modes = {
    All: "all",
    Completed: "completed",
    Active: "active"
};


/**
 * Using for design purpose
 */
export const list = [
    {
        id: 1,
        title: "Complete online JavaScript course",
        mode: modes.Completed,
    },
    {
        id: 2,
        title: "Jog around the park 3x",
        mode: modes.Active,
    },
    {
        id: 3,
        title: "10 minutes miditation",
        mode: modes.Active,
    },
    {
        id: 4,
        title: "Read for 1 hour",
        mode: modes.Active,
    },
    {
        id: 5,
        title: "Pick up groceries",
        mode: modes.Active,
    },
    {
        id: 6,
        title: "Complete Todo App on Frontend Mentor",
        mode: modes.Active,
    }
];